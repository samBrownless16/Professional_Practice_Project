import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function App() {
  return (
    <div className="App">
      <div className="NavigationBar">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="NavLinks">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Features</Nav.Link>
            <Nav.Link href="/">Other</Nav.Link>
          </Nav>
        </Navbar>
        {/* Links HERE */}
      </div>
      <div>
        <h1>Hello World!!</h1>
      </div>
    </div>
  );
}

export default App;