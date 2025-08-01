import './app.css'
import {useState} from "react";

function App() {

  const [guesses, setGuesses] = useState<string[]>([]);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

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
    </div>
        
  );
}

export default App;
