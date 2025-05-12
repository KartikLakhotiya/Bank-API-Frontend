import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from './components/ui/toaster'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Login from './pages/Login';
import { useAuthStore } from './store/useAuthStore';
import Home from './pages/Home';
function App() {

  const { authUser } = useAuthStore();

  return (
      <Router>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Routes>
          <Route path='/' element={authUser ? <Home /> : <Navigate to="/login" />} />
          <Route path='/login' element={!authUser ? <Login /> : <Navigate to="/" />} />
          </Routes>
          <Toaster />
        </ThemeProvider>
      </Router>
  )
}

export default App
