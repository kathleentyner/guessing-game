import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { sendEndDay } from "../ApiManager"


import "./form.css"

export const EndDayForm = () => {


    const [endDay, update] = useState({
        date: "", 
        description: "",
        am: false, 
        pm: false, 
        seizure: false

    })

    const navigate = useNavigate()
    const activeMeltdownlUser = localStorage.getItem("Meltdown_user")
    const meltdownUser = JSON.parse(activeMeltdownlUser)//signed in user

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

    const endDayToAPI = {//Create the reaction object that will be saved to the API
       //primary key, id, is set by server
        userId: meltdownUser.id,
        date: endDay.date,
        description: endDay.description,
        am: endDay.am,
        pm: endDay.pm,
        seizure: endDay.seizure


    }



   return sendEndDay(endDayToAPI)
    .then(( )=>  {
        navigate("/") 

})
    }

    return (
        <form className="reactionform">
            <h2 className="title">End The Day</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Date">Date:</label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        value={endDay.date}
                        onChange={ 
                            (event) => {
                            const copy = {...endDay} 
                            copy.date= event.target.value 
                            update(copy)
                        } 
                    }/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">How Was Hoagie's Day?: </label><div>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={endDay.description}
                        onChange={ 
                            (event) => {
                            const copy = {...endDay} 
                            copy.description = event.target.value 
                            update(copy)
                        } 
                    }/>
                 </div>
                 <fieldset>
                <div className="form-group">
                    <label htmlFor="level">How Bad Was It?</label>             
                </div>
            </fieldset>
                </div>
            </fieldset>
            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="submit">
                Submit
            </button>
        </form>
    )
}