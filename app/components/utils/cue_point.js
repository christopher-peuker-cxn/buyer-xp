import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import cx from 'classnames';
import css from './cue_point.scss'

const CuePoint = ({ name, copy, id, time, thumbnail, progressPercent, hover, updateVideoPos }) => {
  const [active, setActive] = useState(false);


  useEffect(() => {
  if (time < progressPercent && !active) {
    setActive(true);
  } else if (time > progressPercent && active) {
    setActive(false);
  }
  }, [progressPercent])

  return (
    <div className={ cx(css.cuePointWrapper, {[css.active]: active, [css.hover]: hover}) } style={{ left: `${time}%`}}>
      <div className={ css.imageThumbnail } style={{ backgroundImage: `url(${thumbnail})` }} onClick={() => updateVideoPos(null, time) }/>
      <div className={ css.textWrapper }>
        <span className={ css.title }>{ name }</span>
        <span className={ css.copy }>{ copy }</span>
      </div>
    </div>
  )
}

export default CuePoint;