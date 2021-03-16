import GoodsItem from "./GoodsItem";

const GoodsList = ({goods, addToBacket}) => {

    if (!goods.length) {
        return <h3>Nothing here</h3>
    }

    return (
        <div className='goods'>
            {goods.map(item => (<GoodsItem key={item.id} addToBacket={addToBacket} {...item}  />))}
        </div>
    )
}

export default GoodsList