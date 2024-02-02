import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItemToCart } from "../../redux/cartSlice";

const GoodsItem = ({product}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  return (
    <div>
      <img alt="item_photo" src={`./${product.img}.jpg`}/>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
      <button onClick={() => {dispatch(addItemToCart({product, quantity}));
    }}>Add to cart</button>
    </div>
  )
}

export default GoodsItem;