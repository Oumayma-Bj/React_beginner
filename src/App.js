import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Alert, Row, Col } from 'react-bootstrap';
import Menu from "./components/Profile/Menu";
import ProfilePhoto from './components/Profile/ProfilePhoto';
import FullName from './components/Profile/FullName';
import Adress from './components/Profile/Adress';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Row className="landing">
        <Col><FullName/></Col>
        <Col><Adress/></Col>
        <Col><ProfilePhoto/></Col>
      </Row>
    </div>
  );
}

export default App;
