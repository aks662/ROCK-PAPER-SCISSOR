import {useState} from 'react'

const App = () => {
  let [userMove,setMove]=useState("")
  let [comMove,setComMove]=useState("")
  let [rounds,setRound]=useState(0)
  let [winner,setWinner]=useState("")
  let [streak,setStreak]=useState(0)
  let [history,setHistory]=useState([])
  let emojidata={"Rock":"🪨", "Paper":"📝","Scissor":"✂️"}
  function generateMove(){
    let value=Math.random();
    if (value<0.33){return "Rock"}
    else if(value<0.67){return "Paper"}
    else{return "Scissor"}
  }
  function reset(){
    setRound(0)
    setMove("")
    setComMove("")
    setHistory([])
    setWinner("PLAY")
    setStreak(0)
  }
  function win(com,move){
    if (com===move){setWinner("BETTER LUCK NEXT TIME")
      setStreak(streak)
    }
      else if (move=="Rock" && com=="Scissor" ||
        move=="Scissor" && com=="Paper" ||
        move=="Paper" && com=="Rock" 
      ){setWinner("YOU")
        setStreak(streak+1)
      }
      else{setWinner("COMPUTER")
        setStreak(0)
      } 
  }
  function playerHistory(com,move){
    setHistory(prev => [...prev, { com, move }])
  }
  function handleClick(move){
      setMove(move)
      let com=generateMove()
      setComMove(com)
      setRound(++rounds)
      win(com,move)
      playerHistory(com,move) 
  }
  return (

    <div className='container'>
      <h1 className="title">Rock Paper Scissors 🎮</h1>
      <h2>COMPUTER:USER</h2>
      <h4>round:{rounds}</h4>
      <p className="moves">{emojidata[comMove]}:{emojidata[userMove]}</p>
      <p className="winner">WINNER:{winner}</p>
      <p className="streak">STREAK:{streak}</p>
      <div className="buttons">
      <button onClick={()=>handleClick("Rock")}>🪨</button>
      <button onClick={()=>handleClick("Paper")}>📝</button>
      <button onClick={()=>handleClick("Scissor")}>✂️</button>
      </div>

     <div className="reset"> <button onClick={()=>reset()}>RESET</button> </div>
      <div className="history-card">
        <h3>Match History 📜</h3>
        <ul>
          {history.map((item, idx) => (
            <li key={idx} className="history-item">
              🤖 {item.com} vs 🧑 {item.move}
            </li>
          ))}
        </ul>
    </div>
    </div>
  )
}

export default App

