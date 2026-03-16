const birthdayName = "Sanshia";

const puzzlePages = [
  {
    title: `Hello, ${birthdayName}!`,
    friendshipCode: `const friendship = (you, me) => {
  return you && me && trust && laughter;
};

// Together, we ship the best memories.`,
    puzzle: "Solve this riddle to unlock the next page:\nI speak without a mouth and hear without ears. I have nobody, but I come alive with wind. What am I?",
    answer: "echo",
    hint: "It repeats what you say.",
  },
  {
    title: "Page 2: The little secret",
    friendshipCode: `for (let day = 1; day <= 365; day++) {
  if (day === yourBirthday) {
    celebrate();
  }
}`,
    puzzle: "A code friend wrote this sequence: 1, 4, 9, 16, 25, ... What is the next number?",
    answer: "36",
    hint: "It's a perfect square sequence.",
  },
  {
    title: "Page 3: Friends who laugh",
    friendshipCode: `const insideJoke = () => {
  const memories = ["umbrella", "coffees", "late night talks"];
  return memories.join(' 💫 ');
};

console.log(insideJoke());`,
    puzzle: "Unscramble the word: 'LUSTA' \nHint: This is something we share when things are funny.",
    answer: "laugh",
    hint: "It's what we do when jokes land.",
  },
  {
    title: "Page 4: Code of kindness",
    friendshipCode: `if (you === me) {
  const forever = true;
}

const promise = () => {
  return 'I got your back.';
};`,
    puzzle: "Fill in the blank: You can always count on a friend when you feel _____ (five letters).",
    answer: "alone",
    hint: "Opposite of together.",
  },
  {
    title: "Page 5: The little puzzle",
    friendshipCode: `const support = {
  always: true,
  time: 'any',
  place: 'all',
};

export default support;`,
    puzzle: "What 4-letter word becomes longer when you add two letters?",
    answer: "long",
    hint: "It is a word that is literally 'long'.",
  },
  {
    title: "Page 6: Your favorite moment",
    friendshipCode: `const bestMemory = { day: 'random', mood: 'sunny', proof: 'photos' };

console.log(bestMemory);`,
    puzzle: "I have keys but no locks. I have space but no room. You can enter, but can’t go outside. What am I?",
    answer: "keyboard",
    hint: "You probably type on it every day.",
  },
  {
    title: "Page 7: A promise kept",
    friendshipCode: `function alwaysHere() {
  return true;
}

if (alwaysHere()) {
  console.log('Your friend is here.');
}`,
    puzzle: "What word starts with 't', ends with 't', and has 't' in it?",
    answer: "teapot",
    hint: "You pour it out when you're thirsty.",
  },
  {
    title: "Page 8: Sharing secrets",
    friendshipCode: `const secrets = new Map();
secrets.set('trust', 'gold');
secrets.set('laughs', 100);

console.log(secrets);`,
    puzzle: "Complete the sequence: " +
      "A, E, I, O, ___." +
      " \n(One letter is missing.)",
    answer: "u",
    hint: "It's a vowel you say at the end of 'you'.",
  },
  {
    title: "Page 9: Laughing together",
    friendshipCode: `const schedule = {
  coffee: ['morning', 'evening'],
  movieNight: true,
  birthday: 'always',
};

export { schedule };`,
    puzzle: "I am not alive, but I grow. I don't have lungs, but I need air. What am I?",
    answer: "fire",
    hint: "We light candles for birthdays.",
  },
  {
    title: "Page 10: Your fun fact",
    friendshipCode: `const vibes = {
  energy: 'high',
  care: 'real',
  memes: 'endless',
};

console.log('Always in sync:', vibes);`,
    puzzle: "What goes up but never comes down?",
    answer: "age",
    hint: "This page is in honor of your 20th.",
  },
  {
    title: "Page 11: Secret handshake",
    friendshipCode: `class BestFriend {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return 'Hey, ' + this.name + '!';
  }
}

export default BestFriend;`,
    puzzle: "What has a heart that doesn’t beat?",
    answer: "artichoke",
    hint: "A tasty veggie.",
  },
  {
    title: "Page 12: A little memory",
    friendshipCode: `const moments = ['spontaneous road trips', 'late night talks', 'inside jokes'];

moments.forEach((m) => console.log(m));`,
    puzzle: "I can be cracked, made, told, and played. What am I?",
    answer: "joke",
    hint: "We always share them together.",
  },
  {
    title: "Page 13: A code hug",
    friendshipCode: `const hug = () => {
  return '🤗';
};

console.log(hug());`,
    puzzle: "What belongs to you, but others use it more than you do?",
    answer: "name",
    hint: "It’s how your friends call you.",
  },
  {
    title: "Page 14: A little song",
    friendshipCode: `const playlist = ['feel-good', 'chill', 'cheesy'];

playlist.push('your-favorite');

console.log(playlist);`,
    puzzle: "Which word becomes shorter when you add two letters to it?",
    answer: "short",
    hint: "It’s the opposite of 'long'.",
  },
  {
    title: "Page 15: Shared dreams",
    friendshipCode: `const future = {
  plans: ['more trips', 'new goals', 'unlimited snacks'],
  mood: 'excited',
};

export default future;`,
    puzzle: "What is full of holes but still holds water?",
    answer: "sponge",
    hint: "You use it in the kitchen.",
  },
  {
    title: "Page 16: This is for you",
    friendshipCode: `const gift = {
  type: 'surprise',
  wrappedIn: 'love',
  openTogether: true,
};

console.log(gift);`,
    puzzle: "If you drop me, I’m sure to crack, but give me a smile and I’ll always smile back. What am I?",
    answer: "mirror",
    hint: "It reflects you.",
  },
  {
    title: "Page 17: A shared joke",
    friendshipCode: `const laughTrack = () => {
  return '😂'.repeat(3);
};

console.log(laughTrack());`,
    puzzle: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
    answer: "map",
    hint: "You use me for directions.",
  },
  {
    title: "Page 18: Nearly there",
    friendshipCode: `const promise = () => {
  return 'See you at the next adventure.';
};

export { promise };`,
    puzzle: "What can travel around the world while staying in a corner?",
    answer: "stamp",
    hint: "You stick me on postcards.",
  },
  {
    title: "Page 19: Almost birthday!",
    friendshipCode: `const countdown = (days) => {
  return days > 0 ? 'Counting down!' : 'Happy day!';
};

console.log(countdown(1));`,
    puzzle: "Which month has 28 days?",
    answer: "all",
    hint: "Every month has 28 days (and more).",
  },
  {
    title: "Page 20: Happy Birthday! 🎉",
    friendshipCode: `const birthdayWish = () => {
  return `Happy 20th Birthday, ${birthdayName}! May every chapter be your best yet.`;
};

console.log(birthdayWish());`,
    puzzle: "This is the final page—no puzzle needed.\nJust click the button and enjoy the surprise!",
    answer: "",
    hint: "No answer required — just celebrate!",
  },
];

