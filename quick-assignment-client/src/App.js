import './App.css';
// import UserList from './components/UserList';
// import UserComponent from './components/User';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/RouteComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
