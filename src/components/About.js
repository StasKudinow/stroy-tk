import { aboutCards } from '../utils/constants'

import AboutCard from './AboutCard'

function About() {

  return (
    <section className="about">
      <div className="about__container">
        {aboutCards.map((card) => {
          return <AboutCard
            key={card.id}
            src={card.id}
            text={card.text}
          />
        })}
      </div>
    </section>
  )
}

export default About
