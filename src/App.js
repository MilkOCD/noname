// import logo from './logo.svg';
import { useState, useEffect } from 'react';
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
  const [screenIndex, setScreenIndex] = useState(0);
  const [emojiSelected, setEmojiIndex] = useState(0);
  const [data, setData] = useState(sourceData[0]);

  const [wasSelected, addMoreSelected] = useState([]);
  const [isAudioPlaying, muteAudio] = useState(false);

  const [result, setResult] = useState(0);

  const selectEmoji = (index) => {
    toStep(1);
    setData(sourceData[index]);
    if (!isAudioPlaying) {
      document.getElementById("backgroundMusic").play();
      muteAudio(true);
    }

    if (wasSelected.length == 0 || !wasSelected.find(f => f == index)) {
      addMoreSelected([index, ...wasSelected])
    }
    
    if (index == 9) funny(wasSelected.length);
  }

  const funny = (count) => {
    setScreenIndex(1);

    switch (count) {
      case 1:
        
        return '';
      case 3:
        
        return '';
      case 5:
        
        return '';
    
      default:
        return '';
    }
  }

  return screenIndex != 7 ? <div className={cx('road-container')}>
    {
      step == 0 && (screenIndex == 0 || screenIndex == 1 ) &&
      <><div className={cx('div-note')}>
        <div>Kể nghe chút về cảm xúc của đi</div>
        <div>Hôm nay thế nào?</div>
      </div>
      <div className={cx('grid-emoji')}>
        <div className={cx('emoji-item-odd')} onClick={() => selectEmoji(1)}>
          <img alt='' src="images/emojis/1.png"/>
          <div className={cx('emoji-desc')}>mệt mỏi</div>
        </div>
        <div className={cx('emoji-item')} onClick={() => selectEmoji(2)}>
          <img alt='' src="images/emojis/2.png"/>
          <div className={cx('emoji-desc')}>ngạc nhiên</div>
        </div>
        <div className={cx('emoji-item-odd')} onClick={() => selectEmoji(3)}>
          <img alt='' src="images/emojis/3.png"/>
          <div className={cx('emoji-desc')}>vãi ~~</div>
        </div>
        <div className={cx('emoji-item')} onClick={() => selectEmoji(4)}>
          <img alt='' src="images/emojis/4.png"/>
          <div className={cx('emoji-desc')}>khó hiểu</div>
        </div>
        <div className={cx('emoji-item-odd')} onClick={() => selectEmoji(5)}>
          <img alt='' src="images/emojis/5.png"/>
          <div className={cx('emoji-desc')}>haha</div>
        </div>
        <div className={cx('emoji-item')} onClick={() => selectEmoji(6)}>
          <img alt='' src="images/emojis/6.png"/>
          <div className={cx('emoji-desc')}>chán</div>
        </div>
        <div className={cx('emoji-item-odd')} onClick={() => selectEmoji(7)}>
          <img alt='' src="images/emojis/7.png"/>
          <div className={cx('emoji-desc')}>nhạt</div>
        </div>
        <div className={cx('emoji-item')} onClick={() => selectEmoji(8)}>
          <img alt='' src="images/emojis/8.png"/>
          <div className={cx('emoji-desc')}>vui vl</div>
        </div>
        <div className={cx('emoji-item-odd', wasSelected.length < 5 ? 'disable' : '')} onClick={() => selectEmoji(9)}>
          <img alt='' src="images/emojis/9.png"/>
          <div className={cx('emoji-desc')}>?</div>
        </div>
      </div></>
    }
    {
      step != 0 && (screenIndex == 0 || screenIndex == 1 ) &&
      <div className={cx('div-note')}>
        { data.note }
      </div>
    }
    {
      screenIndex == 2 &&
      <>
        <div className={cx('div-note')}>
          Ban đầu a định dụ e bật volumn nghe nhạc rồi chèn tiếng vào đấy. Mà sáng mất mạng, làm xong gửi được cái này chắc cũng tối rồi, nên thôi :v
        </div>
        <img alt='' src={data.image} style={{ width: '100%' }}/>
      </>
    }
    {
      screenIndex == 3 &&
      <>
        <div className={cx('div-note')}>
          Có thể em thấy anh nhạt. Mà ...
        </div>
        <img alt='' src="images/sourceImage/tanghinh.jpg" style={{ width: '100%' }}/>
      </>
    }
    {
      screenIndex == 4 &&
      <>
        <div className={cx('div-note')}>
          Chuẩn rồi, không bào chữa gì cả :3
        </div>
        <img alt='' src="images/sourceImage/nhat.jpg" style={{ width: '100%' }}/>
      </>
    }
    {
      screenIndex == 5 &&
      <>
        <div className={cx('div-note')}>
          <div>Anh chỉ muốn hỏi là:</div>
          <div>Em nghĩ sao về việc làm người yêu anh?</div>
        </div>
        <img alt='' src="images/sourceImage/ohayday.jpg" style={{ width: '100%' }}/>
      </>
    }
    {
      screenIndex == 6 &&
      <>
        <div className={cx('div-note')}>
          <div>Dĩ nhiên là</div>
          <div>Anh cũng nghĩ kỹ trước khi hỏi rồi...</div>
        </div>
        <div className={cx('div-note')}>
          <div>Anh thích em đến khi có câu trả lời nhé</div>
          <div>Muốn hỏi gì cứ nói với anh :3</div>
        </div>
        <img alt='' src="images/sourceImage/vuikhiep.jpg" style={{ width: '100%' }}/>
      </>
    }
    {
      step != 0 && (screenIndex == 0 || screenIndex == 1 ) &&
      <img alt='' src={data.image} style={{ width: '100%' }}/>
    }
    {
      step != 0 ? screenIndex != 0 ?
        <div className={cx('group-btn')}>
          <div className={cx('btn-prev', 'btn')} onClick={() => {setScreenIndex(0); toStep(0)}}><div>Trở lại</div></div>
          <div className={cx('btn-next', 'btn')} onClick={() => {
            if (screenIndex == 0 || screenIndex == 1) {
              setScreenIndex(2);
            } else if (screenIndex == 2) {
              setScreenIndex(3);
            } else if (screenIndex == 3) {
              setScreenIndex(4);
            } else if (screenIndex == 4) {
              setScreenIndex(5);
            } else if (screenIndex == 5) {
              setScreenIndex(6);
            } else if (screenIndex == 6) {
              setScreenIndex(7);
            }
          }}><div>Tiếp tục</div></div>
        </div>
        :
        <div className={cx('btn-ok')} onClick={() => toStep(0)}><div>Trở lại</div></div>
      : <></>
    }
    <div style={{ marginTop: 10 }}>
      { `Đã mở: ${wasSelected.length}/9` }
    </div>
  </div> : <>
    <div className={cx('div-note')}>
      { result == 0 ? 'Cái này thì chỉnh mình em biết thôi ^^' : result == 2 ? 'Nếu thế thì cho anh biết với!' : '' }
    </div>
    {
      result == 0 && <img alt='' src="images/sourceImage/tanghinh.jpg" style={{ width: '100%' }}/>
    }
    {
      result == 1 && <img alt='' src="images/sourceImage/vuikhiep.jpg" style={{ width: '100%' }}/>
    }
    {
      result == 2 && <img alt='' src="images/sourceImage/bominh.jpg" style={{ width: '100%' }}/>
    }
    {
      (result != 1 && result != 2) &&
      <div className={cx('group-btn')} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div className={cx('btn-prev', 'btn')} onClick={() => {
          setResult(1);
        }}><div>Chịu</div></div>
        <div className={cx('btn-next', 'btn')} onClick={() => {
          setResult(2);
        }}><div>Đồng ý</div></div>
      </div>
    }
  </>
}

