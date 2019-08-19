import Home from './components/Home';
import ViewSong from './components/ViewSong';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  ViewSong: {screen: ViewSong},
});

const App = createAppContainer(MainNavigator);

export default App;
