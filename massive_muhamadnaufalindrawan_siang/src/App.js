
import './App.css';
import NavigationBar from './components/NavigationBar'
import Introduction from './components/Introduction';
import Trending from './components/Trending'
import Indonesia from './components/Indonesia';
import HeaderAndFooterExample from './components/footer';
import "./style/LandingPage.css"

function App() {
  return (
    <div>
      <div className='myBG'>
        <NavigationBar/>
        <Introduction/>
      </div>

      <div className='trending'>
        <Trending/>
      </div>
      <div className='Indonesia'>
        <Indonesia/>
      </div>
      <div className='footer'>
        <HeaderAndFooterExample/>
      </div>
    </div>
  );
}

export default App;
