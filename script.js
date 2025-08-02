// JSON "Database" of Questions (unchanged from previous version)
const questionsDB = [
  // Indian History
  { 
    topic: "Indian History", 
    question: "What happened on June 14, 1947, in India?", 
    options: ["Partition Plan Announced", "Independence Day", "Gandhi's Assassination", "First Election"], 
    correct: "Partition Plan Announced", 
    hint: "It was a significant step toward India's independence." 
  },
  { 
    topic: "Indian History", 
    question: "Who was the first Prime Minister of India?", 
    options: ["Jawaharlal Nehru", "Sardar Patel", "Indira Gandhi", "Rajendra Prasad"], 
    correct: "Jawaharlal Nehru", 
    hint: "He gave the 'Tryst with Destiny' speech." 
  },
  { 
    topic: "Indian History", 
    question: "Which movement was launched by Gandhi in 1942?", 
    options: ["Quit India Movement", "Dandi Salt March", "Non-Cooperation Movement", "Civil Disobedience"], 
    correct: "Quit India Movement", 
    hint: "It demanded an end to British rule." 
  },
  // Bollywood Movies
  { 
    topic: "Bollywood Movies", 
    question: "Which song from RRR won an Oscar in 2023?", 
    options: ["Naatu Naatu", "Jai Ho", "Dumeel", "Kalasala"], 
    correct: "Naatu Naatu", 
    hint: "It’s a high-energy dance number." 
  },
  { 
    topic: "Bollywood Movies", 
    question: "Which film is known as the first Indian talkie?", 
    options: ["Alam Ara", "Raja Harishchandra", "Mughal-e-Azam", "Sholay"], 
    correct: "Alam Ara", 
    hint: "It was released in 1931." 
  },
  { 
    topic: "Bollywood Movies", 
    question: "Who directed the movie 'Lagaan'?", 
    options: ["Ashutosh Gowariker", "Sanjay Leela Bhansali", "Karan Johar", "Rajkumar Hirani"], 
    correct: "Ashutosh Gowariker", 
    hint: "The film was nominated for an Oscar." 
  },
  // Indian Songs
  { 
    topic: "Indian Songs", 
    question: "Who composed the song 'Jai Ho' from Slumdog Millionaire?", 
    options: ["A.R. Rahman", "Anu Malik", "Pritam", "Vishal-Shekhar"], 
    correct: "A.R. Rahman", 
    hint: "He’s a renowned Indian composer who also won an Oscar." 
  },
  { 
    topic: "Indian Songs", 
    question: "Which song is associated with the festival of Holi?", 
    options: ["Rang Barse", "Vande Mataram", "Saare Jahan Se Achha", "Maa Tujhe Salaam"], 
    correct: "Rang Barse", 
    hint: "It’s from the movie 'Silsila'." 
  },
  { 
    topic: "Indian Songs", 
    question: "Who sang 'Tum Hi Ho' from Aashiqui 2?", 
    options: ["Arijit Singh", "Atif Aslam", "Shaan", "Sonu Nigam"], 
    correct: "Arijit Singh", 
    hint: "He’s a popular playback singer." 
  },
  // Indian Current Affairs
  { 
    topic: "Indian Current Affairs", 
    question: "What is a key focus of India’s NEP 2020 as of 2025?", 
    options: ["Flexibility in Education", "Mandatory Military Training", "Free Laptops for All", "No Exams Policy"], 
    correct: "Flexibility in Education", 
    hint: "It aims to reform higher education." 
  },
  { 
    topic: "Indian Current Affairs", 
    question: "Which Indian mission aimed for the moon in 2025?", 
    options: ["Chandrayaan-3", "Mangalyaan-2", "Gaganyaan", "Aditya-L1"], 
    correct: "Chandrayaan-3", 
    hint: "It’s an ISRO lunar mission." 
  },
  { 
    topic: "Indian Current Affairs", 
    question: "What major infrastructure project was completed in 2025?", 
    options: ["Mumbai-Ahmedabad Bullet Train", "Golden Quadrilateral", "Delhi Metro Phase 5", "Chennai Port Expansion"], 
    correct: "Mumbai-Ahmedabad Bullet Train", 
    hint: "It’s a high-speed rail project." 
  },
  // American History
  { 
    topic: "American History", 
    question: "What significant U.S. event occurred on June 14, 1777?", 
    options: ["Flag Day Established", "Declaration of Independence", "Constitution Signed", "Civil War Began"], 
    correct: "Flag Day Established", 
    hint: "It’s related to a national symbol." 
  },
  { 
    topic: "American History", 
    question: "Who was the U.S. President during the Civil War?", 
    options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Franklin Roosevelt"], 
    correct: "Abraham Lincoln", 
    hint: "He issued the Emancipation Proclamation." 
  },
  { 
    topic: "American History", 
    question: "What was the main cause of the Boston Tea Party?", 
    options: ["Tax on Tea", "Stamp Act", "Sugar Act", "Quartering Act"], 
    correct: "Tax on Tea", 
    hint: "It was a protest against British taxation." 
  },
  // Hollywood Movies
  { 
    topic: "Hollywood Movies", 
    question: "Which movie is represented by these emojis: 🦁👑?", 
    options: ["The Lion King", "Jungle Book", "Madagascar", "Zootopia"], 
    correct: "The Lion King", 
    hint: "It’s a Disney classic about a king of the jungle." 
  },
  { 
    topic: "Hollywood Movies", 
    question: "Who directed 'Titanic' released in 1997?", 
    options: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Quentin Tarantino"], 
    correct: "James Cameron", 
    hint: "He also directed 'Avatar'." 
  },
  { 
    topic: "Hollywood Movies", 
    question: "Which film won the Best Picture Oscar in 2020?", 
    options: ["Parasite", "1917", "Joker", "Once Upon a Time in Hollywood"], 
    correct: "Parasite", 
    hint: "It’s a South Korean film." 
  },
  // American Songs
  { 
    topic: "American Songs", 
    question: "Which American song is often sung at baseball games?", 
    options: ["Sweet Caroline", "Bohemian Rhapsody", "Hotel California", "Thriller"], 
    correct: "Sweet Caroline", 
    hint: "It’s a feel-good anthem by Neil Diamond." 
  },
  { 
    topic: "American Songs", 
    question: "Who sang 'Thriller' released in 1982?", 
    options: ["Michael Jackson", "Elvis Presley", "Bob Dylan", "Bruce Springsteen"], 
    correct: "Michael Jackson", 
    hint: "He’s known as the King of Pop." 
  },
  { 
    topic: "American Songs", 
    question: "Which band performed 'Hotel California'?", 
    options: ["Eagles", "The Beatles", "The Rolling Stones", "Aerosmith"], 
    correct: "Eagles", 
    hint: "It’s a classic rock song from the 1970s." 
  },
  // American Current Affairs
  { 
    topic: "American Current Affairs", 
    question: "What U.S. policy trend was notable in 2025?", 
    options: ["Reciprocal Tariffs", "Free Healthcare for All", "Mandatory Voting", "Nationwide Ban on Cars"], 
    correct: "Reciprocal Tariffs", 
    hint: "It relates to global trade tensions." 
  },
  { 
    topic: "American Current Affairs", 
    question: "Which U.S. city hosted a major climate summit in 2025?", 
    options: ["New York", "Los Angeles", "Chicago", "Miami"], 
    correct: "New York", 
    hint: "It’s a hub for international events." 
  },
  { 
    topic: "American Current Affairs", 
    question: "What tech trend dominated U.S. headlines in 2025?", 
    options: ["AI Regulation", "5G Expansion", "Quantum Computing", "Blockchain Voting"], 
    correct: "AI Regulation", 
    hint: "It involves ethics and privacy concerns." 
  },
  // Subjects: Science
  { 
    topic: "Science", 
    question: "Which planet is known as the Red Planet?", 
    options: ["Mars", "Jupiter", "Venus", "Mercury"], 
    correct: "Mars", 
    hint: "It’s named after a Roman god of war." 
  },
  { 
    topic: "Science", 
    question: "What gas do plants use for photosynthesis?", 
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"], 
    correct: "Carbon Dioxide", 
    hint: "It’s absorbed through the leaves." 
  },
  { 
    topic: "Science", 
    question: "What is the chemical symbol for gold?", 
    options: ["Au", "Ag", "Fe", "Cu"], 
    correct: "Au", 
    hint: "It comes from the Latin word 'Aurum'." 
  },
  // Subjects: Literature
  { 
    topic: "Literature", 
    question: "Who wrote the Indian national anthem?", 
    options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Mahatma Gandhi"], 
    correct: "Rabindranath Tagore", 
    hint: "He’s a Nobel Prize-winning poet." 
  },
  { 
    topic: "Literature", 
    question: "Which Shakespeare play features Romeo and Juliet?", 
    options: ["Romeo and Juliet", "Hamlet", "Macbeth", "Othello"], 
    correct: "Romeo and Juliet", 
    hint: "It’s a tragic love story." 
  },
  { 
    topic: "Literature", 
    question: "Who wrote 'To Kill a Mockingbird'?", 
    options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"], 
    correct: "Harper Lee", 
    hint: "It’s set in the American South." 
  },
  // Cartoons
  { 
    topic: "Cartoons", 
    question: "Which Indian cartoon character is known for his adventures in Dholakpur?", 
    options: ["Chhota Bheem", "Motu Patlu", "Shin-chan", "Doraemon"], 
    correct: "Chhota Bheem", 
    hint: "He’s a strong kid who loves laddoos." 
  },
  { 
    topic: "Cartoons", 
    question: "Which American cartoon features a cat and mouse duo?", 
    options: ["Tom and Jerry", "Scooby-Doo", "SpongeBob SquarePants", "The Simpsons"], 
    correct: "Tom and Jerry", 
    hint: "It’s a classic chase comedy." 
  },
  { 
    topic: "Cartoons", 
    question: "Who is the main character in 'Doraemon'?", 
    options: ["Nobita", "Shizuka", "Gian", "Suneo"], 
    correct: "Nobita", 
    hint: "He’s a young boy helped by a robotic cat." 
  },
  { 
    topic: "Cartoons", 
    question: "Which cartoon dog solves mysteries with his friends?", 
    options: ["Scooby-Doo", "Goofy", "Pluto", "Snoopy"], 
    correct: "Scooby-Doo", 
    hint: "He’s part of the Mystery Inc. gang." 
  },
  { 
    topic: "Cartoons", 
    question: "What is the name of the yellow sponge in 'SpongeBob SquarePants'?", 
    options: ["SpongeBob", "Patrick", "Squidward", "Mr. Krabs"], 
    correct: "SpongeBob", 
    hint: "He lives in a pineapple under the sea." 
  },
  { 
    topic: "Cartoons", 
    question: "Which Indian cartoon duo is known for their comedic adventures in Furfuri Nagar?", 
    options: ["Motu Patlu", "Chhota Bheem", "Oggy and the Cockroaches", "Shin-chan"], 
    correct: "Motu Patlu", 
    hint: "They’re best friends who often get into trouble." 
  },
  { 
    topic: "Cartoons", 
    question: "Which cartoon family lives in Springfield?", 
    options: ["The Simpsons", "Family Guy", "South Park", "Rick and Morty"], 
    correct: "The Simpsons", 
    hint: "It’s the longest-running animated sitcom." 
  },
  { 
    topic: "Cartoons", 
    question: "Who is the creator of 'Phineas and Ferb'?", 
    options: ["Dan Povenmire", "Matt Groening", "Seth MacFarlane", "Trey Parker"], 
    correct: "Dan Povenmire", 
    hint: "The show features stepbrothers on summer vacation." 
  },
  { 
    topic: "Cartoons", 
    question: "Which cartoon character is a pink starfish?", 
    options: ["Patrick Star", "Starfire", "Stitch", "Puss in Boots"], 
    correct: "Patrick Star", 
    hint: "He’s SpongeBob’s best friend." 
  },
  { 
    topic: "Cartoons", 
    question: "What is the name of the blue alien in 'Lilo & Stitch'?", 
    options: ["Stitch", "Lilo", "Gantu", "Jumba"], 
    correct: "Stitch", 
    hint: "He’s also known as Experiment 626." 
  },
  { 
    topic: "Cartoons", 
    question: "Which Indian cartoon features a boy with a magic pencil?", 
    options: ["Shaktimaan", "Shin-chan", "Chhota Bheem", "Motu Patlu"], 
    correct: "Shaktimaan", 
    hint: "It’s not the superhero show, but a different cartoon." 
  },
  { 
    topic: "Cartoons", 
    question: "Which cartoon dog is known for his love of Scooby Snacks?", 
    options: ["Scooby-Doo", "Snoopy", "Goofy", "Pluto"], 
    correct: "Scooby-Doo", 
    hint: "He solves mysteries with Shaggy." 
  }
];

