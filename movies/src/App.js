// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import List from './Components/List';
import Favourites from './Favourites';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (

  // without router using we render in this type
            // // <>
            // <Navbar/>
            // <Banner/>
            // </List/>
            // <Favourites/>
            // // </>
    <BrowserRouter>
    <Navbar/>
    {/* <Banner/> */}
    <Routes>
      <Route path="/" element={<><Banner/><List/></>}/>
      <Route path="/fav" element={<Favourites />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
