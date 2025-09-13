function Productcard({productName,price,isAvailable}){
   
    return(
        <div>
            <p>my product={productName}</p>
            <p>price={price}</p>
            <p>{isAvailable===true?"product is avialble":"product is not avilable"}</p>
        </div>
    )
}
export default Productcard