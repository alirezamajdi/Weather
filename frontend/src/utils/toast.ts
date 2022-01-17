import { toast } from 'react-toastify'

export const error = (message: string | undefined) => {
  toast(message, {
    position: 'bottom-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'dark',
    progressStyle: { background: 'red' },
  })
}
