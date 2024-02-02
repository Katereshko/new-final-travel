import dataGoods from "../../data/dataGoods";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
  console.log(cartItem)
  const goods = dataGoods.find(item => item.id === cartItem.goodsId);
  const dispatch = useDispatch();
  console.log(goods)
  return (
    <div>
      <p>{goods.name}</p>
      <p>{cartItem.quantity} PC</p>
      <p>Price: ${goods.price * cartItem.quantity}</p>
      <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}><img alt="trash_icon" className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/></span>
    </div>
  )
}

export default CartItem;