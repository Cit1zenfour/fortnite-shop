const GoodsItem = ({mainId, displayName, displayDescription, price, displayAssets, addToBacket}) => {
    const {finalPrice} = price
    const [{background}] = displayAssets

    return (
        <div className="card">
            <div className="card-image">
                <img src={background} alt={displayName}/>
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button onClick={() => addToBacket({mainId, displayName, finalPrice, displayDescription, background})} className='btn'>Buy</button>
                <span className='right' style={{fontSize: '1.8rem'}}>${finalPrice}</span>
            </div>
        </div>
    )
}


export default GoodsItem