const state = {
  pageIndex: 0,
  solved: false,
};

const elements = {
  title: document.getElementById('page-title'),
  friendshipCode: document.getElementById('friendship-code'),
  puzzle: document.getElementById('puzzle-text'),
  hint: document.getElementById('puzzle-hint'),
  answerInput: document.getElementById('answer-input'),
  checkButton: document.getElementById('check-button'),
  nextButton: document.getElementById('next-button'),
  progressBar: document.getElementById('progress-bar-fill'),
  progressText: document.getElementById('progress-text'),
  celebration: document.getElementById('celebration'),
  confettiCanvas: document.getElementById('confetti'),
  scoreText: document.getElementById('score-text'),
};

function normalize(str) {
  return String(str).trim().toLowerCase();
}

function setProgress(index) {
  const current = index + 1;
  const total = puzzlePages.length;
  elements.progressText.textContent = `Page ${current} of ${total}`;
  elements.progressBar.style.width = `${(current / total) * 100}%`;
}

function showPage(index) {
  const page = puzzlePages[index];
  state.pageIndex = index;
  state.solved = false;

  elements.title.textContent = page.title;
  elements.friendshipCode.textContent = page.friendshipCode;
  elements.puzzle.textContent = page.puzzle;
  elements.hint.textContent = page.hint;
  elements.answerInput.value = '';
  elements.answerInput.disabled = false;
  elements.checkButton.disabled = false;
  elements.nextButton.disabled = true;
  elements.nextButton.textContent = index === puzzlePages.length - 1 ? 'Celebrate!' : 'Next Page';
  elements.celebration.classList.toggle('visible', false);
  elements.confettiCanvas.style.opacity = '0';
  setProgress(index);

  if (index === puzzlePages.length - 1) {
    elements.checkButton.disabled = true;
    elements.answerInput.placeholder = 'No answer needed - just celebrate!';
    elements.answerInput.disabled = true;
  } else {
    elements.answerInput.placeholder = 'Type your answer here...';
  }

  updateScore();
}

