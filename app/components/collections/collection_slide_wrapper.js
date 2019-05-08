import css from './collection_slide_wrapper.scss';
import cx from 'classnames';

const CollectionSlideWrapper = ({ children }) => {
  return (
    <div className={ cx(css.collectionSlideWrapper, 'row') }>
      { children }
    </div>
  )
}

export default CollectionSlideWrapper;