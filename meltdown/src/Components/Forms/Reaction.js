import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { sendReaction } from "../ApiManager"


import "./form.css"

export const ReactionForm = () => {


    const [reaction, update] = useState({
        date: "", 
        description: "",
        level: ""
    })

    const navigate = useNavigate()
    const activeUser = localStorage.getItem("Meltdown_user")
    const meltdownUser = JSON.parse(activeUser)//signed in user

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

    const reactionToAPI = {//Create the reaction object that will be saved to the API
       //primary key, id, is set by server
        userId: meltdownUser.id,
        date: reaction.date,
        description: reaction.description,
        level: reaction.level,

    }



   return sendReaction(reactionToAPI)
    .then(( )=>  {
        navigate("/") 

})
    }

    return (
        <form className="reactionform">
            <h2 className="title">Record A Reaction</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Date">date:</label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        value={reaction.date}
                        onChange={ 
                            (event) => {
                            const copy = {...reaction} 
                            copy.date= event.target.value 
                            update(copy)
                        } 
                    }/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">What Happened?: </label><div>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={reaction.description}
                        onChange={ 
                            (event) => {
                            const copy = {...reaction} 
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