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
                {props.list.map((list, id) => (
                    <TableRow key={id}>

                        <TableCell><Link to={`/list/${list.id}`}>{list.Name}</Link></TableCell>
                        <TableCell>{list["Description"]}</TableCell>
                        <TableCell>{list["Hours"]}</TableCell>
                        <TableCell>{list["Address"]}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Dashboard