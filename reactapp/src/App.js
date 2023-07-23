import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import Slidebars from './Components/Slidebars.tsx';
import Intro from './Components/Intro';
import Queries from './Components/Queries';
import Home from './Components/Home';
import Navbar2 from './Components/Navbar2';
import { Provider } from 'react-redux';
import store from './redux/store.js'
import Assign from './Components/Assign';
import Pending from './Components/Pending';
import Blog from './Components/Blog';
export default function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>

      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Intro />} />
          <Route path="/queries" element={<Queries />} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Assign" element={<Assign/>} />
          <Route path="/Navbar2" element={<Navbar2/>} />
          <Route path="/Pending" element={<Pending/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </Router>
      </Provider>
    </ChakraProvider>
  );
}


