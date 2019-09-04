import React from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import auth0 from "../../services/auth0";

const BsNavLink = ({ route, title }) => (
  <Link href={route}>
    <a className="nav-link port-navbar-link">{title}</a>
  </Link>
);

const Login = () => (
  <span className="nav-link port-navbar-link clickable" onClick={auth0.login}>
    Login
  </span>
);

const Logout = () => (
  <span className="nav-link port-navbar-link clickable" onClick={auth0.logout}>
    Logout
  </span>
);

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { isAuthenticated } = this.props;
    return (
      <div>
        <Navbar
          className="port-navbar port-default absolute"
          color="tranparent"
          dark
          expand="md"
        >
          <NavbarBrand className="port-navbar-brand" href="/">
            Parth Satasiya
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/" title="Home" />
              </NavItem>
              <NavItem>
                <BsNavLink route="/about" title="About" />
              </NavItem>
              <NavItem>
                <BsNavLink route="/portfolios" title="Portfolio" />
              </NavItem>
              <NavItem>
                <BsNavLink route="/blogs" title="Blog" />
              </NavItem>
              <NavItem>
                <BsNavLink route="/cv" title="Cv" />
              </NavItem>
              {!isAuthenticated && (
                <NavItem>
                  <Login />
                </NavItem>
              )}
              {isAuthenticated && (
                <NavItem>
                  <Logout />
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
