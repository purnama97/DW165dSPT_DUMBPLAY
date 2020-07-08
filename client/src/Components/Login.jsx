import React, {Component} from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import "../Css/style.css"
import { connect } from "react-redux";
import { login } from "../redux/actions/actionUsers.jsx";

class Login extends Component {  
    constructor(props) {
        super(props);
        this.state = {
          data: {},
        };
    }
    
    handleChange = (event) => {
        const { data } = this.state;
        this.setState({
          data: { ...data, [event.target.name]: event.target.value },
        });
    };
    
    handleSubmit = async (event) => {
        event.preventDefault();
        this.props.login(this.state.data);
        this.setState({ data: {} });
    };

    render(){
      const {data} = this.state;
      const {data:dataLog, loading, error} = this.props.user;
      console.log(error)
      console.log(data)

        return(
            <>
                <Modal style={{ marginLeft:"40%", width:416, marginTop:100 }} show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Body style={{ height:300, backgroundColor:'#1F1F1F', borderRadius:5, border:'none' }}>
                        <Modal.Title className="box-header with-border">
                            <h3 style={{color:'#FFFFFF'}}>Login</h3>
                        </Modal.Title>
                        <Form onSubmit={this.handleSubmit} method="post">
                        <Form.Group controlId="formBasicEmail">
                          { loading ? (
                            <p>Loading....</p>
                          ): error ? (                          
                               <p style={{color:'#FFFFFF', textAlign:'center'}}>Invalid username or password</p>
                          ):(
                            null
                          )
                          }
                          <Form.Control type="email" bsPrefix style={styles.inputan} name="email" value={data.email ? data.email : ""} onChange={this.handleChange} placeholder="Enter email" required/>
                          {//<Form.Text className="text-muted">
                            //We'll never share your email with anyone else.
                          //</Form.Text>}
                          }
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                          <Form.Control type="password" bsPrefix style={styles.inputan} name="password" value={data.password ? data.password : ""} onChange={this.handleChange} placeholder="Enter Password" required/>
                          {//<Form.Text className="text-muted">
                            //We'll never share your email with anyone else.
                          //</Form.Text>}
                          }
                        </Form.Group>
                            <Button type="submit" variant="warming" style={{color:'#FFFFFF',background:'#F58033'}} onClick={this.props.handleLoginClick()} className="btn btn-user">Login</Button>
                        </Form>
                        <p className="text-footer">Don't have an account ? click <span><a href="#">Here</a></span></p>
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

export default connect(mapStateToProps, { login })(Login);


