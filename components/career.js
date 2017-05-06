import React from 'react';
import styled from 'styled-components/native';

import Course from './course';

const Career = styled.View`

`;

const Title = styled.Text`
  font-size: 24;
  font-weight: bold;
  border-bottom-color: black;
  border-bottom-width: 1;
  border-style: solid;
`;

export default props =>
  <Career>
    <Title>{props.title}</Title>
    {props.courses.map(course =>
      <Course {...course} key={course.name} id="1" />
    )}
  </Career>
