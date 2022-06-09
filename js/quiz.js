document.querySelector('.quiz-btn').addEventListener('click', quizToggle);
document.querySelector('.close-btn2').addEventListener('click', quizToggle);

function quizToggle() {
    const quizpopup = document.getElementById('quiz-popup');
    quizpopup.classList.toggle('active');
}

function submitAnswers(){
	let total = 10;
	let score = 0;
	
	// Get User Input
	let q1 = document.forms["quizForm"]["q1"].value;
	let q2 = document.forms["quizForm"]["q2"].value;
	let q3 = document.forms["quizForm"]["q3"].value;
	let q4 = document.forms["quizForm"]["q4"].value;
	let q5 = document.forms["quizForm"]["q5"].value;
	let q6 = document.forms["quizForm"]["q6"].value;
	let q7 = document.forms["quizForm"]["q7"].value;
	let q8 = document.forms["quizForm"]["q8"].value;
	let q9 = document.forms["quizForm"]["q9"].value;
	let q10 = document.forms["quizForm"]["q10"].value;

	// Validation
	for(i = 1; i <= total ;i++){
		if(eval('q'+i) == null || eval('q'+i) == ''){
			alert(`Choose Your Answer In Question ${i}`);
			return false;
		}
	}
	
	// Set Correct Answers
	let answers = ["b","c","a","c","d","b","d","a","c","b"];
	
	// Check Answers
	for(i = 1; i <= total ;i++){
		if(eval('q'+i) == answers[i - 1]){
			score++;
		}
	}
	
	// Display Results
	let quizres = document.getElementById('quiz-res');
	quizres.innerHTML = `<span class="cg1">${score}</span> <span class="cg2">/</span> <span class="cg3">${total}</span>`;

    let c1 = document.querySelector('.c1');
    let c2 = document.querySelector('.c2');
    let c3 = document.querySelector('.c3');
    let c4 = document.querySelector('.c4');
    let c5 = document.querySelector('.c5');
    let c6 = document.querySelector('.c6');
    let c7 = document.querySelector('.c7');
    let c8 = document.querySelector('.c8');
    let c9 = document.querySelector('.c9');
    let c10 = document.querySelector('.c10');

    if (answers[0] == q1) {
        c1.style.color = '#2ecc72';
        c1.style.fontWeight = 'bold';
    }

    if (answers[1] == q2) {
        c2.style.color = '#2ecc72';
        c2.style.fontWeight = 'bold';
    }

    if (answers[2] == q3) {
        c3.style.color = '#2ecc72';
        c3.style.fontWeight = 'bold';
    }

    if (answers[3] == q4) {
        c4.style.color = '#2ecc72';
        c4.style.fontWeight = 'bold';
    }

    if (answers[4] == q5) {
        c5.style.color = '#2ecc72';
        c5.style.fontWeight = 'bold';
    }

    if (answers[5] == q6) {
        c6.style.color = '#2ecc72';
        c6.style.fontWeight = 'bold';
    }

    if (answers[6] == q7) {
        c7.style.color = '#2ecc72';
        c7.style.fontWeight = 'bold';
    }

    if (answers[7] == q8) {
        c8.style.color = '#2ecc72';
        c8.style.fontWeight = 'bold';
    }

    if (answers[8] == q9) {
        c9.style.color = '#2ecc72';
        c9.style.fontWeight = 'bold';
    }

    if (answers[9] == q10) {
        c10.style.color = '#2ecc72';
        c10.style.fontWeight = 'bold';
    }

	return false;
}