import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/RouteComponent';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
