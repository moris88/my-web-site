import { useEffect } from 'react'

const useNotificationRequest = () => {
  useEffect(() => {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted.')
        } else {
          console.log('Notification permission denied.')
        }
      })
    }
  }, [])

  const notifyUser = (title: string, body: string) => {
    if (Notification.permission === 'granted') {
      new Notification(title, {
        body: body,
        icon: '/bell.png',
      })
    }
  }

  return {
    notifyUser,
  }
}

export default useNotificationRequest
