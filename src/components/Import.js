import React from 'react'

import {Button} from "@material-ui/core"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { MoreVert } from '@material-ui/icons'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

let delete_index=0;

const Import = (props) => {
    // fill out this component
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event,index) => {
      delete_index=index;
      console.log(delete_index, index)
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
        console.log (delete_index)
        props.deleteMake(delete_index);
      setAnchorEl(null);
    };

    return (<div>
        <p>Import Component</p>
        <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
        <h2>COUNT: {props.makes.length}</h2>
        <TableContainer component={Paper}>
      <Table className="test" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Make</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((item,index) => (
            <TableRow key={item.MakeId}>
              <TableCell component="th" scope="row">
              {item.MakeId}
              </TableCell>
              <TableCell align="right">{item.MakeName}</TableCell>
              <TableCell align="right"><MoreVert
    fontSize="inherit"
    onClick={(e)=>handleClick(e,index)}
    id={index}
    style={{ fontSize: "40px" }}
  /></TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Delete Row</MenuItem>
       
      </Menu>



</div>)
}

export default Import