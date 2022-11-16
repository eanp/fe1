import Login from './pages/Login'
import Home from './pages/Home'
import Product from './pages/Product'
import Profile from './pages/Profile'
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import AuthChecker from './components/AuthChecker'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} replace="true" />
          <Route path='/home' element={<Home />} />
          <Route path='/product' element={
            <AuthChecker>
                  <Product />
            </AuthChecker>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
