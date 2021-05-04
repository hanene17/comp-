
import React from 'react';
import '../../style.css';
import image from '../../image/image.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';


const Im  = () => {
   return(
      <div>
         <div className='App-img'> <img src={image} alt="/" /> </div>
      </div>
   );
};

export default Im;