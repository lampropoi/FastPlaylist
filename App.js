import React from 'react';
import {View} from 'react-native';
import Playlist from './components/Playlist';
import songs from './songs';

export default (App = () => {
  return (
    <View>
      <Playlist songs={songs} />
    </View>
  );
});
