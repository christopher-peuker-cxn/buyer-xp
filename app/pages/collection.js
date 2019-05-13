import axios from 'axios';
import Page from '../layouts/page';
import Error from 'next/error';
// import { Link } from '../services/routes';
import cx from 'classnames';
import API_URL from '../utils/basepath';

import css from './collection.scss';
import collectionSlideCss from '../components/collections/collection_slide.scss';

const Collection = ({ collection }) => {
  const { collectionName, designer, id, link, season, themeBlack, primaryImageUrl, errorCode } = collection;
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }
  return (
    <Page title={ `${collectionName} — ${season}` }>
      <div className={ css.background } style={{ backgroundImage: `url(${primaryImageUrl})` }}/>
      <div className={ css.collectionNameWrapper }>
        <h1 className={ cx(css.collectionName, { [collectionSlideCss.themeBlack]: themeBlack }) }>{ collectionName } <br/> { `— ${season}` }</h1>
      </div>
    </Page>
  )
}

Collection.getInitialProps = async (res) => {
  const response = await axios(`${API_URL}/collections/${res.query.id}`);
  return { ...response.data }
}

Collection.defaultProps = {
  collection: {
    name: '',
    id: null
  }
}

export default Collection;


{/* <h1>CXN { title }</h1>
      <span>{ collection.name }</span>
      <div><Link route='collection_products' params={{id: collection.id}}><a>{ `${collection.name} Products` }</a></Link></div>
      <div><Link route='collection_looks' params={{id: collection.id}}><a>{ `${collection.name} Looks` }</a></Link></div> */}