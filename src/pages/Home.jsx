import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
    const [workouts, setWorkouts] = useState([])
    const [show, setShow] = useState(false)
    const fetchData = async () => {
        let response = await axios.get("https://workout-0c3n.onrender.com/api/workout")
        console.log(response.data)
        setWorkouts(response.data)
    }
    useEffect(() => {
        fetchData()
    }, [show])
    return (
        <div className='home'>
            <div className="workouts">
                {workouts.map(e => (workouts &&
                    <WorkoutDetails workout={e} key={e._id} show={show} setShow={setShow}/>
                ))}
            </div>
            <WorkoutForm show={show} setShow={setShow}/>
        </div>
    )
}

export default Home