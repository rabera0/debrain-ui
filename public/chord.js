var locations = [
  { id: 0, name: "Love", color: "#DD524E" },
  { id: 1, name: "Excitement", color: "#7CF2F6" },
  { id: 2, name: "Purpose", color: "#7A2791" },
  { id: 3, name: "Hope", color: "#FFBB00" },
  { id: 4, name: "Success", color: "#006850" },
  { id: 5, name: "Recognition", color: "#D6B036" },
  { id: 6, name: "Fear", color: "#FF7222" },
  { id: 7, name: "Anticipation", color: "#38B0DD" },
  { id: 8, name: "Gratitude", color: "#ffffff" },
  { id: 9, name: "Inspiration", color: "#BF77F5" },
  { id: 10, name: "Joy", color: "#ED88AD" },
  { id: 11, name: "Passion", color: "#019C60" }
];

var flows = [
  { from: 0, to: 0, quantity: 0 },
  { from: 0, to: 1, quantity: 0 },
  { from: 0, to: 2, quantity: 0 },
  { from: 0, to: 3, quantity: 0 },
  { from: 0, to: 4, quantity: 0 },
  { from: 0, to: 5, quantity: 0 },
  { from: 0, to: 6, quantity: 0 },
  { from: 0, to: 7, quantity: 86 },
  { from: 0, to: 8, quantity: 318 },
  { from: 0, to: 9, quantity: 30 },
  { from: 0, to: 10, quantity: 23 },
  { from: 0, to: 11, quantity: 67 },
  { from: 1, to: 0, quantity: 0 },
  { from: 1, to: 1, quantity: 0 },
  { from: 1, to: 2, quantity: 0 },
  { from: 1, to: 3, quantity: 0 },
  { from: 1, to: 4, quantity: 0 },
  { from: 1, to: 5, quantity: 0 },
  { from: 1, to: 6, quantity: 10 },
  { from: 1, to: 7, quantity: 78 },
  { from: 1, to: 8, quantity: 172 },
  { from: 1, to: 9, quantity: 90 },
  { from: 1, to: 10, quantity: 2 },
  { from: 1, to: 11, quantity: 10 },
  { from: 2, to: 0, quantity: 0 },
  { from: 2, to: 1, quantity: 0 },
  { from: 2, to: 2, quantity: 0 },
  { from: 2, to: 3, quantity: 0 },
  { from: 2, to: 4, quantity: 0 },
  { from: 2, to: 5, quantity: 0 },
  { from: 2, to: 6, quantity: 3 },
  { from: 2, to: 7, quantity: 11 },
  { from: 2, to: 8, quantity: 109 },
  { from: 2, to: 9, quantity: 2 },
  { from: 2, to: 10, quantity: 3 },
  { from: 2, to: 11, quantity: 12 },
  { from: 3, to: 0, quantity: 3 },
  { from: 3, to: 1, quantity: 0 },
  { from: 3, to: 2, quantity: 0 },
  { from: 3, to: 3, quantity: 0 },
  { from: 3, to: 4, quantity: 0 },
  { from: 3, to: 5, quantity: 0 },
  { from: 3, to: 6, quantity: 12 },
  { from: 3, to: 7, quantity: 43 },
  { from: 3, to: 8, quantity: 126 },
  { from: 3, to: 9, quantity: 207 },
  { from: 3, to: 10, quantity: 23 },
  { from: 3, to: 11, quantity: 10 },
  { from: 4, to: 0, quantity: 165 },
  { from: 4, to: 1, quantity: 0 },
  { from: 4, to: 2, quantity: 0 },
  { from: 4, to: 3, quantity: 0 },
  { from: 4, to: 4, quantity: 0 },
  { from: 4, to: 5, quantity: 0 },
  { from: 4, to: 6, quantity: 10 },
  { from: 4, to: 7, quantity: 23 },
  { from: 4, to: 8, quantity: 381 },
  { from: 4, to: 9, quantity: 40 },
  { from: 4, to: 10, quantity: 35 },
  { from: 4, to: 11, quantity: 21 },
  { from: 5, to: 0, quantity: 0 },
  { from: 5, to: 1, quantity: 0 },
  { from: 5, to: 2, quantity: 0 },
  { from: 5, to: 3, quantity: 0 },
  { from: 5, to: 4, quantity: 0 },
  { from: 5, to: 5, quantity: 0 },
  { from: 5, to: 6, quantity: 22 },
  { from: 5, to: 7, quantity: 35 },
  { from: 5, to: 8, quantity: 103 },
  { from: 5, to: 9, quantity: 67 },
  { from: 5, to: 10, quantity: 12 },
  { from: 5, to: 11, quantity: 0 },
  { from: 6, to: 0, quantity: 12 },
  { from: 6, to: 1, quantity: 220 },
  { from: 6, to: 2, quantity: 70 },
  { from: 6, to: 3, quantity: 0 },
  { from: 6, to: 4, quantity: 12 },
  { from: 6, to: 5, quantity: 8 },
  { from: 6, to: 6, quantity: 0 },
  { from: 6, to: 7, quantity: 0 },
  { from: 6, to: 8, quantity: 0 },
  { from: 6, to: 9, quantity: 0 },
  { from: 6, to: 10, quantity: 0 },
  { from: 6, to: 11, quantity: 0 },
  { from: 7, to: 0, quantity: 87 },
  { from: 7, to: 1, quantity: 20 },
  { from: 7, to: 2, quantity: 123 },
  { from: 7, to: 3, quantity: 143 },
  { from: 7, to: 4, quantity: 9 },
  { from: 7, to: 5, quantity: 2 },
  { from: 7, to: 6, quantity: 0 },
  { from: 7, to: 7, quantity: 0 },
  { from: 7, to: 8, quantity: 0 },
  { from: 7, to: 9, quantity: 0},
  { from: 7, to: 10, quantity: 0 },
  { from: 7, to: 11, quantity: 0 },
  { from: 8, to: 0, quantity: 120 },
  { from: 8, to: 1, quantity: 38 },
  { from: 8, to: 2, quantity: 96 },
  { from: 8, to: 3, quantity: 167 },
  { from: 8, to: 4, quantity: 3 },
  { from: 8, to: 5, quantity: 23 },
  { from: 8, to: 6, quantity: 0 },
  { from: 8, to: 7, quantity: 0 },
  { from: 8, to: 8, quantity: 0 },
  { from: 8, to: 9, quantity: 0 },
  { from: 8, to: 10, quantity: 0 },
  { from: 8, to: 11, quantity: 0 },
  { from: 9, to: 0, quantity: 30 },
  { from: 9, to: 1, quantity: 87 },
  { from: 9, to: 2, quantity: 9 },
  { from: 9, to: 3, quantity: 123 },
  { from: 9, to: 4, quantity: 376 },
  { from: 9, to: 5, quantity: 233 },
  { from: 9, to: 6, quantity: 0 },
  { from: 9, to: 7, quantity: 0 },
  { from: 9, to: 8, quantity: 0 },
  { from: 9, to: 9, quantity: 0 },
  { from: 9, to: 10, quantity: 0 },
  { from: 9, to: 11, quantity: 0 },
  { from: 10, to: 0, quantity: 23 },
  { from: 10, to: 1, quantity: 1 },
  { from: 10, to: 2, quantity: 9 },
  { from: 10, to: 3, quantity: 6 },
  { from: 10, to: 4, quantity: 197 },
  { from: 10, to: 5, quantity: 201 },
  { from: 10, to: 6, quantity: 0 },
  { from: 10, to: 7, quantity: 0 },
  { from: 10, to: 8, quantity: 0 },
  { from: 10, to: 9, quantity: 0 },
  { from: 10, to: 10, quantity: 0 },
  { from: 10, to: 11, quantity: 0 },
  { from: 11, to: 0, quantity: 0 },
  { from: 11, to: 1, quantity: 2 },
  { from: 11, to: 2, quantity: 0 },
  { from: 11, to: 3, quantity: 4 },
  { from: 11, to: 4, quantity: 67 },
  { from: 11, to: 5, quantity: 23 },
  { from: 11, to: 6, quantity: 0 },
  { from: 11, to: 7, quantity:0 },
  { from: 11, to: 8, quantity: 0 },
  { from: 11, to: 9, quantity: 0 },
  { from: 11, to: 10, quantity: 0 },
  { from: 11, to: 11, quantity: 0 }
];

