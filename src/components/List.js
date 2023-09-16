import React from 'react'
import { Container, Paper, Chip } from '@mui/material';


const List = (props) => {
    const id = props.match.params.id
    const list = props.list.find(c => c.id == id)

    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{list.Name}</h2>
                <h2>{list.Description}</h2>
                <h2>{list.Hours}</h2>
                <h2>{list.Address}</h2>
            </Paper>
        </Container>
    )
}

export default List