import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import axios from 'axios'

const WorkoutDetails = ({workout,show,setShow}) => {
  const click =async()=>{
    await axios.delete('https://workout-0c3n.onrender.com/api/workout/'+workout._id)
    setShow(!show)
  }
  return (
    
    <div>
      <div key={workout._id} className="workout-details">
                        <h4>{workout.title}</h4>
                        <p><strong>Load in kg: </strong>{workout.load}</p>
                        <p><strong>reps: </strong>{workout.reps}</p>
                        <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
                        <span className="material-symbols-outlined" onClick={click}>delete</span>
                    </div>
    </div>
  )
}

export default WorkoutDetails