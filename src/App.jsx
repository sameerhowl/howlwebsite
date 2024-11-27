import './App.css'
import Footer from './Components/Footer'
import { Header } from './Components/Header'
import { Brands } from './Pages/Brands'
import { Design } from './Pages/Design'
import { Form } from './Pages/Form'
import { Hero } from './Pages/Hero'
import { Review } from './Pages/Review'
import { Solutions } from './Pages/Solutions'
import { Twins } from './Pages/Twins';
import LocomotiveScroll from 'locomotive-scroll';
import  {Connect}  from './Pages/Connect';

function App() {

  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

  return (
    <div >
     <Header/>
     <Hero/>
     <Brands/>
     <Twins/>
     <Solutions/>
     <Design/>
     
     <Review/>
     <Connect/>
     <Form/>
     <Footer/>
    </div>
  )
}

export default App
