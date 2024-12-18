var locations = [
  { id: 0, name: "LOVE", color: "#DD524E" },
  { id: 1, name: "EXCITEMENT", color: "#7CF2F6" },
  { id: 2, name: "PURPOSE", color: "#7A2791" },
  { id: 3, name: "HOPE", color: "#FFBB00" },
  { id: 4, name: "SUCCESS", color: "#006850" },
  { id: 5, name: "RECOGNITION", color: "#D6B036" },
  { id: 6, name: "FEAR", color: "#FF7222" },
  { id: 7, name: "ANTICIPATION", color: "#38B0DD" },
  { id: 8, name: "GRATITUDE", color: "#003E78" },
  { id: 9, name: "INSPIRATION", color: "#BF77F5" },
  { id: 10, name: "JOY", color: "#ED88AD" },
  { id: 11, name: "PASSION", color: "#019C60" }
];

const emotionData = {
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
      "7": "Your adventurous nature compels you to embrace the thrill of new experiences and bravely face the unknown. ",
      "8": "You seek out exciting opportunities every chance you get. For you, every sunrise brings a new adventure.",
      "9": "Your thankful nature ensures that you will always find excitement in life’s simplest joys and most profound moments.",
      "10": "Your visionary spirit finds inspiration everywhere and uses it to spark surprising creative pursuits. For you, life is an art.",
      "11": "Genuinely excited by life, you are able to find joy and inspiration in every pursuit. The more challenging, the better.",
      "12": "Your passionate heart is fueled by excitement at every turn. You simply love life and find it endlessly entertaining",
      "13": "You are a determined soul who welcomes challenges and achieves your goals with purposeful resolve.",
      "14": "As a forward thinker, you anticipate moments to channel your purpose in every direction -- and with every decision.",
      "15": "Determined yet contented, you are grateful for opportunities to explore your life’s purpose and express your gratitude.",
      "16": "Your driven nature and creative mind delight in finding inspiration in the guiding light of your life’s purpose.",
      "17": "Your joyful soul finds fulfilment in celebrating the purpose that underscores your personal and professional achievements.",
      "18": "You pursue your purpose with passion and dedication until you achieve your goals and realize your ambitions.",
      "19": "Your wholehearted embrace of optimism allows you to move forward and achieve your goals despite any challenging circumstances.",
      "20": "As a hopeful dreamer, you anticipate brighter tomorrows and look forward to them with endless excitement",
      "21": "You are thankful for the unwavering presence of hope in your life. You see reasons for optimism around every corner.",
      "22": "Your creative muse is hope. You find endless inspiration in the transformative power of optimistic expectation.",
      "23": "Your joyful heart allows you to find happiness in life’s smallest victories and see the promise in all situations.",
      "24": "Your hope-filled attitude is driven by your pursuit of the better future you seek for yourself and others.",
      "25": "As a high achiever, you nimbly overcome obstacles to reach new heights and set new personal bests.",
      "26": "You are a forward-moving force of nature who anticipates success with every step you take. Your eyes are always on the prize.",
      "27": "Motivated by success, you are profoundly appreciative of the journeys you take to achieve your goals.",
      "28": "Creative and innovative, the pursuit of greatness itself is what inspires you to keep striving and achieving.",
      "29": "As familiar with success as you have become, you find great joy in the continuous rewards of hard work.",
      "30": "A driven high achiever, you are fueled by great passion to continue succeeding in everything you do.",
      "31": "You thrive on recognition, and your quest for it allows you to face any hurdles in your pursuit of success.",
      "32": "As a high achiever, you seek validation for your efforts and recognition for your many accomplishments.",
      "33": "Your grateful nature keeps you humble as you accept recognition for your successes. You never take applause for granted. ",
      "34": "As an inspired artist, you are driven to continue your winning streak by the affirming gaze of recognition.",
      "35": "You find great joy in achieving your goals and revel in the warm glow of recognition for your efforts.",
      "36": "A passionate pursuer of many goals, you thrive on the recognition you receive when you achieve them."
  }
};

var firstChord = null;  // Currently selected first chord
var secondChord = null; // Currently selected second chord

let flows = [];
var svg, matrix = [], totalCount = 0;
var chord, g, arc, grads;

