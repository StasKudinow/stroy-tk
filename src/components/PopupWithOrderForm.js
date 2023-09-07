import Popup from './Popup'
import OrderForm from './OrderForm'

import { COLOR_WHITE } from '../utils/constants'

function PopupWithOrderForm({
  isOpen,
  onClosePopup,
  onOrderSubmit
}) {

  return (
    <Popup
      isOpen={isOpen}
      onClosePopup={onClosePopup}
    >
      <OrderForm
        inputTextColor={COLOR_WHITE}
        onOrderSubmit={onOrderSubmit}
        btnText="Заказать звонок"
      />
    </Popup>
  )
}

export default PopupWithOrderForm
