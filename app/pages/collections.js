import axios from 'axios';
import Page from '../layouts/page';
import { Link } from '../server/routes';
import API_URL from '../utils/basepath';

import css from './collections.scss';

const Collections = ( props ) => {
  return (
    <Page title={ props.title }>
      <h1>CXN { props.title }</h1>
      { props.collections.map((collection, i) => <Link route='collection' params={{id: collection.id}} key={ i }><a>{ collection.name }</a></Link>) }
    </Page>
  )
}

Collections.getInitialProps = async (req) => {
  const response = await axios(`${API_URL}${req.pathname}`);
  return { ...response.data }
} 

Collections.defaultProps = {
  collections: []
}

export default Collections;