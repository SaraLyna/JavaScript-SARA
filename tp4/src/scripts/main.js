import { createRoot } from 'react-dom/client';

// import ReactJs components
import App from '../components/imageApp.jsx';
//import App from '../components/ConvertAppV1.jsx';
//import App from '../components/ConvertAppV2.jsx';
//import App from '../components/ConvertAppV3.jsx';


/*
* create React root element and insert it into document
*/
const bootstrapReact =
  () => {
     const root = createRoot(document.getElementById('insertReactHere'));
     root.render(
        <App  />
     );
  }


//window.addEventListener('DOMContentLoaded', bootstrapReact );

bootstrapReact();

console.log('le bundle a été généré !');