var totalCount = 0;
var matrix = [];
var firstChord = null;  // Currently selected first chord
var secondChord = null; // Currently selected second chord

//Map list of data to matrix
flows.forEach(function(flow) {
  if (!matrix[flow.from]) {
    matrix[flow.from] = [];
  }
  matrix[flow.from][flow.to] = flow.quantity;
  totalCount += flow.quantity;
});

function resetChordData() {
  // Reset the selected chords
  firstChord = null;
  secondChord = null;
  showAllChords();

  // Clear the matrix and reset any relevant data
  // matrix = {};  // Assuming matrix is the data structure used for chord diagram flows
  // totalCount = 0; // Reset total count if you are tracking the sum of the flow quantities

  // // You might also want to reset the chart rendering here, depending on how the chart is drawn
  // if (chart) {
  //     chart.update(); // Assuming you have a chart object with an update method to redraw or reset it
  // }

  console.log("Chord data reset.");
}

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
var width = size - margin.left - margin.right;
var height = size - margin.top - margin.bottom;
var innerRadius = Math.min(width, height) * .39;
var outerRadius = innerRadius * 1.22;
var focusedChordGroupIndex = null;

/*Initiate the SVG*/
//D3.js v3!
var svg = d3.select("#chart").append("svg:svg")
  .attr("id", "chart-svg") // Add this line
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("svg:g")
  .attr("transform", "translate(" + (margin.left + width / 2) + "," + (margin.top + height / 2) + ")");

