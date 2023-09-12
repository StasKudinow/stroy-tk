import { Element } from 'react-scroll'
import { useMediaQuery } from 'react-responsive'

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

  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' })
  const isLaptop = useMediaQuery({ query: '(min-width: 1024px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' })
  const isMobile = useMediaQuery({ query: '(min-width: 600px)' })

  return (
    <main>
      {isTablet &&
        <Logo
          onClosePopup={onClosePopup}
        />
      }

      {isLaptop &&
        <div className="fixed-panels">
          <LeftPanel
            showAnimate={showAnimate}
          />
          <RightPanel />
        </div>
      }

      <Header
        showAnimate={showAnimate}
        onOpenPopup={onOpenPopup}
        isTablet={isTablet}
        isMobile={isMobile}
      />

      <Element name="promo">
        <Promo
          onOpenPopup={onOpenPopup}
        />
      </Element>

      <Element name="professionals">
        <Professionals
          onOrderSubmit={onOrderSubmit}
          isTablet={isTablet}
        />
      </Element>

      <Element name="serveces">
        <Serveces
          isDesktop={isDesktop}
        />
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
          isLaptop={isLaptop}
        />
      </Element>
    </main>
  )
}

export default Main
