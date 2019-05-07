import css from './collection_slide_wrapper.scss';

const CollectionSlideWrapper = ({ children }) => {
  return (
    <div className={css.collectionSlideWrapper}>
      { children }
    </div>
  )
}

export default CollectionSlideWrapper;