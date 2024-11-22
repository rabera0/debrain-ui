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
        "1": "You are unstoppable when you use the power of love to transform uncertainties into strengths.",
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

const colors = [
{ love: "#DD524E" },
{ recognition: "#ebc343" },
{ success: "#006850" },
{ purpose: "#b32de3" },
{ hope: "#FFBB00" },
{ excitement: "#7CF2F6" },
{ joy: "#ED88AD" },
{ inspiration: "#BF77F5" },
{ gratitude: "#003E78" },
{ anticipation: "#38B0DD" },
{ passion: "#019C60" },
{ fear: "#FF7222" }
];

const baseColors = [
{ love: "#960014" },
{ recognition: "#d28d07" },
{ success: "#003850" },
{ purpose: "#7A2721" },
{ hope: "#f5d271" },
{ excitement: "#24b8bd" },
{ joy: "#c947d5" },
{ inspiration: "#BF7776" },
{ gratitude: "#167fe0" },
{ anticipation: "#0484c4" },
{ passion: "#006655" },
{ fear: "#ba451a" }
];


function applyRadialGradientAnimation(color1, color2) {
    // Apply the radial gradient animation with two colors
    
    document.body.style.background = `radial-gradient(circle, ${color1}, ${color2})`;
  
    // Apply the background size and animation
    document.body.style.backgroundSize = '300% 300%';
    document.body.style.animation = 'gradient 10s ease-in-out infinite';
  }

  
  // Function to apply a radial gradient animation with four colors
function applyComboGradientAnimation(color1, baseColor1, color2, baseColor2) {
    // Set up the radial gradient with four colors
    document.body.style.background = `radial-gradient(circle, ${color1}, ${baseColor1}, ${color2}, ${baseColor2})`;
    
    // Apply the background size and animation for smooth transition
    document.body.style.backgroundSize = '300% 300%';
    document.body.style.animation = 'gradient 15s ease-in-out infinite'; // 15s duration for a smooth loop
  }


  let emotion1 = "";
  let emotion2 = "";
  let currentPage = 1;
  
  let currentSectionIndex = 0;
  
  const socket = new WebSocket(`wss://${window.location.host}`);

    // Listen for the connection to open
    socket.addEventListener('open', () => {
        console.log('Connected to WebSocket server');
    });

    //////////////LISTENING TO DATA
