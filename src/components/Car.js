import React from 'react'
import { Container, Paper, Chip } from '@mui/material';


const Car = (props) => {
    const id = props.match.params.id
    const car = props.cars.find(c => c.id == id)

    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{car.Name}</h2>
                <h2>{car.Description}</h2>
                <h2>{car.Hours}</h2>
                <h2>{car.Address}</h2>
            </Paper>
        </Container>
    )
}

export default Car