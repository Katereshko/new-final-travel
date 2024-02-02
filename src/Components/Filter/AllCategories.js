import Filter from "./Filter";

const AllCategories = () => {
  return (
    <div>
      <h1>Get prepared for your trip!</h1>
      {['THERMOSES', 'SUITCASES', 'VOLLEYBALLS', 'SUNGLASSES', 'NECK-PILLOWS', 'ALL'].map((category, index) => <Filter key={index} category={category}/>)}

    </div>
  )
}

export default AllCategories;