import React, { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import styles from './styles.module.scss'

type ButtonModalProps = {
  label: string
  variant?: 'text' | 'outlined' | 'contained'
  children?: ReactNode
  color:
    | 'error'
    | 'info'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
}

export default function ButtonModal({
  variant,
  children,
  label,
  color,
}: ButtonModalProps) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button color={color} variant={variant} onClick={handleOpen}>
        {label}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box className={styles.modal}>{children}</Box>
      </Modal>
    </div>
  )
}
