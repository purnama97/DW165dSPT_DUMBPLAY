import React, {Component} from 'react';
import Header from './../Components/Header.jsx';
import Jumbo from './../Components/Jumbo.jsx';
import Songs from './../Components/gridSong.jsx';
import './../Css/style.css';

import { connect } from "react-redux";
import { getAllSong } from "../redux/actions/actionSongs";

class Beranda extends Component{
	constructor(props){
		super(props);
		this.state = { isPlay: false}
	}
	
	componentDidMount(){
		this.props.getAllSong();
	}
	
	handleDetailClick =(id) => {
		console.log(id)
	}
	
	render(){
		const {data, loading, error} = this.props.song
		
		return(
		<>
			<Jumbo />
			<Header />
			{ data === null || loading ? null : <Songs dataLagu={data}/> }
		</>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    song: state.song,
  };
};

export default connect(mapStateToProps, { getAllSong })(Beranda);
