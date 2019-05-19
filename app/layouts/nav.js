import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from '../services/routes';
import { withRouter } from 'next/router';
import cx from 'classnames';
import HamburgerMenu from '../components/utils/hamburger_menu.js';

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
  const [lightMode, setLightMode] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  const lightModeBg = useSpring({ backgroundColor: lightMode ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)' });
  const lightModeRack = useSpring({ color: lightMode ? '#000000' : '#FFFFFF', config: { tension: 1000 } });
  const lightModeRackBg = useSpring({ backgroundColor: lightMode ? '#dadada' : '#FFFFFF', config: { tension: 1000 } });
  const showNavLinks = useSpring({ transform: activeMenu ? 'translateX(0px)' : 'translateX(-58px)', opacity: activeMenu ? 1 : 0 });
  const linkWrapper = useSpring({ transform: activeMenu ? 'translateX(58px)' : 'translateX(0px)', opacity: activeMenu ? 0 : 1 });

  const logoWhite = useSpring({ opacity: lightMode ? 0 : 1 });
  const logoBlack = useSpring({ opacity: lightMode ? 1 : 0 });

  const setActiveClass = link => router.pathname === link;

  const toggleActiveNav = (value) => {
    setLightMode(value);
    if (!value) {
      setActiveMenu(false);
    }
  }

  return (
    <animated.nav className={ css.navWrapper } style={ lightModeBg } onMouseEnter={() => toggleActiveNav(true)} onMouseLeave={() => toggleActiveNav(false)}>
      <div className={ css.sides }>
        <HamburgerMenu lightMode={ lightMode } activeMenu={ activeMenu } callback={ setActiveMenu  }/>
      </div>
      <div className={ cx(css.sides, css.logoWrapper) }>
        {/* <Link route='/'><a><animated.img style={ hideMainLogo } className={ css.logo } src='/static/logo.png' alt='cxn logo'/></a></Link> */}
        <animated.div className={ css.linkWrapper } style={ linkWrapper }>
          <Link route='/'><animated.a style={{ color: 'black', ...logoBlack }}><img className={ css.logo } src='' />CXN logo Black</animated.a></Link>
          <Link route='/'><animated.a style={{ position: 'absolute', color: 'white', ...logoWhite }}><img className={ css.logo } src='' />CXN logo White</animated.a></Link>
        </animated.div>
        <animated.ul className={ css.navLinkWrapper } style={ showNavLinks }>
          { navLinks.map((navLink) => <li key={ navLink.name }><Link route={ navLink.route }><a className={ cx({['active']: setActiveClass(navLink.route)}) }>{ navLink.name }</a></Link></li>) }
        </animated.ul>
      </div>
      <div className={ css.hamburgerMenu }/>
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