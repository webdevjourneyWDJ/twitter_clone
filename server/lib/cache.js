const mongoose = require('mongoose');
const util = require ("util");
const config = require('../config')[process.env.NODE_ENV || 'development'];

const client = config.database.redis.client;
client.hgetAsync = util.promisify(client.hget);

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = async function(options = {}){
  this.useCache = true;
  this.hashKey = JSON.stringify(options.key || "");
  this.nestedHashKey = JSON.stringify(options.nestedHashKey || "");
  return this;
}

mongoose.Query.prototype.exec = async function(){
  if(!this.useCache){
    return exec.apply(this, arguments);
  }

  const cacheValue = await client.hgetAsync(this.hashKey, this.nestedHashKey);

  if(cacheValue){
    console.log("Cached Values");
    return JSON.parse(cacheValue);
  }

  const result = await exec.apply(this, arguments);
  client.hset(this.hashKey, this.nestedHashKey, JSON.stringify(result));
  return result;
}

module.exports = {
  clearCahce(hashKey){
    client.del(JSON.stringify(hashKey));
  }
}