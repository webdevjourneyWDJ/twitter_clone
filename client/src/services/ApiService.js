import Api from './Api';

export default {
  getUser() {
    return Api().get('user');
  },
  getAllTweets() {
    return Api().get('tweets');
  },
  getUserTweets() {
    return Api().get('user/tweets');
  },
  postTweet(message) {
    return Api().post('user/tweet', {message});
  },
  postTweetLiked(tweetId) {
    return Api().post('tweets/liked', {tweetId});
  }
}