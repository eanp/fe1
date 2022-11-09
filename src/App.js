import {useState} from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Product from './pages/Product'
import Profile from './pages/Profile'
import {BrowserRouter,Route,Link,Routes,Navigate} from 'react-router-dom'

function App() {
  const [title,setTitle] = useState("E coomerce")
  return (
    <div className="App">
      <header className="App-header">
        {title}
      </header>
      <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
          
            <Link to="/product">Product</Link>
          
            <Link to="/about">About</Link>
          
            <Link to="/profile">Profile</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} replace="true" />
          <Route path='/home' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
