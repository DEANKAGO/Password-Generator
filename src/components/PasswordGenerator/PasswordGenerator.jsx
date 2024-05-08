import React, { useState } from 'react';
import './passwordGenerator.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Checkbox from '../Checkbox/Checkbox';

import passwordGif from '../../assets/gifs/password.gif';
import refreshIcon from '../../assets/icons/refresh.svg';
import copyIcon from '../../assets/icons/copy.svg';

export const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [useSymbols, setUseSymbols] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [useUpperCase, setUseUpperCase] = useState(true);
  const [passwordLength, setPasswordLength] = useState(10);
  const onChangePasswordLength = (value) => {
    setPasswordLength(value);
  };

  const getPassword = () => {
    let charset = '';
    let newPassword = '';

    if (useUpperCase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLowerCase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) charset += '0123456789';
    if (useSymbols) charset += '!@#$%^&*()';

    for (let i = 0; i < charset.length; i++) {
      newPassword = charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  };

  return (
    <div className='container'>
      <div className='password-wrapper'>
        <div className='gif'>
          <img src={passwordGif} alt='Password Gif' />
        </div>
        <div className='tac'>
          <h2 className='title'>PASSWORD GENERATOR</h2>
          <p className='subtitle'>
            Generate strong and random passwords to keep your accounts safe
            online!
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
        <span className='fw-500 health'>Weak</span>
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
        <div className='elements'>
          <Checkbox
            id='uppercase'
            label='Uppercase'
            checked={true}
            name='upper'
          />
          <Checkbox
            id='lowercase'
            label='Lowercase'
            checked={false}
            name='lower'
          />
          <Checkbox
            id='numbers'
            label='Numbers'
            checked={false}
            name='numbers'
          />
          <Checkbox
            id='special chars'
            label='Special Characters'
            checked={true}
            name='specialChars'
          />
        </div>
      </div>
    </div>
  );
};
