import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const ProductForm = () => {
   
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [product, update] = useState({
        name: "", 
        //type: " ",
        price: " "

    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the product list
    */
    const navigate = useNavigate()

    
    const handleSaveButtonClick = (event) => {
        event.preventDefault()

    const productToSendToAPI = {//Create the object to be saved to the API
       //primary key, id, is set by server
        productId: product.id,
        name: product.name,
        //type: product.productType.type,
        price: product.price
    }
return fetch(`http://localhost:8088/products`, { //send the user submitted data
   method: "POST", 
   headers: {
    "Content-Type": "application/json"
   }, 
   body: JSON.stringify(productToSendToAPI)

})
    .then (response => response.json()) 
    .then(( )=>  {
        navigate("/products") //go to all products
    
})
    }

    return (
        <form className="productForm">
            <h2 className="productForm__title">Update Product Inventory</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="name of treat"
                        value={product.name}
                        onChange={ 
                            (event) => {
                            const copy = {...product} //make a copy of the product
                            copy.name = event.target.value //look at the state of the product name
                            update(copy)
                        } 
                    }/>
                </div>
                </fieldset>
           {  /*  <fieldset> 
                <div className="form-group">
                    <label htmlFor="description">Type:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="treat catagory"
                        value={product.productType.type}
                        onChange={ 
                            (event) => {
                            const copy = {...product.productType} //make a copy of the product
                            copy.name = event.target.value //look at the state of the productType, type
                            update(copy)
                        } 
                    }/>
                </div>
                </fieldset>*/}
               <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Price:</label>
                    <input
                        required autoFocus
                        type="number"
                        className="form-control"
                        value={product.price}
                        onChange={ 
                            (event) => {
                            const copy = {...product} //make a copy of the ticket
                            copy.name = event.target.value //look at the state of the ticket description
                            update(copy)
                        } 
                    }/>
                </div>
            </fieldset>
            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Update Inventory
            </button>
        </form>
    )
}