fetch('/flows.json')
  .then(response => response.json())
  .then(data => {
      flows = data;
      drawChord(flows)
  })
  .catch(error => {
      console.error('Error loading flows.json:', error);
  });

  function getChordNameById(id) {
    const location = locations.find(location => location.id === id);
    return location ? location.name : null; // Return name if found, otherwise null
  }
  
  function resetChordData() {
    // Reset the selected chords
    firstChord = null;
    secondChord = null;
    showAllChords();
  
    console.log("Chord data reset.");
  }

  function showAllChords() {
    // Reset all arcs to be fully visible
    d3.selectAll("g.group .arc")
    .style("opacity", 1); // Set all arcs to full opacity
    
    svg.selectAll("path.chord")
        .style("fill-opacity", "0.7")
        .style("stroke-opacity", "1");
    
    document.getElementById('chord_pair_message').style.display = 'none';
    // Reset indices
    firstChord = null;
    secondChord = null;
    sendChordData();
  }

  function updateFlowData(answer1, answer2) {
    // Convert the answers to uppercase
    let answer1Upper = answer1.toUpperCase();
    let answer2Upper = answer2.toUpperCase();

    // Find location object based on uppercase names
    let location1 = locations.find(location => location.name === answer1Upper);
    let location2 = locations.find(location => location.name === answer2Upper);

    // Check if location1 and location2 are found
    if (!location1 || !location2) {
        console.error('Invalid location name(s) provided:', answer1Upper, answer2Upper);
        return; // Early return if any location is not found
    }

    // Get the ids from the locations
    let id1 = location1.id;
    let id2 = location2.id;

    console.log('id1:', id1, 'id2:', id2);
    console.log('Flows array:', flows);

    // Find the flow from id1 to id2 and id2 to id1
    let flow1 = flows.find(flow => flow.from === id1 && flow.to === id2);
    let flow2 = flows.find(flow => flow.from === id2 && flow.to === id1);

    // Log to check if flows are being found
    console.log('Flow from ' + id1 + ' to ' + id2 + ':', flow1);
    console.log('Flow from ' + id2 + ' to ' + id1 + ':', flow2);

    // Increment the quantity for both flows (if they exist)
    if (flow1) {
        flow1.quantity += 1;
        console.log('Updated flow from ' + id1 + ' to ' + id2 + ' quantity:', flow1.quantity);
    }
    if (flow2) {
        flow2.quantity = flow1.quantity; // Update flow2 with the same quantity
        console.log('Updated flow from ' + id2 + ' to ' + id1 + ' quantity:', flow2.quantity);
    }

    // Send the updated flows array directly as a JavaScript object (no need to manually format the JSON)
    fetch('/update-flows', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ flows: flows }) // Send the raw flows array directly
    })
    .then(response => response.json())
    .then(data => {
        console.log('Flows updated successfully:');
    })
    .catch(error => {
        console.error('Error updating flows:', error);
    });
    drawChord(flows);
}

function drawChord(flows) {
    //Map list of data to matrix
  flows.forEach(function(flow) {
    if (!matrix[flow.from]) {
      matrix[flow.from] = [];
    }
    matrix[flow.from][flow.to] = flow.quantity;
    totalCount += flow.quantity;
  });

  /*//////////////////////////////////////////////////////////
  /////////////// Initiate Chord Diagram /////////////////////
  //////////////////////////////////////////////////////////*/
  var size = 1000;
  var margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
  };


  // Initiate the SVG only once
  if (!svg) {
    var size = 1000;
    var margin = {
      top: 50,
      right: 50,
      bottom: 50,
      left: 50
    };

    var width = size - margin.left - margin.right;
    var height = size - margin.top - margin.bottom;
    var innerRadius = Math.min(width, height) * .39;
    var outerRadius = innerRadius * 1.22;
    var focusedChordGroupIndex = null;

  /*Initiate the SVG*/
  //D3.js v3!
  svg = d3.select("#chart").append("svg:svg")
    .attr("id", "chart-svg") // Add this line
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("svg:g")
    .attr("transform", "translate(" + (margin.left + width / 2) + "," + (margin.top + height / 2) + ")");
}

  chord = customChordLayout() //Using custom chord layout to order chords by adjacency so that they don't cross.
    .padding(0.02)
    .sortChords(d3.ascending) /*which chord should be shown on top when chords cross. Now the biggest chord is at the top*/
    .matrix(matrix);

