import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchPosts = (course) =>
  API.get(`/posts${course ? '?course=' + encodeURIComponent(course) : ''}`);
export const fetchPostById = (id) => API.get(`/posts/${id}`);
export const fetchComments = (postId) => API.get(`/comments/${postId}`);
export const createComment = (data) => API.post('/comments', data); 