import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/locations"
import { ProductList } from "../products/products"
import { ProductForm } from "../products/productForm"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner for Kritters</h1>
                    <div>Tasty treats for all your kritters!</div>

                    <Outlet />
                </>
            }>

                <Route path="locations" element={ <LocationList /> } />
                <Route path="products" element={ <ProductList /> } />
                <Route path="inventory/create" element={ <ProductForm />} />

          

            </Route>
        </Routes>
    )
}