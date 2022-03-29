import logo from './logo.svg';
import './App.css';
import Background from './layout/Background';
import Register from './components/Register';
import Login from './components/Login';
import Chat from './components/message_components/Chat';

function App() {
  return (
    <Background>
    <Chat />
    </Background>
  );
}

export default App;
