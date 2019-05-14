import { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import cx from 'classnames';
import css from './video_player.scss'

const VideoPlayer = (props) => {
  const [seekBarValue, setSeekBarValue] = useState(0);
  const {
    classes,
    poster,
    src,
    mp4Src,
    mp4SrcSmall,
    webmSrc,
    webmSrcSmall,
    reference,
    ...options
  } = props;

  const seekBar = useRef(null);

  const updateVideoPos = (e) => {
    // Calculate the video time
    const time = reference.current.duration * (e.target.value / 100);

    // update seekbar state
    setSeekBarValue(time);

    // Update the video time
    reference.current.currentTime = time;
  }

  const videoTimeUpdate = () => {
    // Calculate the seekbar value
    const time = (100 / reference.current.duration) * reference.current.currentTime;

    // update seekbar state
    setSeekBarValue(time);
  }

  const progressStyle = useSpring({ width: `${ seekBarValue }%`, from: { width: '0%' } })

  return (
    <div className={ cx(classes, css.videoWrapper) }>
      <video
        className={ css.video }
        src={ src }
        ref={ reference }
        {...options}
        onTimeUpdate={ videoTimeUpdate }
        >
        <source src={ mp4SrcSmall } type="video/mp4" media="all and (max-width: 480px)"/>
        <source src={ mp4Src } type='video/mp4'/>

        <source src={ webmSrcSmall } type="video/webm" media="all and (max-width: 480px)"/>
        <source src={ webmSrc }  type='video/webm'/>
      </video>
      
      <div className={ css.videoControls }>
        <div className={ css.seekBarWrapper }>
          <input className={ css.seekBar } ref={ seekBar } value={ seekBarValue } type='range' onChange={ updateVideoPos }/>
          <animated.div style={ progressStyle } className={ css.progressBar }/>
        </div>
      </div>
    </div>
  )
}

// VideoPlayer.defaultProps = {

// }

export default VideoPlayer;

        {/* <button type="button" id="play-pause">Play</button>
        <input ref={ seekBar } type='range'  value='0'>
        <button type="button" id="mute">Mute</button>
        <input type="range" id="volume-bar" min="0" max="1" step="0.1" value="1">
        <button type="button" id="full-screen">Full-Screen</button> */}