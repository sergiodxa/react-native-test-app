import React from 'react';
import Career from './career';

import renderer from 'react-test-renderer';

const courses = [
  { badge: 'https://static.platzi.com/media/achievements/comunidad.png', name: 'Comunidad Platzi' },
  { badge: 'https://static.platzi.com/media/achievements/programacion-basica2x.png', name: 'Curso Gratis de Programación Básica' },
  { badge: 'https://static.platzi.com/media/achievements/badge-fundamentos_1.png', name: 'Fundamentos de Ingeniería de Software' },
  { badge: 'https://static.platzi.com/media/achievements/03-1.png', name: 'Curso de Programación para Padres y Niños' },
];

const career = { title: 'Fundamentos Básicos', courses };

describe('Career item', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Career {...career} />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('renders the expected UI', () => {
    const rendered = renderer.create(<Career {...career} />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
