import Api from './Api';

export default {
  getUser() {
    return Api().get('user');
  },
  getTweetById(tweetId) {
    return Api().get(`tweets/${tweetId}`);
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
  },
  postComment(comment, tweetId) {
    return Api().post('/comments', {comment, tweetId});
  },
}