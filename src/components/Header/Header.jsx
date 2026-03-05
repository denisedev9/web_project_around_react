import imageHeaderLogo from '../../images/header__logo.svg'
function Header() {
    return ( <header className="header">
    <img className="header__logo" src={imageHeaderLogo} alt="logo" />
  </header> );
}

export default Header;