// import { useSpring } from 'react-spring';
// import { animated } from 'react-spring/renderprops-universal';
import css from './collection_slide.scss';
import cx from 'classnames';

const CollectionSlide = ({ url, name, classes }) => {
  return (
    <div className={cx(css.collectionSlide, classes)}>
      <img src={ url }/>
      <span>{ name }</span>
    </div>
  )
}

// CollectionSlide.propTypes = {
//   url:    PropTypes.string,
//   name:   PropTypes.string
// }

CollectionSlide.deaultProps = {
  url:    '',
  name:   ''
}

export default CollectionSlide;