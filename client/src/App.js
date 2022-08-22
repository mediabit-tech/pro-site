import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import Topbar from './components/topbar';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Home from './Home';
import Signin from './components/auth/signin';
import ErrorPage from './components/auth/error404';
import UploadPost from './components/post/uploadPost';

const App = () => {
  return (
    <>
      <Router>
        <Topbar />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/admin-signin' element={<Signin />} />
          <Route exact path='/upload-post' element={<UploadPost />} />

          <Route path='/error' element={<ErrorPage />} />
        </Routes>
        <NotificationContainer />
        <Footer />
      </Router>
    </>
  )
}

export default App