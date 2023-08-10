import { useState } from 'react'
import { aboutCards } from '../utils/constants'

import AboutCard from './AboutCard'

function About() {

  const [cards, setCards] = useState(aboutCards)
  const [isActiveCard, setIsActiveCard] = useState(null)

  function filterCards(id) {
    setCards(aboutCards.filter((el) => el.id === id))
  }

  function handleCardClick(el, id) {
    if (!isActiveCard) {
      setIsActiveCard(el)
      filterCards(id)
    }
  }

  function handleCloseCard() {
    if (isActiveCard) {
      setIsActiveCard(null)
      setCards(aboutCards)
    }
  }

  return (
    <section className="about">
      <div className={`about__container ${isActiveCard ? 'about__container_active' : ''}`}>
        {cards.map((card) => {
          return <AboutCard
            key={card.id}
            card={card}
            src={card.id}
            title={card.title}
            text={card.text}
            onClickCard={() => handleCardClick(card, card.id)}
            onClose={handleCloseCard}
            isActiveCard={isActiveCard}
          />
        })}
      </div>
    </section>
  )
}

export default About
