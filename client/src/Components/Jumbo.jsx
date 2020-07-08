import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/style.css';
import { Jumbotron } from "react-bootstrap";

class Jumbo extends Component {
	render(){
		return(
			<>
				<Jumbotron className="jumbotron">
					<h1 className="title">Connect On DumbSound</h1>
					<p className="subtitle">
						Discovery, Stream, and share a constantly expanding mix of music from emerging and major artist around the world
					 </p>
				</Jumbotron>
				<div className="caption">Dengarkan dan Rasakan</div>
			</>
		)
	}
}

export default Jumbo;			
			