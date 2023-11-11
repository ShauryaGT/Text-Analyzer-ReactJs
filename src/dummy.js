// convert into dictionary - success!!
let c = "http://localhost:3000/";
let h = c.split("/").pop();
console.log(h);

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
        if (val1.indexOf(",") != val1.length-1){
            let temp = val1.replace(",","") + " " + val2.replace(",","");
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
    return ans1[0];
}

let superdiv = null;
            if (document.getElementById("supdiv") != null){
                superdiv = document.getElementById("supdiv");
            }
            else{
                superdiv = document.createElement("div");
                superdiv.className = "allert";
                superdiv.id = "supdiv";    
            }
            let otheralerts = superdiv.getElementsByClassName('alert');            
            // for (let j=0; j<otheralerts.length; j++){
            //     superdiv.removeChild(otheralerts[j]);
            // }            
            superdiv.appendChild(alertelement);
            alertelement.style.position = "absolute";
            alertelement.style.top = 0;
            if (otheralerts.length > 1){
                otheralerts[1].style.marginTop = 100;
                for (let j=1; j<otheralerts.length; j++){
                    otheralerts[j].style.position = "relative";
                }  
            }