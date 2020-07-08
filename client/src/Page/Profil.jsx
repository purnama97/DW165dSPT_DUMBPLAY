import React, {Component} from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import "../Css/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faEnvelope, faTicketAlt, faVenusMars, faPhone, faMapMarked } from '@fortawesome/free-solid-svg-icons'

import Header from './../Components/Header.jsx';
import { connect } from "react-redux";
import { getUser } from "../redux/actions/actionUsers";
class Profil extends Component {
	
	componentDidMount(){
		this.props.getUser();
	}
    render(){
        const {data, loading, error} = this.props.Profil;
        console.log(data);
        return(
            <>
                <Container>  
            	<Header />
                    <div class="profil-form">
                        <Row style={{marginTop:120, position:'absolute', background:'#3A3A3A', borderRadius:5, marginLeft:'10%'}}>
                            <Col md={12}>
                            <div className="box-header with-border">
                                <h3 class="box-title">Personal Info</h3>
                            </div>
                            </Col>
                            <Col md={8}>
                                <div className="identitas"> 
                                    <span class="profil-icon"><FontAwesomeIcon icon={faUserCircle} size={20}></FontAwesomeIcon></span>
                                    <div className="profil-value">{data.fullName}</div>
                                    <div className="profil-label">Full Name</div>
                                </div>
                                <div className="identitas"> 
                                <span class="profil-icon"><FontAwesomeIcon icon={faEnvelope} size={20}></FontAwesomeIcon></span>
                                    <div className="profil-value">{data.email}</div>
                                    <div className="profil-label">Email</div>
                                </div>
                                <div className="identitas"> 
                                <span class="profil-icon"><FontAwesomeIcon icon={faTicketAlt} size={20}></FontAwesomeIcon></span>
                                    <div className="profil-value">{data.subscribe == 0 ? "Not Active" : "Active"}</div>
                                    <div className="profil-label">Status</div>
                                </div>
                                <div className="identitas"> 
                                <span class="profil-icon"><FontAwesomeIcon icon={faVenusMars} size={20}></FontAwesomeIcon></span>
                                    <div className="profil-value">{data.gender}</div>
                                    <div className="profil-label">Gender</div>
                                </div>
                                <div className="identitas"> 
                                <span class="profil-icon"><FontAwesomeIcon icon={faPhone} size={20}></FontAwesomeIcon></span>
                                    <div className="profil-value">{data.phone}</div>
                                    <div className="profil-label">Mobile Phone</div>
                                </div>
                                <div className="identitas"> 
                                <span class="profil-icon"><FontAwesomeIcon icon={faMapMarked} size={20}></FontAwesomeIcon></span>
                                    <div className="profil-value">{data.address}</div>
                                    <div className="profil-label">Address</div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="card" style={{ background:'#3A3A3A', border:'none', height:'300px',width:'80%', marginBottom:10 }}>
                                    <img class="bd-placeholder-img card-img-top gambar" style={{marginBottom:10}} src="https://i.pinimg.com/originals/a6/04/2d/a6042daf47ff16e463d783fe1f7c4891.jpg"/>
                                    <button className="btn btn-lg btn-danger" href="#" role="button">Change Photo</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </>
        );
    }
}


const mapStateToProps = (state) => {
    return {
      Profil: state.user,
    };
  };

export default connect(mapStateToProps, { getUser })(Profil);