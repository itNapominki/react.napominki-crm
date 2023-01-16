import React from 'react'
import { Alert } from 'components'

export const ConfirmContext = React.createContext()

export default function ConfirmProvider() {
  const [isVisible, setIsVisible] = useState(false)

  const value = {}

  return (
    <ConfirmContext.Provider value={value}>
      {isVisible && <Alert.Confirm />}
    </ConfirmContext.Provider>
  )
}
