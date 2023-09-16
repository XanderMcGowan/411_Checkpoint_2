import React from "react";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { useState } from "react";


function LogIn() {
  const [visible, setVisible] = useState(true)
   const [isToggled, setIsToggled] = useState(false);

   const removeElement = () => {
    setVisible((prev) => !prev)
    setIsToggled((prev) => !prev);
  };

   return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {visible && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
           <TextField id="outlined-basic" label="Username" variant="outlined" />
           <TextField id="outlined-basic" label="Password" variant="outlined" />
           <Button style={{backgroundColor: '#F1DABF'}} onClick={removeElement} variant="contained">Submit</Button>
         </div>
      )}
    </div>

   );
}

export default LogIn;