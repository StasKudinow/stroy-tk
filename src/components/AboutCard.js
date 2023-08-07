function AboutCard({
  src,
  title,
  text,
  onClickCard,
  activeCard,
  cardClassName,
  cardWrapperClassName,
  cardTitleClassName,
  cardTextClassName,
  cardButtonClassName
}) {

  console.log(activeCard)

  return (
    <div
      className={cardClassName}
      style={{
        backgroundImage: `url(${require(`../images/about-image-${src}.png`)})`
      }}
    >
      <div className={cardWrapperClassName}>
        <h2 className={cardTitleClassName} onClick={onClickCard}>{title}</h2>
        <p className={cardTextClassName}>{text}</p>
        <button className={cardButtonClassName}>галерея</button>
        <button className={cardButtonClassName}>asha'xzgf</button>
      </div>
    </div>
  )
}

export default AboutCard
