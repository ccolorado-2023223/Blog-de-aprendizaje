 import { create } from 'zustand';
import { fetchPosts as apiFetchPosts } from '../services/api.js';

export const usePostStore = create((set) => ({
  posts: [],
  courseFilter: '',
  setCourseFilter: (course) => set({ courseFilter: course }),
  fetchPosts: async (course) => {
    const res = await apiFetchPosts(course);
    set({ posts: res.data });
  }
}));
 