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
{ love: "#f68b9c" },
{ recognition: "#faffd1" },
{ success: "#0cffc7" },
{ purpose: "#d253ff" },
{ hope: "#ffeebf" },
{ excitement: "#dffeff" },
{ joy: "#ffc3e0" },
{ inspiration: "#9300ff" },
{ gratitude: "#82c2ff" },
{ anticipation: "#38B0DD" },
{ passion: "#89ffbf" },
{ fear: "#ffb34b" }
];

const trueColors = [
  { love: "#DD524E" },
  { excitement: "#7CF2F6" },
  { purpose: "#7A2791" },
  { hope: "#FFBB00" },
  { success: "#006850" },
  { recognition: "#D6B036" },
  { fear: "#FF7222" },
  { anticipation: "#38B0DD" },
  { gratitude: "#003E78" },
  { inspiration: "#BF77F5" },
  { joy: "#ED88AD" },
  { passion: "#019C60" }
]


const baseColors = [
{ love: "#840012" },
{ recognition: "#d19d00" },
{ success: "#012b2d" },
{ purpose: "#3f0015" },
{ hope: "#db9100" },
{ excitement: "#015e78" },
{ joy: "#c90065" },
{ inspiration: "#fc95ff" },
{ gratitude: "#0039a2" },
{ anticipation: "#0484c4" },
{ passion: "#003541" },
{ fear: "#8a2800" }
];


function applyRadialGradientAnimation(color1, color2) {
  // Apply the radial gradient animation with two colors
  
  document.body.style.background = `radial-gradient(circle, ${color1}, ${color2})`;

  // Apply the background size and animation
  document.body.style.backgroundSize = '250% 250%';
  document.body.style.animation = 'gradient 10s ease-in-out infinite';
}


