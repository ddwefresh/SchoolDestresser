
var q1_answered = false;
function next_question() {
	let ele = document.getElementsByName('q1');
	
	for (i=0; i<ele.length; i++) {
		if (ele[i].checked) {
			sessionStorage.setItem('q1a', ele[i].value);
			q1_answered = true;
		}
	}
	if (q1_answered == true) window.location.href = "question2.html";
}



function question2() {
	document.getElementsByClassName("question")[0].innerHTML = "What makes you feel " + sessionStorage.getItem('q1a') + "?";
}

var q2_answered = false;
function next_question2() {
	let ele = document.getElementsByName('q2');
	
	for (i=0; i<ele.length; i++) {
		if (ele[i].checked) {
			sessionStorage.setItem('q2a', ele[i].value);
			q2_answered = true;
		}
	}
	if (q2_answered == true) window.location.href = "question3.html";
}



var q3_answered = false;
function next_question3() {
	let ele = document.getElementsByName('q3');
	
	for (i=0; i<ele.length; i++) {
		if (ele[i].checked) {
			sessionStorage.setItem('q3a', ele[i].value);
			q3_answered = true;
		}
	}
	if (q3_answered == true) window.location.href = "question4.html";
}

var q4_num = 0;
function next_question4() {
	let ele = document.getElementsByName('q4');
	
	for (i=0; i<ele.length; i++) {
		if (ele[i].checked) {
			q4_num += 1;
		}
	}
	sessionStorage.setItem('q4a', q4_num);

	window.location.href = "question5.html";
}

var q5_answered = false;
function next_question5() {
	let ele = document.getElementsByName('q5');
	
	for (i=0; i<ele.length; i++) {
		if (ele[i].checked) {
			sessionStorage.setItem('q5a', ele.length-i);
			q5_answered = true;
		}
	}
	if (q5_answered == true) window.location.href = "results.html";
}







