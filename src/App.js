import logo from "./logo.svg";
import "./App.css";
import { Page1 } from "./component/Page1";
import { Page4 } from "./component/Page4";
import { Page3 } from "./component/Page3";
import { Page2 } from "./component/Page2";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
function App() {
  return (
    <Router>
      <div>LOGIC FOR NAVIGATION</div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/Page1">
              <Nav.Link href="#home">Page1</Nav.Link>
            </Link>
            <Link to="/Page2">
              {" "}
              <Nav.Link href="#link">Page2</Nav.Link>
            </Link>
            <Link to="/Page3">
              <Nav.Link href="#link">Page3</Nav.Link>
            </Link>
            <Link to="/Page4">
              <Nav.Link href="#link">Page4</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/page1">
          <Page1 />
        </Route>

        <Route path="/page2">
          <Page2 />
        </Route>

        <Route path="/page3">
          <Page3 />
        </Route>

        <Route path="/page4">
          <Page4 />
        </Route>

        <Route path="/">
          <Page1 />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
