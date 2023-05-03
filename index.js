
const hide = document.querySelector(".hide");
const text = document.querySelector(".text");
function getDictionary(word) {


hide.classList.remove("hide")

    const dictionaryAPI = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
try {
    fetch(dictionaryAPI)
    .then((response) => response.json())
    .then((data) => showDictionary(data[0]));
} catch (error) {
    console.log(error)
}

}
function showDictionary(dataa) {
    const word = dataa.word;
    const definitions = dataa.meanings[0].definitions[0].definition;

    const audio = dataa.phonetics[0].audio;
    // document.querySelector("audio").innerText = audio

    document.querySelector(".word").innerText = "Word Title: " + word;
    document.querySelector(".meaning").innerText = "Meaning: " + definitions;
    document.querySelector("audio").src = audio
 
}


let input = document.querySelector(".dic").value
let ine = input;
// console.log(ine)

document.querySelector(".dic").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        const input = document.querySelector(".dic").value;
        getDictionary(input);
    }
})
// getDictionary(ine);
