// Fortune Categories
const categories = {
  motivational: [
    "You are unstoppable.",
    "Believe in your magic.",
    "Keep going. You're almost there!",
    "Your energy is radiant today!",
    "The best is yet to come.",
    "You have the power to create your own future.",
    "Don’t stop until you’re proud.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Every step you take is one step closer to your goal.",
    "Don’t wait for the perfect moment. Take the moment and make it perfect.",
    "You are stronger than you think.",
    "Your potential is endless.",
    "You can do hard things.",
    "Stay focused and never give up.",
    "Believe you can, and you're halfway there.",
    "Opportunities are all around you.",
    "You are the author of your own story.",
    "Dream big. Work hard. Stay focused.",
    "Challenges are what make life interesting.",
    "The road to success is always under construction.",
    "Your future is created by what you do today.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Turn your dreams into reality.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "You are capable of more than you know.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Believe in yourself and all that you are.",
    "Great things never come from comfort zones.",
    "Your dreams don’t work unless you do.",
    "Push yourself because no one else is going to do it for you.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Believe in your dreams and they may come true.",
    "Act as if what you do makes a difference. It does.",
    "Every day is a fresh start.",
    "Be stronger than your strongest excuse.",
    "The only way to do great work is to love what you do.",
    "Start where you are. Use what you have. Do what you can.",
    "You are one decision away from a totally different life.",
    "Small steps lead to big changes.",
    "It’s never too late to be what you might have been.",
    "Don’t let the noise of others' opinions drown out your own inner voice.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Great things take time. Be patient.",
    "The harder you work, the luckier you get.",
    "Never give up on something you can’t go a day without thinking about.",
    "If you want to achieve greatness, stop asking for permission.",
    "The key to success is to focus on goals, not obstacles.",
    "Your only limit is your mind.",
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
    "Stay positive. Work hard. Make it happen.",
    "Push yourself to be your best self.",
    "Be a voice, not an echo.",
    "A goal without a plan is just a wish.",
    "Success is a journey, not a destination.",
    "Success is the result of preparation, hard work, and learning from failure.",
    "You don’t have to be great to start, but you have to start to be great.",
    "You are your only limit.",
    "Success begins at the end of your comfort zone.",
    "You are capable of achieving great things.",
    "Don't watch the clock; do what it does. Keep going.",
    "If you believe in yourself, anything is possible.",
    "Push yourself, because no one else is going to do it for you.",
    "Your journey is your own. Don't compare it to anyone else’s.",
    "Dream it. Wish it. Do it.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Success is not for the chosen few, but for the few who choose it.",
    "Don’t be afraid to give up the good to go for the great.",
    "Your life does not get better by chance, it gets better by change.",
    "Be yourself; everyone else is already taken.",
    "The best way to predict the future is to create it.",
    "Success is not measured by what you accomplish, but by the obstacles you overcome.",
    "If you want to lift yourself up, lift up someone else.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Don’t be afraid to fail. Be afraid not to try.",
    "It always seems impossible until it's done.",
    "Every day may not be good, but there is something good in every day.",
    "You are the creator of your own destiny.",
    "Don’t limit your challenges, challenge your limits.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Don’t wait for the perfect moment, take the moment and make it perfect.",
    "Nothing worth having comes easy.",
    "Be so good they can’t ignore you.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Success comes from doing the things you’re passionate about.",
    "Fall seven times, stand up eight.",
    "If you don’t believe in yourself, no one else will.",
    "Push yourself to the limit. It’s where the magic happens.",
    "The only thing standing between you and your goal is the story you keep telling yourself.",
    "You have the power to achieve anything you set your mind to.",
    "Success is what happens when preparation meets opportunity.",
    "Great things are not done by impulse, but by a series of small things brought together.",
    "Doubt kills more dreams than failure ever will.",
    "Dream big, work hard, stay focused, and surround yourself with good people.",
    "The difference between who you are and who you want to be is what you do.",
    "Do something today that your future self will thank you for.",
    "You miss 100% of the shots you don’t take.",
    "Success is achieved by developing our strengths, not by eliminating our weaknesses.",
    "Success is the ability to go from failure to failure without losing your enthusiasm.",
    "Make each day your masterpiece.",
    "Believe in yourself and you'll be unstoppable.",
    "The harder the struggle, the greater the reward.",
    "The best way to get started is to quit talking and begin doing."
]
,
funny: [
  "Cookies have no calories if you don't look.",
  "Your cat is plotting something.",
  "Eat. Sleep. Fortune. Repeat.",
  "This cookie self-destructs in... Just kidding.",
  "Life is short. Smile while you still have teeth.",
  "I'm on a seafood diet. I see food, and I eat it.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "I don't need a hair stylist, my pillow gives me a new hairstyle every morning.",
  "A day without laughter is a day wasted.",
  "I'm not arguing, I'm just explaining why I'm right.",
  "I’m writing a book on reverse psychology. Don’t buy it.",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "I used to play piano by ear, but now I use my hands.",
  "Why don’t oysters donate to charity? Because they’re shellfish.",
  "You can’t trust an atom, they make up everything.",
  "I'm on a whiskey diet. I’ve lost three days already.",
  "If a child refuses to sleep during nap time, are they guilty of resisting a rest?",
  "I can't adult today.",
  "Why don't eggs tell jokes? Because they'd crack each other up.",
  "I don't suffer from insanity. I enjoy every minute of it.",
  "The early bird might get the worm, but the second mouse gets the cheese.",
  "I’m reading a book about anti-gravity. It’s impossible to put down.",
  "I’m friends with all electricians, we have such a shocking relationship.",
  "I would tell you a joke about an elevator, but it’s an uplifting experience.",
  "The best time to plant a tree was 20 years ago. The second best time is now… unless it’s a cactus.",
  "I couldn’t figure out how to put my seatbelt on. Then it clicked.",
  "I’m on a liquid diet. So far, it’s only coffee and sarcasm.",
  "I told my computer I needed a break, and now it’s frozen.",
  "I’m not procrastinating, I’m just prioritizing my naps.",
  "Do you ever look at someone and wonder, 'What is going on inside their head?'",
  "I don’t need a mood ring. I have a face.",
  "I’m not great at advice, but can I offer a sarcastic comment?",
  "I’m trying to lose weight, but it’s not working because I have a 'donut' attitude.",
  "I’m not saying I’m Batman, but have you ever seen me and Batman in the same room?",
  "If you think nobody cares if you're alive, try missing a couple of payments.",
  "I don’t need Google. My wife knows everything.",
  "Why do cows have hooves instead of feet? Because they lactose.",
  "I can't trust people who don't like dogs. I mean, what's their problem?",
  "Life is short, so smile while you still have teeth.",
  "I’m not arguing, I’m just explaining why I’m right.",
  "If you think nobody cares, try missing a couple of payments.",
  "When life gives you lemons, just remember: there’s always vodka.",
  "My wife told me I should do lunges to stay in shape. That would be a big step forward.",
  "I used to be indecisive, but now I’m not sure.",
  "Why don’t skeletons ever fight each other? They don’t have the guts.",
  "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you.'",
  "I don't trust stairs because they're always up to something.",
  "I wonder if clouds ever look down on us and say, 'That one’s shaped like an idiot.'",
  "I was going to tell you a joke about an elevator, but it's an uplifting experience.",
  "There are three kinds of people in the world: those who can count, and those who can't.",
  "I like to tell people I’m a ‘work in progress’—mostly because it’s true.",
  "I never argue. I just explain why I’m right.",
  "If at first you don’t succeed, then skydiving definitely isn’t for you.",
  "I know they say that money talks, but all mine says is 'Goodbye.'",
  "I'm not saying I hate you, but I would unplug your life support to charge my phone.",
  "I’m not weird, I’m just limited edition.",
  "If you can’t remember my name, just say 'average' and I’ll turn around.",
  "I have a split personality,” said Tom, being Frank.",
  "I don’t like to think before I speak. I like to be just as surprised as everyone else by what comes out of my mouth.",
  "Behind every great man is a woman rolling her eyes.",
  "I have a lot of growing up to do. I realized that the other day inside my fort.",
  "I don't think I’m a procrastinator. I just work better under pressure… and procrastinate.",
  "I don’t suffer from insanity, I enjoy every minute of it.",
  "I’ve had a great day. Don’t ruin it by making me do something.",
  "I'm not lazy, I'm just on energy-saving mode.",
  "You know you're texting too much when you say LOL in real life, instead of just laughing.",
  "My life feels like a test I didn’t study for.",
  "I'm really good at my job, but I have to pretend I don’t care.",
  "I’ll stop procrastinating tomorrow.",
  "I don't like to brag, but I have a really big vocabulary. I'm a wordsmith, if you will.",
  "You ever get that feeling where you're just kind of living, but also a little bit dead inside?",
  "I'm not short. I'm just more down to earth than most people.",
  "I wish I could be as thin as I was when I thought I was fat.",
  "I just burned 1200 calories. I forgot the pizza in the oven.",
  "The only time to be positive you’re in the right place is when you’re on the toilet.",
  "I could agree with you, but then we’d both be wrong.",
  "My room was clean yesterday. Sorry you missed it.",
  "I’m on a whiskey diet. I’ve lost three days already.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "I’m trying to lose weight, but I keep eating the food I’m supposed to be losing.",
  "I was going to take over the world, but I overslept.",
  "I had to quit my job as a banker. I lost interest.",
  "I used to play piano by ear, but now I use my hands.",
  "You know you’re texting too much when you say LOL in real life, instead of just laughing.",
  "I told my computer I needed a break, and now it’s frozen."
]
,
spooky: [
  "You have already opened this cookie.",
  "Something is watching you.",
  "Don’t turn around right now.",
  "This message came from the void.",
  "The shadows are closer than they appear.",
  "You feel a cold breath on your neck, but no one is there.",
  "The whispers you hear are not just in your head.",
  "The door creaks open by itself.",
  "You are not alone, even if you think you are.",
  "That knocking sound is coming from inside the walls.",
  "You can hear someone breathing, but there's no one there.",
  "That shadow you saw in the corner? It’s still watching.",
  "Someone is watching you from the reflection in the mirror.",
  "The lights flicker and you feel an icy chill.",
  "The footprints on the floor lead straight to your room.",
  "Don’t close your eyes, they’re waiting for you.",
  "You feel like someone is standing behind you, but no one is there.",
  "The clock stopped at exactly 3:00 AM, the witching hour.",
  "The air around you feels heavier, as if something is closing in.",
  "That cold breeze wasn’t from the window, but from something else.",
  "Something in the corner of your room is just out of sight.",
  "You hear footsteps, but no one is walking.",
  "The phone rings, but no one is on the other end.",
  "You hear someone whisper your name, but no one is there.",
  "You didn’t leave that window open, did you?",
  "The temperature drops suddenly, and you can’t shake the feeling you're being watched.",
  "Your reflection doesn’t quite match your movements.",
  "That thump on the floor above you isn’t from anyone who lives there.",
  "You hear breathing coming from under the bed.",
  "The curtains move, but there’s no wind.",
  "The lights go out, but you hear the faint sound of someone breathing in the dark.",
  "The room smells like something long forgotten.",
  "You can feel the walls slowly closing in around you.",
  "You can’t find your way out of the maze, but it feels like it’s always shifting.",
  "That picture on the wall moved when you weren’t looking.",
  "The house feels colder the deeper you go.",
  "You thought you locked the door, but it’s open.",
  "The creaking of the floorboards is louder than usual tonight.",
  "A chill runs down your spine as you hear a voice whisper, 'I’m right behind you.'",
  "Someone has been in your room while you were gone.",
  "That eerie feeling in the attic isn’t your imagination.",
  "You hear someone walking through the house, but you’re alone.",
  "The lights won’t turn back on. They flicker one last time, then die completely.",
  "The walls are too thin; you can hear things moving in the dark.",
  "Your reflection in the window doesn’t match the person in front of it.",
  "You hear a door creak open, but no one is there to open it.",
  "The temperature drops so suddenly, you can see your breath in the air.",
  "You feel a pair of eyes on you as you walk down the dark hallway.",
  "There’s a soft scratching sound coming from the ceiling.",
  "Something is tapping on your window, but when you look outside, no one’s there.",
  "You feel something tugging at your hair, but when you look, no one’s near.",
  "The door you’re sure you locked is now wide open.",
  "You wake up, but the room feels different—something isn’t right.",
  "The phone’s screen shows a message: 'I’m watching you.'",
  "The wind whispers your name, but the trees are still.",
  "You thought you heard footsteps, but the hallway is empty.",
  "The room feels suffocating, and it’s getting harder to breathe.",
  "The air smells stale, as if someone hasn’t been there in years.",
  "That shape in the dark? It’s getting closer.",
  "You heard the piano playing by itself, but there’s no one in the room.",
  "The picture on the wall just fell, but there’s no wind.",
  "Something is hiding in the closet, waiting for you to open it.",
  "You hear someone humming a lullaby, but no one’s around.",
  "You see a face in the mirror that isn’t yours.",
  "The footsteps behind you grow louder with every step you take.",
  "You hear a voice behind the wall, but no one lives there.",
  "That old toy you thought you threw away just moved.",
  "You feel something brush against your leg, but when you look, nothing’s there.",
  "The door to the attic is slightly ajar, and it wasn’t like that before.",
  "The air feels thick, and the hairs on the back of your neck stand up.",
  "You hear whispers from under the floorboards.",
  "The stairs creak under the weight of someone you can’t see.",
  "That cold breeze isn’t from the window—it’s coming from the closet.",
  "The reflection in the mirror is smiling at you, but you aren’t.",
  "You find a note on your pillow that says, 'You’re not alone.'",
  "You hear something scratching at the door, but it’s not a pet.",
  "Something is calling your name from the darkness.",
  "The shadow in the corner of the room doesn’t move when you do.",
  "The doorbell rings, but no one is there.",
  "That faint giggling you hear is not your imagination.",
  "The lights blink out, and you feel something touch your shoulder.",
  "The phone rings, and when you answer, the voice says, 'Come home.'",
  "The wind howls through the trees, but you hear something else underneath it.",
  "You catch a glimpse of someone in the hallway, but they disappear when you turn around.",
  "You wake up in the middle of the night and see a figure standing at the foot of your bed.",
  "The walls are starting to whisper your secrets.",
  "Something is pacing back and forth in the other room.",
  "The window is fogged up, but someone is writing on it.",
  "You hear someone singing softly, but it’s not a song you know.",
  "A loud crash comes from upstairs, but when you go to check, everything is in place.",
  "You thought you saw something move behind you, but when you look, nothing’s there.",
  "The chair you left at the table has been pushed back, but no one was near it.",
  "The lights dim and you hear a faint whisper from the dark corner of the room.",
  "You wake up to find your reflection staring at you from the other side of the room.",
  "The door closes by itself with a loud bang, and you’re locked inside.",
  "You feel someone breathing on your neck, but when you turn around, no one is there."
]

};

