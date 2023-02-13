import React, { useState } from "react";

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success")
    };
    const handlelowClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success")
    };

    const handleclearClick = () => {
        let newText = ("");
        setText(newText);
        props.showAlert("cleared text","success")
    };

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    };

const handlecopy=()=>{
    alert('copied to clipboard')
var text=document.getElementById("myBox");
text.select();
navigator.clipboard.writeText(text.value);
props.showAlert("copy text","success")
}
const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
}

    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{color : props.mode ==='dark'?'white':'#042743'}} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form control"value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#213549':'white', color:props.mode ==='dark'?'white':'#042743' }} id="myBox" rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                    convert to uppercase
                </button>
                <button className="btn btn-primary mx-2" onClick={handlelowClick}>
                    convert to lowercase
                </button>
                <button className="btn btn-primary mx-2"  onClick={handleclearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2"  onClick={handlecopy}>copy Text</button>
                <button className="btn btn-primary mx-2"  onClick={handleExtraSpaces}>remove extra</button>
            </div>

            <div className="container my-3" style={{color :props.mode==='dark'?'white':'#042743'}} >
                <h1>your text summary</h1>
                <p>
                    {text.split(" ").length} words and {text.length} character
                </p>
                <p>{0.008 * text.split(" ").length} minute read</p>
                <h2>preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
