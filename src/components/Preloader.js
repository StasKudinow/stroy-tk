import Popup from './Popup'

function Preloader({ isLoading }) {

  return (
    <Popup
      isLoading={isLoading}
    >
      <div className="preloader">
        <div className="preloader__cube1"></div>
        <div className="preloader__cube2"></div>
      </div>
    </Popup>
  )
}

export default Preloader
