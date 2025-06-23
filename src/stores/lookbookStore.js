import { create } from 'zustand'
import { looks } from '../data/dummyData'

export const useLookbookStore = create((set) => ({
  currentLook: 0,
  activeProductIndex: 0,
  setProductIndex: (i) => set({ activeProductIndex: i }),
  nextLook: () => set((s) => ({ currentLook: (s.currentLook + 1) % looks.length})),
  prevLook: () => set((s) => ({ currentLook: (s.currentLook - 1 + looks.length) % looks.length}))
}))
