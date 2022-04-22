import logo from './logo.svg';
import './App.css';
import ThreeSixty from 'react-360-view'
import Show360view from './components/Show360view';
import Header from './components/Header';
import ShowInfo from './components/ShowInfo';
import SelectColor from './components/SelectColor';
import SelectWheel from './components/SelectWheel';


function App() {
  return (
    <div className="App">
      <Header />
      <div class="row p-5">
        <div className='col-6'>
          <Show360view />
          <ShowInfo/>
        </div>
        <div className='col-6'>
          <SelectColor/>
          <SelectWheel/>
        </div>

      </div>
    </div>
  );
}

export default App;
