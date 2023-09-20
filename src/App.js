// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import classnames from 'classnames/bind';
import styles from './App.module.scss';

const cx = classnames.bind(styles);

function App() {
  return (
    <div className="App">
      <Road />
    </div>
  );
}

const Road = () => {
  const [step, toStep] = useState(0);
  const [score, newScore] = useState(0);

  return <div className={cx('road-container')}>
    <div className={cx('div-note')}></div>
    <div className={cx('grid-emoji')}>
      <div className={cx('emoji-item-odd')}>
        <img alt='' src="/images/emojis/1.png"/>
        <div className={cx('emoji-desc')}>name</div>
      </div>
      <div className={cx('emoji-item')}>
        <img alt='' src="/images/emojis/2.png"/>
        <div className={cx('emoji-desc')}>name</div>
      </div>
      <div className={cx('emoji-item-odd')}>
        <img alt='' src="/images/emojis/3.png"/>
        <div className={cx('emoji-desc')}>name</div>
      </div>
      <div className={cx('emoji-item')}>
        <img alt='' src="/images/emojis/4.png"/>
        <div className={cx('emoji-desc')}>name</div>
      </div>
      <div className={cx('emoji-item-odd')}>
        <img alt='' src="/images/emojis/5.png"/>
        <div className={cx('emoji-desc')}>name</div>
      </div>
      <div className={cx('emoji-item')}>
        <img alt='' src="/images/emojis/6.png"/>
        <div className={cx('emoji-desc')}>name</div>
      </div>
      <div className={cx('emoji-item-odd')}>
        <img alt='' src="/images/emojis/7.png"/>
        <div className={cx('emoji-desc')}>name</div>
      </div>
      <div className={cx('emoji-item')}>
        <img alt='' src="/images/emojis/8.png"/>
        <div className={cx('emoji-desc')}>name</div>
      </div>
      <div className={cx('emoji-item-odd')}>
        <img alt='' src="/images/emojis/9.png"/>
        <div className={cx('emoji-desc')}>name</div>
      </div>
    </div>
  </div>
}

export default App;
