import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
  isMobileMenuOpen: boolean
  modalContent: string | null
}

const initialState: UIState = {
  isMobileMenuOpen: false,
  modalContent: null,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen
    },
    setModalContent: (state, action: PayloadAction<string | null>) => {
      state.modalContent = action.payload
    },
    closeModal: (state) => {
      state.modalContent = null
    }
  },
})

export const { toggleMobileMenu, setModalContent, closeModal } = uiSlice.actions
export default uiSlice.reducer