// Listening to data from the server
socket.addEventListener('message', async (event) => {
    let data;

    // Check if the received data is a Blob
    if (event.data instanceof Blob) {
        const text = await event.data.text();  // Convert Blob to text
        data = JSON.parse(text);               // Parse the text as JSON
    } else {
        data = JSON.parse(event.data);         // Parse directly if it's a string
    }

    console.log('Received data from server:', data);

    // Handle pulse states and transitions between sections
    if (data.pulse === 'active') {
        console.log('pulse pending.');

        if (currentSectionIndex === 0) {
            setTimeout(() => {
                // console.log("fingerprint detected, moving to section 1");
                currentSectionIndex = 1;
                currentPage = 1;
                sendUserData();
                showCurrentSection();
            }, 2000); // 2-second delay
        } else if (currentSectionIndex === 1) {
            // Show fingerprint gif and sensor animation
            document.getElementById('fingerprint').style.display = 'inline-block';
            document.getElementById('sensor').style.display = 'inline-block';

            setTimeout(() => {
                sendUserData();
                console.log("fingerprint detected, moving to section 2 in 4 secs");
                currentSectionIndex = 2;
                currentPage = 2;
                showCurrentSection();
            }, 4000); // 4-second delay
        }
    }

    // Handle 'inactive' pulse state
    if (data.pulse === 'Inactive') {
        if (currentSectionIndex === 1) {
            // Hide fingerprint gif if pulse is inactive in section 1
            document.getElementById('fingerprint').style.display = 'none';
        } else if (currentSectionIndex === 2) {
            setTimeout(() => {
                currentPage = 3;
                currentSectionIndex = 3;
                console.log("No fingerprint detected, moving to section 3 in 3 secs");
                showCurrentSection();
                sendUserData();  // Send socket data on transition to section 3
            }, 3000); // 3-second delay for section 2 to section 3 transition
        }
    }

    // Handle 'done' pulse state
    if (data.pulse === 'done') {
        console.log('pulse done.');

        if (currentSectionIndex === 1) {
            // Hide fingerprint gif when pulse is done in section 1
            document.getElementById('fingerprint').style.display = 'none';
            currentSectionIndex = 2;  // Move directly to section 2
            currentPage = 2;
            showCurrentSection();
            sendUserData();

            // After 4 seconds, transition to section 3
            setTimeout(() => {
                currentSectionIndex = 3;  // Transition to section 3
                console.log("No fingerprint detected, moving to section 3 in 4 secs");
                showCurrentSection();
                sendUserData();  // Send socket data for section 3
            }, 4000); // 4-second delay after section 2 to section 3 transition
        }
    }

    // Section 2 -> Section 3 (Timer-based transition, independent of pulse state)
    if (currentSectionIndex === 2) {
        setTimeout(() => {
            currentPage = 3;
            currentSectionIndex = 3;
            console.log("Section 2 to 3: Transitioning in 4 seconds");
            showCurrentSection();
            sendUserData();  // Ensure data is sent for section 3
        }, 4000); // 4-second delay for section 2 to section 3 transition
    }
});

    // Handle errors
    socket.addEventListener('error', (error) => {
        console.error('WebSocket error:', error);
    });

    socket.addEventListener('close', () => {
        console.log('WebSocket connection closed');
    });


      ////////////////SENDING DATA
      function sendFinishData() {
        const data = {
            section: "idle",
            page: 0
        };
    
        // Check if WebSocket is open
        if (socket.readyState === WebSocket.OPEN) {
            // WebSocket is open, send the data
            console.log("Sending WebSocket data: " + JSON.stringify(data));
            socket.send(JSON.stringify(data));
        } else {
            // WebSocket isn't open yet, add an event listener for when it opens
            socket.addEventListener('open', function() {
                console.log("WebSocket opened, sending data: " + JSON.stringify(data));
                socket.send(JSON.stringify(data));
            });
        }
    }
    
  function sendChordData() {
    const data = {
        section: "explore",
        page: currentSectionIndex,
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

  function sendPortraitData(action, page) {
    const data = {
        section: "portrait",
        page: page, // Now directly using the page passed as a parameter
        action: action // This will be either "redo" or "save"
    };
    if (socket.readyState === WebSocket.OPEN) {
        console.log("web socket data:", JSON.stringify(data));
        socket.send(JSON.stringify(data));
    }
    isPortraitDataSent = false;
}

    // Add event listeners to buttons
    document.getElementById("start").addEventListener("click", () => {
        currentPage = 1;  // Set to the page number associated with the "start" button
        sendUserData();
        showCurrentSection();
    });
    
    let isPortraitDataSent = false; // Flag to track if portrait data has been sent

    // Handling "redo" and "save" buttons to mark portrait data as sent
    document.getElementById("redo").addEventListener("click", () => {
        isPortraitDataSent = true;  // Set the flag when redo is pressed
        const portraitSection = document.querySelector('#portrait').parentNode;
        const lookUpSection = document.querySelector('.next[data-next="10"]').parentNode;
      
        // After a 7-second delay, handle the transition
        setTimeout(() => {
          // Hide the Portrait section with an animation (add 'outgoing' class)
          portraitSection.classList.add('outgoing');
      
          // Wait for the outgoing animation to complete before switching sections
          setTimeout(() => {
            portraitSection.style.display = 'none'; // Hide Portrait section
      
            // Show and animate the Look Up section
            lookUpSection.style.display = 'flex';
            lookUpSection.classList.add('active');
      
            // Simulate a click on the "Next" button for section 10
            const nextButton = document.querySelector('.next[data-next="10"]');
            if (nextButton) {
              nextButton.click();
            }
          }, 1000); // Match the CSS animation duration for outgoing transition
        }, 7000); // Initial 7-second delay before starting the transition
    });
    
    document.getElementById("save").addEventListener("click", () => {
        isPortraitDataSent = true;  // Set the flag when save is pressed
        sendPortraitData("save", 11);
    });

    // Event listener for the info icon
    document.querySelector('#info-icon').addEventListener('click', () => {
        const popup = document.querySelector('#info-popup');
        popup.style.display = 'block'; // Show the popup
    });

    // Event listener for the close button
    document.querySelector('#close-popup').addEventListener('click', () => {
        const popup = document.querySelector('#info-popup');
        popup.style.display = 'none'; // Hide the popup
    });
    

    let isAnimating = false; // Prevent multiple animations at the same time

    // Function to hide all sections and reset their position
    function hideAllSections() {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        section.classList.remove('active', 'outgoing');
        // No need to set display to 'none', as opacity and transform will handle visibility
      });
    }
    
    // Function to show the current section and control header visibility
    function showCurrentSection() {
      if (currentSectionIndex >= 14) {
        currentSectionIndex = 0;
      }
    
      const sections = document.querySelectorAll('section');
      const header = document.getElementById('header');
    
      // Hide all sections
      hideAllSections();
    
      // Select the current section
      const currentSection = sections[currentSectionIndex];
    
      // Ensure header visibility is updated
      header.style.display = currentSectionIndex === 0 ? 'none' : 'flex';
    
      // Add the 'active' class to trigger fade-in and slide-in animations
      requestAnimationFrame(() => {
        currentSection.classList.add('active');
      });
    
      console.log(`Showing section with index: ${currentSectionIndex}`);
    }
    

  
  
