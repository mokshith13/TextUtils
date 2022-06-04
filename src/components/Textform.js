import React, {useState} from 'react';




export default function Textform(props) {
    

    const handleUpClick = ()=>{
        let newText =  text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLowClick = ()=>{
        let newText =  text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")
    }
    const handleRemoveSpace = ()=>{
        let newText =  text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces", "success")
    }
     const handleCopyText = ()=>{
         let text = document.getElementById('mybox');
         text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied", "success")
        
     }
    const handleClearClick = ()=>{
        let newText =  '';
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
        
    }

    const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#072039'}}>
        <div className="mb-3">
        <h1 className=' my-2'>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black' }} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to upper case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to lower case</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleRemoveSpace}>Remove extra space</button>
         <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>Copy text</button> 
        <button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#072039'}}>
            <h3>Your text summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
    </>
  )
}