/*//////////////////////////////////////////////////////////
////////////////// Draw outer Arcs /////////////////////////
//////////////////////////////////////////////////////////*/
  arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

  g = svg.selectAll("g.group")
    .data(chord.groups)
    .enter().append("svg:g")
    .attr("class", function(d) {
      return "group " + locations[d.index].id;
    });

  g.append("svg:path")
    .attr("class", "arc")
    .style("stroke", function(d) {
      return d3.rgb(locations[d.index].color).brighter();
    })
    .style("fill", function(d) {
      return locations[d.index].color;
    })
    .attr("d", arc)
    .on("click", function(d) {
      highlightChords(d.index)
    });

/*//////////////////////////////////////////////////////////
////////////////// Initiate Names //////////////////////////
//////////////////////////////////////////////////////////*/


// Append paths for text to follow
g.append("path")
  .attr("id", function (d, i) {
    return `textPath-${i}`; // Unique ID for each path
  })
  .attr("d", function (d) {
    const radius = innerRadius + 110; // Define the radius for the text
    const startAngle = d.startAngle - Math.PI / 2; // Adjust angles for SVG coordinates
    const endAngle = d.endAngle - Math.PI / 2;

    const startX = radius * Math.cos(startAngle);
    const startY = radius * Math.sin(startAngle);
    const endX = radius * Math.cos(endAngle);
    const endY = radius * Math.sin(endAngle);

    // Create a circular arc path
    return `
      M ${startX},${startY}
      A ${radius},${radius} 0 0,1 ${endX},${endY}
    `;
  })
  .style("fill", "none") // Invisible path
  .style("stroke", "none"); // Ensure the path is not visible

// Add text along the path
g.append("text")
  .append("textPath")
  .attr("xlink:href", function (d, i) {
    return `#textPath-${i}`; // Link text to corresponding path
  })
  .attr("startOffset", "50%") // Center the text on the arc
  .style("text-anchor", "middle") // Align text to the middle of the path
  .style("font-size", "20px")
  .style("font-family", "Gotham, sans-serif")
  .style("font-weight", "bold")
  .attr("fill", "#FFF")
  .text(function (d, i) {
    return locations[i].name; // Set the text for each arc
  });

/*//////////////////////////////////////////////////////////
//////////////// Initiate inner chords /////////////////////
//////////////////////////////////////////////////////////*/
chords = svg.selectAll("path.chord")
  .data(chord.chords)
  .enter().append("svg:path")
  .attr("class", "chord")
  .attr("class", function(d) {
    return "chord chord-source-" + d.source.index + " chord-target-" + d.target.index;
  })
  .style("fill-opacity", "0.7")
  .style("stroke-opacity", "1")
  //Change the fill to reference the unique gradient ID
  //of the source-target combination
  .style("fill", function(d) {
    return "url(#chordGradient-" + d.source.index + "-" + d.target.index + ")";
  })
  .style("stroke", function(d) {
    return "url(#chordGradient-" + d.source.index + "-" + d.target.index + ")";
  })
  //.style("stroke", function (d) { return d3.rgb(locations[d.source.index].color).brighter(); })
  //.style("fill", function (d) { return locations[d.source.index].color; })
  .attr("d", d3.svg.chord().radius(innerRadius))
  .on("click", function() {
    showAllChords()
  });

//Cf https://www.visualcinnamon.com/2016/06/orientation-gradient-d3-chord-diagram
//Create a gradient definition for each chord
grads = svg.append("defs").selectAll("linearGradient")
  .data(chord.chords)
  .enter().append("linearGradient")
  //Create a unique gradient id per chord: e.g. "chordGradient-0-4"
  .attr("id", function(d) {
    return "chordGradient-" + d.source.index + "-" + d.target.index;
  })
  //Instead of the object bounding box, use the entire SVG for setting locations
  //in pixel locations instead of percentages (which is more typical)
  .attr("gradientUnits", "userSpaceOnUse")
  //The full mathematical formula to find the x and y locations
  .attr("x1", function(d, i) {
    return innerRadius * Math.cos((d.source.endAngle - d.source.startAngle) / 2 +
      d.source.startAngle - Math.PI / 2);
  })
  .attr("y1", function(d, i) {
    return innerRadius * Math.sin((d.source.endAngle - d.source.startAngle) / 2 +
      d.source.startAngle - Math.PI / 2);
  })
  .attr("x2", function(d, i) {
    return innerRadius * Math.cos((d.target.endAngle - d.target.startAngle) / 2 +
      d.target.startAngle - Math.PI / 2);
  })
  .attr("y2", function(d, i) {
    return innerRadius * Math.sin((d.target.endAngle - d.target.startAngle) / 2 +
      d.target.startAngle - Math.PI / 2);
  });