///////////QUIZ BUTTON HANDLING
function getColorByEmotion(emotion) {
    const emotionColor = colors.find(colorObj => colorObj[emotion.toLowerCase()]);
    return emotionColor ? emotionColor[emotion.toLowerCase()] : "#000000"; // Default to black if not found
  }
  
  function getBaseColorByEmotion(emotion) {
    const emotionColor = baseColors.find(colorObj => colorObj[emotion.toLowerCase()]);
    return emotionColor ? emotionColor[emotion.toLowerCase()] : "#111111"; // Default if not found
}


  // Track the selected button for both quizzes
  let selectedButton1 = null; // To store the previously selected button in #quiz1
  let selectedButton2 = null; // To store the previously selected button in #quiz2
  let color1 = "#0080BF";
  let color2 = "#0080BF";
  let baseColor1 = "#0080BF";
  let baseColor2 = "#0080BF";
  
  // Handle selection for "heart beat" question (emotion1)
  // Handle selection for "heart beat" question (emotion1) with animation
document.querySelectorAll('#quiz1 button').forEach(button => {
  button.addEventListener('click', (event) => {
    if (isAnimating) return; // Prevent animation if already animating
    isAnimating = true;

    // Deselect the previously selected button if any
    if (selectedButton1) {
      selectedButton1.style.color = ''; // Reset text color
      selectedButton1.style.borderColor = ''; // Reset border color
    }

    // Get the selected emotion
    emotion1 = event.target.innerText;
    console.log("User selected emotion1:", emotion1);

    // Get the corresponding color for the selected emotion
    color1 = getColorByEmotion(emotion1);
    baseColor1 = getBaseColorByEmotion(emotion1); // Use base color for emotion1

    // Update the UI with selected emotion and message
    const emotion1Message = getEmotionMessage(emotion1); // Assuming this function exists
    console.log("Emotion1 message:", emotion1Message);

    document.querySelector('#emotion1').innerText = emotion1;
    document.querySelector('#emotion1_message').innerText = emotion1Message;

    // Change the button color based on the emotion
    event.target.style.color = color1;  // Change text color
    event.target.style.borderColor = color1;  // Change border color

    // Store the selected button for future deselection
    selectedButton1 = event.target;

    // Add the 'outgoing' class to the current section (quiz1) to initiate the slide-out animation
    const sections = document.querySelectorAll('section');
    sections[currentSectionIndex].classList.add('outgoing');
    
    // Move to the next section (emotion page)
    currentSectionIndex = 4; // Set the correct section index for emotion page

    // Wait for the transition to finish before showing the next section
    setTimeout(() => {
      showCurrentSection();
      isAnimating = false; // Reset animation state
    }, 1000); // Match this time with the duration of the CSS transition (same duration as outgoing transition)

    // Optionally apply the background gradient animation
    applyRadialGradientAnimation(color1, baseColor1);
  });
});
  
  
  
