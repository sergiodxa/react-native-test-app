import React from 'react';
import styled from 'styled-components/native';

const Course = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 12;
  border-bottom-color: black;
  border-bottom-width: 1;
  border-style: solid;
`;

const Badge = styled.Image`
  height: 36;
  margin-right: 8;
  width: 36;
`;

const Name = styled.Text`
  flex: 1;
  font-size: 16;
`;

export default props =>
  <Course>
    <Badge source={{ uri: props.badge }} />
    <Name>{props.name}</Name>
  </Course>