let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let hintUsed = false;
let currentUser = null;
const authModal = document.getElementById('authModal');
const authTitle = document.getElementById('authTitle');
const authForm = document.getElementById('authForm');
const authSubmit = document.getElementById('authSubmit');
const authSwitch = document.getElementById('authSwitch');
const authError = document.getElementById('authError');
const authLink = document.getElementById('authLink');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const scoreEl = document.getElementById('score');
const progressEl = document.getElementById('progress');
const quizSection = document.getElementById('quizSection');
const resultsEl = document.getElementById('results');
const finalScoreEl = document.getElementById('finalScore');
const leaderboardEl = document.getElementById('leaderboard');
const timeDial = document.getElementById('timeDial');
const hintBtn = document.getElementById('hintBtn');
const speakBtn = document.getElementById('speakBtn');
const suggestionsForm = document.getElementById('suggestionsForm');
const thanksMessage = document.getElementById('thanksMessage');
const topicSelect = document.getElementById('topicSelect');
function showAuthModal() {
  authModal.style.display = 'flex';
}

function toggleAuthMode() {
  const isSignIn = authTitle.textContent === 'Sign In';
  authTitle.textContent = isSignIn ? 'Sign Up' : 'Sign In';
  authSubmit.textContent = isSignIn ? 'Sign Up' : 'Sign In';
  authSwitch.textContent = isSignIn ? 'Already have an account? Sign In' : 'Need an account? Sign Up';
  authError.style.display = 'none';

  document.getElementById('nameField').style.display = isSignIn ? 'block' : 'none';
  document.getElementById('emailField').style.display = isSignIn ? 'block' : 'none';
  document.getElementById('confirmPasswordField').style.display = isSignIn ? 'block' : 'none';
}

authForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const users = JSON.parse(localStorage.getItem('users')) || {};

  if (authTitle.textContent === 'Sign In') {
    if (users[username] && users[username].password === password) {
      currentUser = username;
      authModal.style.display = 'none';
      authLink.textContent = `Hello, ${users[username].name || username} | Sign Out`;
      authLink.onclick = signOut;
      document.querySelectorAll('.nav-links a:not(#authLink)').forEach(link => link.style.display = 'inline');
    } else {
      authError.textContent = 'Invalid username or password.';
      authError.style.display = 'block';
    }
  } else {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!username || !name || !email || !password || !confirmPassword) {
      authError.textContent = 'Please fill all fields.';
      authError.style.display = 'block';
      return;
    }
    if (users[username]) {
      authError.textContent = 'Username already exists.';
      authError.style.display = 'block';
      return;
    }
    if (password !== confirmPassword) {
      authError.textContent = 'Passwords do not match.';
      authError.style.display = 'block';
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      authError.textContent = 'Invalid email format.';
      authError.style.display = 'block';
      return;
    }
    users[username] = { password, name, email };
    localStorage.setItem('users', JSON.stringify(users));
    currentUser = username;
    authModal.style.display = 'none';
    authLink.textContent = `Hello, ${name} | Sign Out`;
    authLink.onclick = signOut;
    document.querySelectorAll('.nav-links a:not(#authLink)').forEach(link => link.style.display = 'inline');
  }
});

