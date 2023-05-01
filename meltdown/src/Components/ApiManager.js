// Submit a single reaction report to the database
export const sendReaction= (reactionToAPI) => {
    return fetch(`http://localhost:8088/reactions`)
         , { 
          method: "PUT", //adds an object
          headers: {
              "Content-Type": "application/json"
          },
         body: JSON.stringify(reactionToAPI)
      }
 }
 export const sendEndDay= (endDayToAPI) => {
    return fetch(`http://localhost:8088/endDays`)
         , { 
          method: "PUT", //adds an object
          headers: {
              "Content-Type": "application/json"
          },
         body: JSON.stringify(endDayToAPI)
      }
 }
