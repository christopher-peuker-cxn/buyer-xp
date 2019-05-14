import { useState } from 'react';
// import { useSpring, animated } from 'react-spring';
import CollectionSlide from './collection_slide';
import css from './collection_slide_wrapper.scss';
import cx from 'classnames';

const CollectionSlideWrapper = ({ slides }) => {
  // const [selectedSlide, setSelectedSlide] = useState(null);


  return (
    <div className={ cx(css.collectionSlideWrapper, 'row') } style={{ width: `${slides.length * (100 / 3)}vw` }}>
      { slides.map((collection, i) => <CollectionSlide key={ i }  classes='column no-padding-sides' {...collection}/>) }
    </div>
  )
}

export default CollectionSlideWrapper;