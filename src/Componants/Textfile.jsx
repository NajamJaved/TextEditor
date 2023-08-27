import { useState } from "react"


export default function Textfile(props) {
    const handleOnChange=(event)=>{
        // console.log("upper case was click")
        setText(event.target.value)
    }
    const handleUpClick=()=>{
        // console.log("on change"+ text)
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleloClick=()=>{
        // console.log("on change"+ text)
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const handleclClick=()=>{
        // console.log("on change"+ text)
        let newtext = '';
        setText(newtext)
    }
    const [text, setText]=useState('')
  return (
  <div>
        <div className="mb-3 container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
          <h1 className="my-3">{props.heading}</h1>
 
          <textarea className="form-control" placeholder="Enter Your here........" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='light'?'gray':'white'}} id="mytext" rows="10"></textarea>

          <button type="button " className="btn btn-success m-3" onClick={handleUpClick}>Convert to Upper Case</button>
          <button type="button " className="btn btn-success m-3" onClick={handleloClick}>Convert to Lower Case</button>
          <button type="button " className="btn btn-success m-3" onClick={handleclClick}>Clear text</button>
          
          <h1> Number of words and charactars</h1>
          <p> Your text have {text.split(" ").length} words and {text.length} charactars</p>
          <p className="font-weight-bold"> Your text take {(0.008 *text.split(" ").length).toFixed(3)} minutes to read.</p>

          <h2>Preview</h2>
          <p>{text}</p>
        </div>
  </div>
  )
}
