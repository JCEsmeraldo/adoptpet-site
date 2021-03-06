import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'
import sygnet from '../../assets/img/brand/logo-amarelo.png'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu : '',
      perfil: ''
    }
  }

  componentDidMount() {
    let token = localStorage.getItem('token');
    if(token != null){
      // console.log("Token")
      this.setState({perfil: "Editar Perfil"})
      this.setState({menu: "Sair"})
    }else{
      // console.log("Sem token")
      this.setState({menu: "Entrar"})
    }
  }


  render() {
    // console.log(this.state.menu)

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
              <NavLink to="/dashboard" className="nav-link text-primary" >Dashboard</NavLink>
          </NavItem>
          {/* <NavItem className="px-3">
            <NavLink to="#" className="nav-link">Settings</NavLink>
          </NavItem> */}
        </Nav>
        <Nav className="ml-auto" navbar>
          {/* <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem> */}
          {/* <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-list"></i></NavLink>
          </NavItem> */}
          <NavItem className="px-3">
            <Link to="/users" className="nav-link text-primary">{this.state.perfil}</Link>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/login" className="nav-link text-primary">{this.state.menu}</NavLink>
          </NavItem>
          {/* <AppHeaderDropdown direction='down'>
            <DropdownToggle nav>
              {this.state.menu}
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className='fa fa-lock'></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown> */}
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
