'use client'

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react'

interface ConfirmModalProps {
  isOpen: boolean
  title: string
  description: string
  buttonConfirm?: string
  buttonCancel?: string
  onConfirm?: () => void
  onCancel?: () => void
  colorConfirm?: 'primary' | 'success' | 'warning' | 'danger' | 'secondary'
  colorCancel?: 'primary' | 'success' | 'warning' | 'danger' | 'secondary'
}

function ConfirmModal({
  isOpen,
  title,
  description,
  buttonConfirm,
  buttonCancel,
  colorCancel,
  colorConfirm,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  return (
    <Modal isDismissable={false} isOpen={isOpen} onClose={onCancel}>
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          <p>{description}</p>
        </ModalBody>
        <ModalFooter>
          {onCancel && (
            <Button color={colorCancel ?? 'default'} onClick={onCancel}>
              {buttonCancel ?? 'Cancel'}
            </Button>
          )}
          {onConfirm && (
            <Button color={colorConfirm ?? 'default'} onClick={onConfirm}>
              {buttonConfirm ?? 'Confirm'}
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ConfirmModal
