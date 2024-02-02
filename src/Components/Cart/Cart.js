import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import cart_icon from "./cart_icon.svg";

const Cart = () => {

  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div>
      <img alt="icon" className="cartIcon" src={cart_icon}/>
      <h3>TOTAL: ${totalPrice}</h3>
      {cartItems.map((cartItem, index) => <CartItem key={index} cartItem={cartItem}/>)}
      
    </div>
  )
}

export default Cart;