import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/footer.component';
import Interests from './components/interests/interests.component';
import About from './components/about/about.component';
import Info from './components/info/info.component';
function App() {
  return (
    <div className="App">
      <Info/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  );
}

export default App;
