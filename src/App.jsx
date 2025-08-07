import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className="flex flex-col">
      <Navbar/>
      <HeroSection/>
      <Footer />
    </div>
    </>
  )
}

export default App