const sourceData = [
  {
    note: '',
    image: ''
  },
  {
    textId: 'mệt mỏi',
    note: 'Thời tiết dạo này dở người lắm, nên vẫn một bài nói lại ấy: Chịu khó ăn nhiều vô cho khỏe nhé!!!',
    image: 'images/sourceImage/tired.jpg',
  },
  {
    textId: 'ngạc nhiên',
    note: 'Ủa, kể anh nghe coi ngạc nhiên gì đi :3',
    image: 'images/sourceImage/khongbietbayra.jpg',
  },
  {
    textId: 'vãi ~~',
    note: 'Bruhhhh!!!',
    image: 'https://mcdn.coolmate.me/image/June2023/tom-and-jerry-meme-cuc-hai-huoc-de-thuong-1447_451_(1).jpeg',
  },
  {
    textId: 'khó hiểu',
    note: 'Chung quan điểm',
    image: 'images/sourceImage/khohieu.jpg',
  },
  {
    textId: 'haha',
    note: 'Em cười là vui rồi ^^',
    image: 'images/sourceImage/haha.jpg',
  },
  {
    textId: 'chán',
    note: 'Không biết em có bật loa không, nhưng nhạc đang chạy đấy!',
    image: 'images/sourceImage/matmoc.jpg',
  },
  {
    textId: 'nhạt',
    note: 'Gửi em lời xin lỗi chân thành nhất vì cái sự nhạt nhẽo này!',
    image: 'images/sourceImage/nhat.jpg',
  },
  {
    textId: 'vui vl',
    note: 'Vui khiếp!',
    image: 'images/sourceImage/vuikhiep.jpg',
  },
  {
    textId: '?',
    note: ':)))))))))))))',
    image: 'https://37.media.tumblr.com/1fde095337caa0585da0952b339a3bdc/tumblr_my7laru9FI1r0tytoo1_400.gif',
  },
]

export default App;
