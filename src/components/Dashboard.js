import React from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material'

 
const Dashboard = (props) => {
    return (
        <Container maxWidth="lg" className="car-container">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Horsepower</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.cars.map((car, id) => (
                    <TableRow key={id}>

                        <TableCell><Link to={`/car/${car.id}`}>{car.Name}</Link></TableCell>
                        <TableCell>{car["Description"]}</TableCell>
                        <TableCell>{car["Hours"]}</TableCell>
                        <TableCell>{car["Address"]}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Dashboard