import React, { useState } from 'react';
import './passwordGenerator.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import passwordGif from '../../assets/gifs/password.gif';
import refreshIcon from '../../assets/icons/refresh.svg';
import copyIcon from '../../assets/icons/copy.svg';

export const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(10);
  const onChangePasswordLength = (value) => {
    setPasswordLength(value);
  };

  return (
    <div className='password-wrapper'>
      <div className='gif'>
        <img src={passwordGif} alt='Password Gif' />
      </div>
      <div className='tac'>
        <h2 className='title'>PASSWORD GENERATOR</h2>
        <p className='subtitle'>
          Ensure online account safety by creating strong and secure passwords
        </p>
      </div>
      <div className='password-input-wrapper'>
        <div className='password-field'>
          <input type='text' placeholder='your password' value='ABCDEFGHIJ' />
          <img src={refreshIcon} alt='refresh the password' />
        </div>
        <button className='copy-btn'>
          <img src={copyIcon} alt='copy password' />
          Copy
        </button>
      </div>
      <span className='fw-500'>Weak</span>
      <div className='slider'>
        <div>
          <label id='slider-label'>Password Length: </label>
          <span>{passwordLength}</span>
        </div>
        <Slider
          max={30}
          min={5}
          value={passwordLength}
          onChange={onChangePasswordLength}
          className='slider-style'
        />
      </div>
    </div>
  );
};
