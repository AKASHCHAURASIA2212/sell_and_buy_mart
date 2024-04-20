import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';

import './App.css'
import './responsive.css'
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Header from './components/header/header';
import Contact from './pages/Contact/Contact';
import Newsletter from './components/newsletter/newsletter';
import Feature from './components/feature/feature';
import Listing from './pages/Listing/Listing';
import Details from './pages/Details/Details';
import SingUp from './pages/SignUp/SingUp';
import SignIn from './pages/SignIn/SignIn';
import About from './pages/About/About';
import Footer from './components/footer/footer';
import loaderGif from './asset/images/loading.gif'
import data from '../src/asset/data/db.json';
import FeatureWrapper from './components/feature/FeatureWrapper';
import User from './pages/User/User'
import AddPost from './components/AddPost/AddPost';
import ChatContainer from './components/ChatContainer/ChatContainer';
import axios from 'axios';


const MyContext = createContext();

function App() {
  const [count, setCount] = useState(0)
  let login_status = localStorage.getItem("login_status");
  console.log(login_status);
  console.log(typeof login_status);
  console.log(login_status === 'true');
  login_status = login_status === 'true';
  let [isLogin, setIsLogin] = useState(login_status);
  let [isLoading, setIsLoading] = useState(true);
  let [categorylist, setcategorylist] = useState([]);
  let [itemsdata, setItemsData] = useState([]);
  let [bannerdata, setbannerdata] = useState([]);

  let param_data = useParams();
  // console.log(param_data);
  console.log(window.location.pathname); //yields: "/js" (where snippets run)

  const fetchData2 = async (url, type) => {
    try {
      const response = await axios.get(url);
      if (type == 1) {
        setItemsData(response.data)
      } else if (type == 2) {
        setcategorylist(response.data)
      } else {
        setbannerdata(response.data)
      }
    } catch (error) {
      console.error("Error fetching data:", error);

    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetchData2("http://localhost:3000/items", 1)
    fetchData2("http://localhost:3000/categories", 2)
    fetchData2("http://localhost:3000/banner", 3)

    // console.log("items :", itemsdata);
    // console.log("categories", categorylist);
    // console.log("banner", bannerdata);
    // setIsLoading(false);
  }, []);



  setTimeout(() => {
    setIsLoading(false);
    // setIsLogin(true)
  }, 2000)


  const value = {
    categorylist,
    itemsdata,
    bannerdata,
    isLogin,
    setIsLogin
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={value}>

        {
          isLoading === true && <div className='loader'>
            <img src={loaderGif} />
          </div>
        }

        <Header />
        <Routes>

          {!isLogin && <>
            <Route exact={true} path="*" element={<SignIn />} />
            <Route exact={true} path="/signup" element={<SingUp />} />
            <Route exact={true} path="/signin" element={<SignIn />} />
          </>
          }

          {
            isLogin && <>
              <Route exact={true} path="/" element={<Home className='mx-4' />} />

              <Route exact={true} path="/listing" element={<Listing className='mx-4' />} />
              <Route exact={true} path="/listing/:cat" element={<Listing className='mx-4' />} />
              <Route exact={true} path="/listing/:cat/:id" element={<Details className='mx-4' />} />

              <Route exact={true} path="/about" element={<About className='mx-4' />} />
              <Route exact={true} path="/Contact" element={<Contact className='mx-4' />} />


              <Route exact={true} path="/user" element={<User className='mx-4' />} />
              <Route exact={true} path="/add/:user_id" element={<AddPost className='mx-4' />} />
              <Route exact={true} path="/chat/:id" element={<ChatContainer className='mx-4' />} />
              <Route exact={true} path='*' element={<NotFound className='mx-4' />} />
              {/* <Route exact={true} path='/*' element={<NotFound className='mx-4' />}> </Route> */}
              {/* <Route exact={true} path='' element={<NotFound className='mx-4' />}> </Route> */}

            </>
          }

        </Routes>
        {
          isLogin && <FeatureWrapper className='mx-4' />
        }
        {
          isLogin && <Newsletter className='mx-4' />
        }
        <Footer />


      </MyContext.Provider>
    </BrowserRouter >
  );
}

export default App

export { MyContext }

