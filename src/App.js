import Body from './components/Models/Body';
import Footer from './components/Models/Footer';
import NavBar from './components/Models/Header/NavBar';
import SideBar from './components/Models/Header/SideBar';

function App() {
  return (
      <>
        <SideBar />
        <div className="App container">
          <NavBar />
          <Body/>
          <Footer/>
        </div>
      </>
  );
}

export default App;
