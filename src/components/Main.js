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
  onOrderSubmit,
  onLoading
}) {

  const isMobile = useMediaQuery({ query: '(min-width: 600px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' })
  const isLaptop = useMediaQuery({ query: '(min-width: 1024px)' })

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
          isLaptop={isLaptop}
        />
      </Element>

      <Element name="professionals">
        <Professionals
          onOrderSubmit={onOrderSubmit}
          onLoading={onLoading}
          isTablet={isTablet}
          isLaptop={isLaptop}
        />
      </Element>

      <Element name="serveces">
        <Serveces />
      </Element>

      <Element name="how-we-work">
        <HowWeWork
          onOrderSubmit={onOrderSubmit}
          onLoading={onLoading}
        />
      </Element>

      <Element name="partners">
        <Partners />
      </Element>

      <Element name="footer">
        <Footer
          onOrderSubmit={onOrderSubmit}
          onLoading={onLoading}
          isLaptop={isLaptop}
        />
      </Element>
    </main>
  )
}

export default Main
