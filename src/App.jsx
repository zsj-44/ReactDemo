import './App.css';
import React, {useRef, forwardRef} from 'react';


const Foo = forwardRef((params, inputRef) => {
  // const inputRef = useRef();
  
  function toClick(params) {
    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button onClick = {toClick}>聚焦</button>
    </div>
  )
})

function App() {
      const inputRef = useRef();

    const onClick = (params) => {
      // console.log(inputRef.current); 
      inputRef.current.focus();
    }
    return (
      <div>
        <Foo ref={inputRef}/>
      <button onClick={onClick}>父组件</button>
      </div>
    )

}

export default App;