//Set the starting color (at 0%)
grads.append("stop")
  .attr("offset", "0%")
  .attr("stop-color", function(d) {
    return locations[d.source.index].color;
  });

//Set the ending color (at 100%)
grads.append("stop")
  .attr("offset", "100%")
  .attr("stop-color", function(d) {
    return locations[d.target.index].color;
  });


/*//////////////////////////////////////////////////////////
////////////////// Extra Functions /////////////////////////
//////////////////////////////////////////////////////////*/

/*Returns an array of tick angles and labels, given a group*/
function groupTicks(d) {
  var anglePerPerson = (d.endAngle - d.startAngle) / d.value;
  var personsPerPercent = totalCount / 100;
  return d3.range(0, d.value, personsPerPercent).map(function(v, i) {
    return {
      angle: v * anglePerPerson + d.startAngle,
      label: i % 5 ? null : v / personsPerPercent + "%"
    };
  });
};


function highlightChords(index) {
  console.log(`Clicked Chord Index: ${index}`); // Log the clicked chord index

  // Log the entire SVG content to see the structure
  // console.log(svg.node().innerHTML); // Log SVG content for debugging

  // Generate the selector for the arc and text
  const arcSelector = `.group.${index} .arc`;
  const textSelector = `.group.${index} .titles`;

  // console.log(`Arc Selector: ${arcSelector}`); // Log the arc selector
  // console.log(`Text Selector: ${textSelector}`); // Log the text selector

  // If firstChord is not set, set it and show all connections
  if (firstChord === null) {
      firstChord = index;
      console.log(`First Chord Set: ${firstChord}`); // Log the first chord set
      showAllConnections(firstChord);
      applyVisualFeedback();
      sendChordData();  // Send data after setting firstChord
      return;
  }

  // If the clicked chord is the same as firstChord and secondChord is null
  if (firstChord === index && secondChord === null) {
      // console.log(`Resetting to show all connections for First Chord: ${firstChord}`);
      firstChord = null; // Reset firstChord
      applyVisualFeedback();
      showAllChords(); // Show all connections for the first chord
      return;
  }

  // If the clicked chord is the same as firstChord and secondChord is set
  if (firstChord === index && secondChord !== null) {
      // console.log(`Promoting Second Chord: ${secondChord} to First Chord`);
      // Reset to show connections for secondChord
      showAllConnections(secondChord);
      firstChord = secondChord; // Promote secondChord to firstChord
      secondChord = null; // Reset secondChord
      applyVisualFeedback();
      // sendChordData();  // Send data after resetting firstChord
      return;
  }

  // If secondChord is not set, set it to the clicked index
  if (secondChord === null) {
      secondChord = index;
      // console.log(`Second Chord Set: ${secondChord}`); // Log the second chord set
      var hasConnection = checkConnection(firstChord, secondChord);

      if (hasConnection) {
          console.log(`Highlighting connection between: ${firstChord} and ${secondChord}`);
          // Highlight only the connection between firstChord and secondChord
          hideAllChords();
          highlightConnection(firstChord, secondChord);

          chordEmotion1 = getChordNameById(firstChord)
          console.log("chord emo1: " + chordEmotion1);
          chordEmotion2 = getChordNameById(secondChord)
          console.log("chord emo2: " + chordEmotion2);
          findEmotionPairMessage(chordEmotion1, chordEmotion2, emotionData);

        } else {
          console.log(`No connection found between: ${firstChord} and ${secondChord}`);
          // No connection found, hide all connections
          // hideAllChords();
          showAllConnections(secondChord);
          firstChord = secondChord; // Promote secondChord to firstChord
          secondChord = null; // Reset secondChord
      }
      applyVisualFeedback();
      sendChordData(); 
      return;
  } else {
      // If secondChord is set, check if it's the same as the clicked index
      if (secondChord === index) {
          console.log(`Unhighlighting Second Chord: ${secondChord}`);
          // If clicking on the second chord, unhighlight it and show connections of the first chord
          secondChord = null;
          showAllConnections(firstChord);
          applyVisualFeedback();
          // sendChordData(); 
      } else {
          console.log(`Updating Second Chord to: ${secondChord}`);
          // If clicking a new chord, update secondChord and show connections
          secondChord = index;
          var hasConnection = checkConnection(firstChord, secondChord);

          if (hasConnection) {
              console.log(`Highlighting connection between: ${firstChord} and ${secondChord}`);
              // Highlight only the connection between firstChord and secondChord
              hideAllChords();
              highlightConnection(firstChord, secondChord);

              chordEmotion1 = getChordNameById(firstChord)
              console.log("chord emo1: " + chordEmotion1);
              chordEmotion2 = getChordNameById(secondChord)
              console.log("chord emo2: " + chordEmotion2);
              findEmotionPairMessage(chordEmotion1, chordEmotion2, emotionData);

          } else {
              console.log(`No connection found between: ${firstChord} and ${secondChord}`);
              // No connection found, hide all connections
              showAllConnections(secondChord);
              firstChord = secondChord; // Promote secondChord to firstChord
              secondChord = null; // Reset secondChord
          }
          applyVisualFeedback();
          // sendChordData(); 
      }
      sendChordData(); 
  }
}

