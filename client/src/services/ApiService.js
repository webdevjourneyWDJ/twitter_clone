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
  async postTweet(message, image) {
    const imageConfig = await Api().get('/upload');
    await Api().put(imageConfig.data.url, image, {
      headers:{
        'Content-Type': image.type
      }
    });
    return Api().post('user/tweet', {message, image: imageConfig.data.key});
  },
  postTweetLiked(tweetId) {
    return Api().post('tweets/liked', {tweetId});
  },
  postComment(comment, tweetId) {
    return Api().post('/comments', {comment, tweetId});
  },
}