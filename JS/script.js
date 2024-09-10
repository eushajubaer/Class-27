

function calculation(){
      let x = 10000
        let y = 400
        let w = x+y
        let result = w
        console.log(result);
        
}

calculation()


for (let i = 1; i < teams.length; i++) {
    

    console.log(teams[i]);


}

teams.map((item)=>{
        console.log(item);
    
    })
    
    let teams = ["Shahid", "Noman", "Fuad", "Ariyan", "Rahat", "Asad", "Taher"] 

function grattings(members){

    let utterance = new SpeechSynthesisUtterance(`Welcome ${members}`);
    speechSynthesis.speak(utterance);
}





for (let i = 0; i < teams.length; i++) {
    grattings  (teams[i]);
    
}

let question = "What Is Your Age"


function name() {
    if(question == "What Is Your Name"){
        let utterance = new SpeechSynthesisUtterance(`My Name Is Eusha`);
        speechSynthesis.speak(utterance);
    }
    else if(question == "What Is Your Age"){
        let utterance = new SpeechSynthesisUtterance(`My age Is 20`);
        speechSynthesis.speak(utterance);
    }
    
}

name()