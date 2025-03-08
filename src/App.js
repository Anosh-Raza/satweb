import { HelmetProvider } from "react-helmet-async";
import Home from './sections/home';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';
import "./index.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import Packages from './pages/packages';
import Blogs from './pages/blogs';
import Contact from './pages/contact'
import Amazon from './pages/services/amazon'
import Etsy from './pages/services/etsy'
import LogoBranding from './pages/services/logoBranding'
import WebDevs from './pages/services/webdev';
import SEO from './pages/services/seo';
import SMM from './pages/services/smm';
import Content from './pages/services/contentWriting';
import PPC from './pages/services/ppc';
import MobileApp from './pages/services/mobileApp';
import Ecommerce from './pages/services/ecommerce';


function App() {
  return (
    <>
     <HelmetProvider>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about-us' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/packages' element={<Packages/>} />
      <Route path='/blogs' element={<Blogs/>} />
      <Route path='/contact' element={<Contact  />} />
      <Route path="/amazon-services" element={<Amazon />} />
      <Route path="/etsy-services" element={<Etsy />} />
      <Route path="/logo-branding-services" element={<LogoBranding />} />
      <Route path="/web-development-services" element={<WebDevs />} />
      <Route path="/search-engine-optimization" element={<SEO />} />
      <Route path="/social-media-marketing-services" element={<SMM />} />
      <Route path="/content-writing-services" element={<Content />} />
      <Route path="/pay-per-click" element={<PPC />} />
      <Route path="/mobile-app-development-services" element={<MobileApp />} />
      <Route path="/ecommerce-services" element={<Ecommerce />} />
    </Routes>
    <Footer/>
    </HelmetProvider>
    </>
  );
}

export default App;