function the_results() {
	let apple = sessionStorage.getItem('q1a');
	let orange = sessionStorage.getItem('q2a');
	let hobby = sessionStorage.getItem('q3a');
	let health = Number(sessionStorage.getItem('q4a'));
	let love = Number(sessionStorage.getItem('q5a'));
	
	
	// i may be crazy
	if (apple == "Happy" && orange == "Homework" ) document.getElementsByClassName("r1")[0].innerHTML = "It's great to enjoy learning! If finishing your homework is enjoyable, don't stop!";
	else if (apple == "Happy" && orange == "Exams") document.getElementsByClassName("r1")[0].innerHTML = "Sounds like you did good on a test! Keep it up!";
	else if (apple == "Happy" && orange == "Social Life" ) document.getElementsByClassName("r1")[0].innerHTML = "Making friends is important! Looks like you found your buddies!";
	else if (apple == "Happy" && orange == "Sleep" ) document.getElementsByClassName("r1")[0].innerHTML = "I like sleeping. Looks like you do too! Just don't sleep too much! Wake up and do something fun!";
	else if (apple == "Happy" && orange == "Everything" ) document.getElementsByClassName("r1")[0].innerHTML = "Looks like everything is making you happy today!";
	else if (apple == "Sad" && orange == "Homework" ) document.getElementsByClassName("r1")[0].innerHTML = "Homework can kind of suck, but there's only less of it when it's done! If you're stuck, the internet is your best friend, my friend.";
	else if (apple == "Sad" && orange == "Exams") document.getElementsByClassName("r1")[0].innerHTML = "A failed exam is not a failed life. It's hard to tell myself that, but I know you only fail when you give up.";
	else if (apple == "Sad" && orange == "Social Life" ) document.getElementsByClassName("r1")[0].innerHTML = "I guess the people aren't your type of people. Sometimes it's easier to do things with people to build that bond. Striking meaningful conversations with people you don't know is hard!";
	else if (apple == "Sad" && orange == "Sleep" ) document.getElementsByClassName("r1")[0].innerHTML = "Not sure how sleeping can make you sad. It's the best thing about my day. Nonetheless, your feelings are valid and I respect that you want to get out of bed!";
	else if (apple == "Sad" && orange == "Everything" ) document.getElementsByClassName("r1")[0].innerHTML = "Never give up my friend. No matter how long that dark tunnel is, there is always light at the end of it. Keep moving forward and you will make it. I know that sound's cheesy, but it's true.";
	else if (apple == "Angry" && orange == "Homework" ) document.getElementsByClassName("r1")[0].innerHTML = "UGHH HOMEWORK!!! HATE IT. SPIT ON IT. BURN IT. It sucks, but keep at it! They're only gonna give you more!";
	else if (apple == "Angry" && orange == "Exams") document.getElementsByClassName("r1")[0].innerHTML = "Man, that exam was worth a lot, and it felt like it was made by a goldfish. But what are you gonna do now? Get mad and do nothing? Tell'em yourself! Sometimes actions speak more than words my friend.";
	else if (apple == "Angry" && orange == "Social Life" ) document.getElementsByClassName("r1")[0].innerHTML = "Sometimes people suck huh? Forget them and tell yourself you're better than them! You are better! YOU ARE BETTER!!!";
	else if (apple == "Angry" && orange == "Sleep" ) document.getElementsByClassName("r1")[0].innerHTML = "Having nightmares from that exam you took? Couldn't be scarier than your search history. I know who you are...";
	else if (apple == "Angry" && orange == "Everything" ) document.getElementsByClassName("r1")[0].innerHTML = "I guess things aren't working out for you right now. Just take a deep breath and take a break from it all. Allow yourself to be happy for at least a day, okay?";
	else if (apple == "Worried" && orange == "Homework" ) document.getElementsByClassName("r1")[0].innerHTML = "Did you really take more than four courses and expect them to not give you homework on the same day and due the same day? Don't waste time worrying! Use whatever energy you got to finish those pieces of crap!";
	else if (apple == "Worried" && orange == "Exams") document.getElementsByClassName("r1")[0].innerHTML = "Yeah, it's okay to be worried about exams. You should be! It's only natural to! If it hasn't happened yet, when it does, make it right!";
	else if (apple == "Worried" && orange == "Social Life" ) document.getElementsByClassName("r1")[0].innerHTML = "Hey, lots of other people are feeling the same way, and are looking for people like you. Don't be afaid of people you haven't met yet!";
	else if (apple == "Worried" && orange == "Sleep" ) document.getElementsByClassName("r1")[0].innerHTML = "Did you see the boogeyman last night? If he handed you an exam you didn't study for, I totally get it. Study before you go to sleep! Just in case!";
	else if (apple == "Worried" && orange == "Everything" ) document.getElementsByClassName("r1")[0].innerHTML = "They're out to get you. KIDDING!!! Or am I? *Moon Men (Instrumental) starts playing*";
	else if (apple == "Overwhelmed" && orange == "Homework" ) document.getElementsByClassName("r1")[0].innerHTML = "One step at a time. You probably got a lot on your plate, so take a deep breath before you dive back in. Glad you're here buddy.";
	else if (apple == "Overwhelmed" && orange == "Exams") document.getElementsByClassName("r1")[0].innerHTML = "It's ok to feel overwhelmed. But don't work yourself dry. There's still time. I believe in you.";
	else if (apple == "Overwhelmed" && orange == "Social Life" ) document.getElementsByClassName("r1")[0].innerHTML = "Gotta take a break from the yappers huh? Don't forget to leave some time for yourself!";
	else if (apple == "Overwhelmed" && orange == "Sleep" ) document.getElementsByClassName("r1")[0].innerHTML = "Overwhelmed? By sleep? This is literally the opposite of sleep bruh.";
	else if (apple == "Overwhelmed" && orange == "Everything" ) document.getElementsByClassName("r1")[0].innerHTML = "Sometimes life can feel packed and you don't have enough energy and time to figure everything out. Thats okay. Just take it a step at a time.";
	else if (apple == "Meh" && orange == "Homework" ) document.getElementsByClassName("r1")[0].innerHTML = "Homework huh? What else is new?";
	else if (apple == "Meh" && orange == "Exams") document.getElementsByClassName("r1")[0].innerHTML = "Well, I'm not excited about exams either.";
	else if (apple == "Meh" && orange == "Social Life" ) document.getElementsByClassName("r1")[0].innerHTML = "Guess some people are pretty boring huh? Go have your own fun!";
	else if (apple == "Meh" && orange == "Sleep" ) document.getElementsByClassName("r1")[0].innerHTML = "Taking the nightshift? More sleep for me!";
	else if (apple == "Meh" && orange == "Everything" ) document.getElementsByClassName("r1")[0].innerHTML = "Sometimes, all you can say is, bruhhhhhhhhh. Like a Minecraft zombie.";
	
	if (health >= 6) {
		document.getElementsByClassName("r2")[0].innerHTML = "Looks like you're in great shape! Keep staying healthy! It only does better for your mind!";
	}
	else if (health >= 4) {
		document.getElementsByClassName("r2")[0].innerHTML = "You're doing good! Keep staying active!";
	}	
	else if (health >= 2) {
		document.getElementsByClassName("r2")[0].innerHTML = "Make sure you do things on time and get what you need when you need them! Keeping your body healthy helps reduce the amount of things you need to worry about!";
	}
	else if (health >= 0) {
		document.getElementsByClassName("r2")[0].innerHTML = "A healthy body helps lead to a healthy mind. You should definitely keep drinking water. Sleep will allow you to keep doing more. Also, give your mind a rest when you can.";
	}
	
	if (hobby == "Sports" && health <=3) {
		document.getElementsByClassName("r3")[0].innerHTML = "Sports are a great way to stay in shape and have fun! Keep at it!";
	}
	else if (hobby == "Going Out" && health <=3) {
		document.getElementsByClassName("r3")[0].innerHTML = "Going out to see places you have or haven't been to is a great way to get oxygen in your lungs. Try to go for a walk rather than transit!";
	}
	else if (love <= 2) {
		document.getElementsByClassName("r3")[0].innerHTML = "Sorry to hear that you aren't so fond of yourself. You may feel you're at your lowest now, but that means you can only get better. Just remind yourself why you still keep going. The future is full of great things. You just gotta make them a reality."
	}
	else if (hobby == "Watching Media" && love < 5) {
		document.getElementsByClassName("r3")[0].innerHTML = "Sometimes the way things are going on in your life may make you feel bad about yourself. Allow yourself to have a chuckle from time to time from some funny cat videos online";
	}
	else if (hobby == "Creativity" && love < 5) {
		document.getElementsByClassName("r3")[0].innerHTML = "One thing I know makes me feel better about myself when times are low is by making something with my own two hands. Whether it's art, food, or something made out of wood, it always feels great to bring life to something new in this world.";
	}
	else if (hobby == "Resting" && love < 5) {
		document.getElementsByClassName("r3")[0].innerHTML = "Always give yourself time to take a break from life and everything crazy. You deserve to sleep and feel better before you take on the next challenge.";
	}
	else if (hobby == "Spending Time With Others" && love < 5) {
		document.getElementsByClassName("r3")[0].innerHTML = "If you have someone to talk to, try to get in touch. It's always good to hear from a friend. Sometimes they can remind you of who you really are. You are friends because they see the good in you.";
	}
	else if (hobby == "Nothing") {
		document.getElementsByClassName("r3")[0].innerHTML = "Some days you can really feel like doing nothing. But nothing is still something. It's an oppertunity to do anything. Do something that makes you happy. It may not solve all your problems, but it can give you energy to.";
	}

	
	//document.getElementsByClassName("question")[0].innerHTML = "What makes you feel " + sessionStorage.getItem('q1a') + "?";
}