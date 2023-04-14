import { useEffect, useState, } from "react"
import { useNavigate } from "react-router-dom"
import "./products.css"


//list out all the products
export const ProductList = (product) => {
    const [ products, setProducts ] = useState([])
    const [ filteredProducts, setFilteredProducts ] = useState([])
    const [productTypes, setProductTypes] = useState([])
    const [expensive, setExpensive] = useState(false)
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)
    const navigate = useNavigate()


    //filter to find the product type - another array
    useEffect(
        () => {
            //get the products from the api
            fetch(`http://localhost:8088/productTypes`)
                .then(response => response.json())
                .then((productTypeArray) => {
                    setProductTypes(productTypeArray)
                }
                )
            }
    )
    

    useEffect(
    () => {
        //get the products from the api
        fetch(`http://localhost:8088/products?_expand=productType`)
            .then(response => response.json())
            .then((ProductsArray) => {
                setProducts(ProductsArray) 
            })
    },
    [] // When this array is empty, you are observing initial component state
)


//filter to find staff
useEffect (
    () => {//look in users for emyployees (is staff true?)

        if(kandyUserObject.isStaff === true) {
            setFilteredProducts(expensive)
            

        }
        else {//is staff false?
          const cheapProducts =products.filter(product => product.userId === kandyUserObject.id)      
          setFilteredProducts(cheapProducts)  
          
        }
    },
   

)

//filter the products by price and only display products that cost more than $2.00
    useEffect(
        () => {
            if (expensive) {
                const expensiveProducts = products.filter(product => {
                    return product.price > 2.00 === true
                })
                setFilteredProducts(expensiveProducts)
            }
            else{
                setFilteredProducts(products)
            }  
        },
     
    )
    
   
    
    return <>
    {
        kandyUserObject.staff 
        ?
<>
    <button onClick={() => setExpensive(true)}>Expensive Products</button>
    <button onClick={() => setExpensive(false)}>All Products</button>
    <button onClick={() => navigate("/inventory/create")}>Update Inventory</button>


</> 

:<>
    <button onClick={() => setExpensive(false)}>All Products</button>
  
</>
}

      <h2>List of Products</h2>
          <article className="products">

            {filteredProducts.map((product) => {
       
              return (
                <section className="product" key={product.id}>
                  <div>{product.name}</div>
                  <div>Cost: {product.price}</div>
                  <div>Type: {product.productType.type}</div>
                  <br />
                </section>
              )})}

</article>    
</>   
}