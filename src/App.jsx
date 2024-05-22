import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Header from './components/header/header';
import Contact from './pages/Contact/Contact';
import Listing from './pages/Listing/Listing';
import Details from './pages/Details/Details';
import SingUp from './pages/SignUp/SingUp';
import SignIn from './pages/SignIn/SignIn';
import About from './pages/About/About';
import Footer from './components/footer/footer';
import User from './pages/User/User'
import ChatContainer from './components/ChatContainer/ChatContainer';
import Dashboard from './pages/Dashboard/Dashboard';
import UserArea from './components/Dash/UserArea/UserArea';
import ItemArea from './components/Dash/ItemArea/ItemArea';
import Panel from './components/Dash/AdminPanel/Panel';
import UserDetails from './components/User/UserDetails';
import ItemDetails from './components/item/ItemDetails';
import ChatArea from './components/ChatContainer/ChatArea';
import Welcome from './components/ChatContainer/Welcome';
import NewAddPost from './components/AddPost/NewAddPost';
import Notify from './components/Dash/Notification/Notify';
import ResetPassword from './pages/ResetPassword/ResetPassword'
import './App.css'
import './responsive.css'
import ResetPasswordMail from './pages/ResetPassword/ResetPasswordMail';
import Loading from './components/Loading/Loading';
import OTP_Varify from './pages/ResetPassword/otp_verification';


const MyContext = createContext();

function App() {

  let login_status = localStorage.getItem("login_status");
  login_status = login_status === 'true';
  let admin_status = localStorage.getItem("admin_status");
  admin_status = admin_status === 'true';
  let token = localStorage.getItem("token");
  admin_status = admin_status === 'true';
  let [isLogin, setIsLogin] = useState(login_status);
  let [isAdmin, setIsAdmin] = useState(admin_status);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000)

  const value = {
    isLogin,
    setIsLogin,
    isAdmin,
    setIsAdmin
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={value}>
        {
          isLoading === true && <div className='loader'>
            <Loading />
          </div>
        }
        <Header />
        <Routes>
          {!isLogin && <>
            <Route exact={true} path="*" element={<SignIn />} />
            <Route exact={true} path="/signup" element={<SingUp />} />
            <Route exact={true} path="/signin" element={<SignIn />} />
            <Route exact={true} path='/reset-password' element={<ResetPasswordMail />} />
            <Route exact={true} path='/verify' element={<OTP_Varify />} />
            <Route exact={true} path='/reset-password/:userId' element={<ResetPassword />} />
          </>
          }
          {
            isAdmin && token &&
            <Route path='admin' element={<Dashboard />} className='mx-4' >
              <Route path='' element={<Panel />} />
              <Route path='user' element={<UserArea />} />
              <Route path='user/edit/:userId' element={<UserDetails />} />
              <Route path='item' element={<ItemArea />} />
              <Route path='item/edit/:itemId' element={<ItemDetails />} />
              <Route path='notify' element={<Notify />} />
              <Route exact={true} path='*' element={<NotFound className='mx-4' />} />
            </Route>
          }
          {
            isLogin && token && <>
              <Route exact={true} path="/" element={<Home className='mx-4' />} />
              <Route exact={true} path="/listing" element={<Listing className='mx-4' />} />
              <Route exact={true} path="/listing/:cat" element={<Listing className='mx-4' />} />
              <Route exact={true} path="/listing/:cat/:id" element={<Details className='mx-4' />} />
              <Route exact={true} path="/account" element={<UserDetails className='mx-4' />} />
              <Route exact={true} path="/user" element={<User className='mx-4' />} />
              <Route exact={true} path="/add/:user_id" element={<NewAddPost className='mx-4' />} />
              <Route exact={true} path="/chat" element={<ChatContainer className='mx-4' />} >
                <Route path='' element={<Welcome />} />
                <Route path=':chatId' element={<ChatArea />} />
              </Route>
              <Route path='/chat/:id/:item_id' element={<ChatContainer />} />
              <Route path='chats/:chatId' element={<ChatArea />} />
              <Route path='item/edit/:itemId' element={<ItemDetails />} />
              <Route exact={true} path='*' element={<NotFound className='mx-4' />} />
            </>
          }
          <Route exact={true} path="/about" element={<About className='mx-4' />} />
          <Route exact={true} path="/Contact" element={<Contact className='mx-4' />} />
        </Routes>

        <Footer />


      </MyContext.Provider>
    </BrowserRouter >
  );
}

export default App

export { MyContext }

