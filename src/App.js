import logo from './logo.svg';
import './App.css';
import Login from './forms/Login';
import { UsersContextProvider } from './context/UsersContext';
import UsersList from './pages/UsersList';
import Navigation from './appNavigation/Navigation';
import Register from './forms/Register';

function App() {
  return (
    <div className="App">
      <UsersContextProvider>
        <Navigation />
      </UsersContextProvider>

    </div>
  );
}

export default App;
