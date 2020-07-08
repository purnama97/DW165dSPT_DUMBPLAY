import React, { Component } from 'react'
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

class Player extends Component {
	constructor(props){
		super(props)
		this.state = {id:0}
	}
	
	render(){
		
		const data = this.props.Lagu;
		
		const playlist = data.length > 0 && data.map((song) => ({
			name: song.title,
			singer: song.artist.name,
			cover: song.thumbnail,
			musicSrc: song.attache
		}))
		
		return(
			<>
				<ReactJkMusicPlayer
				  mode="full"
				  audioLists={playlist}
				  defaultPlayIndex={0}
				  autoPlay={false}
				  showDownload={false}
				  showThemeSwitch={false}
				  toggleMode={false}
				  responsive={false}
				  showMiniModeCover={true}
				  showDestroy={true}
				  showReload={false}
				  // playIndex={playIndex}
				  onAudioPlay={(audioInfo) => {}}
				/>
			</>
		)
	}
}

export default Player;