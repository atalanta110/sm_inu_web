import { useCallback } from 'react'
import { RootState } from '../reducers'
import { useAppDispatch, useAppSelector } from '../hooks'
import { ApplicationModal, setOpenModal } from '../reducers/application'

export function useModalOpen(modal: ApplicationModal): boolean {
  const openModal = useAppSelector((state: RootState) => state.application.openModal)
  return openModal === modal
}

export function useToggleModal(modal: ApplicationModal): () => void {
  const open = useModalOpen(modal)
  const dispatch = useAppDispatch()

  return useCallback(() => dispatch(setOpenModal(open ? null : modal)), [dispatch, modal, open])
}

export function useWalletModalToggle(): () => void {
  return useToggleModal(ApplicationModal.WALLET)
}

export function useWyreReservationModalToggle(): () => void {
  return useToggleModal(ApplicationModal.WYRE_RESERVATION_FORM)
}
