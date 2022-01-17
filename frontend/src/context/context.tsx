import React, { createContext, useState, ReactNode, useEffect } from 'react'
import Cookies from 'js-cookie'

interface InterfaceContext {
  counter: number
  setCounter: (counter: number) => void
  theme: 'dark' | 'light' | undefined | string
  setTheme: (value: 'dark' | 'light' | undefined | string) => void
}
export const Context = createContext<InterfaceContext | null>(null)

const AppContext = ({ children }: { children: ReactNode }) => {
  const [counter, setCounter] = useState<number>(0)
  const [theme, setTheme] = useState<'dark' | 'light' | undefined | string>(
    'dark'
  )

  useEffect(() => {
    if (!Cookies.get('theme')) {
      Cookies.set('theme', 'dark', { expires: 7 })
    }
    const theme = Cookies.get('theme')
    setTheme(theme)
  }, [theme])

  return (
    <Context.Provider value={{ counter, setCounter, theme, setTheme }}>
      {children}
    </Context.Provider>
  )
}
export default AppContext
