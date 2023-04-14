import { useEffect, useState } from "react"
import "./locations.css"

export const LocationList = () => {
    const [locations, setLocations] = useState([])
    useEffect( //fetch the locations
        () => { 
            fetch('http://localhost:8088/locations') //getting the api from the server
            .then(response => response.json())
            .then((locationArray) => {
                setLocations(locationArray)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )

 
    return <>
 
        
     <h2>Locations</h2>
    <article className="locations"> 
        {
           locations.map(
               (location) => {
                return <section className="location" key={`location --${location.id}`}>
                    <header>{location.address}</header>
                    <footer>Store Size:{location.sqFootage}
                    </footer>
                </section>
               }
            )
        }
    </article>

</>
}