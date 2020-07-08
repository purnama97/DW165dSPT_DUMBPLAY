import React, {Component} from 'react';
import { Container, Row, Col, Form, Button, Alert} from 'react-bootstrap';
import Header from './../Components/Header.jsx';

import { connect } from "react-redux";
import { getArtist } from "../redux/actions/actionArtist.jsx";
import { postSong } from "../redux/actions/actionSongs.jsx";

class Song extends Component {
    constructor(props) {
        super(props);
        this.state = {
          datas: {},
        };
    }
    
	componentDidMount(){
		this.props.getArtist();
	}

    handleChange = (event) => {
        const { datas } = this.state;
        this.setState({
          datas: { ...datas, [event.target.name]: event.target.value },
        });
    };
    
    handleSubmit = async (event) => {
        event.preventDefault();
        this.props.postSong(this.state.datas);
        this.setState({ datas: {} });
    };
    render(){
        const {datas} = this.state
		const {data, loading, error} = this.props.artist;
		const {data:dataSong, loading:loadingSong, error:errorSong} = this.props.song;
        return(
            <>
				<Header />
                <Container style={{textAlign:'left', height:'794px'}}>
                    <div style={{paddingTop:'100px'}}>
						<Row>
                            <Col md={12}>
							<div className="box-header with-border">
								<h3 style={{color:'#FFFFFF'}}>Add Music</h3>
							</div>
							{
                            loadingSong ? (
                                console.log("errorna " + loading)
                            ): errorSong ? (
                                <Alert key={0} variant={'danger'}>
                                Failed : {errorSong.message}
                                </Alert>
                            ): dataSong ? (
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
								<Row>
								    <Col md={8}>
									<Form.Group style={{width:'100%'}}>
										<Form.Control type="text" name="title" bsPrefix style={styles.inputan} value={datas.title ? datas.title : ""} onChange={this.handleChange} placeholder="Title" required/>
									</Form.Group>
									</Col>
								    <Col md={4}>
									<Form.Group style={{width:'100%'}}>
										<Form.Control type="text" name="thumbnail" bsPrefix style={styles.inputan}  value={datas.thumbnail ? datas.thumbnail : ""} onChange={this.handleChange} placeholder="Link Thumbnail" required/>
									</Form.Group>
									</Col>
								    <Col md={12}>
									<Form.Group style={{width:'100%'}}>
										<Form.Control type="number" name="year" bsPrefix style={styles.inputan}  value={datas.year ? datas.year : ""} onChange={this.handleChange} placeholder="Year" required/>
									</Form.Group>
									</Col>
								    <Col md={12}>
									<Form.Group style={{width:'100%'}}>
										<Form.Control as="select" bsPrefix style={styles.inputan} name="artistId" value={datas.artistId ? datas.artistId : ""} onChange={this.handleChange} required>
											{data.length > 0 && data.map((artist,i) => {
												return (
													<option key={i} value={artist.id}>{artist.name}</option>
												)
											})}
										</Form.Control>
									</Form.Group>
									</Col>
								    <Col md={4}>
									<Form.Group style={{width:'100%'}}>
										<Form.Control type="text" name="attache" bsPrefix style={styles.inputan}  value={datas.attache ? datas.attache : ""} onChange={this.handleChange} placeholder="Link Lagu" required/>
									</Form.Group>
									</Col>
									</Row>
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
    song :state.song,
  };
};

export default connect(mapStateToProps, { getArtist, postSong })(Song);