/// Default Category
let currentCategory = 'motivational';

/**
 * Updates the current fortune category.
 * @param {string} cat - The category to set.
 */
function setCategory(cat) {
   currentCategory = cat;

   // Clear fortune text when switching categories
   const fortuneBox = document.getElementById('fortune-text');
   fortuneBox.textContent = 'Click the cookie to reveal your fortune!';

   // Show mood-based emojis
   showMoodEmoji();
}

/**
 * Generates and displays a random fortune from the selected category.
 */
function crackCookie() {
   const fortuneList = categories[currentCategory];
   const randomIndex = Math.floor(Math.random() * fortuneList.length);
   const fortune = fortuneList[randomIndex];

   // Update fortune text dynamically
   const fortuneBox = document.getElementById('fortune-text');
   fortuneBox.textContent = `"${fortune}"`;

   // Animate cookie cracking effect
   const cookieImg = document.getElementById('cookie-img');
   cookieImg.classList.add('crack');
   
   // Remove animation class after completion
   setTimeout(() => cookieImg.classList.remove('crack'), 300);
}

/**
 * Toggles between light and dark theme.
 */
function toggleTheme() {
   document.body.classList.toggle('dark');
}

/**
 * Displays mood-based emojis.
 */
function showMoodEmoji() {
   const emojiContainer = document.getElementById('emoji-container');
   emojiContainer.style.display = 'block';

   let emoji = '';
   switch (currentCategory) {
     case 'motivational':
       emoji = '💪🌟';
       break;
     case 'funny':
       emoji = '😂🤣';
       break;
     case 'spooky':
       emoji = '👻💀';
       break;
     default:
       emoji = '';
   }

   emojiContainer.textContent = emoji;

   // Hide emoji after a few seconds
   setTimeout(() => {
     emojiContainer.style.display = 'none';
   }, 2000);
}