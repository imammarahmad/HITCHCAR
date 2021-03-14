import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
// import EmojiTransportationOutlinedIcon from '@material-ui/icons/EmojiTransportationOutlined';
// import { NavLink } from 'react-router-dom'
// import './UserProfile.css';



// const drawerWidth = 300;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },

//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 100,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerContainer: {
//     overflow: 'auto',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }));

// export default function ClippedDrawer() {
//   const classes = useStyles();

//   return (
//     <div style={{position: "absolute", marginTop: "20px"}}>
//       <div className={classes.root}   >
//         {/* <CssBaseline  /> */}
//         <div >
//           <Drawer
//             className={classes.drawer}
//             variant="permanent"
//             classes={{
//               paper: classes.drawerPaper,
//             }}
//           >

//             <div className={classes.drawerContainer}>
//               <List>
//                 <ListItem button > <AccountBoxOutlinedIcon />  OverView  </ListItem>
//                 <NavLink to="/UserAds" style={{ textDecoration: "none" }} >
//                   <ListItem button ><EmojiTransportationOutlinedIcon /> Ads Posted</ListItem>
//                 </NavLink>
//                 <NavLink to="/PendingBookings" style={{ textDecoration: "none" }}>
//                   <ListItem button ><EmojiTransportationOutlinedIcon /> Bookings Pending</ListItem> </NavLink>
//               </List>
//               <Divider />
//             </div>
//           </Drawer>
//         </div>
//       </div>
//     </div>
//   );


// }

const SideBar = () => {

  return (
    <>

      <div id="list-example" className="list-group">
        <a className="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
        <a className="list-group-item list-group-item-action" href="#list-item-2">Item2</a>
        <a className="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
        <a className="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
      </div>
      <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
        <h4 id="list-item-1">Item 1</h4>
        <p>...</p>
        <h4 id="list-item-2">Item 2</h4>
        <p>...</p>
        <h4 id="list-item-3">Item 3</h4>
        <p>...</p>
        <h4 id="list-item-4">Item 4</h4>
        <p>...</p>
      </div>
    </>
  );

}

export default SideBar;