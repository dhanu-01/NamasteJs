import { useState } from 'react';
import Icon from './Components/Icon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const tikArray = new Array(9).fill("");

function App() {
   
   const [isCross,setIsCross] = useState(true);
   const[winMessage,setWinMessage] = useState("");

   //playAgain
   function playAgain(){
     tikArray.fill("")
     setIsCross(true)
     setWinMessage("")
   }

   //find winner:

   function findWinner(){
     // row : 0,1,2
      if(tikArray[0] == tikArray[1] && tikArray[0] == tikArray[2] && tikArray[0] != ""){
          setWinMessage(`winner is ${tikArray[0]}`)
      }
      else if(tikArray[3] == tikArray[4] && tikArray[3] == tikArray[5] && tikArray[3] != ""){
        setWinMessage(`winner is ${tikArray[3]}`)
      }
      else if(tikArray[6] == tikArray[7] && tikArray[6] == tikArray[8] && tikArray[6] != ""){
        setWinMessage(`winner is ${tikArray[6]}`)
      }
      else if(tikArray[0] == tikArray[3] && tikArray[0] == tikArray[6] && tikArray[0] != ""){
        setWinMessage(`winner is ${tikArray[0]}`)
      }
      else if(tikArray[1] == tikArray[4] && tikArray[1] == tikArray[7] && tikArray[1] != ""){
        setWinMessage(`winner is ${tikArray[1]}`)
      }
      else if(tikArray[2] == tikArray[5] && tikArray[2] == tikArray[8] && tikArray[2] != ""){
        setWinMessage(`winner is ${tikArray[0]}`)
      }
      else if(tikArray[0] == tikArray[4] && tikArray[0] == tikArray[8] && tikArray[0] != ""){
        setWinMessage(`winner is ${tikArray[0]}`)
      }
      else if(tikArray[2] == tikArray[4] && tikArray[2] == tikArray[6] && tikArray[2] != ""){
        setWinMessage(`winner is ${tikArray[2]}`)
      }

      //draw condition
      else if(tikArray.indexOf("")== -1 || true){
          setWinMessage(`Its a draw`)
      }

   }

   function noImposters(index){
       if(winMessage){
        return toast("nope, not allowed, Game is Over")
       }


       if(tikArray[index]!=""){
          return toast("nope, Not allowed, don't even try it")
       }
       else if(tikArray[index] == ""){
         tikArray[index] = isCross == true ? "cross" : "circle"
        setIsCross(!isCross)
         findWinner()
        }
   }
 
  return (
   
    <div >
       <ToastContainer />
      { 
        winMessage ? (
          <div>
            <h1>{winMessage}</h1>
            <button onClick={playAgain}>playAgain</button>
          </div>
        )
        :
        (
          <div>
             <h1>{isCross == true ? "Cross chance" : "circle chance" }</h1>
      
          </div>
        )
      }
      <div className = 'grid'>
        {
          tikArray.map((value,index)=>(
            
            <div onClick={()=>noImposters(index)}>
                 <Icon user_icon={value}/>
            </div>
            
          ))
        }
      </div>

    </div>
  );
}

export default App;
