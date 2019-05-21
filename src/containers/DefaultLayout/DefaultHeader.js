import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/logo.jpg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import config from '../../_config/config'
const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    let user = JSON.parse(localStorage.getItem('user'));
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'UMPILA' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'UMPILA' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/" className="nav-link" >Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/usuarios" className="nav-link">Usuários</Link>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="#" className="nav-link">Empresas</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>

          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={!user.foto ? config.usuarioPadrao : config.urlUsuarios + user.foto} className="img-avatar" alt={user.nome} />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>

              <DropdownItem header tag="div" className="text-center"><strong>Conta</strong></DropdownItem>
              <DropdownItem onClick={() => this.props.onAlterarUsuario(false, true)}><i className="fa fa-picture-o"></i> Foto de perfil</DropdownItem>
              <DropdownItem onClick={() => this.props.onAlterarUsuario(true)}><i className="fa fa-lock"></i> Alterar Senha</DropdownItem>
              <DropdownItem onClick={() => this.props.onAlterarUsuario(false)}><i className="fa fa-edit"></i> Alterar dados</DropdownItem>
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
