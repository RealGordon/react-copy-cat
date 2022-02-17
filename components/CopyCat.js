import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.js'
const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export default class CopyCat extends React.Component {
    
  
  render() {
    const {name,copying,toggleTape,input,onChange} = this.props;
    const {divStyles,imgStyles}=styles;
    return (
      <div style={divStyles}>
        <h1 style={{marginBottom: 80}}>Copy Cat{' '}{name || 'Tom'}</h1>
          <label htmlFor='toggle'>Toggle Copy Cat </label>
        <input 
        id='toggle'
        type="checkbox" 
        onChange={toggleTape}
        />
        <img 
        style={imgStyles}
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
        />
      
        <input 
        onChange={onChange}
        value={input}  />
        <p style={{color:'red'}}>{copying && input}</p>
      </div>
    );
  };
}

