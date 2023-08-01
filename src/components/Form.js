import React,{useState} from 'react'

export default function (props) {
    const[text,setText]=useState("Enter text here");
    // const[color,myNewColor]=useState({
    //     backgroundColor:"white",
    //     color:"black"
    // });
    // const[buttonText,myNewText]=useState("enable dark mode");

   

    // function onColorChange(){
    //     if(color.color==="white"){
    //         myNewColor({
    //             backgroundColor:"white",
    //             color:"black"
    //         })
    //         myNewText("Enable light mode")
    //     }else{
    //         myNewColor({
    //             backgroundColor:"black",
    //             color:"white"
    //         })
    //         myNewText("Enable dark mode")

    //     }
    // }
    function onCopyFucntion(){
        navigator.clipboard.writeText(text)
        props.alertfunc("success","text copied")
    }
    function onClickFunction(){
        let newtext=text.toUpperCase()
        setText(newtext)
        props.alertfunc("success","text uppercased")

    }
    function onClickTextArea(){
        setText('')
    }
    function countWords(str) {
        return str.trim().split(/\s+/).length;
      }
    function onChangeFucntion(event){
        setText(event.target.value)
    }
    function onClickLowerFunction(){
        let newtext=text.toLowerCase();
        setText(newtext)
        props.alertfunc("success","text lowercased")

    }
    function onClickClearFunction(){
        setText("")
        props.alertfunc("success","text cleared")

    }
  return (
    <div>
    <div className="contianer" style={props.mode==="dark"?{backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"}}>
    <h1 className='my-3'>Enter Text Here</h1>
<div className="mb-3 my-3">
  <textarea className="form-control" value={text} onChange={onChangeFucntion} onClick={onClickTextArea} style={props.mode==="dark"?{backgroundColor:"grey",color:"white"}:{backgroundColor:"white",color:"black"}} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary" onClick={onClickFunction}>Change To Uppercase</button>    
<button disabled={text.length===0} className="btn btn-primary mx-3" onClick={onClickLowerFunction}>Change To Lowercase</button> 
<button disabled={text.length===0} className="btn btn-primary mx-3" onClick={onClickClearFunction}>Clear</button> 
{/* <button className="btn btn-primary mx-3" onClick={onColorChange}>{buttonText}</button>  */}
<button disabled={text.length===0} className="btn btn-primary mx-3" onClick={onCopyFucntion}>copy</button> 



<div className="container my-3">
    </div>
    
    <h2>TEXT SUMMARY:-</h2>
    <p>{text.length===0?0:countWords(text)} word and {text.length} characters</p>
    <p>{text.length===0?0:countWords(text)*0.008} minutes to read</p>
    <h2>Preview:-</h2>
    <p>{text.length===0?"write something":text}</p>
</div>    
    </div>
  );
}
