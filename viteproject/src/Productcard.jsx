import "./Productcard.css"

function Productcard(product){
    const titleStyle = {
fontWeight: 100,
fontSize: 'medium',
fontStyle:'normal',
color: 'black'
}


   
    return(
        <div className="container">
            <p style={titleStyle}>productName:{product.productName}</p>
            <p className={price} >price:{product.price}</p>
            <p>{product.isAvailable===true?<p className="isStock">"In stock"</p>:<p className="notIs">"out of stock"</p>}</p>
            <p></p>
                </div>
    )
}
export default Productcard