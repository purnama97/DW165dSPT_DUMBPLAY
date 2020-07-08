import React, {Component} from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import "../Css/style.css"
import { connect } from "react-redux";
import { register } from "../redux/actions/actionUsers.jsx";


class Register extends Component {  
    constructor(props) {
        super(props);
        this.state = {
		  status:false,
          data: {},
        };
    }
    
    handleChange = (event) => {
        const { data } = this.state;
        this.setState({
          data: { ...data, [event.target.name]: event.target.value },
        });
		//console.log(this.state.data)
    };
    
    handleSubmit = async (event) => {
        event.preventDefault();
        this.props.register(this.state.data);
        this.setState({ data: {} });
    };

    render(){
		const {data} = this.state;
		const {data:dataReg, loading, error} = this.props.user;
		var status;
        return(
            <>
                <Modal style={{ marginLeft:"40%", width:416, marginTop:100 }}  show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Body  style={{ height:500, backgroundColor:'#1F1F1F', borderRadius:5, border:'none' }}>
                        <Modal.Title>
							<h3 style={{color:'#FFFFFF'}}>Registrasi</h3>
                        </Modal.Title>
                        <form onSubmit={this.handleSubmit} method="post">
							<Form.Group controlId="formBasicEmail">
								{ loading ? (
									<p>Loading....</p>
								): error ? (                          
									<p style={{color:'#FFFFFF', textAlign:'center'}}>Your registration failed, please try again</p>
								):dataReg.email ? (
									status = true
								):(
									null
								)
								}
								<Form.Control type="email" bsPrefix style={styles.inputan} className="inputan" name="email" value={data.email ? data.email : ""} onChange={this.handleChange} placeholder="Email" required/>
								{//<Form.Text className="text-muted">
								  //We'll never share your email with anyone else.
								//</Form.Text>}
								}
							</Form.Group>
							<Form.Group controlId="formBasicPassword">
								<Form.Control type="password" bsPrefix style={styles.inputan} name="password" value={data.password ? data.password : ""} onChange={this.handleChange} placeholder="Password" required/>
								{//<Form.Text className="text-muted">
								  //We'll never share your email with anyone else.
								//</Form.Text>}
								}
							</Form.Group>
							<Form.Group controlId="formBasicText">
								<Form.Control type="text" bsPrefix style={styles.inputan} name="fullName" value={data.fullName ? data.fullName : ""} onChange={this.handleChange} placeholder="Full Name" required/>
								{//<Form.Text className="text-muted">
								  //We'll never share your email with anyone else.
								//</Form.Text>}
								}
							</Form.Group>
							<Form.Group controlId="exampleForm.ControlSelect1">
								<Form.Control as="select" bsPrefix style={styles.inputan} name="gender" value={data.gender ? data.gender : ""} onChange={this.handleChange} required>
								  <option value="Male">Male</option>
								  <option value="Famale">Famale</option>
								</Form.Control>
							</Form.Group>
							<Form.Group controlId="formBasicText">
								<Form.Control type="text" bsPrefix style={styles.inputan} name="phone" value={data.phone ? data.phone : ""} onChange={this.handleChange} placeholder="phone" required/>
								{//<Form.Text className="text-muted">
								  //We'll never share your email with anyone else.
								//</Form.Text>}
								}
							</Form.Group>
							<Form.Group controlId="formBasicText">
								<Form.Control type="text" bsPrefix style={styles.inputan} name="address" value={data.address ? data.address : ""} onChange={this.handleChange} placeholder="address" required/>
								{//<Form.Text className="text-muted">
								  //We'll never share your email with anyone else.
								//</Form.Text>}
								}
							</Form.Group>
                            <Button type="submit" style={{color:'#FFFFFF',background:'#F58033'}} variant="warning" className="btn btn-user">Register</Button>
                        </form>
                        <p className="text-footer">Don't have an account ? click <span><a href="#" onClick={() => this.props.handleToggleModal(false)}>Here</a></span></p>
                    </Modal.Body>
				</Modal>
            </>
        );
    }
}

const styles = {
	inputan:{
		background: 'rgba(210, 210, 210, 0.25)',
		border: '2px solid #D2D2D2',
		boxSizing: 'border-box',
		width:'100%',
		padding:5,
		borderRadius: 5,
		color: '#D2D2D2',
	}
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { register })(Register);