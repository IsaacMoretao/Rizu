import { useContext } from 'react'
import { UseContext } from '../useContext'

export function useAuth() {
  const value = useContext(UseContext);

  return value
}