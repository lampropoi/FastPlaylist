import React from 'react';
import {FlatList, View, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid red;
  background: red;
  color: white;
  height: 30px;
}`;

const Content = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  border: 1px solid red;
  height: 180px;
`;

const Description = styled.Text`
  padding: 0 0 0 40px;
`;
const Playlist = ({songs, navigation}) => {
  const viewSong = song => {
    navigation.navigate('ViewSong', {song});
  };

  const renderSound = ({item}) => {
    return (
      <Container key={item.key}>
        <TouchableOpacity
          onPress={() => {
            viewSong(item);
          }}>
          <View>
            <Title>{item.name}</Title>
          </View>
          <Content>
            <View>
              <Image
                source={{
                  uri: `${item.image}`,
                }}
                alt={`${item.name} Image`}
                style={{width: 44, height: 44}}
              />
            </View>
            <Description>{item.description}</Description>
          </Content>
        </TouchableOpacity>
      </Container>
    );
  };
  return (
    <View>
      <FlatList data={songs} renderItem={renderSound} />
    </View>
  );
};

export default Playlist;
