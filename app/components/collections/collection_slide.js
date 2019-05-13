import { Link } from '../../services/routes';
import css from './collection_slide.scss';
import cx from 'classnames';

const CollectionSlide = ({ primaryImageUrl, designer, collectionName, season, id, themeBlack, classes }) => {
  return (
    <div className={ cx(css.collectionSlide, classes) }>
      <Link route='collection' params={{id: id}}>
        <a style={{ height: '100%' }}>
          <div className={ css.collectionImage } style={{ backgroundImage: `url(${primaryImageUrl})` }}/>
          <div className={ css.designerNameWrapper }>
            <h4 className={ cx(css.designerName, { [css.themeBlack]: themeBlack }) }>{ `${designer} ${season}` }</h4>
          </div>
          <div className={ css.collectionNameWrapper }>
            <h2 className={ cx(css.collectionName, { [css.themeBlack]: themeBlack }) }>{ collectionName } <br/> { `— ${season}` }</h2>
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
  primaryImageUrl:    '',
  name:   ''
}

export default CollectionSlide;