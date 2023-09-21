import Popup from './Popup'
import OrderForm from './OrderForm'

import { COLOR_WHITE } from '../utils/constants'

function PopupWithOrderForm({
  isOpen,
  onClosePopup,
  onOrderSubmit,
  onLoading
}) {

  return (
    <Popup
      isOpen={isOpen}
      onClosePopup={onClosePopup}
    >
      <OrderForm
        onOrderSubmit={onOrderSubmit}
        onLoading={onLoading}
        inputTextColor={COLOR_WHITE}
        btnText="Заказать звонок"
      />
    </Popup>
  )
}

export default PopupWithOrderForm
