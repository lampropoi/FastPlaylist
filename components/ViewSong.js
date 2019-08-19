import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {
  PlayButton,
  PauseButton,
  StopButton,
  ResumeButton,
} from './common/Button';
import SoundPlayer from 'react-native-sound';
import styled from 'styled-components';

const Container = styled.View`
  flex: 3;
`;

const Content = styled.View`
  flex: 2;
`;
const ActionButtons = styled.View`
  flex: 1;
  align-items: center;
`;
const Title = styled.Text`
  padding: 10px 0;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-self: center;
`;

const ImageContainer = styled.View`
  display: flex;
  align-self: center;
  background: white;
  border: 2px solid red;
  border-radius: 10px;
  padding: 10px;
`;

const Description = styled.Text`
  padding: 15px;
  font-size: 16px;
  display: flex;
`;

const PauseResumeButtons = styled.View`
  display: flex;
  flex-direction: row;
`;

const ViewSong = ({navigation}) => {
  const song = navigation.getParam('song');
  const [playingSong, setPlayingSong] = useState(null);
  const [songPaused, setSongPaused] = useState(false);

  const onPressPlayButton = () => {
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
    setSongPaused(true);
  };

  const onPressButtonResume = () => {
    playingSong.play();
    setSongPaused(false);
  };

  const onPressButtonStop = () => {
    playingSong.stop();
    setSongPaused(null);
    setPlayingSong(null);
  };
  return (
    <Container>
      <Content>
        <Title> {song.name} </Title>
        <ImageContainer>
          <Image
            source={{
              uri: `${song.image}`,
            }}
            alt={`${song.name} Image`}
            style={{width: 44, height: 44}}
          />
        </ImageContainer>
        <Description> {song.description}</Description>
      </Content>
      <ActionButtons>
        {playingSong === null && <PlayButton onPress={onPressPlayButton} />}
        <PauseResumeButtons>
          {playingSong && songPaused && (
            <ResumeButton onPress={onPressButtonResume} />
          )}
          {playingSong && !songPaused && (
            <PauseButton onPress={onPressButtonPause} />
          )}
          {playingSong && <StopButton onPress={onPressButtonStop} />}
        </PauseResumeButtons>
      </ActionButtons>
    </Container>
  );
};

ViewSong.navigationOptions = {
  title: 'View Song',
};

export default ViewSong;
