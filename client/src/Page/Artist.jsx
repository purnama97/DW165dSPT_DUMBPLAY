import React, {Component} from 'react';
import { Container, Row, Col, Form, Button, Alert} from 'react-bootstrap';
import Header from './../Components/Header.jsx';

import { connect } from "react-redux";
import { postArtist } from "../redux/actions/actionArtist.jsx";

class Artist extends Component {
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
        this.props.postArtist(this.state.data);
        this.setState({ data: {} });
    };
    render(){
        
        const { data:dataArtis, loading, error } = this.props.artist
        const { data } = this.state        
        return(
            <>
          	<Header />
                <Container style={{textAlign:'left', height:'794px'}}>
                    <div style={{paddingTop:'100px'}}>
                        <Row>
                            <Col md={12}>
							<div class="box-header with-border">
								<h3 style={{color:'#FFFFFF'}}>Add Artist</h3>
							</div>
                            {
                            loading ? (
                                console.log("errorna " + loading)
                            ): error ? (
                                <Alert key={0} variant={'danger'}>
                                Failed : {error.message}
                                </Alert>
                            ): dataArtis ? (
                                <Alert key={1} variant={'success'}>
                                Data added successfully !
                                </Alert>
                            ):(
                                null
                            )
                            }
							</Col>
                            <Col md={12}>
                                <div className="form-kirim">  
								<Form onSubmit={this.handleSubmit} method="post">
									<Form.Group style={{width:'100%'}}>
										<Form.Control type="text" name="name" bsPrefix style={styles.inputan}  value={data.name ? data.name : ""} onChange={this.handleChange} placeholder="Name" required/>
                                        {/* <Form.Text className="text-muted" style={{color:'red'}}>
                                            {error ? error.message:null}
                                        </Form.Text> */}
                                    </Form.Group>
									<Form.Group style={{width:'100%'}}>
										<Form.Control type="number" name="old" bsPrefix style={styles.inputan}  value={data.old ? data.old : ""} onChange={this.handleChange} placeholder="Old" required/>
									</Form.Group>
									<Form.Group style={{width:'100%'}}>
										<Form.Control as="select" name="type"bsPrefix style={styles.inputan}  value={data.type ? data.type : ""} onChange={this.handleChange} required>
											<option value="Solo">Solo</option>
											<option value="Band">Band</option>
										</Form.Control>
									</Form.Group>
									<Form.Group style={{width:'100%'}}>
										<Form.Control type="number" name="startCareer" bsPrefix style={styles.inputan}  value={data.startCareer ? data.startCareer: ""} onChange={this.handleChange} placeholder="Start a Career" required/>
									</Form.Group>
									<Button type="submit" className="btn btn-md btn-warning" style={{width:'20%',color:'#FFFFFF',background:'#F58033'}} role="button">Save</Button>
								</Form>
							    </div>
							</Col>
                        </Row>
                    </div>
                </Container>
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
    artist :state.artist,
  };
};

export default connect(mapStateToProps, { postArtist })(Artist);