// Function to apply a radial gradient animation with four colors
function applyComboGradientAnimation(color1, baseColor1, color2, baseColor2) {
  // Set up the radial gradient with four colors
  document.body.style.background = `radial-gradient(circle, ${color1}, ${baseColor1}, ${color2}, ${baseColor2})`;
  
  // Apply the background size and animation for smooth transition
  document.body.style.backgroundSize = '450% 450%';
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

  let isActionInProgress = false;
  let transitionInProgress = false;
  let autoTransitionTimer = null;

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

  //Handle portrait states 
  // Check if the received data contains 'playback'
  if (data.playback) {
    console.log('Playback received, delaying update for 5 seconds...');

    // Delay the video update by 5 seconds
    setTimeout(() => {
        const videoElement = document.getElementById('portraitvid');
        const sourceElement = videoElement.querySelector('#videoSource');

        // Update the video source dynamically
        sourceElement.src = data.playback;

        // Reload the video to apply the new source
        videoElement.load();

        // Optionally play the video automatically after updating
        videoElement.play().catch((error) => {
            console.error('Error playing video:', error);
        });

        console.log(`Video source updated to: ${data.playback}`);
    }, 5000); // 5000ms = 5 seconds
}

//   // Prevent overlapping transitions
// if (transitionInProgress) {
//   console.log("Transition already in progress, ignoring pulse.");
//   return;
// }

// // Handle pulse state on Page 1
// if (currentSectionIndex === 0 && data.pulse === 'active') {
//   console.log('pulse active, transitioning from Page 1 to Page 2');
//   transitionInProgress = true;  // Mark transition in progress
//   setTimeout(() => {
//       const nextButton = document.querySelector('.next[data-next="1"]');
//       if (nextButton) {
//           nextButton.click();  // Trigger section transition
//           transitionInProgress = false;  // Reset transition flag
//       }
//   }, 1500); // Delay for page 1 to page 2 transition
// }

// // Handle pulse state on Page 2
// if (currentSectionIndex === 1) {
//   if (data.pulse === 'active') {
//       console.log('pulse active, showing fingerprint');
//       document.getElementById('fingerprint').style.display = 'inline-block';
//       document.getElementById('sensor').style.display = 'inline-block';

//       // Start the auto-transition timer if not already started
//       if (autoTransitionTimer === null) {
//           autoTransitionTimer = setTimeout(() => {
//               console.log('5 seconds elapsed, automatically transitioning to Page 3');
//               transitionToPage3();
//           }, 5000); // 5-second timer before auto-transition to Page 3
//       }
//   } else if (data.pulse === 'Inactive') {
//       console.log('pulse inactive, hiding fingerprint');
//       document.getElementById('fingerprint').style.display = 'none';
//       document.getElementById('sensor').style.display = 'none';

//       // Clear the auto-transition timer if pulse becomes inactive
//       if (autoTransitionTimer !== null) {
//           clearTimeout(autoTransitionTimer);
//           autoTransitionTimer = null; // Reset the timer
//       }
//   } else if (data.pulse === 'done') {
//       console.log('pulse done, immediately transitioning to Page 3');

//       // If the pulse is 'done', immediately clear any existing timers
//       if (autoTransitionTimer !== null) {
//           clearTimeout(autoTransitionTimer);
//           autoTransitionTimer = null; // Reset the timer
//       }

//       // Add a delay of 2 seconds before transitioning to Page 3
//       setTimeout(() => {
//           // Ensure there is no ongoing transition before proceeding
//           if (!transitionInProgress) {
//               console.log('Transitioning to Page 3');
//               transitionToPage3();
//           } else {
//               console.log('Transition already in progress, skipping transition to Page 3.');
//           }
//       }, 2000); // 2 seconds delay before starting the transition to Page 3
//   }
// }

// // Handle Page 3: Independent of pulse state
// if (currentSectionIndex === 2) {
//   // No action needed, just ensure no transitions are happening here
// }
// });

// function transitionToPage3() {
//   const nextButton = document.querySelector('.next[data-next="2"]');
//   if (nextButton) {
//       nextButton.click(); // Transition to page 3
//       transitionInProgress = true; // Set transition flag
//       setTimeout(() => {
//           transitionInProgress = false; // Reset transition flag once page 3 is reached
//       }, 1500); // Transition delay
//   }
// }


 // Prevent overlapping transitions
  if (transitionInProgress) {
      console.log("Transition already in progress, ignoring pulse.");
      return;
  }

  // Handle pulse state on Page 1
  if (currentSectionIndex === 0 && data.pulse === 'active') {
      console.log('pulse active, transitioning from Page 1 to Page 2');
      transitionInProgress = true;  // Mark transition in progress
      setTimeout(() => {
          const nextButton = document.querySelector('.next[data-next="1"]');
          if (nextButton) {
              nextButton.click();  // Trigger section transition
              transitionInProgress = false;  // Reset transition flag
          }
      }, 1500); // Delay for page 1 to page 2 transition
  }

  // Handle pulse state on Page 2
  if (currentSectionIndex === 1) {
      if (data.pulse === 'active') {
          console.log('pulse active, showing fingerprint');
          document.getElementById('fingerprint').style.display = 'inline-block';
          document.getElementById('sensor').style.display = 'inline-block';

          // Start the auto-transition timer if not already started
          if (autoTransitionTimer === null) {
              autoTransitionTimer = setTimeout(() => {
                  console.log('5 seconds elapsed, automatically transitioning to Page 3');
                  transitionToPage3();
              }, 5000); // 5-second timer before auto-transition to Page 3
          }
      } else if (data.pulse === 'Inactive') {
          console.log('pulse inactive, hiding fingerprint');
          document.getElementById('fingerprint').style.display = 'none';

          // Clear the auto-transition timer if pulse becomes inactive
          if (autoTransitionTimer !== null) {
              clearTimeout(autoTransitionTimer);
              autoTransitionTimer = null; // Reset the timer
          }
      } else if (data.pulse === 'done') {
          console.log('pulse done');
          //transitionToPage3();
      }
  }

  // Handle Page 3: Independent of pulse state
  if (currentSectionIndex === 2) {
      // No action needed, just ensure no transitions are happening here
  }
});

function transitionToPage3() {
  const nextButton = document.querySelector('.next[data-next="2"]');
  if (nextButton) {
      nextButton.click(); // Transition to page 3
      transitionInProgress = true; // Set transition flag
      setTimeout(() => {
          transitionInProgress = false; // Reset transition flag once page 3 is reached
      }, 1500); // Transition delay
  }
}

