import 'isomorphic-fetch';
import Page from '../layouts/page';

import css from './account.scss';

const Account = ( props ) => {
  return (
    <Page title='Account'>
      <h1>Account</h1>
    </Page>
  )
}

Account.getInitialProps = async (res) => {
  return {};
}

Account.defaultProps = {
}

export default Account;