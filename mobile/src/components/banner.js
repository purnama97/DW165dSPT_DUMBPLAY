import React, {Component} from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Animated,Image, View, Dimensions } from 'react-native';
 
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 280;
 
const images = [
    "https://impacttourism.ca/wp-content/uploads/2019/07/background-music-means-sound-track-and-melody.jpg",
    "https://1.bp.blogspot.com/-CyIYJQhnfWY/Xgn2QJsBduI/AAAAAAAAO4w/HQEWjy77K0Ip_9Vln8nOM1fP0lPGYef7ACLcBGAsYHQ/s1600/Jasa-Pembuatan-Background-Music-Video-YouTube-Dan-Adbreak.jpg",
    "https://wallpapercave.com/wp/v53LMJT.jpg"
];
 
export default class Banner extends Component {
    
    animatedValue = new Animated.Value(0);

    componentDidMount() {
        Animated.timing(this.animatedValue,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver:false
            }).start();
    }

    renderPage(image, index) {
        return (
            <Animated.View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
            </Animated.View>
        );
    }
 
    render() {
        return (
            <Animated.View style={styles.container}>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            </Animated.View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        height:280,
        margin:0,
        backgroundColor: '#1F1F1F',
        justifyContent: 'center'
    },
});