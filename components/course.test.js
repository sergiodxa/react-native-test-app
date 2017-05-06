import React from 'react';
import Course from './course';

import renderer from 'react-test-renderer';

describe('Course item', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <Course
        badge="https://static.platzi.com/media/achievements/programacion-basica2x.png"
        name="Programación básica"
      />
    ).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('renders the expected UI', () => {
    const rendered = renderer.create(
      <Course
        badge="https://static.platzi.com/media/achievements/programacion-basica2x.png"
        name="Programación básica"
      />
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
