function AboutCard({ src, text }) {

  return (
    <div
      className="about-card"
      style={{
        backgroundImage: `url(${require(`../images/about-image-${src}.png`)})`
      }}
    >
      <div className="about-card__text-wrapper">
        <p className="about-card__text">{text}</p>
      </div>
    </div>
  )
}

export default AboutCard