// Listen for the 'transitionComplete' event to reset flags
document.addEventListener('transitionComplete', () => {
  // Once transition is complete, reset flags
  console.log('Transition complete, resetting flags.');
  transitionInProgress = false;
  console.log('Section transition complete, ready for next action.');
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
          page: "0"
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
      page: `${currentSectionIndex}`,
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
      page: `${currentPage}`,
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
      page: `${page}`, // Now directly using the page passed as a parameter
      action: action // This will be either "redo" or "save"
  };
  if (socket.readyState === WebSocket.OPEN) {
      console.log("web socket data:", JSON.stringify(data));
      socket.send(JSON.stringify(data));
  }
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

    const portraitSection = document.getElementById('port');
    const lookUpSection = document.querySelector('.next[data-next="10"]').parentNode;
    
    
    sendPortraitData("redo", 9);

    // Step 1: Reset outgoing class for the sections involved (section 9 and section 10)
    lookUpSection.classList.remove('outgoing');
    lookUpSection.style.display = 'flex'; // Ensure it's visible

    // Step 2: Delay the transition to simulate "redo" behavior
    setTimeout(() => {
        // Add outgoing class to Portrait section to start hiding it
        portraitSection.classList.add('outgoing');

        // Step 3: After 1 second (matching the outgoing transition), hide the Portrait section and show Look Up section
        setTimeout(() => {
            // Hide the Portrait section
            // portraitSection.style.display = 'none';

            // Show the Look Up section
            lookUpSection.style.display = 'flex';  // Make sure the section is visible
            lookUpSection.classList.add('active'); // Ensure the Look Up section becomes active
          
            // Simulate a click on the "Next" button to move to section 10
            const nextButton = document.querySelector('.next[data-next="10"]');
            if (nextButton) {
              portraitSection.classList.remove('outgoing');
              portraitSection.style.display = 'flex'; // Ensure it's visible
              nextButton.click();
            }
        }, 1000); // Wait for the outgoing transition of the portrait section to finish
    }, 7000); // Initial 7-second delay before starting the transition
});
  
  document.getElementById("save").addEventListener("click", () => {
      isPortraitDataSent = true;  // Set the flag when save is pressed
      sendPortraitData("save", 11);
  });

// Event listener for the info icon
document.querySelector('#info-icon').addEventListener('click', () => {
  const popup = document.querySelector('#info-popup');
  
  // Check if the popup is already visible
  if (popup.style.display === 'block') {
    // If it's visible, hide it
    popup.style.display = 'none';
  } else {
    // If it's hidden, show it and update the content
    popup.style.display = 'block';

    // Update the popup content based on the current section index
    updateInfoPopup(currentSectionIndex);  // Ensure currentSectionIndex is properly set
  }
});
  
