import { useEffect, useState } from "react"
import {useNavigate } from "react-router-dom"
import "./locations.css"

export const LocationList = () => {
    const [locations, setLocations] = useState([])
    const [filteredLocations, setFiltered] = useState([])
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)
    //const[emergency, setEmergency] = useState(false)
    //const [openOnly, updateOpen] = useState(false)
    const navigate = useNavigate()
   
   /* useEffect ( //watch for state change when emergency only button is clicked
        () => {
            if(emergency){
               const emergencyTickets = tickets.filter(ticket => ticket.emergency ===true)
                setFiltered(emergencyTickets)
            }
            else {
                setFiltered(tickets) //allows for the show all button to work. it sets the filtered tickets back to the original array
            }
        }, 
        [emergency]
    )
   
   */
    useEffect( //fetch the locations
        () => { 
            fetch('http://localhost:8088/locations') //getting the api from the server
            .then(response => response.json())
            .then((locationArray) => {
                setTickets(locationArray)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )

    /*useEffect (
        () => {//look in service tickets for emyployees (is staff true?)

            if(honeyUserObject.staff) {
                setFiltered(tickets)

            }
            else {//is staff false?
              const myTickets =tickets.filter(ticket => ticket.userId === honeyUserObject.id)      
              setFiltered(myTickets)  
              
            }
        },
        [tickets]
    
    )
    useEffect (
        () => {
            if (openOnly) {
            const openTicketArray =tickets.filter(ticket => {
                return ticket.userId === honeyUserObject.id && ticket.dateCompleted === ""
            })
            setFiltered(openTicketArray)
        }
        else {
            const myTickets =tickets.filter(ticket => ticket.userId === honeyUserObject.id)
            setFiltered(myTickets)
        }
    },
        [openOnly]
    )*/
    return <>
 
        
     <h2>Locations</h2>
    <article className="locations"> 
        {
            filteredLocations.map(
               (location) => {
                return <section className="location" key={`location --${location.id}`}>
                    <header>{location.address}</header>
                    <footer>size:{location.sqFootage}
                    </footer>
                </section>
               }
            )
        }
    </article>

</>
}