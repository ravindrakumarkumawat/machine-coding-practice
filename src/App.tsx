import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './stories/Header'

function App() {

  return (
    <>
      <Header
        user={{ name: 'Jane Doe' }}
        onLogin={() => alert('onLogin')}
        onLogout={() => alert('onLogout')}
        onCreateAccount={() => alert('onCreateAccount')}
      />
      <div>
        <a href="/">
          Home
        </a>
        <a href="/about">
          About
        </a>
        <a href="/component">
          Component
        </a>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>

      <AppRoutes />
    </>
  )
}

export default App
