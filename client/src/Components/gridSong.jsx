import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/style.css';
import { Row, Col, Card } from 'react-bootstrap';
import Player from './../Components/Player.jsx';
import { connect } from "react-redux";

import { playSong } from "../redux/actions/actionSongs";
import { getUser } from "../redux/actions/actionUsers";
import { Redirect } from "react-router-dom";

class gridSong extends Component {
	constructor(props){
		super(props)
		this.state = {isPlayer:false, idSong:0, laguNa:{}}
	}
	
	componentDidMount(){
		this.props.getUser();
	}
	
	
	handelPlay = (id) => {
		let dataL = this.props.dataLagu.filter(lagu => lagu.id == id);
		this.setState({isPlayer:true, laguNa:dataL});	
	}
	render(){
		
		const lagu = this.props.dataLagu;
		const { data }= this.props.user;
		return(
			<>
				<div className="gridSong">
					<Row>
					   {lagu.length > 0 && lagu.map((song, i) => {
						return (
							<div key={i}>
							<a href="#" onClick={() => this.handelPlay(song.id)}>
							<Col md={2} className="Cols">
								<Card className="Song">
								  <Card.Img className="images" variant="top" src={song.thumbnail} />
								  <Card.Body>
									<Card.Title className="title">{song.title}</Card.Title>
									<div className="year">{song.year}</div>
									<Card.Text className="singer">
										{song.artist.name}
									</Card.Text>
								  </Card.Body>
								</Card>
							</Col>
							</a>
							</div>
						)
					   })}
					</Row>
                </div>
				{this.state.isPlayer && this.state.laguNa  && data.subscribe == true ? <Player Lagu={this.state.laguNa} /> : null}
			</>
		)
	}
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { getUser })(gridSong);