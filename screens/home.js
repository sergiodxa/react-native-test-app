import React from 'react';
import { View, Image } from 'react-native';

import Career from '../components/career';

const courses = [
  { badge: 'https://static.platzi.com/media/achievements/comunidad.png', name: 'Comunidad Platzi' },
  { badge: 'https://static.platzi.com/media/achievements/programacion-basica2x.png', name: 'Curso Gratis de Programación Básica' },
  { badge: 'https://static.platzi.com/media/achievements/badge-fundamentos_1.png', name: 'Fundamentos de Ingeniería de Software' },
  { badge: 'https://static.platzi.com/media/achievements/03-1.png', name: 'Curso de Programación para Padres y Niños' },
];

const careers = [
  { title: 'Fundamentos Básicos', courses },
]

const HomeScreen = props =>
  <View>
    {careers.map(career =>
      <Career {...career} key={career.title} />
    )}
  </View>

HomeScreen.navigationOptions = {
  title: 'Platzi',
  headerTitle: (
    <Image
      source={require('../assets/logo.png')}
      style={{
        height: 36,
        width: 114.99,
      }}
    />
  ),
  headerStyle: {
    backgroundColor: '#1e5372',
  },
};

export default HomeScreen;
