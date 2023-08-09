import { useState } from 'react'
import { aboutCards } from '../utils/constants'

import AboutCard from './AboutCard'

function About() {

  const [isActiveCard, setIsActiveCard] = useState(null)

  function handleCardClick(el) {
    if (!isActiveCard) {
      setIsActiveCard(el)
    } else {
      setIsActiveCard(null)
    }
  }

  return (
    <section className="about">
      <div className="about__container">
        {aboutCards.map((card) => {
          return <AboutCard
            key={card.id}
            card={card}
            src={card.id}
            title={card.title}
            text={card.text}
            onClickCard={() => handleCardClick(card)}
            isActiveCard={isActiveCard}
            cardClassName={`about-card ${isActiveCard === card ? 'about-card_active' : ''}`}
            cardWrapperClassName={`about-card__overlay ${isActiveCard === card ? 'about-card__overlay' : ''}`}
            // cardTitleClassName={`about-card__title ${isActiveCard === card ? 'about-card__title_active' : ''}`}
            // cardTextContainerClassName={`about-card__text-container ${isActiveCard === card ? 'about-card__text-container_active' : ''}`}
          />
        })}
      </div>
    </section>
  )
}

export default About
