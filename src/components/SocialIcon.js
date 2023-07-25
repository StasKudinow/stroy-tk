function SocialIcon({ name, href }) {

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img
        className="left-panel__icon"
        src={require(`../images/social-icon-${name}.svg`)}
        alt={name}
      />
    </a>
  )
}

export default SocialIcon