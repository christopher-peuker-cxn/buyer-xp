import cx from 'classnames';
import css from './hamburger_menu.scss'

const HamburgerMenu = ({ lightMode, activeMenu, callback }) => (
  <div className={ css.hamburgerMenu } onClick={ () => callback(!activeMenu) }>
    <span className={ cx(css.hamburgerIcon, {[css.lightMode]: lightMode, [css.active]: activeMenu}) }/>
  </div>
)

export default HamburgerMenu;