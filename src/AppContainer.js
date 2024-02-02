import './index.css';
import Cart from './Components/Cart/Cart';
import Goods from './Components/GoodsComponents/Goods';
import AllCategories from './Components/Filter/AllCategories';

function AppContainer() {

return(
    <div className="App">
      <div className="block">
        <AllCategories/>
        <Cart/>
      </div>
      <div className="block">
        <Goods/>
      </div>
    </div>

  )
}

export default AppContainer;