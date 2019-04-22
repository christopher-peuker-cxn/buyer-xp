import { Link } from '../../server/routes';
import { withRouter } from 'next/router'

import css from './nav.scss';

const Nav = ({ router }) => {
  return (
    <nav className={css.navWrapper}>
      <ul>
        <li className={css.navLi}><Link route='/collections'><a className={router.pathname == '/collections'? 'active' : ''}>Collections</a></Link></li>
        <li className={css.navLi}><Link route='/account'><a>Account</a></Link></li>
        <li className={css.navLi}><Link route='/rack'><a>Rack</a></Link></li>
      </ul>
    </nav>
  )
}

export default withRouter(Nav);