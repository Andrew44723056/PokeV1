import React, {useState} from 'react';
import '../Styles/ThemeSelector.css'
 
function ThemeSelector(){
    //isDarkMode (true/false)
     const [isDarkMode, setIsDarkMode] = useState (false); // false -> lightmode
      
     const toggleTheme = () => {
         const currentMode = isDarkMode; // Almacenar el modo Actual 
         setIsDarkMode(!currentMode);
     };
     
     return ( <div className={`app ${isDarkMode ? 'dark':'light'}`}>
     <header>
       <button onClick={toggleTheme} className='btn'>Cambiar Tema</button>
     </header> 
   </div>);
  }

export default ThemeSelector;



