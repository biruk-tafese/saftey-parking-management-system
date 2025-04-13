import React from 'react'
import MainComponent from './MainComponent'
import { AuthProvider } from './contexts/AuthContext.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { LanguageProvider } from './contexts/LanguageContext.jsx';

import './App.css'

function App() {

  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <LanguageProvider>
            <MainComponent />
          </LanguageProvider>
        </ThemeProvider>
      </AuthProvider>     
    </>
  )
}

export default App
