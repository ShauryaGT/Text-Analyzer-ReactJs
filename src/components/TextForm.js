import React, {useState} from 'react'
import PropTypes from 'prop-types'
import '../App.css';
//useState is called "hook"

export default function TextForm(props) {
    const [text, setText] = useState(""); //this is main - initialize a variable and function and set initial state
    //to update text, you have to mandatory call setText    
    
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.setalert("Converted to Upper Case");        
    }
    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);        
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);        
    }
    const handleClearAction = () => {
      setText("");
    }
    const handleCopy = () => {
      navigator.clipboard.writeText(text);
      props.setalert("text copied!");
    }
    /*function findNumOfSyllables(_input){
      const Hypher = require('hypher');
      const english = require('hyphenation.en-us');
      const h = new Hypher(english);
      const text = "example";
      const syllables = h.hyphenate(_input).length;
      return syllables;
    }*/
    function getMVP(_inp){
      var textsplit = _inp.split(" ");
      let dict = {};//{"key0" : ["Glenn Maxwell", 1], "key1" : ["crawling on", 2]};
      let varr = [];
      for (let i=0; i<textsplit.length-1; i++){
          let name1 = "key" + i;
          let val1 = textsplit[i];
          let val2 = textsplit[i+1];
          let valArr = Object.values(dict).map(x => x[0]);
          let keyArr = Object.keys(dict);
          if (val1.indexOf(",") != val1.length-1 && val1.indexOf(".") != val1.length-1){
              let temp = val1.replace(",","").replace(".","") + " " + val2.replace(",","").replace(".","");
              if (valArr.indexOf(temp) != -1){            
                  let a = valArr.indexOf(temp);
                  let b = keyArr[a];
                  dict[b][1]++;
                  //console.log(dict[b]);
              }
              else{
                  dict[name1] = [val1.replace(",","") + " " + val2.replace(",",""), 1];
                  //console.log(dict[name1]); 
              }
          }
          if (i == textsplit.length-2){
              varr = Object.values(dict);
          }       
      }
      let ans1 = varr.reduce((prev, curr) => (curr[1]>prev[1]) ? curr : prev, ["", 0]);
      return ans1;
   }
   const style1 = {
    color: "#212529",
    backgroundColor : "white"
   };
   const style2 = {
    color: "white",
    backgroundColor : "#212529"
   }
  return (
    <div className="container mrt" style={(props.mode == "dark") ? style2 : style1}>
        <h1>Text Area</h1> 
        <div className="mb-3 my-3">
            <label htmlFor="myText" className="form-label">{props.heading}</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9" placeholder="Enter text here"/>
        </div>
        <button className={`btn ${(props.mode == "dark") ? "btn-success" : "btn-primary"} mrr my-3`} onClick={handleUpClick}>Convert to Upper Case</button>     
        <button className={`btn ${(props.mode == "dark") ? "btn-success" : "btn-primary"} mrr my-3`} onClick={handleDownClick}>Convert to Lower Case</button>                   
        <button className={`btn ${(props.mode == "dark") ? "btn-success" : "btn-primary"} mrr my-3`} onClick={handleClearAction}>Clear Text</button>                   
        <button className={`btn ${(props.mode == "dark") ? "btn-success" : "btn-primary"} mrr my-3`} onClick={handleCopy}>Copy Text</button>                   
        <h2 className="my-2">Text count</h2>
        <div className="my-2">The word count is {text.split(" ").length} and the number of characters is {text.length}</div>
        <div className="my-2">Time taken to read : {0.008 * text.split(" ").length} minutes</div>
        <h2 className="my-4">Preview</h2>
        <span className="my-2">{text}</span>      

        <ul class="list-group my-3" style={{width: 700 + 'px'}}>
          <li class="list-group-item d-flex justify-content-between align-items-start" style={(props.mode == "dark") ? style2 : style1}>
            <div class="ms-2 me-auto">
              Number of characters (including spaces):
            </div>
            <span>{text.length}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start" style={(props.mode == "dark") ? style2 : style1}>
            <div class="ms-2 me-auto">
            Number of characters (without spaces):
            </div>
            <span>{text.replace(" ", "").length}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start" style={(props.mode == "dark") ? style2 : style1}>
            <div class="ms-2 me-auto">
            Number of words:
            </div>
            <span>{text.length != 0 ? text.split(" ").length : 0}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start" style={(props.mode == "dark") ? style2 : style1}>
            <div class="ms-2 me-auto">
            Number of sentences:
            </div>
            <span>{text.length != 0 ? text.split(".").length-1 : 0}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start" style={(props.mode == "dark") ? style2 : style1}>
            <div class="ms-2 me-auto">
            Number of syllables:
            </div>
            <p class="font-italic">To be added</p>
          </li>
        </ul>
       
        <ul class="list-group list-group-horizontal my-3">
            <li class="list-group-item" style={(props.mode == "dark") ? style2 : style1}><div class="ms-2 me-auto" >
              <div  style={{width: 524 + 'px'}} class="fw-bold">Some top phrases containing 2 words (without punctuation marks)</div>
              {getMVP(text)[0]}
            </div></li>
            <li class="list-group-item" style={(props.mode == "dark") ? style2 : style1}><div class="ms-2 me-auto">
              <div class="fw-bold">Occurences</div>
              {getMVP(text)[1]}
            </div></li>
        </ul>
        <h3>Unfiltered Work Count</h3>
        {/* <ul class="list-group list-group-horizontal my-3">
            <li class="list-group-item" >
              <ol>

              </ol>
            </li>
            <li class="list-group-item">

            </li>
        </ul> */}
        
    </div>
  )
}

TextForm.propTypes = { title : PropTypes.string.isRequired,
                     }
TextForm.defaultProps = {
  heading : "Enter Text Here",
  mode : "light"
}   