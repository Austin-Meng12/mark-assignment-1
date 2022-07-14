// Student Grades Assignment Start Code

// HTML Variables
let containerEl = document.getElementById("container");
let outputEl = document.getElementById("output");
let goBtnEl = document.getElementById("go");
let menuEl = document.getElementById("menu");

// Global Variable
let grades = [10, 70, 80, 65, 90, 83];

let maxGrade = 100; // grade values should be b/t 0 and max
//return a random integer between low and high
//return a random decimal between low(inclusive) and high (exclusive)

function randomDec(low,high) {
  return Math.random() *(high-low) +low;


}
//return a random integer between low and high
function randomInt(low,high) {
  return Math.floor(Math.random() *(high-low)+low);

}
// return a random rgb string
function randomRGB() {
  let r=randomInt(0,500);
  let g=randomInt(0,500);
  let b=randomInt(0,500);

  return "rgb("+ r +", "+g+", " +b+")";
} 


// Display Data
drawArray();

// Main Menu & Go Button
goBtnEl.addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = menuEl.value;

  // Take action based on menu selection
  if (selection === "first40") {
    firstTo40();
    
  } else if (selection === "last50") {
    lastTo50();
  } else if (selection === "random100") {
    randomTo100();
  } else if (selection === "addRandom") {
    addRandomGrade();
  } else if (selection === "removeLast") {
    removeLastGrade();
  } else if (selection === "count50") {
    countBelow50();
  } else if (selection === "change50") {
    lowGradesTo50();
  } else if (selection === "increase10") {
    increaseGradesBy10();
  } else if (selection === "decrease10") {
    decreaseGradesBy10();
  }

  // Redraw array to show any changes
  drawArray();
}

// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function firstTo40() {
  // Set the grade of the first student to 40.
  outputEl.innerHTML = "First grade to 40";
  grades[0] = 40
  drawArray();
  
}

function lastTo50() {
  // Set the grade of the last student to 50.
  outputEl.innerHTML = "Last grade to 50";
  
    grades[grades.length - 1] = 50
  

  drawArray();
}

function randomTo100() {
  // Set the grade of a random student to 100.
  outputEl.innerHTML = "Random grade to 100";
  
  grades[randomInt(0,grades.length)] = 100;
  drawArray();
}

function addRandomGrade() {
  // Add a random grade between 0 and 100 to the end of the array.
  outputEl.innerHTML = "Add random grade";
  
  grades.push([Math.random(grades.length)]*100);
  drawArray();
}

function removeLastGrade() {
  // Remove the last grade.
  outputEl.innerHTML = "Remove the last grade";
  let poppedvalue = grades.pop();
  drawArray();
}

function countBelow50() {
  // Count how many grades are below 50.  Output the result.

      let divStr ="";
      let count = 0;
      for (let i = 0; i < grades.length; i++){ 
        if (grades[i] <= 50) 
          count++;
      
          
}
outputEl.innerHTML = divStr + `<p> count:${count}</p>`

}
  


function lowGradesTo50() {
  // Change all grades that are below 50 to be equal to 50.
  outputEl.innerHTML = "Change low grades to 50";
  for (let n = 0; n < grades.length; n++) {
    if (grades[n] < 50) {
      grades[n] = 50;
}
  }
  drawArray();
}

function increaseGradesBy10() {
  // Increase each grade by 10%.
  outputEl.innerHTML = "Increase all grades by 10%";
  for (let n = 0; n < grades.length; n++) 
    grades[n] += 10
  
  drawArray();
}

function decreaseGradesBy10() {
  // Decrease each grade by 10%.
  outputEl.innerHTML = "Decrease all grades by 10%";
  for (let n = 0; n < grades.length; n++) 
  grades[n] -= 10
  drawArray();
}


// Function to draw current state of grades array
function drawArray() {
  let outputStr = "";
  let divHeight;
  for (let i = 0; i < grades.length; i++) {
    divHeight = (grades[i] / maxGrade) * 600; // Scale grades to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  containerEl.innerHTML = outputStr;
}
