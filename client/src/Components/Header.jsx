import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus, faCreditCard, faMusic, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import icon from '../images/icon/dumbsound.png';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Register from './Register.jsx';
import Login from './Login.jsx';
import { connect } from "react-redux";

import { getUser } from "../redux/actions/actionUsers";
import { Dropdown, DropdownButton, Image } from "react-bootstrap";

class User extends Component{
	render(){
	  return (
		<div>	
		  <Dropdown.Item href="/profil" style={{color:'#FFFFFF'}}>
				<FontAwesomeIcon icon={faUser} style={{color: "red"}}></FontAwesomeIcon> <span style={{marginLeft:'15'}}>Profil</span>
		  </Dropdown.Item>
		  
		  <Dropdown.Item href="/payment" style={{color:'#FFFFFF'}}>
				<FontAwesomeIcon icon={faCreditCard} style={{color: "red"}}></FontAwesomeIcon> <span style={{marginLeft:'15'}}>Pembayaran</span>
		  </Dropdown.Item>
		</div>
	  );
	}
}

class Admin extends Component{
	render(){
	  return (
		<div>
		  <Dropdown.Item href="/song" style={{color:'#FFFFFF'}}>
				<FontAwesomeIcon icon={faMusic} style={{color: "red"}}></FontAwesomeIcon> <span style={{marginLeft:'15'}}>Add Music</span>
		  </Dropdown.Item>
		  <Dropdown.Item href="/artist" style={{color:'#FFFFFF'}}>
		 	 	<FontAwesomeIcon icon={faUserPlus} style={{color: "red"}}></FontAwesomeIcon> <span style={{marginLeft:'15'}}>Add Artist</span>
		  </Dropdown.Item>
		  <Dropdown.Item href="/transaction" style={{color:'#FFFFFF'}}>
		  		<FontAwesomeIcon icon={faCreditCard} style={{color: "red"}}></FontAwesomeIcon> <span style={{marginLeft:'15'}}>Transaction</span>
		  </Dropdown.Item>
		</div>
	  );
	}
}

class UserProfile extends Component{
	render(){
	let a = localStorage.getItem("role");
	  return (
		<div className="header-right">
			<Dropdown className="button-user">
				<Dropdown.Toggle style={{background: 'transparent', border:'none'}} id="dropdown-basic">
					<Image
						src={
						"https://jw-webmagazine.com/wp-content/uploads/2019/07/jw-5d1b5680e819c9.96019818.png"
						}
						roundedCircle
						className="foto-profile"
					/>
				</Dropdown.Toggle>

				<Dropdown.Menu style={{background:'#1F1F1F'}}>
					{a === "1" ? <Admin /> : <User />}
					<Dropdown.Divider />
					<Dropdown.Item href="/" style={{color:'#FFFFFF'}} onClick={this.props.handleLogoutClick} className="Logout">
					<FontAwesomeIcon icon={faSignOutAlt} style={{color: "red"}}></FontAwesomeIcon> <span style={{marginLeft:'15'}}>Logout</span>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	  );
	}
}


class AuthButton extends Component {
  render(){
	  return (
		<>
			<Button variant="outline-secondary" onClick={() => this.props.handleToggleModal(true)} className="button-login"> Login </Button>
			<Button variant="outline-secondary" onClick={() => this.props.handleToggleModal(false)} className="button-register"> Register </Button>
		</>
	  );
  }
};

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = { isModalOpen: false, isRegis: false };
	}
  
	componentDidMount() {
		localStorage.getItem("token")
        ? this.setState({ isLoggedIn: true, isModalOpen: false })
        : this.setState({ isLoggedIn: false });
	}
	
	handleToggleModal = (isRegis = false) => {
		this.setState({ isRegis }, () => {
		  this.setState(({ isModalOpen }) => {
			return { isModalOpen: !isModalOpen };
		  });
		});
	};
	
	handleLoginClick = () => {
		{
		  this.props.user.data.id
			? this.setState({ isLoggedIn: true, isModalOpen: false })
			: this.setState({ isLoggedIn: false });
			}
		};

	 handleLogoutClick = () => {
		this.setState({ isLoggedIn: false });
		localStorage.removeItem("role");
		localStorage.removeItem("id");
		localStorage.removeItem("token");
	 };
  
	render(){
		const isLoggedIn = this.state.isLoggedIn;
		const { data } = this.props.user
		return(
			<>
				<div className="header">
				{<Link to="/">
					<img src={icon} className="icon"/>
				</Link>}
				{isLoggedIn ? (
					<UserProfile handleLogoutClick={this.handleLogoutClick} />
					) : (
					<AuthButton handleToggleModal={this.handleToggleModal} />
				)}
					
				{this.state.isModalOpen && (
				  <>
					{this.state.isRegis ? (
					  <Login
						show={this.state.isModalOpen}
						onHide={this.handleToggleModal}
						handleToggleModal={this.handleToggleModal}
						handleLoginClick={this.handleLoginClick}
					  />
					) : (
					  <Register
						show={this.state.isModalOpen}
						handleToggleModal={this.handleToggleModal}
						onHide={() => this.handleToggleModal(true)}
					  />
					)}
				  </>
				)}
			   </div>
			</>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { getUser })(Header);