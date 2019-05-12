import axios from 'axios';
import Page from '../layouts/page';
import Error from 'next/error';
import { Link } from '../services/routes';
import API_URL from '../utils/basepath';

import css from './collection.scss';

const Collection = ( props ) => {
  const { collection, title, errorCode } = props;
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }
  return (
    <Page title={ title }>
      <h1>CXN { title }</h1>
      <span>{ collection.name }</span>
      <div><Link route='collection_products' params={{id: collection.id}}><a>{ `${collection.name} Products` }</a></Link></div>
      <div><Link route='collection_looks' params={{id: collection.id}}><a>{ `${collection.name} Looks` }</a></Link></div>
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