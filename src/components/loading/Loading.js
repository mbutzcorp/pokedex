import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled('div')`
  display: inline-block;
  width: ${(props) => `${props.width}${props.sizeUnit}`};
  height: ${(props) => `${props.height}${props.sizeUnit}`};
  :after {
    content: ' ';
    display: block;
    width: ${(props) => `${props.size}${props.sizeUnit}`};
    height: ${(props) => `${props.size}${props.sizeUnit}`};
    margin: 1px;
    border-radius: 50%;
    border: 5px solid ${(props) => props.color};
    border-color: ${(props) => props.color} transparent
      ${(props) => props.color} transparent;
    animation: ${animation} 1.2s linear infinite;
  }
`;

const Loading = ({ color, size, sizeUnit, width, height }) => (
  <LoadingContainer
    color={color}
    size={size}
    sizeUnit={sizeUnit}
    width={width}
    height={height}
  />
);

Loading.defaultProps = {
  width: 40,
  height: 40,
  size: 40,
  color: 'black',
  sizeUnit: 'px',
};

export default Loading;
