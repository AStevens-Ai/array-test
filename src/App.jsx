import { useState } from "react"

const INITIAL_VALUE = ["A", "B", "C"]

function App() {
  const [array, setArray] = useState(INITIAL_VALUE)
  const [name, setName] = useState("letter")
  const [value, setValue] = useState("")

  function removeFirstElement() {
    setArray(currentArray => {
      return currentArray.slice(1)
    })
  }

  function removeSpecificLetter(letter) {
    setArray(currentArray => {
      return currentArray.filter(element => element !== letter)
    })
  }
  function addLetterToStart(letter) {
    setArray(currentArray => {
      return [letter, ...currentArray]
    })
  }
  
  function addLetterToEnd(letter) {
    setArray(currentArray => {
      return [...currentArray, letter]
    })
  }
  function initiateClick() {
    setName("Number")
  }

  function clear() {
    setArray([])
  }

  function reset() {
    setArray(INITIAL_VALUE)
  }

  function updateAToH() {
    setArray(currentArray => {
      return currentArray.map(element => {
        if (element === "A") {
          return "H";
        }
        return element;
      });
    });
  }

  function addLetterAtIndex(letter, index) {
    setArray(currentArray => {
      return [currentArray.slice(0, index), letter, currentArray.slice(index)]
    })
  }
  return <div>
    <h1 onClick={initiateClick}>This is the {name} Array</h1> 
    <br />
    <button onClick={removeFirstElement}>Remove First Element</button>
    <br />
    <button onClick={() => removeSpecificLetter("A")}>Remove All A's</button>
    <br />
    <button onClick={() => addLetterToStart("A")}>Add Letter To Start</button>
    <br />
    <button onClick={() => addLetterToEnd("D")}>Add Letter To End</button>
    <br />
    <button onClick={clear}>clear</button>
    <br />
    <button onClick={reset}>reset</button>
    <br />
    <button onClick={() => addLetterAtIndex("C", 2)}>Add C To 2</button>
    <br />
    <button onClick={updateAToH}>Update A To H</button>
    <br />
    <input value={value} onChange={e => setValue(e.target.value)} />
    <br />
    <button onClick ={() => addLetterToStart(value)}>Add Value To Start</button>
    <br />
    {array.join(", ")}
    </div>
}

export default App
