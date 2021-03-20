import './App.css';
import FilesView from './components/filesview/FilesView';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';
import SideIcon from './components/sideicon/SideIcon';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app__main">
      <SideBar/>
      <FilesView/>
      <SideIcon/>
      </div>
    
    </div>
  );
}

export default App;