// New function to update the popup content based on the section
function updateInfoPopup(currentSectionIndex) {
  const popup = document.querySelector('#info-popup');
  let popupContent = 'This is the default information for this section.';
  // Define specific info for certain sections based on their index
  const contentMap = {
    12: 'Chart Info here for section 12',  // Content for section 12
    13: 'Detailed chart info here for section 13',  // Content for section 13
  };

  // Check if there's specific content for the current index
  if (contentMap[currentSectionIndex]) {
    popupContent = contentMap[currentSectionIndex];  // Set the content based on the index
  }

  // Update the popup content
  popup.querySelector('p').textContent = popupContent;
}

  let isAnimating = false; // Prevent multiple animations at the same time

  // Function to hide all sections and reset their position
  function hideAllSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.remove('active', 'outgoing');
      // No need to set display to 'none', as opacity and transform will handle visibility
    });
  }
  
  function showCurrentSection() {
    const sections = document.querySelectorAll('section');

      // Reset styles to ensure visibility
  const vignetteOverlay = document.getElementById('vignette');
  vignetteOverlay.style.display = 'none';  // Hide it by default

  if (currentSectionIndex === 6) {
    const emotionSection = document.querySelector('#preview').parentNode;
    emotionSection.style.display = 'absolute'; // Make it visible
    document.getElementById('preview').innerText = `${emotion1} + ${emotion2}`;
  }

  if (currentSectionIndex === 0 || currentSectionIndex === 12 || currentSectionIndex === 13) {
    vignetteOverlay.style.display = 'flex';  // Show vignette for these sections
  }


    // if (currentSectionIndex >= 14) {
    //   currentSectionIndex = 0;
    //   currentSectionIndex = 0;
    //   const videoElement = document.querySelector('.video-overlay video');
    //   videoElement.style.display = 'none'; // Hide video completely
    //   return; // Exit early to ensure nothing else shows
    // }
  
    if (currentSectionIndex === 4 || currentSectionIndex === 6) {
      currentPage = currentSectionIndex;
      sendUserData();
    }
  
    const header = document.getElementById('header');

    // Hide all sections
    sections.forEach(section => section.classList.remove('active'));
  
  
    // Update header visibility
      if (currentSectionIndex === 0) {
        header.style.display = 'none';
      } else {
        header.style.display = 'flex';
        header.style.left = (currentSectionIndex === 13 || currentSectionIndex === 14) ? '10%' : '50%';
      }
    // Get the current section
    const currentSection = sections[currentSectionIndex];
    // Add the 'active' class (no need for requestAnimationFrame unless you need precise timing)
  
    if (currentSectionIndex <= 13) {
      currentSection.classList.add('active');
    }
    
    // Trigger overlay transitions
    updateOverlayTransitions();
    // Handle media transitions
    updateMediaSources(currentSectionIndex);
     // Update the popup message based on the current section
    updateInfoPopup(currentSection);
    const popup = document.querySelector('#info-popup');
    popup.style.display = 'none';

    console.log(`Showing section with index: ${currentSectionIndex}`);
  }

  
  function updateMediaSources(sectionIndex) {
    console.log("sectionIndex " + sectionIndex);
    const videoElement = document.querySelector('.video-overlay video');

    // Start fade-out
    videoElement.classList.remove('active'); // Trigger fade-out
    videoElement.style.opacity = '0'; // Ensure immediate visibility control

    // Determine the new video source and properties
    let newSrc = '';
    let transform = 'scale(1)';
    let targetOpacity = '1';

    if (sectionIndex === 0) {
        newSrc = 'assets/middle-rings.webm';
        targetOpacity = '0.2';
    } else if (sectionIndex === 1 || sectionIndex === 4 || sectionIndex === 8 ||  sectionIndex === 6) {
        newSrc = 'assets/answers.webm';
        targetOpacity = '0.4';
    } else if (sectionIndex === 2 || sectionIndex === 7 || sectionIndex === 10 || sectionIndex === 12) {
        newSrc = 'assets/middle-rings.webm';
        targetOpacity = '0.3';
    } else if (sectionIndex === 3 || sectionIndex === 5 || sectionIndex === 9) {
        newSrc = 'assets/questions.webm';
        targetOpacity = '0.8';
    } else if (sectionIndex === 11 || sectionIndex === 13 || sectionIndex === 14) {
        if (sectionIndex === 11) {
            newSrc = 'assets/answers.webm';
            targetOpacity = '0.8';
        } else {
            videoElement.style.display = 'none';
            return; // Exit early if no video is needed
        }
    } else {
        videoElement.style.display = 'none';
        return; // Exit early if no video is needed
    }

    // Hide the video immediately to prevent flashing
    videoElement.style.display = 'none';

    // Wait for fade-out to complete
    setTimeout(() => {
        // Only update the source if it is different
        if (videoElement.src !== newSrc) {
            videoElement.src = newSrc;
        }

        // Reset video properties and wait for it to load
        videoElement.style.transform = transform;
        videoElement.addEventListener('loadeddata', () => {
            videoElement.style.display = 'block'; // Show video again
            videoElement.classList.add('active'); // Trigger fade-in
            setTimeout(() => {
                videoElement.style.opacity = targetOpacity; // Apply target opacity
            }, 500); // Match fade-in duration
        }, { once: true });
    }, 500); // Short fade-out duration
}



  function updateOverlayTransitions() {
    const imageOverlay = document.getElementById('image-overlay');
    const vignetteOverlay = document.getElementById('vignette');

    imageOverlay.classList.add('active');
    imageOverlay.style.display = 'flex';
  
    // Logic to activate noise based on the current section
    if (currentSectionIndex === 0 || currentSectionIndex === 1 || currentSectionIndex === 2 || currentSectionIndex === 11 ||currentSectionIndex === 12 || currentSectionIndex === 13) { //sections with vignettes
      vignetteOverlay.classList.add('active');
      vignetteOverlay.classList.add('active');
      vignetteOverlay.style.display = 'flex';
    } 
  }

  

///////////QUIZ BUTTON HANDLING
function getColorByEmotion(emotion) {
  const emotionColor = colors.find(colorObj => colorObj[emotion.toLowerCase()]);
  return emotionColor ? emotionColor[emotion.toLowerCase()] : "#000000"; // Default to black if not found
}

function getTrueColorByEmotion(emotion) {
  const emotionColor = trueColors.find(colorObj => colorObj[emotion.toLowerCase()]);
  return emotionColor ? emotionColor[emotion.toLowerCase()] : "#000000"; // Default to black if not found
}

function getBaseColorByEmotion(emotion) {
  const emotionColor = baseColors.find(colorObj => colorObj[emotion.toLowerCase()]);
  return emotionColor ? emotionColor[emotion.toLowerCase()] : "#111111"; // Default if not found
}


// Track the selected button for both quizzes
let selectedButton1 = null; // To store the previously selected button in #quiz1
let selectedButton2 = null; // To store the previously selected button in #quiz2
let color1 = "#3ebfff";
let color2 = "#3ebfff";
let baseColor1 = "#0a007f";
let baseColor2 = "#0a007f";
let trueColor1 = "#0a007f";
let trueColor2 = "#0a007f";

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
  trueColor1 = getTrueColorByEmotion(emotion1);
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
  trueColor2 = getTrueColorByEmotion(emotion2);
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

  // applyComboGradientAnimation(color1, baseColor1, baseColor2, color2); // combo
  applyRadialGradientAnimation(trueColor2, trueColor1); // combo REAL
  
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
  sendUserData();

  // 7-second timer to automatically click the "next" button for page 8
  setTimeout(() => {
      const nextButton = document.querySelector('.next[data-next="8"]');
      if (nextButton) {
          nextButton.click();  // Simulate a click on the button
      }
  },6000); // 7-second delay
});


