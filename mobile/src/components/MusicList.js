import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { Title, Divider, Avatar, Card } from 'react-native-paper';

const ListWidth = Dimensions.get('window').width;

const list = [
  {
    id: 10,
    title: 'My Escape',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/81vkEv0PjdL._SL1400_.jpg',
    year: '2012',
    attachment: 'http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3',
    artist: {
      id: 15,
      name: 'Ravenscode',
      old: '30',
      type: 'Band',
      startCareer: '2003',
    },
  },
  {
    id: 9,
    title: "You Don't Know",
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/81vkEv0PjdL._SL1400_.jpg',
    year: '2021',
    attachment: 'http://www.hochmuth.com/mp3/Tchaikovsky_Rococo_Var_orch.mp3',
    artist: {
      id: 14,
      name: 'Nauval',
      old: '22',
      type: 'Solo',
      startCareer: '2021',
    },
  },
  {
    id: 8,
    title: 'Hello',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/81vkEv0PjdL._SL1400_.jpg',
    year: '2012',
    attachment: 'http://www.hochmuth.com/mp3/Tchaikovsky_Rococo_Var_orch.mp3',
    artist: {
      id: 10,
      name: 'Evanescence',
      old: '20',
      type: 'Band',
      startCareer: '2000',
    },
  },
  {
    id: 7,
    title: 'Over You',
    thumbnail: 'https://i.imgur.com/Xceah7i.png',
    year: '2006',
    attachment: 'https://images-na.ssl-images-amazon.com/images/I/81vkEv0PjdL._SL1400_.jpg',
    artist: {
      id: 8,
      name: 'Chris Daughtry',
      old: '50',
      type: 'Solo',
      startCareer: '1997',
    },
  },
  {
    id: 6,
    title: 'Uptown Girl',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/81vkEv0PjdL._SL1400_.jpg',
    year: '2001',
    attachment: 'http://www.hochmuth.com/mp3/Vivaldi_Sonata_eminor_.mp3',
    artist: {
      id: 9,
      name: 'West Life',
      old: '47',
      type: 'Band',
      startCareer: '1989',
    },
  },
  {
    id: 5,
    title: 'Sugar',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/81vkEv0PjdL._SL1400_.jpg',
    year: '2012',
    attachment: 'http://www.hochmuth.com/mp3/Tchaikovsky_Rococo_Var_orch.mp3',
    artist: {
      id: 7,
      name: 'Maroon 5',
      old: '20',
      type: 'Band',
      startCareer: '2000',
    },
  },
  {
    id: 4,
    title: 'Kangen',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/81vkEv0PjdL._SL1400_.jpg',
    year: '1998',
    attachment: 'http://www.hochmuth.com/mp3/Haydn_Adagio.mp3',
    artist: {
      id: 3,
      name: 'Dewa 19',
      old: '21',
      type: 'Band',
      startCareer: '1990',
    },
  },
  {
    id: 3,
    title: 'Broken Night',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/81vkEv0PjdL._SL1400_.jpg',
    year: '2018',
    attachment: 'http://www.hochmuth.com/mp3/Vivaldi_Sonata_eminor_.mp3',
    artist: {
      id: 2,
      name: 'Aimer',
      old: '25',
      type: 'Solo',
      startCareer: '2002',
    },
  },
  {
    id: 2,
    title: 'Torches',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/81vkEv0PjdL._SL1400_.jpg',
    year: '2019',
    attachment: 'http://www.hochmuth.com/mp3/Tchaikovsky_Rococo_Var_orch.mp3',
    artist: {
      id: 2,
      name: 'Aimer',
      old: '25',
      type: 'Solo',
      startCareer: '2002',
    },
  },
  {
    id: 1,
    title: 'Never Say Good bye',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/81vkEv0PjdL._SL1400_.jpg',
    year: '1986',
    attachment: 'http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3',
    artist: {
      id: 1,
      name: 'Bon Jovi',
      old: '42',
      type: 'Band',
      startCareer: '1983',
    },
  },
];

class MusicList extends Component {
  render(){
  return (
    <>
    <View style={styles.container}>
       <Title style={{width:ListWidth, color:'#EE4622', textAlign:'center', fontSize:14, fontWeight:'bold'}}>Popular Songs on DumbSound</Title>
       <ScrollView contentContainerStyle={styles.konten}>
        {
        list.length && list.map((lagu, i) => (
          // <ListItem
          //   key={i}
          //   leftAvatar={{ source: { uri: lagu.thumbnail } }}
          //   title={lagu.title + list.length + lagu.id}
          //   subtitle={lagu.artist.name}
          //   bottomDivider
          //   chevron={<Icon name="play-arrow" size={30} />}
          // />
          <Card style={{margin:2,backgroundColor:'#3A3A3A'}}>
          <Card.Title
            style={styles.konten}
            titleStyle={{color:'#EE4622',fontSize:14}}
            subtitleStyle={{color:'#ee4e22'}}
            rightStyle={{marginRight:20}}
            title={lagu.title }
            subtitle={lagu.artist.name +' | '+lagu.year}
            left={(props) => <Avatar.Image {...props} source={ lagu.thumbnail }  />}
            right={(props) => <Icon {...props } name="play-arrow" color="#EE4622" onPress={() => {}} />}
          />
          <Divider />
          </Card>
        ))
        }
      </ScrollView>
    </View>
    </>
  );
  }
};

const styles = StyleSheet.create({
  
  container:{
    backgroundColor:'#1F1F1F', 
  },

  konten:{ 
    width:ListWidth,
  }
});

export default MusicList;