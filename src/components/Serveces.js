import { useState } from 'react'
import { servecesCards } from '../utils/constants'

import ServecesCard from './ServecesCard'

function Serveces() {

  const [cards, setCards] = useState(servecesCards)
  const [isActiveCard, setIsActiveCard] = useState(null)

  function filterCards(id) {
    setCards(servecesCards.filter((el) => el.id === id))
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
      setCards(servecesCards)
    }
  }

  return (
    <section className="services">
      <div className={`services__container ${isActiveCard ? 'services__container_active' : ''}`}>
        {cards.map((card) => {
          return <ServecesCard
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

export default Serveces
