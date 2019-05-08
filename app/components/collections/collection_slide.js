// import { useSpring } from 'react-spring';
// import { animated } from 'react-spring/renderprops-universal';
import { Link } from '../../server/routes';
import css from './collection_slide.scss';
import cx from 'classnames';

const CollectionSlide = ({ url, name, id, classes }) => {
  return (
    <div className={ cx(css.collectionSlide, classes) }>
      <Link route='collection' params={{id: id}}>
        <a style={{ height: '100%' }}>
          <div className={ css.collectionImage } style={{ backgroundImage: `url(${url})` }}/>
          <div className={ css.collectionNameWrapper }>
            <h4 className={ css.collectionName }>{ name }</h4>
          </div>
        </a>
      </Link>
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