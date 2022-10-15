import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import Topbar from './components/topbar';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import PracticeTutorial from './PracticeTutorial';
import Signin from './components/auth/signin';
import ErrorPage from './components/auth/error404';
import UploadPost from './components/post/uploadPost';
import Logout from './components/logout';
import FetchPost from './components/post/fetchPost';
import ContactSection from './components/ContactSection';
import McqInsights from './components/mcq/fetchMCQInsights';
import UploadMCQInsights from './components/mcq/uploadMCQInsights';

const App = () => {
  return (
    <>
      <Router>
        <Topbar />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<PracticeTutorial />} />
          <Route exact path='/:id' element={<FetchPost />} />
          <Route exact path='/suggestion-box' element={<ContactSection />} />
          <Route exact path='/admin-signin' element={<Signin />} />
          <Route exact path='/upload-post' element={<UploadPost />} />
          <Route exact path='/upload-mcqinsights' element={<UploadMCQInsights />} />
          <Route exact path='/upload-post/logout' element={<Logout />} />
          <Route exact path='/mcq-insights' element={<McqInsights />} />

          <Route element={<ErrorPage />} />
        </Routes>
        <NotificationContainer />
        <Footer />
      </Router>
    </>
  )
}

export default App;