// Handle selection for "heart race" question (emotion2)
document.querySelectorAll('#quiz2 button').forEach(button => {
  button.addEventListener('click', (event) => {
    if (isAnimating) return; // Prevent animation if already animating
    isAnimating = true;

    // Deselect the previously selected button if any
    if (selectedButton2) {
      selectedButton2.style.color = ''; // Reset text color
      selectedButton2.style.borderColor = ''; // Reset border color
    }

    // Get the selected emotion
    emotion2 = event.target.innerText;
    console.log("User selected emotion2:", emotion2);

    // Get the corresponding color for the selected emotion
    color2 = getColorByEmotion(emotion2);
    baseColor2 = getBaseColorByEmotion(emotion2); // Use base color for emotion2
    console.log("Emotion2 color:", color2);

    // Update the UI with selected emotion and message
    const emotion2Message = getEmotionMessage(emotion2); // Assuming this function exists
    console.log("Emotion2 message:", emotion2Message);

    document.querySelector('#emotion2').innerText = emotion2;
    document.querySelector('#emotion2_message').innerText = emotion2Message;

    // Change the button color based on the emotion
    event.target.style.color = color2;  // Change text color
    event.target.style.borderColor = color2;  // Change border color

    // Store the selected button for future deselection
    selectedButton2 = event.target;

    // Add the 'outgoing' class to the current section (quiz2) to initiate the slide-out animation
    const sections = document.querySelectorAll('section');
    sections[currentSectionIndex].classList.add('outgoing');
    
    // Move to the next section (emotion 2 page)
    currentSectionIndex = 6; // Set the correct section index for emotion2 page

    // Wait for the transition to finish before showing the next section
    setTimeout(() => {
      showCurrentSection();
      isAnimating = false; // Reset animation state
    }, 1000); // Match this time with the duration of the CSS transition (same duration as outgoing transition)

    // Optionally apply the background gradient animation
    applyRadialGradientAnimation(color2, baseColor2); // change background to color2 based on emotion2
  });
});
  

  // Function to get emotion message by normalizing the input string
  const getEmotionMessage = (emotion) => {
      const normalizedEmotion = emotion.trim().toUpperCase();
      return data.emotion_message[normalizedEmotion] || "Emotion message not found.";
  };

  document.querySelector('.next[data-next="7"]').addEventListener('click', () => {
    // Show the "Combined Emotion Message" section after transition
    const emotionSection = document.querySelector('#word').parentNode;
    emotionSection.style.display = 'flex'; // Make it visible
  
    // After a 3-second delay, trigger the "Next" button click programmatically
    setTimeout(() => {
      const nextButton = document.querySelector('.next[data-next="8"]');
      if (nextButton) {
        nextButton.click(); // Simulate a click on the "Continue →" button
      }
    }, 3000); // 3-second delay before triggering the next transition
  });


// Add 3-second delay for the 'I'M READY' button in the Portrait Start Section
document.querySelector('.next[data-next="8"]').addEventListener('click', () => {
  // Show the Combined Emotion Message Section
  const emotionSection = document.querySelector('#word').parentNode;
  emotionSection.style.display = 'flex'; // Make it visible

  // After a 3-second delay, trigger the appearance of the Portrait button
  setTimeout(() => {
    const portraitButton = document.querySelector('#portrait');
    portraitButton.style.display = 'block'; // Show the button after 3 seconds
  }, 3000); // 3-second delay before showing the button
});