function signOut() {
  currentUser = null;
  authLink.textContent = 'Sign In';
  authLink.onclick = showAuthModal;
  document.querySelectorAll('.nav-links a:not(#authLink)').forEach(link => link.style.display = 'none');
  document.querySelectorAll('.container > div').forEach(div => div.classList.remove('active'));
  document.getElementById('about').classList.add('active');
}
document.querySelectorAll('.nav-links a:not(#authLink)').forEach(link => {
  link.style.display = 'none'; // Hide links until signed in
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if (!currentUser) {
      showAuthModal();
      return;
    }
    const section = link.getAttribute('href').substring(1);
    document.querySelectorAll('.container > div').forEach(div => div.classList.remove('active'));
    document.getElementById(section).classList.add('active');
    if (section !== 'quizSection') quizSection.style.display = 'none';
    if (section !== 'results') resultsEl.style.display = 'none';
    if (section !== 'about') document.getElementById('about').classList.remove('active');
  });
});
function startQuiz() {
  if (!currentUser) {
    showAuthModal();
    return;
  }
  const selectedTopic = topicSelect.value;
  let availableQuestions = selectedTopic === "All Topics" 
    ? questionsDB 
    : questionsDB.filter(q => q.topic === selectedTopic);
  
  if (availableQuestions.length === 0) {
    alert("No questions available for this topic!");
    return;
  }
  availableQuestions = availableQuestions.sort(() => Math.random() - 0.5);
  currentQuestions = availableQuestions.slice(0, Math.min(10, availableQuestions.length));
  currentQuestion = 0;
  score = 0;
  scoreEl.textContent = `Score: ${score}`;
  document.querySelectorAll('.container > div').forEach(div => div.classList.remove('active'));
  quizSection.classList.add('active');
  quizSection.style.display = 'block';
  displayQuestion();
}
function displayQuestion() {
  const q = currentQuestions[currentQuestion];
  questionEl.textContent = `[${q.topic}] ${q.question}`;
  optionsEl.innerHTML = '';
  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.addEventListener('click', () => checkAnswer(option));
    optionsEl.appendChild(btn);
  });
  progressEl.style.width = `${((currentQuestion + 1) / currentQuestions.length) * 100}%`;
  hintUsed = false;
}
function checkAnswer(selected) {
  const q = currentQuestions[currentQuestion];
  if (selected === q.correct) {
    score += hintUsed ? 5 : 10;
    scoreEl.textContent = `Score: ${score}`;
    showConfetti();
  }
  currentQuestion++;
  if (currentQuestion < currentQuestions.length) {
    displayQuestion();
  } else {
    showResults();
  }
}
function showConfetti() {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.background = ['#ffcc00', '#ff00ff', '#00ffff'][Math.floor(Math.random() * 3)];
    document.body.appendChild(confetti);
  }
}
hintBtn.addEventListener('click', () => {
  if (!hintUsed) {
    hintUsed = true;
    const q = currentQuestions[currentQuestion];
    alert(`Hint Vortex: ${q.hint}`);
  }
});
speakBtn.addEventListener('click', () => {
  const q = currentQuestions[currentQuestion];
  const utterance = new SpeechSynthesisUtterance(`${q.topic}. ${q.question}`);
  window.speechSynthesis.speak(utterance);
});
let isDragging = false;
timeDial.addEventListener('mousedown', () => isDragging = true);
document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    timeDial.style.transform = `rotate(${e.clientX}deg)`;
  }
});
document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    timeDial.style.transform = '';
    if (currentQuestion < currentQuestions.length) displayQuestion();
  }
});
function showResults() {
  quizSection.style.display = 'none';
  resultsEl.style.display = 'block';
  resultsEl.classList.add('active');
  finalScoreEl.textContent = `You scored ${score} out of ${currentQuestions.length * 10}!`;
  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  highScores.push({ username: currentUser, score });
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5); 
  localStorage.setItem('highScores', JSON.stringify(highScores));
  leaderboardEl.innerHTML = '';
  highScores.forEach((entry, i) => {
    const li = document.createElement('li');
    li.textContent = `Rank ${i + 1}: ${entry.username} - ${entry.score} points`;
    leaderboardEl.appendChild(li);
  });
  document.querySelectorAll('#stars span').forEach(star => star.classList.remove('filled'));
  document.getElementById('feedbackText').value = '';
}
function submitEmojiReview(emoji) {
  alert(`Thanks for your emoji feedback: ${emoji}`);
}
function rateStar(rating) {
  const stars = document.querySelectorAll('#stars span');
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add('filled');
    } else {
      star.classList.remove('filled');
    }
  });
  alert(`Thanks for rating us ${rating} stars!`);
}
function submitTextFeedback() {
  const feedback = document.getElementById('feedbackText').value;
  if (feedback) {
    alert('Thanks for your feedback!');
    document.getElementById('feedbackText').value = '';
  } else {
    alert('Please enter some feedback before submitting.');
  }
}
function restartQuiz() {
  document.querySelectorAll('.container > div').forEach(div => div.classList.remove('active'));
  document.getElementById('home').classList.add('active');
  resultsEl.style.display = 'none';
}
suggestionsForm.addEventListener('submit', (e) => {
  e.preventDefault();
  thanksMessage.style.display = 'block';
  setTimeout(() => {
    thanksMessage.style.display = 'none';
    suggestionsForm.reset();
  }, 2000);
});
document.getElementById('about').classList.add('active');