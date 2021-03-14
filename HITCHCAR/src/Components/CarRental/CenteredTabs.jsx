// import React, { useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';


// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
// });


// const CenteredTabs = () => {

  


//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);


//   const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <>
//       <Paper style={{ backgroundColor: "aliceblue", marginTop: "5px" }} className={classes.root}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           centered
// >
//           <Tab label="Hatchback"  />
//           <Tab label="Mid-Size Sedan" />
//           <Tab label="Sedan"  />
//           <Tab label="Crossover"  />
//           <Tab label="SUV"  />
//           <Tab label="Bikes"  />
//         </Tabs>
//       </Paper>
      
//     </>
   
//   );
// }


import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

const CenteredTabs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{marginLeft: "180px"}}>
      
      <ButtonGroup className="btn btn-light" style={{marginLeft: "-60px", opacity: "0.7"}} variant="contained" color="light" aria-label="contained primary button group" size="large">
      <Link to="/DisplayMain/Hatchback" style={{textDecoration: "none"}}>
        <Button style={{width: "10vw"}} >Hatchback</Button>
        </Link>
        <Link to="/DisplayMain/Sedan" style={{textDecoration: "none"}}>
        <Button style={{width: "10vw"}}>Sedan</Button>
        </Link>
        <Link to="/DisplayMain/Crossover" style={{textDecoration: "none"}}>
        <Button style={{width: "10vw"}}>Crossover</Button>
        </Link>
        <Link to="/DisplayMain/SUV" style={{textDecoration: "none"}}>
        <Button style={{width: "10vw"}}>SUV</Button>
        </Link>
        <Link to="/DisplayMain/Bike" style={{textDecoration: "none"}}>
        <Button style={{width: "10vw"}}>Bike</Button>
        </Link>
      </ButtonGroup>
      
    </div>
  );
}

export default CenteredTabs;