function updateScore() {
  const solvedCount = state.solved ? state.pageIndex + 1 : state.pageIndex;
  const total = puzzlePages.length;
  elements.scoreText.textContent = `Solved: ${solvedCount}/${total}`;
}

function onCheck() {
  const page = puzzlePages[state.pageIndex];
  const provided = normalize(elements.answerInput.value);

  if (!provided) {
    elements.answerInput.focus();
    return;
  }

  if (normalize(page.answer) === provided) {
    state.solved = true;
    elements.checkButton.disabled = true;
    elements.answerInput.disabled = true;
    elements.nextButton.disabled = false;
    elements.nextButton.textContent = state.pageIndex === puzzlePages.length - 1 ? 'Celebrate!' : 'Continue';
    elements.puzzle.textContent = `✅ Great! You're ready for the next page.`;
    elements.hint.textContent = `Tip: Click "${elements.nextButton.textContent}" to keep going.`;
    updateScore();
  } else {
    elements.puzzle.textContent = `❌ Not quite yet. Try again or use the hint.`;
    setTimeout(() => {
      elements.puzzle.textContent = page.puzzle;
    }, 1200);
  }
}

function onNext() {
  const nextIndex = Math.min(puzzlePages.length - 1, state.pageIndex + 1);
  if (nextIndex === state.pageIndex && nextIndex === puzzlePages.length - 1) {
    showFinalCelebration();
    return;
  }
  showPage(nextIndex);
}

function showFinalCelebration() {
  elements.celebration.classList.add('visible');
  runConfetti();
  elements.nextButton.disabled = true;
}

function runConfetti() {
  const canvas = elements.confettiCanvas;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.opacity = '1';

  const confetti = [];
  const colors = ['#ff6b6b', '#ffe66d', '#4ecdc4', '#1a535c', '#ff9f1c'];

  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      r: 5 + Math.random() * 8,
      d: Math.random() * 50 + 20,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 10,
      tiltAngleIncremental: Math.random() * 0.07 + 0.05,
      tiltAngle: 0,
    });
  }

  let animationId;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const c of confetti) {
      ctx.beginPath();
      ctx.lineWidth = c.r;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x + c.tilt + c.r / 2, c.y);
      ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 2);
      ctx.stroke();
    }

    update();
    animationId = requestAnimationFrame(draw);
  }

  function update() {
    for (const c of confetti) {
      c.tiltAngle += c.tiltAngleIncremental;
      c.y += (Math.cos(c.d) + 3 + c.r / 2) / 2;
      c.x += Math.sin(c.d);
      c.tilt = Math.sin(c.tiltAngle) * 12;

      if (c.y > canvas.height) {
        c.x = Math.random() * canvas.width;
        c.y = -20;
      }
    }
  }

  draw();

  setTimeout(() => {
    cancelAnimationFrame(animationId);
    canvas.style.opacity = '0';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 10000);
}

function goHome() {
  showPage(0);
}

function init() {
  document.getElementById('home-button').addEventListener('click', goHome);
  elements.checkButton.addEventListener('click', onCheck);
  elements.nextButton.addEventListener('click', onNext);
  elements.answerInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !elements.checkButton.disabled) {
      onCheck();
    }
    if (event.key === 'Enter' && elements.nextButton.disabled === false) {
      onNext();
    }
  });

  showPage(0);
}

window.addEventListener('DOMContentLoaded', init);
