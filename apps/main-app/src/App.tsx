import React from 'react'
import Home from './pages/Home'
import Header from './layout/Header'
import Footer from './layout/Footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <main
        style={{
          width: '1180px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Home />
      </main>

      <Footer />
    </div>
  )
}

export default App
