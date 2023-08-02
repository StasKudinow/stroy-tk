import { Animated } from 'react-animated-css'

function Header({ showAnimate }) {

  return (
    <header className="header">
      <div className="header__container">
        <Animated
          animationIn="slideInDown"
          animationOut="slideOutUp"
          animationInDuration={300}
          animationOutDuration={300}
          isVisible={showAnimate}
        >
          <div className="header__content">
            <div className="header__left-block">
              <div className="header__burger-menu" />
              <p className="header__number">8 800 800 80 80</p>
            </div>
            <div className="header__right-block">
              <p className="header__call-text">Заказать звонок</p>
              <button className="header__call-button" type="button">
                <div className="header__call-button-circle">
                  <div className="header__call-button-image" />
                </div>
              </button>
            </div>
          </div>
        </Animated>
      </div>
    </header>
  )
}

export default Header