document.querySelector('.next[data-next="9"]').addEventListener('click', () => {
  // Get the current section (Portrait) and the next section (Look Up)
  const portraitSection = document.querySelector('#portrait').parentNode;
  const lookUpSection = document.querySelector('.next[data-next="10"]').parentNode;

  // After a 7-second delay, handle the transition
  setTimeout(() => {
    // Hide the Portrait section with an animation (add 'outgoing' class)
    portraitSection.classList.add('outgoing');

    // Wait for the outgoing animation to complete before switching sections
    setTimeout(() => {
      portraitSection.style.display = 'none'; // Hide Portrait section

      // Show and animate the Look Up section
      lookUpSection.style.display = 'flex';
      lookUpSection.classList.add('active');

      // Simulate a click on the "Next" button for section 10
      const nextButton = document.querySelector('.next[data-next="10"]');
      if (nextButton) {
        nextButton.click();
      }
    }, 1000); // Match the CSS animation duration for outgoing transition
  }, 7000); // Initial 7-second delay before starting the transition
});




  // Display combined emotion message
  document.querySelector('.next[data-next="7"]').addEventListener('click', () => {
    applyComboGradientAnimation(color1, baseColor1, baseColor2, color2,); // combo
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
      if (isAnimating) return; // Prevent animation if already animating
      isAnimating = true;
  
      const nextSection = parseInt(button.getAttribute('data-next'), 10);
  
      if (!isNaN(nextSection) && nextSection >= 0) {
        // Add the 'outgoing' class to the current section
        const sections = document.querySelectorAll('section');
        sections[currentSectionIndex].classList.add('outgoing');
  
        currentSectionIndex = nextSection;
  
        // Wait for the transition to finish before showing the next section
        setTimeout(() => {
          showCurrentSection();
          isAnimating = false; // Reset animation state
        }, 1000); // Match this time with the duration of the CSS transition
      }
  
      currentPage = currentSectionIndex;
      
      // Send user data based on currentPage value
      if (currentPage > 1 && currentPage < 9 && currentPage != 6 && currentPage !=4 && currentPage !=7) {
        if (currentPage == 8) {
          applyComboGradientAnimation(color1, baseColor1, baseColor2, color2); // combo
        } else {
          applyRadialGradientAnimation('#0080BF', '#0a195a'); // default
        }
        sendUserData();
      } else if (currentPage >= 9 && currentPage < 12) {
        applyComboGradientAnimation(color1, baseColor1, baseColor2, color2); // combo
        if (currentPage < 11) {
          applyComboGradientAnimation(color1, baseColor1, baseColor2, color2); // combo
        } else {
          applyRadialGradientAnimation('#0080BF', '#0a195a'); // default
        }
        if (!isPortraitDataSent) {
          sendPortraitData("", currentPage);
        }
      } else if (currentPage >= 12 && currentPage <= 13) {
        applyRadialGradientAnimation('#0080BF', '#0a195a'); // default
        sendChordData();
      }
    });
  
    if (currentPage >= 9 && currentPage < 12) {
      isPortraitDataSent = false; // Reset the flag when moving away from portrait pages
    }
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
            if (currentPage == 4) {
                document.body.style.background = `radial-gradient(${color1}, ${getBaseColorByEmotion(emotion1)})`; // Use base color for emotion1
s
            } else if (currentPage == 6) {
                document.body.style.background = `radial-gradient(${color2}, ${getBaseColorByEmotion(emotion2)})`; // Use base color for emotion1

            } else {
                applyRadialGradientAnimation('#0080BF', '#0a195a'); //default 
            }
            sendUserData();
        }
    });
});

  
  document.getElementById('finish').addEventListener('click', () => {

    // Reset inactivity timer
    resetInactivityTimer();
    updateFlowData(emotion1, emotion2);
    resetChordData();  //reset the chord diagram data
  
    // Go back to the first section
    resetToSection1();
    
    console.log("Emotions reset. Returning to section 1.");
    sendFinishData();
   
  });
  
  // Initialize inactivity timer and popup functionality
  let inactivityTimeout;
  let popupTimeout;
  
  // Reset inactivity timer on user interaction
  function resetInactivityTimer() {
      clearTimeout(inactivityTimeout);
      inactivityTimeout = setTimeout(showInactivityPopup, 60000000); // 60 seconds of inactivity
  }
  
  // Show inactivity popup after timeout
  function showInactivityPopup() {
      if (currentSectionIndex === 0) return; // Skip popup if on Section 1
  
      const popup = document.getElementById('inactivityPopup');
      popup.style.display = 'block';
  
      // Start 5-second countdown for user to respond
      popupTimeout = setTimeout(() => {
          resetToSection1();
      }, 10000); // 10 seconds to respond
  }
  
  // Reset the page to section 1
  function resetToSection1() {
    isPortraitDataSent = false
    // Hide the popup if it's still visible
    applyRadialGradientAnimation('#0080BF', '#0a195a'); //default
    document.getElementById('inactivityPopup').style.display = 'none';
    clearTimeout(popupTimeout); // Clear popup timeout if user didn't respond in time
       // Reset emotions
    emotion1 = "";
    emotion2 = "";
    
    // Clear displayed emotion messages
    document.getElementById('emotion1').innerText = '';
    document.getElementById('emotion1_message').innerText = '';
    document.getElementById('emotion2').innerText = '';
    document.getElementById('emotion2_message').innerText = '';
    document.getElementById('sensor').style.display = 'none';
  
    // Reset button selections for both quizzes
    if (selectedButton1) {
        selectedButton1.style.color = ''; // Reset text color
        selectedButton1.style.borderColor = ''; // Reset border color
        selectedButton1 = null; // Clear reference
    }
    if (selectedButton2) {
        selectedButton2.style.color = ''; // Reset text color
        selectedButton2.style.borderColor = ''; // Reset border color
        selectedButton2 = null; // Clear reference
    }

    const q1b = document.querySelector('[data-next="4"]');
    q1b.style.display = 'none';

    const q2b = document.querySelector('[data-next="6"]');
    q2b.style.display = 'none';
      // Reset to the first section
      currentSectionIndex = 0;
      showCurrentSection(); // Now this function is already defined and will work
      console.log("User inactive: Resetting to section 1");
      sendFinishData();

  }
  
  // Initialize popup HTML and event listeners for buttons
  document.addEventListener('DOMContentLoaded', function () {
    sendFinishData();
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
  
  