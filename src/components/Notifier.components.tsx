import { useSnackbar } from "notistack"
import { useEffect } from "react"
import { useTypedSelector } from "../hooks/typed-selector.hook"

export const Notifier: React.FC = (): null => {
  const notification = useTypedSelector(state => state.notification)
  const {enqueueSnackbar} = useSnackbar()

  useEffect(() => {
    if(notification) {
      enqueueSnackbar(notification.message, {
        variant: notification.type,
        action: notification.action,
        anchorOrigin: { vertical: "bottom", horizontal: "left" }
      })
    }
  }, [notification])

  return null
} 