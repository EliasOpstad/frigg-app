import create from 'zustand'

interface UIState {
  isModalOpen: boolean
  toggleModal: () => void
}

export const useUIStore = create<UIState>(set => ({
  isModalOpen: false,
  toggleModal: () => set(s => ({ isModalOpen: !s.isModalOpen })),
}))
