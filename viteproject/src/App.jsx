import Productcard from "./Productcard.jsx"
function App(){
    const productName="chocolates"
    const price=200
    const isAvailable=true


  
  return (
    <div>
        <Productcard productName={productName} price={price} isAvailable={isAvailable}/>
    
    </div>
  )
}

export default App
