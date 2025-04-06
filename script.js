const questions = [
  {
    question: `Good morning sunshine! You've just opened your eyes to a brand
    new day. What time is it?`, // 0
    choices: {
      "5:30am": ["James", "Isaak"],
      "Not sure, but it's 30 minutes before you leave for work" : ["Lydia"],
      "7am, a respectable time" : ["Ken", "Rose"],
      "Noon" : ["Abi"]
  },
    next: [1, 1, 1, 1]
  },
  {
    question: "What's the first thing you do?", // 1
    choices: {
      "Sit on the edge of your bed with your eyes closed. Like a potato after being microwaved, you are resting ": ["Abi", "Ken"],
        "Get out of bed immediately" : ["James", "Mom"],
        "Hit snooze" : ["Lydia", "Isaak"]
      },
    next:[2, 2, 2]
  },
  {
    question: "Oh no! You're late! What do you do?", // 2
    choices: {
      "Panic. Run out of the door, leaving things behind" : ["Lydia", "Mom"],
      "Eh, it's okay. Take your time." : ["Ken", "James"],
      "Remain calm. Think clearly. Accept your lateness and move quickly." : ["Isaak", "Abi"]
    },
    next:[3, 3, 3]
  },
  {
    question: "Your car breaks down!! What do you do?", // 3
    choices: {
      "Call AAA because you are a member." : ["Ken"],
      "Panic" : ["Lydia", "Rose"],
      "Put airpods in. Poke around." : ["James"],
      "Roll up your sleeves and replace the tire yourself. No biggie." : ["Isaak", "Abi"]
    },
    next:[4, 4, 4, 4]
  },
  {
    question: "Your car is fine and you're on your way. You roll up to...", // 4
    choices: {
      "A doctor’s office, because your life goal is to help people" : ["Abi", "Rose"],
      "A contractor’s office, where you work comfortably because it’s an in-between job that pays well and it’s chill. Why go somewhere else when this is good enough?" : ["James"],
      "A tech company because your identity and self-worth is in your career" : ["Lydia"],
      "The store. You are cooking family dinner tonight!" : ["Isaak", "Ken"]
    },
    next: [6, 6, 6, 5]
  },
  {
    question: "You walk into the store. What are you buying?", // 5
    choices:
    {
      "You know everyone’s favorite foods. You’ve designed a menu based on that and cross-checked it against current sales to create a shopping list.": ["Lydia", "Rose"],
       "Steak (that you will grill yourself of course) and instant mashed potatoes" : ["James", "Ken"],
       "You’re trying a new dish with a complex, colorful palette. Requires many new ingredients and seasonings" : ["Isaak", "Abi"]
    },
    next: [6, 6, 6]
  },
  {
    question: `Time jump, because I don't know what else to do with this storyline. It's the next day!
      FAMILY VACATION! It's your turn to choose the destination. Where do you want to go?`, // 6
    choices: {
      "Airbnb in Renton. It's easy, nearby, convenient and predictable" : ["James", "Lydia", "Abi"],
      "Outer space, because you've never been before and Jeff Bezos gave you free tickets" : ["Isaak"],
      "Camping, with a lot of meat for barbecuing" : ["Ken"],
      "A beautiful mountain that ChatGPT told you about. It looks challenging but very beautiful, so you want to try climbing it!" : ["Rose"]
    },
    next: [7, 8, 9, 10]
  },
  {
    question: "After a nice calm day at the Airbnb, it's time to make dumplings for dinner. What is your role?", // 7
    choices: {
      "Head chef. You bought and prepped the ingredients and you are leading the wrapping and cooking." : ["Dad, Abi"],
      "You're chilling in the living room" : ["James"],
      "You are helping the head chef as much as you can, and you are angry because someone is not pulling their weight and wrapping as many dumplings as you" : ["Lydia"],
      "You show up to wrap the dumplings when you are summoned and you wrap in peace" : ["Abi", "Rose"]
    },
    next: [11, 11, 11, 11]
  },
  {
    question: "As you zoom through outer space, you guys get hungry. Time to choose a dinner spot. Cast your vote.", // 8
    choices: {
      "Chipotle: healthy, cheap, safe, familiar, and customizable so that everyone can get something they like!" : ["Rose", "Lydia"],
      "Olive Garden: a GREAT DEAL. A TON of food and it would SO FUNNY to go to OG in OS" : ["James", "Abi"],
      "Steakhouse: you think your family would LOVE this place and you want them to really enjoy dinner" : ["Ken"],
      "Outer Space Cuisine: you've never tried anything on the menu before. You're in outer space, so why would you pass up this opportunity?" : ["Isaak"]
    },
    next: [11, 11, 11, 11]
  },
  {
    question: "As you unload your coolers of meat, a bear shows up! What do you do??", //9
    choices: {
      "Calmly tell everyone to go into the tent and leave all the food outside, moving slowly" : ["Isaak", "James", "Abi"],
      "Freeze!" : ["Lydia", "Rose"],
      "Family first! Stand between the bear and your family" : ["Ken"]
    },
    next: [11, 11, 11]
  },
  {
    question: "You're hiking in the mountains. What are you doing?", //10
    choices: {
      "Running ahead. The most interesting part of the hike is the destination. Why is everyone else so slow?" : ["Lydia"],
      "You are taking your time, looking at the trees and thinking" : ["Rose", "Ken"],
      "Talking to a stranger. You've already exchanged numbers and you're getting drinks next week" : ["Isaak"],
      "IT'S SO EMBARRASSING TO WALK DOWNHILL LOL" : ["Abi"],
      "Straight vibing. Maybe airpods in. But once your family asks you to be present, you whip those things out so fast and lock in" : ["James"]
    },
    next: [11, 11, 11, 11, 11]
  },
  {
    question: "At dinner, an argument erupts! FAMILY FIGHT", //11
    choices: {
      'Peacemaker, using humor. "Do you want this bowl of food in your face?"' : ["James"],
      'Peacemaker, using logic. "I hear you saying this, and I hear you saying this. Sounds like you agree on this point, and disagree on this point. Let’s keep eating!"' : ["Isaak"],
      "Sit and watch quietly. You do not take part in this. Let them duke it out." : ["Abi", "Rose"],
      "Main fighter and instigator. You either started this fight or fueled it." : ["Lydia", "Ken"]
    },
    next: [12, 12, 12, 12]
  },
  {
    question: "The fight is over. Somehow you ended up at odds with another family member :(", // 12
    choices: {
      "You are the first to say sorry. You want to understand where they are coming from." : ["Rose", "Isaak"],
      "You need some space to pray, think, or sulk. Then you'll come around shyly and seek reconciliation" : ["Ken", "Lydia"],
      "At first you don't even realize something is wrong, then slowly you think about what happened and wonder if you made someone feel a certain way. Then you initiate conversation." : ["James"],
      "You need 7-14 business days to process, then you'll write your thoughts and emotions on the Notes app and share it with them" : ["Abi"]
    },
    next: [13, 13, 13, 13]
  },
  {
    question: "The day is at an end. Today, you are most grateful for: ", // 13
    choices: {
      "The chance to learn and try something new and beautiful" : ["Isaak", "Rose"],
      "That you got home safely with your family and no one was hurt" : ["Ken", "Lydia"],
      "That you had so much fun with your family, it was a really funny chill day" : ["Abi", "James"]
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