// Function to apply visual feedback
function applyVisualFeedback() {
  // Select all arc elements
  d3.selectAll("g.group .arc")
      .style("opacity", function(d) {
          // Check if the arc index matches either of the selected chords
          if (firstChord !== null && d.index === firstChord) {
              return 1; // Full opacity for firstChord
          }
          if (secondChord !== null && d.index === secondChord) {
              return 1; // Full opacity for secondChord
          }
          return 0.3; // Dim all other arcs
      });
}

// Function to show all connections for a given chord
function showAllConnections(chordIndex) {
  hideAllChords(); // Hide all first
  d3.selectAll(".chord-source-" + chordIndex + ", .chord-target-" + chordIndex)
      .style("fill-opacity", "0.7")
      .style("stroke-opacity", "1");
}

// Function to highlight the connection between two chords
function highlightConnection(chord1Index, chord2Index) {
  // Clear previous highlights
  hideAllChords();

  // Highlight only the specific connection
  d3.selectAll("path.chord")
      .filter(function(d) {
          return (d.source.index === chord1Index && d.target.index === chord2Index) ||
                 (d.source.index === chord2Index && d.target.index === chord1Index);
      })
      .style("fill-opacity", "0.7")
      .style("stroke-opacity", "1");
}

// Function to check if there is a connection between two chords
function checkConnection(chord1Index, chord2Index) {
return flows.some(flow => 
  ((flow.from === chord1Index && flow.to === chord2Index) || 
  (flow.from === chord2Index && flow.to === chord1Index)) && flow.quantity > 0
);
}

function hideAllChords() {
  document.getElementById('chord_pair_message').style.display = 'none';
  svg.selectAll("path.chord")
      .style("fill-opacity", "0")
      .style("stroke-opacity", "0");
}


