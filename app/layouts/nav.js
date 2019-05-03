import { useState } from 'react';
import { useSpring, useSprings, animated } from 'react-spring';
import { Link } from '../server/routes';
import { withRouter } from 'next/router';
import cx from 'classnames';

import css from './nav.scss';

const navLinks = [
  {
    route: '/about',
    name: 'WHO WE ARE'
  },
  {
    route: '/collections',
    name: 'THE COLLECTIONS'
  },
  {
    route: '/account',
    name: 'MY DASHBOARD'
  }
]

const Nav = ({ router }) => {
  const [rackCount, setRackCount] = useState(0);
  const [lightMode, setLightMode] = useState(0);

  const setActiveClass = (link) => {
    return router.pathname === link;
  }
  const navLinksAnimated = useSprings(navLinks.length, navLinks.map(() => (
    {
      color: lightMode ? '#000000' : '#FFFFFF',
      config: { tension: 1000 }
    }
    )));
  const lightModeBg = useSpring({ backgroundColor: lightMode ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)' });
  const lightModeRack = useSpring({ color: lightMode ? '#000000' : '#FFFFFF' });
  const lightModeRackBg = useSpring({ backgroundColor: lightMode ? '#dadada' : '#FFFFFF' });

  return (
    <animated.nav className={ css.navWrapper } style={ lightModeBg } onMouseEnter={() => setLightMode(true)} onMouseLeave={() => setLightMode(false)}>
      <Link route='/'><a className={ cx(css.sides, css.logoWrapper) }><img className={ css.logo } src='/static/logo.png' alt='cxn logo'/></a></Link>
      <ul>
        { navLinksAnimated.map((props, i) => <li key={ i }><Link route={ navLinks[i].route }><animated.a style={ props } className={ cx({['active']: setActiveClass(navLinks[i].route)}) }>{ navLinks[i].name }</animated.a></Link></li>) }
      </ul>
      <div className={ css.sides }>
        <Link route='/rack'>
          <animated.a style={ lightModeRack } className={ cx(css.rack, {['active']: setActiveClass('/rack')}) }>
            MY RACK
          <animated.span style={ lightModeRackBg } className={ css.rackCount }>
            { rackCount }
          </animated.span>
        </animated.a></Link>
      </div>
    </animated.nav>
  )
}

export default withRouter(Nav);