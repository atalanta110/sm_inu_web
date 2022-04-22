import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss'
import Loader from './components/Loader'
import { GlobalStyles, ToastWrapper } from './styles/globalStyles'

const Header = lazy(() => import('./components/Header'))
const Home = lazy(() => import('./pages/Home'))
const LeaderBoards = lazy(() => import('./pages/LeaderBoards'))

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboards" element={<LeaderBoards />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
