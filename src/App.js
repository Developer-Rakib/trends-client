import './App.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import AddItems from './Pages/AddItems/AddItems'
import Footer from './Pages/Footer/Footer'
import Blogs from './Pages/Blogs/Blogs';
import MyItems from './Pages/MyItems/MyItems';
import ManageItems from './Pages/ManageItems/ManageItems';
import InventoryDetails from './Pages/InventoryDetails/InventoryDetails';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Toaster></Toaster>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/SignUp' element={<SignUp></SignUp>}></Route>
        <Route path='/addItems' element={<AddItems></AddItems>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>
        <Route path='/manageItems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/inventoryDetails/:id' element={<InventoryDetails></InventoryDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
