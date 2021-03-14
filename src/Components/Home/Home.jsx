// import React from 'react';
// import '../../App.css';
// import { Button } from '../Button/Button';
// import './Home.css';
// import { NavLink } from 'react-router-dom';

// function Home() {
//   return (
//     <>
//       <div className='home-container'>
//         <h1>Welcome to Rently</h1>
//         <p>Let the Journey begin</p>
//         <div className='home-btns'>
//           <NavLink to="/Main">
//             <Button
//               className='btns'
//               buttonStyle='btn--outline'
//               buttonSize='btn--large'
//             >
//               CAR RENTAL
//         </Button>
//           </NavLink>
//           <NavLink to="/ShowPooled">
//             <Button
//               className='btns'
//               buttonStyle='btn--outline'
//               buttonSize='btn--large'
//             >
//               Car Pooling
//         </Button>
//           </NavLink>
//         </div>
//       </div>


//     </>
//   );
// }
// export default Home;


import React from 'react';
import HeroSection from './HeroSection/Index';
import { homeObjOne, homeObjTwo } from './HeroSection/InfoSection/Data';
import InfoSection from './HeroSection/InfoSection/Index';
import Footer from '../Footer/Footer';

const Home = () => {

  return (
    <>
       <HeroSection />
       <InfoSection {...homeObjOne} />
       <InfoSection {...homeObjTwo} />
       <Footer />
    </>
  );

}

export default Home;