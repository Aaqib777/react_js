import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = () => 
  {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert('Coverted to Upper Case', 'success')
  }
  const handleDownClick = () => 
  {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert('Coverted to Lower Case', 'success')
  }
  const handleClearClick = () => 
  {
    let newText = '';
    setText(newText);
    props.showalert('Clear', 'success')
  };


  //using navigator to copy
  const handleCopy = () => 
  {
    var text =  document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert('Copied to Clipboard', 'success')
  };

  //regix to eliminate extra spaces
  const handleExtraSpaces = () => 
  {

    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert('Removed Extra Spaces', 'success')
  };

  // const redColor = () =>
  // {
  //   setcolor 
  //   (
  //     {
  //       color: 'black'
  //     }
  //   )
  // }


  const handleOnChange = (event) => 
  {
    console.log("on Change");
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  
  // // const [color, setcolor] = useState({
  //   color: 'red'
  // })
  //text = "new text"; // wrong way to change the state
  //setText("New text") //correct way to change the state
  return (
    <>
    
    <div className={`container text-${(props.mode === 'dark'? 'light':'dark')}`}>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <label htmlfor="myBox" className="form-label">
          {props.title}
        </label>
        <textarea className="form-control"  value={text} onChange = {handleOnChange} id="myBox" rows="8" style = {{backgroundColor: (props.mode==='light'? 'white':'grey'), color: (props.mode==='light'? 'black':'white')}} ></textarea>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        {/* <button className="btn btn-primary mx-2" onClick={redColor}>RedColor</button> */}
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
      </div>
      <div className="container">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length-1} words, {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length === 0? 'Enter Text to Preview': text}</p>
    </div>
    </div>
    
    </>
  );
}
