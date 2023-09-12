import React from 'react'
import list from '../list.json'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material'


const Home = () => {
    console.log('LIST', list)
    return (
        <div className="card-container">
                       <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {list.map((list, idx) => (
                    <TableRow key={list.id}>
                        <TableCell>{list["Name"]}</TableCell>
                        <TableCell>{list["Description"]}</TableCell>
                        <TableCell>{list["Hours"]}</TableCell>
                        <TableCell>{list["Address"]}</TableCell>
                        <TableCell>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default Home