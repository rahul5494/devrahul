const sentences = [
    "Welcome to DevRahul!",
    "I Love Coding.",
    "Full-Stack Developer.",
    "Thanks for visiting."
  ];
  
  let sentenceIndex = 0;
let charIndex = 0;
const typingText = document.getElementById("text-animation");

function typeSentence() {
  if (sentenceIndex < sentences.length) {
    let currentSentence = sentences[sentenceIndex];
    
    if (charIndex < currentSentence.length) {
      typingText.textContent += currentSentence.charAt(charIndex);
      charIndex++;
      setTimeout(typeSentence, 100); // Typing speed
    } else {
      // After typing the sentence, wait a moment before clearing it
      setTimeout(clearText, 1500); // Delay before clearing text
    }
  } else {
    // Once we have typed all sentences, reset and start over
    setTimeout(() => {
      sentenceIndex = 0;
      charIndex = 0;
      typingText.textContent = ''; // Clear the text
      typeSentence(); // Start typing from the first sentence again
    }, 1500); // Delay before restarting
  }
}

function clearText() {
  typingText.style.opacity = 1; // Reset opacity
  let currentSentence = typingText.textContent;

  // Animate text disappearance
  let fadeOutInterval = setInterval(() => {
    if (typingText.textContent.length > 0) {
      typingText.textContent = typingText.textContent.slice(0, -1);
    } else {
      clearInterval(fadeOutInterval); // Stop when the text is fully cleared
      sentenceIndex++;
      charIndex = 0;
      setTimeout(typeSentence, 500); // Start the next sentence after a small delay
    }
  }, 50); // Speed of clearing text (you can adjust it)
}

// Start the typing effect
typeSentence();


let cross = document.getElementById('cross')
let list = document.getElementById('list')
let toggle = document.getElementsByClassName('icons')[0]
let toggler = document.getElementsByClassName('navbar-main-container')[0]

toggle.addEventListener('click', function(){
    if((list.style.display == "" || list.style.display == "block")&&(toggler.style.right !== '0')){
        cross.style.display = 'block'
        list.style.display = 'none'
        toggler.style.top = 0;
        toggler.style.right = 0;
        toggler.style.zIndex = '99'
        cross.style.position = 'fixed'
        cross.style.zIndex = '99'
    }
    else{
        cross.style.display = 'none'
        list.style.display = 'block'
        toggler.style.right = '-100vh';
        toggler.style.top = 0;
        toggler.style.zIndex = 99
        toggler.style.zIndex = 99

    }
})