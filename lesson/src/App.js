import Inputs from './components/Inputs';
import Header from './components/Header';
import Radio from './components/Radio';
import Buttons from './components/Buttons';
import Style from './components/Style.css';
function App() {
  return (
   <div id='container'>

     <div id='card'>
     <center>
      <Header/>
       <Inputs/>
       <Radio/>
       <Buttons/>
      </center>
     </div>
      

   </div>
  );
}

export default App;
