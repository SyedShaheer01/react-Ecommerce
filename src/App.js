import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import Collection from './components/pages/collection';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Product from './components/pages/product';
import Login from './components/pages/login';
import Cart from './components/pages/cart';
import PlaceOrder from './components/pages/placeOrder';
import Orders from './components/pages/orders';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    
    <div className="px-4 sm:px-[5vw] md:[7vw] lg:px-[9vw]">
      <ToastContainer/>
     <Navbar/>
     <SearchBar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/placeOrder' element={<PlaceOrder/>}/>
      <Route path='/orders' element={<Orders/>}/>
     </Routes>
     <Footer/>

    </div>
  );
}

export default App;
