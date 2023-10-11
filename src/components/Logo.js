import { Link } from 'react-router-dom'

function Logo() {

  function handleClick() {
    document.getElementById('promo')?.scrollIntoView()
  }

  return (
    <Link to='/' onClick={handleClick}>
      <div className="logo" />
    </Link>
  )
}

export default Logo
