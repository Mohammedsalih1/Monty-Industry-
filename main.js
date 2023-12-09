setTimeout(() => {
    const FristPage = document.querySelector("[data-frist-page]");
    FristPage.style.display = "none";
}, 2000);

let playBtn = document.getElementById("play-btn");
playBtn.addEventListener("click", Speak_out_loud);

function Speak_out_loud() {

    let textInput = document.getElementById("text");

    let utterance = new SpeechSynthesisUtterance(textInput.value);
    speechSynthesis.speak(utterance);

    localStorage.setItem("word", textInput.value);

    Saving_words(textInput.value);
}

// function Saving_words(TheWord) {

//     // declairing some variables
//     let PlayingRecord = document.querySelector(".playing__record");

//     // creating some DOM elements
//     let TheWordDiv = document.createElement("div"); // the div that will contain the word / Button
//     TheWordDiv.className = "the_word";
//     let Paragraph = document.createElement("p"); // this element will contain the word
//     let ParagraphInnerText = document.createTextNode(TheWord);
    
//     Paragraph.appendChild(ParagraphInnerText)
//     let ListenBtn = document.createElement("button");
//     let ListenBtnInnerText = document.createTextNode("Listen");
//     ListenBtn.appendChild(ListenBtnInnerText);


//     TheWordDiv.appendChild(Paragraph);
//     TheWordDiv.appendChild(ListenBtn);
//     PlayingRecord.appendChild(TheWordDiv);
// };
