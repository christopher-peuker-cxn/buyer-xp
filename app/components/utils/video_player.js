import { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import cx from 'classnames';
import css from './video_player.scss';
import CuePoint from './cue_point.js';

const VideoPlayer = ({
  classes, poster, cuePoints, desktopSrc, mobileSrc, reference, ...other,
}) => {
  const [seekBarValue, setSeekBarValue] = useState(0);
  const [hover, setHover] = useState(false);

  const seekBar = useRef();

  // const calcVideoPos = e => {
  //   // Calculate the video time
  //   const time = reference.current.duration * (e.target.value / 100);
  //   updateVideoPos(time);
  // }

  const updateVideoPos = (e, newTime) => {
    let percentage = e ? e.target.value : newTime;
    // Calculate the video time
    const time = reference.current.duration * (percentage / 100);

    // update seekbar state
    setSeekBarValue(percentage);

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
        src={ desktopSrc }
        ref={ reference }
        {...other}
        onTimeUpdate={ videoTimeUpdate }
        >
        <source src={ mobileSrc } type="video/mp4" media="all and (max-width: 480px)"/>
        <source src={ desktopSrc } type='video/mp4'/>
      </video>
      
      <div className={ css.videoControls }>
        <div className={ css.seekBarWrapper }>
          <input className={ css.seekBar } ref={ seekBar } value={ seekBarValue } type='range' step='1' onChange={ updateVideoPos } onInput={ updateVideoPos } onMouseEnter={() => setHover(true) } onMouseLeave={() => setHover(false) }/>
          <animated.div style={ progressStyle } className={ css.progressBar }/>
          { cuePoints.map(cuePoint => <CuePoint key={ cuePoint.id } { ...cuePoint } progressPercent={ seekBarValue } hover={ hover } updateVideoPos={ updateVideoPos }/>) }
        </div>
      </div>
    </div>
  )
}

// VideoPlayer.defaultProps = {

// }

export default VideoPlayer;