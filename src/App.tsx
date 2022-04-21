import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss'
import Loader from './components/Loader'
import { GlobalStyles, ToastWrapper } from './styles/globalStyles'

const Header = lazy(() => import('./components/Header'))

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <ToastWrapper
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={'colored'}
      />
      <Suspense fallback={<Loader />}>
        <Header />
      </Suspense>
    </Router>
  )
}

export default App
