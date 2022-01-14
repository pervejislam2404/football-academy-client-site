import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/home/home/Home';
import Header from './pages/shared/header/Header';
import Footer from './pages/shared/footer/Footer';
import About from './pages/about/About';
import Fees from './pages/fees/Fees';
import Blogs from './pages/blogs/Blogs';
import Contact from './pages/contact/Contact';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Shop from './pages/Shop/Shop';
import ProductDetails from './pages/Shop/productDetails/ProductDetails';
import Messenger from './pages/shared/messenger/Messenger';
import AddCard from './pages/shared/addCard/AddCard';



function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
       <AddCard/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/fees" element={<Fees/>}/>
         <Route path="/blogs" element={<Blogs/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/shop" element={<Shop/>}/>


         <Route path="/detail/:id" element={<ProductDetails/>}/>
       </Routes>
       <Footer/>
       <Messenger/>
     </Router>
    </div>
  );
}

export default App;
