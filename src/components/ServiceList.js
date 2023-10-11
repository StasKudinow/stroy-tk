import { Link } from 'react-router-dom'

function ServiceList({ list }) {

  return (
    <main>
      {list.map((list) => {
        return (
          <div
            className="service-list"
            key={list.title}
          >
            <h1 className="service-list__title">
              {list.title}
            </h1>
            <div>
              <h2 className="service-list__price">
                от {list.price} &#8381;
              </h2>
              <ul className="service-list__container">
                {list.services.map((service) => {
                  return <li
                    className="service-list__item"
                    key={service.id}
                  >
                    {service.text}
                  </li>
                })}
              </ul>
              <Link to="/" className="service-list__button">
                вернуться на главную
                <div className="service-list__arrow" />
              </Link>
            </div>
          </div>
        )
      })}
    </main>
  )
}

export default ServiceList
