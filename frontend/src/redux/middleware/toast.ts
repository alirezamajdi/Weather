import { Middleware } from 'redux'
import { error } from 'utils/toast'
const toast: Middleware<{}> = (store) => (next) => (action) => {
  if (action.type === 'error') error(action.message)
  else next(action)
}
export default toast
