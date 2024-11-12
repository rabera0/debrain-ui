const data = {
    emotion_message: {
        "FEAR": "Feelings of uncertainty or danger",
        "ANTICIPATION": "Looking forward to something that is about to happen",
        "GRATITUDE": "Being thankful and appreciative for the good things in your life",
        "INSPIRATION": "The driving force that sparks creativity, innovation, and new ideas",
        "JOY": "Feelings of great pleasure or happiness",
        "PASSION": "Intense desire or enthusiasm for a pursuit",
        "LOVE": "Profound connection and affection for someone or something",
        "EXCITEMENT": "Anticipation, thrill, or eagerness for something to happen",
        "PURPOSE": "Determination to make something happen or get something done",
        "HOPE": "Belief in the possibility of a positive outcome",
        "SUCCESS": "Attainment of a desired outcome; feelings of accomplishment",
        "RECOGNITION": "Acknowledgment or appreciation of an achievement"
    },
  
    emotion_pairs: {
        "1": ["LOVE", "FEAR"],
        "2": ["LOVE", "ANTICIPATION"],
        "3": ["LOVE", "GRATITUDE"],
        "4": ["LOVE", "INSPIRATION"],
        "5": ["LOVE", "JOY"],
        "6": ["LOVE", "PASSION"],
        "7": ["EXCITEMENT", "FEAR"],
        "8": ["EXCITEMENT", "ANTICIPATION"],
        "9": ["EXCITEMENT", "GRATITUDE"],
        "10": ["EXCITEMENT", "INSPIRATION"],
        "11": ["EXCITEMENT", "JOY"],
        "12": ["EXCITEMENT", "PASSION"],
        "13": ["PURPOSE", "FEAR"],
        "14": ["PURPOSE", "ANTICIPATION"],
        "15": ["PURPOSE", "GRATITUDE"],
        "16": ["PURPOSE", "INSPIRATION"],
        "17": ["PURPOSE", "JOY"],
        "18": ["PURPOSE", "PASSION"],
        "19": ["HOPE", "FEAR"],
        "20": ["HOPE", "ANTICIPATION"],
        "21": ["HOPE", "GRATITUDE"],
        "22": ["HOPE", "INSPIRATION"],
        "23": ["HOPE", "JOY"],
        "24": ["HOPE", "PASSION"],
        "25": ["SUCCESS", "FEAR"],
        "26": ["SUCCESS", "ANTICIPATION"],
        "27": ["SUCCESS", "GRATITUDE"],
        "28": ["SUCCESS", "INSPIRATION"],
        "29": ["SUCCESS", "JOY"],
        "30": ["SUCCESS", "PASSION"],
        "31": ["RECOGNITION", "FEAR"],
        "32": ["RECOGNITION", "ANTICIPATION"],
        "33": ["RECOGNITION", "GRATITUDE"],
        "34": ["RECOGNITION", "INSPIRATION"],
        "35": ["RECOGNITION", "JOY"],
        "36": ["RECOGNITION", "PASSION"]
    },
  
    combinationMessages: {
        "1": "You are absolutely unstoppable when you use the power of love to transform uncertainties into strengths.",
        "2": "Your heart overflows with love, and you innately trust in the power of positivity to attract amazing experiences.",
        "3": "Your loving heart allows you to cherish the connections you hold dear and compels you to express your thankfulness for them.",
        "4": "You know that when you open your heart to possibilities, your creativity will make purposeful connections.",
        "5": "Your energy is infectious. When you share your happiness with others, your positive spirit creates memorable moments.",
        "6": "Your passionate spirit ignites profound connections, prompting you to channel your boundless energy into a variety of pursuits.",
        "7": "Genuinely excited by life, you are able to find joy and inspiration in every pursuit. The more challenging, the better.",
        "8": "Your adventurous nature compels you to embrace the thrill of new experiences and bravely face the unknown.",
        "9": "You seek out exciting opportunities every chance you get. For you, every sunrise brings a new adventure.",
        "10": "Your thankful nature ensures that you will always find excitement in life’s simplest joys and most profound moments.",
        "11": "Your visionary spirit finds inspiration everywhere and uses it to spark surprising creative pursuits. For you, life is an art.",
        "12": "Your joyful soul seeks opportunities for excitement and embraces them with open arms. For you, every day is a celebration.",
        "13": "Your passionate heart is fueled by excitement at every turn. You simply love life and find it endlessly entertaining.",
        "14": "Driven by purpose, you navigate life with determination to achieve your goals and make a lasting difference.",
        "15": "You are a determined soul who welcomes challenges and achieves your goals with purposeful resolve.",
        "16": "As a forward thinker, you anticipate moments to channel your purpose in every direction -- and with every decision.",
        "17": "Determined yet contented, you are grateful for opportunities to explore your life’s purpose and express your gratitude.",
        "18": "Your driven nature and creative mind delight in finding inspiration in the guiding light of your life’s purpose.",
        "19": "Your joyful soul finds fulfillment in celebrating the purpose that underscores your personal and professional achievements.",
        "20": "You pursue your purpose with passion and dedication until you achieve your goals and realize your ambitions.",
        "21": "You expect positive outcomes, and you challenge yourself to make them a reality by navigating obstacles with the most steadfast determination.",
        "22": "Your wholehearted embrace of optimism allows you to move forward and achieve your goals despite any challenging circumstances.",
        "23": "As a hopeful dreamer, you anticipate brighter tomorrows and look forward to them with endless excitement.",
        "24": "You are thankful for the unwavering presence of hope in your life. You see reasons for optimism around every corner.",
        "25": "Your creative muse is hope. You find endless inspiration in the transformative power of optimistic expectation.",
        "26": "Your joyful heart allows you to find happiness in life’s smallest victories and see the promise in all situations.",
        "27": "Your hope-filled attitude is driven by your pursuit of the better future you seek for yourself and others.",
        "28": "You’ve been so successful in your life that you expect nothing less than more success. You’re in it to win it.",
        "29": "As a high achiever, you nimbly overcome obstacles to reach new heights and set new personal bests.",
        "30": "You are a forward-moving force of nature who anticipates success with every step you take. Your eyes are always on the prize.",
        "31": "Motivated by success, you are profoundly appreciative of the journeys you take to achieve your goals.",
        "32": "Creative and innovative, the pursuit of greatness itself is what inspires you to keep striving and achieving.",
        "33": "As familiar with success as you have become, you find great joy in the continuous rewards of hard work.",
        "34": "A driven high achiever, you are fueled by great passion to continue succeeding in everything you do.",
        "35": "You bask in the glow of applause and appreciation, and you strive to ensure that your work merits the positive recognition it receives.",
        "36": "A passionate pursuer of many goals, you thrive on the recognition you receive when you achieve them."
    }
  };
  
  let emotion1 = "";
  let emotion2 = "";
  let currentPage = 1;
  
  let currentSectionIndex = 0;
  

  const socket = new WebSocket('ws://localhost:1000');

  function sendChordData() {
    const data = {
        section: "explore",
        firstChord: "",
        secondChord: ""
    };
    if (socket.readyState === WebSocket.OPEN) {
        console.log("web socket data:" + JSON.stringify(data));
        socket.send(JSON.stringify(data));
    }
  }

  function sendUserData() {
    const data = {
        section: "quiz",
        page: currentPage,
        emotion1: emotion1,
        emotion2: emotion2
    };
    if (socket.readyState === WebSocket.OPEN) {
        console.log("web socket data:" + JSON.stringify(data));
        socket.send(JSON.stringify(data));
    }
  }

    // Function to send data through the WebSocket
    function sendPortraitData(action) {
        const data = {
            section: "portrait",
            action: action // This will be either "redo" or "save"
        };
        if (socket.readyState === WebSocket.OPEN) {
            console.log("web socket data:", JSON.stringify(data));
            socket.send(JSON.stringify(data));
        }
    }

    // Add event listeners to buttons
    document.getElementById("start").addEventListener("click", () => {
        currentPage = "1";  // Set to the page number associated with the "start" button
        sendUserData();
    });
    document.getElementById("explore").addEventListener("click", () => sendChordData());
    document.getElementById("portrait").addEventListener("click", () => {
        currentSectionIndex = 9;  // Set the currentSectionIndex to the portrait section (index 9)
        console.log(`Moving to section: ${currentSectionIndex}`);
        showCurrentSection(); // Ensure the section is displayed
        sendPortraitData(""); // Send the portrait data with an empty action (or "save"/"redo" depending on logic)
    });
    
    document.getElementById("redo").addEventListener("click", () => sendPortraitData("redo"));
    document.getElementById("save").addEventListener("click", () => sendPortraitData("save"));


  function sendFinishData() {
    const data = {
        section: "idle"
    };
    if (socket.readyState === WebSocket.OPEN) {
        console.log("web socket data:" + JSON.stringify(data));
        socket.send(JSON.stringify(data));
    }
  }


  // Function to hide all sections
  function hideAllSections() {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
          section.style.display = 'none';
      });
  }
  
  // Function to show the current section and control header visibility
  function showCurrentSection() {
      const sections = document.querySelectorAll('section');
      const header = document.getElementById('header');
      hideAllSections();
      sections[currentSectionIndex].style.display = 'block';
  
      // Show or hide the header based on the current section
      header.style.display = currentSectionIndex === 0 ? 'none' : 'block';
  
      console.log(`Showing section with index: ${currentSectionIndex}`);
  }
  
  // Function to display a warning message if no selection is made
  function displaySelectionWarning(messageElement) {
      messageElement.innerText = "Please select an emotion.";
      messageElement.style.display = "block";
  }
  
  // Hide all warning messages when a selection is made
  function hideSelectionWarning(messageElement) {
      messageElement.style.display = "none";
  }
  
  // Handle selection for "heart beat" question (emotion1)
  document.querySelectorAll('#quiz1 button').forEach(button => {
      button.addEventListener('click', (event) => {
          emotion1 = event.target.innerText;
          console.log("User selected emotion1:", emotion1);
  
          const emotion1Message = getEmotionMessage(emotion1);
          console.log("Emotion1 message:", emotion1Message);
  
          // Update the UI with selected emotion and message
          document.querySelector('#emotion1').innerText = emotion1;
          document.querySelector('#emotion1_message').innerText = emotion1Message;
  
          // Hide warning if an option is selected
          hideSelectionWarning(document.getElementById('quiz1_warning'));
      });
  });
  
  // Handle selection for "heart race" question (emotion2)
  document.querySelectorAll('#quiz2 button').forEach(button => {
      button.addEventListener('click', (event) => {
          emotion2 = event.target.innerText;
          console.log("User selected emotion2:", emotion2);
  
          const emotion2Message = getEmotionMessage(emotion2);
          console.log("Emotion2 message:", emotion2Message);
  
          // Update the UI with selected emotion and message
          document.querySelector('#emotion2').innerText = emotion2;
          document.querySelector('#emotion2_message').innerText = emotion2Message;
  
          // Hide warning if an option is selected
          hideSelectionWarning(document.getElementById('quiz2_warning'));
      });
  });
  
  // Function to get emotion message by normalizing the input string
  const getEmotionMessage = (emotion) => {
      const normalizedEmotion = emotion.trim().toUpperCase();
      return data.emotion_message[normalizedEmotion] || "Emotion message not found.";
  };
  
  // Specific listener for the "Next" button in the "heart beat" question
  document.querySelector('.next[data-next="4"]').addEventListener('click', () => {
      if (!emotion1) {
          displaySelectionWarning(document.getElementById('quiz1_warning'));
          console.log(`No Answer`);
      } else {
          // Proceed to the next section if an emotion is selected
          currentSectionIndex = 4;
          showCurrentSection();
          console.log("Proceeding to next section:", currentSectionIndex);
      }
      currentPage = 4;
      sendUserData()
  });
  
  // Specific listener for the "Next" button in the "heart race" question
  document.querySelector('.next[data-next="6"]').addEventListener('click', () => {
      if (!emotion2) {
          displaySelectionWarning(document.getElementById('quiz2_warning'));
          console.log(`No Answer`);
      } else {
          // Proceed to the next section if an emotion is selected
          currentSectionIndex = 6;
          showCurrentSection();
          console.log("Proceeding to next section:", currentSectionIndex);
      }
      currentPage = 6;
      sendUserData()
  });
  
  // Display combined emotion message
  document.querySelector('.next[data-next="7"]').addEventListener('click', () => {
      const emotionPairKey = Object.keys(data.emotion_pairs).find(key => {
          const pair = data.emotion_pairs[key];
          return pair[0] === emotion1.toUpperCase() && pair[1] === emotion2.toUpperCase();
      });
  
      const combinationMessage = data.combinationMessages[emotionPairKey] || "Combined emotion message not found.";
      console.log(`Combination Key: ${emotionPairKey} Combo Message: ${combinationMessage}`);
  
      document.getElementById('word').innerText = `${emotion1} + ${emotion2}`;
      document.getElementById('emotion_pair_message').innerText = combinationMessage;
  
      console.log(`Displaying combined message for emotions: ${emotion1} and ${emotion2}`);
      currentPage = 7;
      sendUserData()
  });
  
