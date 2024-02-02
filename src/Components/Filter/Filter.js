import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filterCategory } from "../../redux/goodsSlice";

const Filter = ({category}) => {

  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);
  return (
    <div>
      <p onClick={()=> {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButton categoryButtonSelected' : 'categoryButton'}>{category}</p>
    </div>
  )
}

export default Filter;