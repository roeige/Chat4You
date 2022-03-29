import logo from './logo.svg';
import './App.css';
import Background from './layout/Background';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Background>
    <Login />
    </Background>
  );
}

export default App;