var chord = customChordLayout() //Using custom chord layout to order chords by adjacency so that they don't cross.
  .padding(0.02)
  .sortChords(d3.ascending) /*which chord should be shown on top when chords cross. Now the biggest chord is at the top*/
  .matrix(matrix);

/*//////////////////////////////////////////////////////////
////////////////// Draw outer Arcs /////////////////////////
//////////////////////////////////////////////////////////*/
var arc = d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius);

var g = svg.selectAll("g.group")
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


g.append("svg:text")
  .each(function(d) {
    d.angle = (d.startAngle + d.endAngle) / 2;  // Midpoint angle for each arc
  })
  .attr("dy", ".35em")
  .attr("class", "titles")
  .style("font-size", "20px")
  .style("font-family", "Gotham, sans-serif")  // Change font family to Gotham
  .style("font-weight", "bold")               // Set font weight to bold
  .attr("fill", "#FFF")
  .attr("text-anchor", function(d) {
    return d.angle > Math.PI ? "end" : "start";  // Text alignment (left or right)
  })

.attr("transform", function(d) {
  const angle = (d.angle * 180) / Math.PI - 90;  // Midpoint angle converted to degrees
  const radius = innerRadius + 110;

  // Calculate the text width and offset for centering
  const textWidth = this.getBBox().width;
  const offset = textWidth / 2;

  // console.log('Text Width:', textWidth);
  // console.log('Offset:', offset);

  // Bottom center of the circle (π), adjust with tolerance
  const bottomCenter = Math.PI;
  const tolerance = Math.PI / 3;  // 60 degrees tolerance on either side of the bottom
  const isBottomQuarter = d.angle > bottomCenter - tolerance && d.angle < bottomCenter + tolerance;

  // Flip logic: Apply 270° for bottom section, otherwise 90° for top
  const flip = isBottomQuarter ? 270 : 90;

  return (
    `rotate(${angle})` +                         // Rotate to align the text with the arc
    `translate(${radius}, 0)` +                    // Translate outward to position the text
    `translate(${-offset}, 0)` +                   // Shift text left by half its width to center it
    `rotate(${flip})`                             // Flip the text for readability if necessary
  );
})
.text(function(d, i) {
  return locations[i].name;  // Set the text for each arc
});




