import 'isomorphic-fetch';
import Page from '../layouts/page';

import css from './rack.scss';

const Rack = ( props ) => {
  return (
    <Page title='Rack'>
      <h1>Rack</h1>
    </Page>
  )
}

Rack.getInitialProps = async (res) => {
  return {};
}

Rack.defaultProps = {
}

export default Rack;