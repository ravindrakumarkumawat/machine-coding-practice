// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import AppRoutes from './routes/routes'

function App() {

  return (
    <>
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
