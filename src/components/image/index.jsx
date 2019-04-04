// ** image component
// this component displays the images from the props in state


import React, { Component } from 'react';
import './image.css';


const Image = props =>
  <img src={props.source} alt={props.text} />

export default Image;
