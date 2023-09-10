import { Element } from 'react-scroll'

import Logo from './Logo'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import Header from './Header'
import Promo from './Promo'
import Professionals from './Professionals'
import Serveces from './Serveces'
import HowWeWork from './HowWeWork'
import Partners from './Partners'
import Footer from './Footer'

function Main({
  showAnimate,
  onOpenPopup,
  onClosePopup,
  onOrderSubmit
}) {

  return (
    <main>
      <Logo
        onClosePopup={onClosePopup}
      />

      <div className="fixed-panels">
        <LeftPanel
          showAnimate={showAnimate}
        />
        <RightPanel />
      </div>

      <Header
        showAnimate={showAnimate}
        onOpenPopup={onOpenPopup}
      />

      <Element name="promo">
        <Promo
          onOpenPopup={onOpenPopup}
        />
      </Element>

      <Element name="professionals">
        <Professionals
          onOrderSubmit={onOrderSubmit}
        />
      </Element>

      <Element name="serveces">
        <Serveces />
      </Element>

      <Element name="how-we-work">
        <HowWeWork
          onOrderSubmit={onOrderSubmit}
        />
      </Element>

      <Element name="partners">
        <Partners />
      </Element>

      <Element name="footer">
        <Footer
          onOrderSubmit={onOrderSubmit}
        />
      </Element>
    </main>
  )
}

export default Main
