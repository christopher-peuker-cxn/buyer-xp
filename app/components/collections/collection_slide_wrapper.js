import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import CollectionSlide from './collection_slide';
import css from './collection_slide_wrapper.scss';
import cx from 'classnames';

const CollectionSlideWrapper = ({ slides }) => {
  const [selectedSlide, setSelectedSlide] = useState(null);

  // useEffect(() => {
    
  // }, [selectedSlide])

  // const fadeOut = useSpring({
  //   flex: videoFadeOut ? 1 : 0,
  //   onRest: () => {
  //     if (videoFadeOut) {
  //       setVideoInactive(true);
  //       setVideoSrc('');
  //     }
  //   }
  // })

  return (
    <div className={ cx(css.collectionSlideWrapper, 'row') }>
      { slides.map((collection, i) => <CollectionSlide key={ i } classes='column no-padding-sides' onClick={() => setSelectedSlide(i) } {...collection}/>) }
    </div>
  )
}

export default CollectionSlideWrapper;