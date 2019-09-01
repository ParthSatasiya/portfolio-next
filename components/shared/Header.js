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

const BsNavLink = ({ route, title }) => (
  <Link href={route}>
    <a className="nav-link port-navbar-link">{title}</a>
  </Link>
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
    return (
      <div>
        <Navbar className="port-navbar port-default absolute" color="tranparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">Parth Satasiya</NavbarBrand>
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
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
