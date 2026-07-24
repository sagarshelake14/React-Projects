import { useEffect, useState } from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeContext } from './contexts/ThemeContext'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
 const [themeMode, setthemeMode] = useState("light");

 const LightTheme = () => {
     setthemeMode('light');
 }
 const DarkTheme = () => {
    setthemeMode('dark');
 }

// Actual theme changing work
useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode)
}, [themeMode])

  return (
    <ThemeProvider value={{themeMode, DarkTheme, LightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                  <div className="w-full">
                      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                          <ThemeBtn />
                      </div>

                      <div className="w-full max-w-sm mx-auto">
                          <Card />
                      </div>
                  </div>
      </div>
    </ThemeProvider>

  )
}

export default App
