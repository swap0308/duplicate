// import './App.css';
// import SocialIcons from './Components/SocialIcons';
// import myimg from './images/logo.jpeg';
// import Carticons from './Components/Carticons';
// import Corousel from './Components/Corousel';

// function App() {
//   return (
//     <div className="App">

//       <div className='Complete_Header'>

//       <div className='Main_header'>
//       <div ><p>Welcome to Clicon eCommerce Website</p></div> 
//       <div className='Icon_container'>
//         <SocialIcons></SocialIcons>  
//       </div>
//       </div> 
//       {/*  End of Main_header */}

//       <div className='Horizontal_Line'></div>

//       <div className='Second_Main_Header'>

//         <div className='image'>
//           <img src ={myimg}></img>
//         </div>

//         <div className='search_bar'> <input type = 'text' placeholder='Search for Anything' className='search'></input></div>

//         <div className='other_functionalities'>
//           <Carticons></Carticons>
//         </div>
//       </div>   
//       {/* end of Second_Main_Header */}

//       </div>  
//       {/* end of Complete_Header  */}


//       <div className='Main_Body'>
//       <div className='Corousel'>
//         <Corousel></Corousel>
//       </div>
//       <div className='POster main'>

//       <div className='poster1'>
//       <img scr = 'C:\Users\swapndew\Desktop\Front_End\frontend_main\src\images\regerigerator_image.jpg'></img>
//       </div>
//       <div className='poster2'>
//         <img src ='C:\Users\swapndew\Desktop\Front_End\frontend_main\src\images\Xbox_image.webp'></img>
//       </div>

//       </div>
//       </div>
//       {/* End of main body */}


//     </div> 
//     //  end of app class
//   );
// }

// export default App;



import React from 'react';
import './App.css';
import SocialIcons from './Components/SocialIcons';
import myimg from './images/logo.jpeg';
import Carticons from './Components/Carticons';
import Corousel from './Components/Corousel';
import Carousel from './Components/Carousel';

function App() {
  return (
    <div className="App">
      <div className='Complete_Header'>
        <div className='Main_header'>
          <div><p>Welcome to Clicon eCommerce Website</p></div>
          <div className='Icon_container'>
            <SocialIcons />
          </div>
        </div>
        {/*  End of Main_header */}
        <div className='Horizontal_Line'></div>
        <div className='Second_Main_Header'>
          <div className='image'>
            <img src={myimg} alt="Logo" />
          </div>
          <div className='search_bar'>
            <input type='text' placeholder='Search for Anything' className='search' />
          </div>
          <div className='other_functionalities'>
            <Carticons />
          </div>
        </div>
        {/* end of Second_Main_Header */}
      </div>
      {/* end of Complete_Header */}
      <div className='Main_Body'>
        <div className='Corousel'>
          {/* <Corousel /> */}

          <Carousel></Carousel>

        </div>
        {/* <div className='Poster main'>
          <div className='poster1'>
            <img src='' alt="Refrigerator" />
          </div>
          <div className='poster2'>
            <img src='' alt="Xbox" />
          </div>
        </div> */}
      </div>
      {/* End of main body */}
    </div>
    //  end of app class
  );
}

export default App;
