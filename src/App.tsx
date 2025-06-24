import './App.css'
import Navbar from './components/Navbar'
import Chat from './pages/Chat';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Navbar />
    <Routes>    
        <Route path='/chat' element={<Chat />} />
    </Routes>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        Tailwind is working!
      </h1>
    </div>
    </>
  )
}

export default App
