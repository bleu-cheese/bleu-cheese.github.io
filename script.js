const questions = [
  {
    question: `Good morning sunshine! You've just opened your eyes to a brand
    new day. What time is it?`,
    choices: {
      "5:30am": ["James", "Isaak"],
      "Not sure, but it's 30 minutes before you leave for work" : ["Lydia"],
      "7am, a respectable time" : ["Ken", "Rose"],
      "Noon" : ["Abi"]
  },
    next: [1, 1, 1, 1]
  },
  {
    question: "What's the first thing you do?",
    choices: {
      "Sit on the edge of your bed with your eyes closed. Like a potato after being microwaved, you are resting ": ["Abi", "Ken"],
        "Get out of bed immediately" : ["James", "Mom"],
        "Hit snooze" : ["Lydia", "Isaak"]
      },
    next:[2, 2, 2]
  },
  {
    question: "Oh no! You're late! What do you do?",
    choices: {
      "Panic. Run out of the door, leaving things behind" : ["Lydia", "Mom"],
      "Eh, it's okay. Take your time." : ["Ken", "James"],
      "Remain calm. Think clearly. Accept your lateness and move quickly." : ["Isaak", "Abi"]
    },
    next:[3, 3, 3]
  },
  {
    question: "Your car breaks down!! What do you do?",
    choices: {
      "Call AAA because you are a member." : ["Ken"],
      "Panic" : ["Lydia", "Rose"],
      "Put airpods in. Poke around." : ["James"],
      "Roll up your sleeves and replace the tire yourself. No biggie." : ["Isaak", "Abi"]
    },
    next:[4, 4, 4, 4]
  },
  {
    question: "Your car is fine and you're on your way. You roll up to...",
    choices: {
      "A doctor’s office, because your life goal is to help people" : ["Abi", "Rose"],
      "A contractor’s office, where you work comfortably because it’s an in-between job that pays well and it’s chill. Why go somewhere else when this is good enough?" : ["James"],
      "A tech company because your identity and self-worth is in your career" : ["Lydia"],
      "The store. You are cooking family dinner tonight!" : ["Isaak", "Ken"]
    },
    next: [5, 5, 5, 6]
  },
  {
    question: "Your boss sees you walk in late. What do you tell them?",
    choices: {
      "You lie. You pretend you've been there the whole time" : ["Lydia"],
      "You tell them your car broke down but you prayed and God helped" : ["Ken", "Rose", "Isaak"],
      "You laugh and tell them the story because it's super funny" : ["Isaak", "James", "Abi"]
    },
    next: [7, 7, 7]
  },
  {
    question: "You walk into the store. What are you buying?",
    choices:
    {
      "You know everyone’s favorite foods. You’ve designed a menu based on that and cross-checked it against current sales to create a shopping list.": ["Lydia", "Rose"],
       "Steak (that you will grill yourself of course) and instant mashed potatoes" : ["James", "Ken"],
       "You’re trying a new dish with a complex, colorful palette. Requires many new ingredients and seasonings" : ["Isaak", "Abi"]
    },
    next: [7, 7, 7]
  },
  {
    question: "It's family dinner. The food is served. You are: ",
    choices: {
      "Serving each person food. You are happiest when you watch them enjoy what you’ve cooked" : ["Lydia", "Rose"],
      "Enjoying the food. Not much talking. Just enjoying." : ["Isaak", "Ken", "Abi"],
      "Checking the score under the table" : ["James", "Ken"]
    },
    next: [8, 8, 8]
  },
  {
    question: "Family fight!!! What role are you?",
    choices: {
      'Peacemaker, using humor. "Do you want this bowl of food in your face?"' : ["James"],
      'Peacemaker, using logic. "I hear you saying this, and I hear you saying this. Sounds like you agree on this point, and disagree on this point. Let’s keep eating!"' : ["Isaak"],
      "Sit and watch quietly. You do not take part in this. Let them duke it out." : ["Abi", "Rose"],
      "Main fighter and instigator. You either started this fight or fueled it." : ["Lydia", "Ken"]
    },
    next: []
  }
]

let currentQuestion = 0;
let userScore = {
  "James" : 0,
  "Abi" : 0,
  "Lydia" : 0,
  "Isaak" : 0,
  "Ken" :  0,
  "Rose" : 0
}
function startQuiz() {
  const questionContainer = document.getElementById("question")
  const choicesContainer = document.getElementById("choices")

  choicesContainer.innerHTML = "";
  questionContainer.innerHTML = questions[currentQuestion].question

  const returnChoices = questions[currentQuestion].choices
  const listOfChoices = Object.keys(returnChoices)

  listOfChoices.forEach((choice, index) => {
    let buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("class", "buttonDiv");
    buttonDiv.setAttribute("id", `buttonDiv${index}`);

    let button = document.createElement("button");
    button.setAttribute("class", "choiceButton");

    button.innerText = choice;
    button.onclick = function() {
      updateUserScore(returnChoices, choice);
      let nextIndex = questions[currentQuestion].next[index];

      if (nextIndex) {
        currentQuestion = nextIndex;
        startQuiz();
      }

      else {
        gameOver();
      }
    }
    choicesContainer.appendChild(buttonDiv);
    document.getElementById(`buttonDiv${index}`).appendChild(button);

  })
}
function updateUserScore(choiceMap, choice) {
  const membersToUpdate = choiceMap[choice];
  membersToUpdate.forEach((member) => {
    userScore[member] += 1;
  }
)

}

function gameOver() {
  let [highestScorer, highestScore] = Object.entries(userScore).reduce((max, entry) =>
    entry[1] > max[1] ? entry : max
  );
  window.location.href = `${highestScorer}.html`;
}
