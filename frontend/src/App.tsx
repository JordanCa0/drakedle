import './app.css'
import {useState} from "react";
import anitaMaxWynn from "./assets/anitaMaxWynn.jpg";
import anitaMaxWynnMp3 from "./assets/anitaMaxWynn.mp3";

function App() {

  let song: string = "hello";

  const [isWin, setIsWin] = useState(false);

  const [guesses, setGuesses] = useState<string[]>([]);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (inputValue.trim().toLowerCase() === song.toLowerCase()){
      setIsWin(true);
    }

    setGuesses (prev => {
      const updated = [...prev, inputValue.trim()].slice(-5);
      return updated;
    });
    setInputValue("");
  }; 

  const boxes = Array(5)
    .fill(null)
    .map((_, i) => guesses[i] ? guesses[i] : "");

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 p-4">

      <title>Drakedle</title>
      {/*Header*/}
      <header className ="flex items-center justify-between p-4">
        <h1 className = "text-2xl font-bold text-blue-200 tracking-wide">Drakedle</h1>
      </header>

        {/* Guess Boxes */}
      <div className = "flex  flex-col gap-3 w-full max-W-xl mx-auto">
        {boxes.map((guess,idx)=>(
          <div
            key = {idx}
            className = "flex items-center justify-center h-16 boarder-2 rounded-lg bg-white/60 text-lg font-semibold text-gray-700 shadow"
          >
            {guess}
          </div>
        ))}
      </div>

      {/* Inputs */}
      <form onSubmit={handleChange} className='flex w-full max-w-xl  mx-auto mb-6 mt-3'>
        <input
          value = {inputValue}
          className = "w-full p-3 rounded boarder mb-3 bg-sky-100 py-2"
          onChange = {e => setInputValue(e.target.value)}
          placeholder = "Guess the Song">
        </input>
        <button
          type="submit"
          className ="bg-blue-600 text-white px-5 py-3 rounded ml-3"
        >
          Guess
        </button>
      </form>
        
      {/* Win State */}
      {
        isWin && (
          <div className='fixed inset-50 bg-sky-300 flex items-center justify-center z-50 rounded-lg'>
            <div className='bg-white rounded-lg p-8 shadow-xl text-2xl text-center'>

            <p className="mt-4 text-green-600 font-bold">🎉 Correct! 🎉</p>

            <button 
            className='mt-4 bg-blue-600 text-white px-6 py-2 rounded'
            onClick={()=>setIsWin(false)}
            >Close</button>

            <img 
            className='mt-4 rounded-lg'
            src={anitaMaxWynn} alt="Zesty Drake">
            </img>

            <audio src = {anitaMaxWynnMp3}>
            </audio>

            </div>
          </div>
        )
      }

    </div>
        
  );
}

export default App;
