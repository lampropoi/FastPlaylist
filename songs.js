import React from 'react';
import {Image} from 'react-native';
import icon1 from './assets/icons/woman-on-her-knees-looking-up.png';
import icon2 from './assets/icons/woman-on-lotus-position-front-view.png';
import icon3 from './assets/icons/woman-stretching-arms-and-flexing-legs.png';
import icon4 from './assets/icons/woman-on-her-knees-looking-up.png';
import icon5 from './assets/icons/woman-standing-on-one-leg-lifting-left-leg.png';
import icon6 from './assets/icons/man-standing-on-one-leg.png';
import icon7 from './assets/icons/woman-stretching-arms-and-flexing-legs.png';

const songs = [
  {
    key: 'Pranayama',
    icon: <Image source={icon1} alt="Pranayama" />,
    name: 'Pranayama',
    description: 'Control your breathing',
    sound: 'illuminations.mp3',
  },

  {
    key: 'Mantra',
    icon: <Image source={icon2} alt="Mantra" />,
    name: 'Mantra',
    description: 'Repeating words and syllables',
    sound: 'illuminations.mp3',
  },
  {
    key: 'Vinyasa',
    icon: <Image source={icon3} alt="Vinyasa" />,
    name: 'Vinyasa',
    description: 'Make each pose at your own pace',
    sound: 'illuminations.mp3',
  },
  {
    key: 'Namaste',
    icon: <Image source={icon4} alt="Namaste" />,
    name: 'Namaste',
    description: 'My soul respects your soul',
    sound: 'illuminations.mp3',
  },
  {
    key: 'Bandha',
    icon: <Image source={icon5} alt="Bandha" />,
    name: 'Bandha',
    description: 'Tighten and lock your muscles',
    sound: 'illuminations.mp3',
  },
  {
    key: 'Om',
    icon: <Image source={icon6} alt="Om" />,
    name: 'Om',
    description: 'Calm down - Heavens',
    sound: 'illuminations.mp3',
  },
  {
    key: 'Asana',
    icon: <Image source={icon7} alt="Asana" />,
    name: 'Asana',
    description: 'Pose, pose, pose',
    sound: 'illuminations.mp3',
  },
];

export default songs;
