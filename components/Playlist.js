import React, {useState} from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import play from '../assets/icons/play.png';
import pause from '../assets/icons/pause.png';
import styled from 'styled-components';
var SoundPlayer = require('react-native-sound');

const Container = styled.View`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 110px;
`;

const Title = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid red;
  background: red;
  color: white;
}`;

const Content = styled.View`
  padding: 15px 15px;
  display: flex;
  flex-direction: row;
  border: 1px solid red;
  justify-content: space-between;
  align-items: center;
`;

export default (Playlist = ({songs}) => {
  const [playingSongKey, setPlayingSongKey] = useState(null);
  const [playingSong, setPlayingSong] = useState(null);
  const onPressPlayButton = song => {
    setPlayingSongKey(song.key);
    const newSong = new SoundPlayer(
      song.sound,
      SoundPlayer.MAIN_BUNDLE,
      error => {
        if (error)
          ToastAndroid.show(
            'Error when init SoundPlayer :(((',
            ToastAndroid.SHORT,
          );
        else {
          newSong.play(success => {
            if (!success)
              ToastAndroid.show(
                'Error when play SoundPlayer :(((',
                ToastAndroid.SHORT,
              );
          });
        }
      },
    );
    setPlayingSong(newSong);
  };

  const onPressButtonPause = () => {
    playingSong.pause();
    setPlayingSongKey(null);
  };

  const renderSound = ({item}) => {
    console.log('render sound');
    return (
      <Container key={item.key}>
        <View>
          <Title>{item.name}</Title>
        </View>
        <Content>
          <View>{item.icon}</View>
          <Text>{item.description}</Text>
          <TouchableOpacity
            disabled={Boolean(playingSongKey)}
            onPress={() => onPressPlayButton(item)}>
            <Image source={play} alt={'play'} style={{width: 18, height: 18}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPressButtonPause(item)}>
            <Image
              source={pause}
              alt={'pause'}
              style={{width: 18, height: 18}}
            />
          </TouchableOpacity>
        </Content>
      </Container>
    );
  };
  console.warn('rerender');
  return (
    <View>
      <FlatList
        data={songs}
        renderItem={renderSound}
        extraData={playingSongKey}
      />
    </View>
  );
});
