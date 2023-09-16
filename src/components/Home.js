import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import cars from '../cars.json' // remove this

const Home = (props) => {
    return (
        <div className="card-container">
            {/* Change cars to props.cars and remove the cars.json import above */}
            {props.list.map((list, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{list.name}</span>
                        <ul>
                        <li>Name: {list["Name"]}</li>
                        <li>Cylinders: {list["cylinders"]}</li>
                        <li>Horsepower: {list["horsepower"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                        <Link to={`/car/${list.id}`}>See More Details</Link>

                </Card>
            ))}
        </div>
    )
}

export default Home