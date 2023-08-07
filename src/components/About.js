import { useState } from 'react'
import { aboutCards } from '../utils/constants'

import AboutCard from './AboutCard'

function About() {

  const [activeCard, setActiveCard] = useState(null)

  function handleCardClick(el) {
    if (!activeCard) {
      setActiveCard(el)
    } else {
      setActiveCard(null)
    }
  }

  return (
    <section className="about">
      <div className="about__container">
        {aboutCards.map((card) => {
          return <AboutCard
            key={card.id}
            src={card.id}
            title={card.title}
            text={card.text}
            onClickCard={() => handleCardClick(card)}
            activeCard={activeCard}
            cardClassName={`about-card ${activeCard === card ? 'about-card_active' : ''}`}
            cardWrapperClassName={`about-card__wrapper ${activeCard === card ? 'about-card__wrapper_active' : ''}`}
            cardTitleClassName={`about-card__title ${activeCard === card ? 'about-card__title_active' : ''}`}
            cardTextClassName={`about-card__text ${activeCard === card ? 'about-card__text_active' : ''}`}
            cardButtonClassName={`about-card__button ${activeCard === card ? 'about-card__button_active' : ''}`}
          />
        })}
      </div>
    </section>
  )
}

export default About
