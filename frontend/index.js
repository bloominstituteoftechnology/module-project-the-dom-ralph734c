function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const allDivs = document.querySelectorAll("section>div");
  allDivs.forEach(div => {
    div.classList.add("widget");
  })

  // change the above to the code below to solve step 6 in a better way.
  // allDivs.forEach((div, i) => {
  //   div.classList.add("widget");
  //   div.setAttribute("tabIndex", i + 1);
  // })

  // My original way of doing this because I forgot to try to use a loop.. 

  // const quoteDiv = document.querySelector('.quoteoftheday');
  // quoteDiv.classList.add('widget');
  // const corpDiv = document.querySelector('.corporatespeak');
  // corpDiv.classList.add('widget');
  // const countDiv = document.querySelector('.countdown');
  // countDiv.classList.add('widget');
  // const friendDiv = document.querySelector('.friends');
  // friendDiv.classList.add('widget');

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const randomNum = Math.floor(Math.random() * quotes.length);
  const quoteToAdd = quotes[randomNum];
  const quoteElem = document.createElement("div");
  const quoteText = quoteToAdd.quote;
  quoteElem.textContent = quoteText;
  const quoteLocation = document.querySelector(".quoteoftheday");
  quoteLocation.insertAdjacentElement("beforeend", quoteElem);

  const authorAndDate = document.createElement("div");
  authorAndDate.textContent = `${quoteToAdd.author} in ${quoteToAdd.date === null ? "an unknown date" : quoteToAdd.date}`
  // the code above could be just "quoteToAdd.date" intsead of "quoteToAdd.date === null", to shorten/pretty it up a bit.
  quoteLocation.insertAdjacentElement("beforeend", authorAndDate);

  // My previous code:
  // const quoteElem = document.createElement("div");
  // const authorAndDate = document.createElement("div");
  // const quoteLocation = document.querySelector(".quoteoftheday h3");
  // let randomNum = Math.floor(Math.random() * (9 - 0)) + 0;
  // const quoteToAdd = quotes[randomNum];

  // quoteLocation.insertAdjacentElement("afterend", quoteElem);
  // quoteElem.textContent = quoteToAdd.quote;

  // const authorDateLocation = document.querySelector(".quoteoftheday");
  // authorDateLocation.insertAdjacentElement("beforeend", authorAndDate);
  // authorAndDate.textContent = `${quoteToAdd.author} ${quoteToAdd.date === null ? "in an unknown date" : quoteToAdd.date}`;



  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const randomVerb1 = verbs[Math.floor(Math.random() * verbs.length)];
  const randomVerb2 = verbs[Math.floor(Math.random() * verbs.length)];
  
  const randomAdverb1 = adverbs[Math.floor(Math.random() * adverbs.length)];
  const randomAdverb2 = adverbs[Math.floor(Math.random() * adverbs.length)];

  const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)];
  const randomNoun2 = nouns[Math.floor(Math.random() * nouns.length)];

  const corpSentence = `We need to ${randomVerb1} our ${randomNoun1} ${randomAdverb1} in order to ${randomVerb2} our ${randomNoun2} ${randomAdverb2}.`
  const corpP = document.createElement("p");
  corpP.textContent = corpSentence;
  document.querySelector(".corporatespeak").insertAdjacentElement("beforeend", corpP);
  
  //My previous code:
  
  // let randomNum2 = Math.floor(Math.random() * (10 - 0)) + 0;
  // let randomNum3 = Math.floor(Math.random() * (10 - 0)) + 0;

  // const corpElem = document.createElement("p");
  // const corpLocation = document.querySelector(".corporatespeak h3");
  // const randomVerb1 = verbs[randomNum2];
  // const randomNoun1 = nouns[randomNum2];
  // const randomAdverb1 = adverbs[randomNum2];
  // const randomVerb2 = verbs[randomNum3];
  // const randomNoun2 = nouns[randomNum3];
  // const randomAdverb2 = adverbs[randomNum3];

  // corpLocation.insertAdjacentElement("afterend", corpElem);
  // corpElem.textContent = 
  // `We need to ${randomVerb1} our ${randomNoun1} ${randomAdverb1}
  // in order to ${randomVerb2} our ${randomNoun2} ${randomAdverb2}`


  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countdownWidget = document.querySelector(".countdown");
  let count = 5;
  const countdownP = document.createElement("p");
  countdownP.textContent = `T-minus ${count}...`;
  countdownWidget.insertAdjacentElement("beforeend", countdownP);

  setInterval(() => {
    if (count >= 2) {
    count--
    countdownP.textContent = `T-minus ${count}...`;
    } else {
      countdownP.textContent = `Liftoff! 🚀`
    }
  }, 1000);



  // My previous code:
  // const countElem = document.createElement("p");
  // const countLocation = document.querySelector(".countdown h3");

  // countLocation.insertAdjacentElement("afterend", countElem);
  // countElem.textContent = "T-minus 4..."
  // setInterval(countElem.textContent = "T-minus 3...", 1000)
  // setInterval(countElem.textContent = "T-minus 2...", 1000)
  // setInterval(countElem.textContent = "T-minus 1...", 1000)
  // setInterval(countElem.textContent = "Liftoff! 🚀", 1000)

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const randomPerson = people[Math.floor(Math.random() * people.length)];
  const friendsP = document.createElement("p");
  const friendsWidget = document.querySelector(".friends").appendChild(friendsP);
  const { fname, lname } = randomPerson;
  const year = randomPerson.dateOfBirth.split("-")[0];
  let sentence = `${fname} ${lname} was born in ${year} and `;

  if (!randomPerson.friends.length) {
    sentence += "has no friends."
  } else {
    sentence += "is friends with "
    for (let i = 0; i < randomPerson.friends.length; i++) {
      const friendId = randomPerson.friends[i]
      const friend = people.find(person => person.id === friendId)
      const friendName = `${friend.fname} ${friend.lname}`
      let isLastI = i === randomPerson.friends.length - 1
      let isNextToLastI = i === randomPerson.friends.length - 2
      if (isLastI) {
        sentence += `${friendName}.`
      } else if (isNextToLastI) {
        sentence += `${friendName} and `
      } else {
        sentence += `${friendName}, `
      }
    }
  }
  friendsP.textContent = sentence
  

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
  quoteLocation.tabIndex = 1;
  document.querySelector(".corporatespeak").tabIndex = 2;
  document.querySelector(".countdown").tabIndex = 3;
  document.querySelector(".friends").tabIndex = 4;

  // a better way to do the above involves adding something like the below to 
  // the forEach loop in task 1 in addition to adding "i" to the function portion of the forEach:
  // div.setAttribute("tabIndex", i + 1)

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
