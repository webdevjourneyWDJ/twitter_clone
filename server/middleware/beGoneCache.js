const {clearCahce} = require('../lib/cache');

module.exports = async (req, res, next) => {
  await next();

  console.log('clear cache');
  clearCahce(req.user._id)
}