// g.append("svg:text")
// .each(function(d) {
//   d.angle = (d.startAngle + d.endAngle) / 2;
// })
// .attr("dy", ".35em")
// .attr("class", "titles")
// .style("font-size", "14px")
// .style("font-family", "sans-serif")
// .attr("fill", "#FFF")
// .attr("text-anchor", function(d) {
//   return d.angle > Math.PI ? "end" : "start";
// })
// .attr("transform", function(d) {
//   return (
//     "rotate(" + ((d.angle * 180) / Math.PI - 90) + ")" +  // Rotate to align with arc
//     "translate(" + (innerRadius + 55) + ",0)" +           // Translate to outer radius + offset
//     (d.angle > Math.PI ? "rotate(180)" : "")              // Flip text for readability on the left side
//   );
// })
// .text(function(d, i) {
//   return locations[i].name;
// });



/*//////////////////////////////////////////////////////////
//////////////// Initiate inner chords /////////////////////
//////////////////////////////////////////////////////////*/
var chords = svg.selectAll("path.chord")
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
var grads = svg.append("defs").selectAll("linearGradient")
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

/* SOCKETS */

// Create a WebSocket connection to the server

const socket = new WebSocket(`ws://${window.location.host}`);

function getChordNameById(id) {
  const location = locations.find(location => location.id === id);
  return location ? location.name : null; // Return name if found, otherwise null
}

function sendChordData() {
  const data = {
    section: "explore",
    page: 13,
    firstChord: getChordNameById(firstChord), // Convert firstChord id to name
    secondChord: getChordNameById(secondChord) // Convert secondChord id to name
  };
  
  if (socket.readyState === WebSocket.OPEN) {
    console.log("web socket data:", JSON.stringify(data));
    socket.send(JSON.stringify(data));
  }
}

function highlightChords(index) {
  // console.log(`Clicked Chord Index: ${index}`); // Log the clicked chord index

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
      // console.log(`First Chord Set: ${firstChord}`); // Log the first chord set
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
          // console.log(`Highlighting connection between: ${firstChord} and ${secondChord}`);
          // console.log(`Highlighting connection between: ${firstChord} and ${secondChord}`);
          // Highlight only the connection between firstChord and secondChord
          hideAllChords();
          highlightConnection(firstChord, secondChord);
        } else {
          // console.log(`No connection found between: ${firstChord} and ${secondChord}`);
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
          // console.log(`Unhighlighting Second Chord: ${secondChord}`);
          // If clicking on the second chord, unhighlight it and show connections of the first chord
          secondChord = null;
          showAllConnections(firstChord);
          applyVisualFeedback();
          // sendChordData(); 
      } else {
          // console.log(`Updating Second Chord to: ${secondChord}`);
          // If clicking a new chord, update secondChord and show connections
          secondChord = index;
          var hasConnection = checkConnection(firstChord, secondChord);

          if (hasConnection) {
              // console.log(`Highlighting connection between: ${firstChord} and ${secondChord}`);
              // Highlight only the connection between firstChord and secondChord
              hideAllChords();
              highlightConnection(firstChord, secondChord);
          } else {
              // console.log(`No connection found between: ${firstChord} and ${secondChord}`);
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

function showAllChords() {
  // Reset all arcs to be fully visible
  d3.selectAll("g.group .arc")
  .style("opacity", 1); // Set all arcs to full opacity
  
  svg.selectAll("path.chord")
      .style("fill-opacity", "0.7")
      .style("stroke-opacity", "1");

  // Reset indices
  firstChord = null;
  secondChord = null;
  sendChordData();
}

function hideAllChords() {
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
