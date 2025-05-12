import { create } from 'zustand'

const useCourseFilter = create((set) => ({
  courseFilter: null,
  setCourseFilter: (filter) => set({ courseFilter: filter })
}))

export default useCourseFilter