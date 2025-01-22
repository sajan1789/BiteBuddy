import './App.css';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import MainContainer from './components/home/MainContainer';
import { AnimatePresence } from 'framer-motion';
import store from './redux/store';
import { Provider } from 'react-redux';
import Footer from './components/footer/Footer';
import SignUp from './components/user/SignUp';
import Login from './components/user/Login';
import Profile from './components/user/Profile';
import ProtectedRoutes from './services/ProtectedRoutes';
import { ToastContainer} from 'react-toastify';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import MeetMyTeam from './components/ui/MeetMyTeam';

function App() {


  return (
    <Provider store={store}>
      <AnimatePresence>
        <div className='w-screen h-screen flex flex-col bg-primary'>
          <Routes>
            {/* Protected Routes */}
            <Route element={<ProtectedRoutes />}>
              <Route path='/' element={
                <>
                  <Header />
                  <main className='mt-14 md:mt-20 md:px-16 bg-primary px-8 py-4 w-full'>
                    <MainContainer />
                  </main>
                  <Footer />
                </>
              } />
              <Route path='/profile' element={<Profile />} />
            </Route>
            {/* Public Routes */}
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/MyTeam" element={<MeetMyTeam />} />
          </Routes>
        </div>
        <ToastContainer />
      </AnimatePresence>

    </Provider>
  );
}

export default App;
