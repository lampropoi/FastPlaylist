import React, {useEffect, useState} from 'react';
import Playlist from './Playlist';
import {View} from 'react-native';

const Home = ({navigation}) => {
  const [songs, setSongs] = useState(null);
  useEffect(() => {
    // load data
    const queryData = async () => {
      const spreadsheetId = '1idhqDqTuHCdesw0A9op4l322OOtGW7dhgIDy03MWae0';
      const response = await fetch(
        `https://api.graphqlsheet.com/api/${spreadsheetId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            token: '9f5589dbce602ded17a9fff4e3ce3d54999376cc',
          },
          body: JSON.stringify({
            query: `
            {
              get {
                key
                image
                name
                description
                sound
              }
            }
          `,
          }),
        },
      );
      const responseJSON = await response.json();
      const songs = responseJSON.data.get;
      setSongs(songs);
    };

    queryData();
  }, []);
  return <View>{<Playlist songs={songs} navigation={navigation} />}</View>;
};

Home.navigationOptions = {
  title: 'Calm',
};

export default Home;