// Add 3-second delay for the 'I'M READY' button in the Portrait Start Section
document.querySelector('.next[data-next="8"]').addEventListener('click', () => {
// Show the Combined Emotion Message Section
const emotionSection = document.querySelector('.emotion-section');
if (emotionSection) {
  emotionSection.style.display = 'flex'; // Make it visible
}

// Display the Portrait button after a 3-second delay
setTimeout(() => {
  const portraitButton = document.querySelector('#portrait'); // Replace with the actual selector for the button
  if (portraitButton) {
    portraitButton.style.display = 'block'; // Show the button after 3 seconds
  }
}, 6000); // 6-second delay
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

      // Section 2 -> Section 3 (Timer-based transition, independent of pulse state)
  if (currentPage === 2) {
    setTimeout(() => {
      const nextButton = document.querySelector('.next[data-next="3"]');
      if (nextButton) {
        nextButton.click();
      }
    }, 4000); // 4-second delay for section 2 to section 3 transition
}
    // Send user data based on currentPage value
    if (currentPage > 1 && currentPage < 9 && currentPage != 6 && currentPage !=4 && currentPage !=7) {
      applyRadialGradientAnimation('#3ebfff', '#0a007f'); // default
      // if (currentPage == 8) {
      //   // applyComboGradientAnimation(color1, baseColor1, baseColor2, color2); // combo
      //   applyRadialGradientAnimation(trueColor1, trueColor2); // combo REAL
      // } else {
      //   applyRadialGradientAnimation('#3ebfff', '#0a007f'); // default
      // }
      sendUserData();
    } else if (currentPage >= 9 && currentPage < 12) {
      applyRadialGradientAnimation('#3ebfff', '#0a007f'); // default
      if (currentPage == 10) {
        sendPortraitData("", currentPage);
      }
      if (!isPortraitDataSent) {
        sendPortraitData("", currentPage);
      }
    } else if (currentPage >= 12 && currentPage <= 13) {
      applyRadialGradientAnimation('#3ebfff', '#0a007f'); // default
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
          } else if (currentPage == 6) {
              document.body.style.background = `radial-gradient(${color2}, ${getBaseColorByEmotion(emotion2)})`; // Use base color for emotion1

          } else {
              applyRadialGradientAnimation('#3ebfff', '#0a007f'); //default 
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
});

// Initialize inactivity timer and popup functionality
let inactivityTimeout;
let popupTimeout;

// Reset inactivity timer on user interaction
function resetInactivityTimer() {
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(showInactivityPopup, 6000000); // 60 seconds of inactivity
}

// Show inactivity popup after timeout
function showInactivityPopup() {
    if (currentSectionIndex === 0) return; // Skip popup if on Section 1

    const popup = document.getElementById('inactivityPopup');
    popup.style.display = 'block';
    popup.style.backgroundColor = 'rgba(30, 30, 30, 0.95)';
    popup.style.borderRadius = '8px';
    popup.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    popup.style.border = 'none';

    // Start 20-second countdown for user to respond
    popupTimeout = setTimeout(() => {
        resetToSection1();
    }, 20000); // 20 seconds to respond
}

// Reset the page to section 1
function resetToSection1() {

  isPortraitDataSent = false

  // Reset styles and visibility for the "HOLD FOR A PORTRAIT" section
  const holdSection = document.getElementById('hold'); // Select the section by ID
  if (holdSection) {
      holdSection.style.display = 'flex'; // Ensure the section is visible
  }

  // Reset the "I'M READY" button's visibility
  const portraitButton = document.getElementById('portrait');
  if (portraitButton) {
      portraitButton.style.display = 'none'; // Hide it initially
  }
  // Hide the popup if it's still visible
  applyRadialGradientAnimation('#3ebfff', '#0a007f'); //default
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
  document.getElementById('fingerprint').style.display = 'none';

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
   // currentSectionIndex = 0;
    showCurrentSection(); // Now this function is already defined and will work
    console.log("User inactive: Resetting to section 1");
   // sendFinishData();

    setTimeout(() => {
      window.location.reload();
    },2000); // 5000ms = 5 seconds

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