// General "Next" listener excluding sections with specific checks
document.querySelectorAll('.next').forEach(button => {
    button.addEventListener('click', () => {
        const nextSection = parseInt(button.getAttribute('data-next'), 10);
        
        // Check for required conditions before navigating
        if (
            (currentSectionIndex === 3 && !emotion1) || // Quiz 1 not answered
            (currentSectionIndex === 5 && !emotion2)    // Quiz 2 not answered
        ) {
            displaySelectionWarning(
                document.getElementById(currentSectionIndex === 3 ? 'quiz1_warning' : 'quiz2_warning')
            );
            return; // Prevent navigation
        }

        // Navigate to the next section if valid
        if (!isNaN(nextSection) && nextSection >= 0) {
            currentSectionIndex = nextSection;
            console.log(`Moving to section: ${nextSection}`);
            showCurrentSection();
        }
        
        currentPage = currentSectionIndex;

        // Send user data only if currentPage is less than 9
        if (currentPage < 9) {
            sendUserData();
        }
    });
});

// Event listener for "Back" buttons
document.querySelectorAll('.back').forEach(button => {
    button.addEventListener('click', () => {
        const prevSection = parseInt(button.getAttribute('data-back'), 10);
        console.log(`Back button pressed, moving to section: ${prevSection}`);

        if (!isNaN(prevSection) && prevSection >= 0) {
            currentSectionIndex = prevSection;
            showCurrentSection();
        }
        
        currentPage = currentSectionIndex;

        // Send user data only if currentPage is less than 9
        if (currentPage < 9) {
            sendUserData();
        }
    });
});

  
  document.getElementById('finish').addEventListener('click', () => {
    // Reset emotions
    emotion1 = "";
    emotion2 = "";
    
    // Clear displayed emotion messages
    document.getElementById('emotion1').innerText = '';
    document.getElementById('emotion1_message').innerText = '';
    document.getElementById('emotion2').innerText = '';
    document.getElementById('emotion2_message').innerText = '';
  
    // Reset inactivity timer
    resetInactivityTimer();

    resetChordData();  //reset the chord diagram data
  
    // Go back to the first section
    currentSectionIndex = 0;
    showCurrentSection();
    
    console.log("Emotions reset. Returning to section 1.");
    sendFinishData();
  });
  
  // Initialize inactivity timer and popup functionality
  let inactivityTimeout;
  let popupTimeout;
  
  // Reset inactivity timer on user interaction
  function resetInactivityTimer() {
      clearTimeout(inactivityTimeout);
      inactivityTimeout = setTimeout(showInactivityPopup, 300000); // 30 seconds of inactivity
  }
  
  // Show inactivity popup after timeout
  function showInactivityPopup() {
      if (currentSectionIndex === 0) return; // Skip popup if on Section 1
  
      const popup = document.getElementById('inactivityPopup');
      popup.style.display = 'block';
  
      // Start 5-second countdown for user to respond
      popupTimeout = setTimeout(() => {
          resetToSection1();
      }, 5000); // 5 seconds to respond
  }
  
  // Reset the page to section 1
  function resetToSection1() {
      // Hide the popup if it's still visible
      document.getElementById('inactivityPopup').style.display = 'none';
      clearTimeout(popupTimeout); // Clear popup timeout if user didn't respond in time
      
      // Reset to the first section
      currentSectionIndex = 0;
      showCurrentSection(); // Now this function is already defined and will work
      console.log("User inactive: Resetting to section 1");
      sendFinishData();
  }
  
  // Initialize popup HTML and event listeners for buttons
  document.addEventListener('DOMContentLoaded', function () {
      const popupHtml = `
        <div id="inactivityPopup" style="display: none; position: fixed; border-radius: 25px; top: 50%; left: 50%; transform: translate(-50%, -50%);
            padding: 20px; font-size: 25px; background: #000; border: 1px solid #ccc; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); z-index: 1000;">
            <p>Do you want more time?</p>
            <br />
            <button id="yesButton">Yes</button>
            <button id="noButton">No</button>
        </div>
    `;
      document.body.insertAdjacentHTML('beforeend', popupHtml);
  
      // "Yes" button: Dismiss popup and reset inactivity timer
      document.getElementById('yesButton').addEventListener('click', () => {
          document.getElementById('inactivityPopup').style.display = 'none';
          clearTimeout(popupTimeout); // Stop automatic reset
          resetInactivityTimer(); // Reset inactivity timer
      });
  
      // "No" button: Reset to section 1
      document.getElementById('noButton').addEventListener('click', resetToSection1);
      document.getElementById("noButton").addEventListener("click", () => sendFinishData());
      // Set up event listeners to detect user activity
      ['click', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
          document.addEventListener(event, resetInactivityTimer);
      });
  
      // Start the inactivity timer
      resetInactivityTimer();
  
      // Initially show the first section
      showCurrentSection();
  });
  
  