////////////////////////////////////////////////////////////
//////////// Custom Chord Layout Function //////////////////
/////// Places the Chords in the visually best order ///////
///////////////// to reduce overlap ////////////////////////
////////////////////////////////////////////////////////////
//////// Slightly adjusted by Nadieh Bremer ////////////////
//////////////// VisualCinnamon.com ////////////////////////
////////////////////////////////////////////////////////////
////// Original from the d3.layout.chord() function ////////
///////////////// from the d3.js library ///////////////////
//////////////// Created by Mike Bostock ///////////////////
////////////////////////////////////////////////////////////
function customChordLayout() {
  var ε = 1e-6,
    ε2 = ε * ε,
    π = Math.PI,
    τ = 2 * π,
    τε = τ - ε,
    halfπ = π / 2,
    d3_radians = π / 180,
    d3_degrees = 180 / π;
  var chord = {},
    chords, groups, matrix, n, padding = 0,
    sortGroups, sortSubgroups, sortChords;

  function relayout() {
    var subgroups = {},
      groupSums = [],
      groupIndex = d3.range(n),
      subgroupIndex = [],
      k, x, x0, i, j;
    var numSeq;
    chords = [];
    groups = [];
    k = 0, i = -1;

    while (++i < n) {
      x = 0, j = -1, numSeq = [];
      while (++j < n) {
        x += matrix[i][j];
      }
      groupSums.push(x);
      //////////////////////////////////////
      ////////////// New part //////////////
      //////////////////////////////////////
      for (var m = 0; m < n; m++) {
        numSeq[m] = (n + (i - 1) - m) % n;
      }
      subgroupIndex.push(numSeq);
      //////////////////////////////////////
      //////////  End new part /////////////
      //////////////////////////////////////
      k += x;
    } //while

    k = (τ - padding * n) / k;
    x = 0, i = -1;
    while (++i < n) {
      x0 = x, j = -1;
      while (++j < n) {
        var di = groupIndex[i],
          dj = subgroupIndex[di][j],
          v = matrix[di][dj],
          a0 = x,
          a1 = x += v * k;
        subgroups[di + "-" + dj] = {
          index: di,
          subindex: dj,
          startAngle: a0,
          endAngle: a1,
          value: v
        };
      } //while

      groups[di] = {
        index: di,
        startAngle: x0,
        endAngle: x,
        value: (x - x0) / k
      };
      x += padding;
    } //while

    i = -1;
    while (++i < n) {
      j = i - 1;
      while (++j < n) {
        var source = subgroups[i + "-" + j],
          target = subgroups[j + "-" + i];
        if (source.value || target.value) {
          chords.push(source.value < target.value ? {
            source: target,
            target: source
          } : {
            source: source,
            target: target
          });
        } //if
      } //while
    } //while
    if (sortChords) resort();
  } //function relayout

  function resort() {
    chords.sort(function(a, b) {
      return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
    });
  }
  chord.matrix = function(x) {
    if (!arguments.length) return matrix;
    n = (matrix = x) && matrix.length;
    chords = groups = null;
    return chord;
  };
  chord.padding = function(x) {
    if (!arguments.length) return padding;
    padding = x;
    chords = groups = null;
    return chord;
  };
  chord.sortGroups = function(x) {
    if (!arguments.length) return sortGroups;
    sortGroups = x;
    chords = groups = null;
    return chord;
  };
  chord.sortSubgroups = function(x) {
    if (!arguments.length) return sortSubgroups;
    sortSubgroups = x;
    chords = null;
    return chord;
  };
  chord.sortChords = function(x) {
    if (!arguments.length) return sortChords;
    sortChords = x;
    if (chords) resort();
    return chord;
  };
  chord.chords = function() {
    if (!chords) relayout();
    return chords;
  };
  chord.groups = function() {
    if (!groups) relayout();
    return groups;
  };
  return chord;
};
}

/* SOCKETS */
// Create a WebSocket connection to the server
const socket = new WebSocket(`ws://${window.location.host}`);
function sendChordData() {
  const data = {
    section: "explore",
    page: "13",
    firstChord: getChordNameById(firstChord), // Convert firstChord id to name
    secondChord: getChordNameById(secondChord) // Convert secondChord id to name
  };
  
  if (socket.readyState === WebSocket.OPEN) {
    console.log("web socket data:", JSON.stringify(data));
    socket.send(JSON.stringify(data));
  }
}

function findEmotionPairMessage(emotion1, emotion2, data) {
  console.log(`Searching for combination between ${emotion1} and ${emotion2}`);
  
  const emotionPairKey = Object.keys(data.emotion_pairs).find(key => {
    const pair = data.emotion_pairs[key];
    console.log("pair: " + pair);  // Log the current pair from the data
    console.log("pair1: " + pair[0]);  // Log the first emotion in the pair
    console.log("pair2: " + pair[1]);  // Log the second emotion in the pair

    // Check if the pair matches either order
    return (pair[0] === emotion1 && pair[1] === emotion2) || (pair[0] === emotion2 && pair[1] === emotion1);
  });

  if (!emotionPairKey) {
    console.log("No matching pair found.");
  }

  const combinationMessage = data.combinationMessages[emotionPairKey] || "Combined emotion message not found.";
  console.log(`Combination Key: ${emotionPairKey} Combo Message: ${combinationMessage}`);

  // Display the combination message on the page
  document.getElementById('chord_pair_message').style.display = 'block';
  document.getElementById('chord_pair_message').innerText = combinationMessage;
}

