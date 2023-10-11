import { useState } from 'react'
import { servicesCards } from '../utils/constants'

import ServicesCard from './ServicesCard'

function Services() {

  const [cards, setCards] = useState(servicesCards)
  const [isActiveCard, setIsActiveCard] = useState(null)

  function filterCards(id) {
    setCards(servicesCards.filter((el) => el.id === id))
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
      setCards(servicesCards)
    }
  }

  return (
    <section className="services">
      <div className={`services__container ${isActiveCard ? 'services__container_active' : ''}`}>
        {cards.map((card) => {
          return <ServicesCard
            key={card.id}
            card={card}
            src={card.id}
            path={card.path}
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

export default Services
