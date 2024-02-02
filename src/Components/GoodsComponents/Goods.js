import dataGoods from "../../data/dataGoods";
import GoodsItem from "./GoodsItem";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/goodsSlice";

const Goods = () => {
  const selectedCategory = useSelector(getSelectedCategory);

  return (
    <div>
      {dataGoods
      .filter(product => {
        if (selectedCategory === 'ALL') return true;
        return selectedCategory === product.category;
      }
      )
      .map((product, index) => <GoodsItem key={index} product={product}/>)}
    </div>
  )
}

export default Goods;