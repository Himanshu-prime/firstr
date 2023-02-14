import React,{useState} from 'react'

let wordcount=0;
let charcount=0;
export default function Inputbox(props) {

  const[text,SetText]=useState("Enter State Here");

  const handeluppercase =()=>
  {
    let newtext=text.toUpperCase();
    SetText(newtext);
    console.log("before alert")
    props.showalert("Converted To Uppercase","sucess");
  }
  const handelOnchange=(event)=>
  {
    console.log("On change");
    let checkstr=event.target.value;
    
     
    SetText(event.target.value);
  }
  const handellowercase =()=>{
    let lowert=text.toLowerCase();
    SetText(lowert);
    props.showalert("Converted To Lowercase","sucess");
  }
  const handelclear=()=>{
    SetText("");
    props.showalert("Cleared","sucess");
    
  }
  return (
    <div>
   
<div className="conatainer">
  <h1>
    {props.heading}
  </h1>
  <textarea className="form-control " id="exampleFormControlTextarea1" rows="8" value={text} onChange={handelOnchange}></textarea>
  <button className="btn btn-primary my-3 mx-1 " onClick={handeluppercase}>Convert To Uppercase</button>
  <button className="btn btn-primary my-3 mx-1" onClick={handellowercase}>Convert To Lowercase</button>
  <button className="btn btn-primary my-3 mx-1" onClick={handelclear}>Clear</button>

</div>
<div className="container my-3">
  <h1>Your Text summary</h1>
  <p>
    Number of characters {text.length} and number of words {text.split(" ").length}
  </p>
</div>
</div>
  )
}
