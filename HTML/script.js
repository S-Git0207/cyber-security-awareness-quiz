// ==========================================
// CYBER SECURITY AWARENESS QUIZ
// ==========================================


// ==========================================
// QUESTIONS
// ==========================================

const questions = [

    {
        question:
            "A payment of ₹2,450 was made using your debit card ending in 6721. If you do not recognize this transaction, contact your bank using the number printed on your card.",

        answer:
            "normal",

        explanation:
            "This resembles a normal bank transaction alert. It provides specific transaction information and recommends contacting the bank through an official number rather than asking you to provide confidential information through a link."
    },


    {
        question:
            "We were unable to complete your recent delivery. Please confirm your address and pay ₹49 for another delivery attempt using the link provided below.",

        answer:
            "spam",

        explanation:
            "The unexpected delivery charge and payment link are warning signs. Messages like this can lead to fake payment pages designed to collect financial information."
    },


    {
        question:
            "Your monthly account statement is now available. You can review your transactions by signing in through your usual banking application.",

        answer:
            "normal",

        explanation:
            "This is consistent with a routine account notification. It does not ask for your password or financial details and directs you to your usual banking application."
    },


    {
        question:
            "We detected a login attempt from a new device. If you did not make this attempt, please change your password through the official banking website or application.",

        answer:
            "normal",

        explanation:
            "Banks commonly send security notifications about new login attempts. The safer instruction here is to access the official website or application yourself rather than following an unknown link."
    },


    {
        question:
            "Your reward points will expire tonight. Sign in through the link below to convert 18,500 points into ₹9,500 cash before the offer ends.",

        answer:
            "spam",

        explanation:
            "The combination of a valuable unexpected reward, an immediate deadline, and a login link is suspicious. These are common techniques used to make people act before thinking carefully."
    },


    {
        question:
            "Your electricity bill of ₹1,284 is due on October 3. Please use your electricity provider's official website or mobile application to make the payment.",

        answer:
            "normal",

        explanation:
            "This resembles a normal billing reminder. It directs the customer to the provider's official website or application rather than asking them to make a payment through an unknown page."
    },


    {
        question:
            "Your card ending in 9044 requires verification. Reply to this message with your card number and the six-digit OTP you received to prevent temporary suspension.",

        answer:
            "spam",

        explanation:
            "Requesting a card number and OTP through a message is a major warning sign. One-time passwords are authentication secrets and should not be shared with someone requesting them this way."
    },


    {
        question:
            "Your online purchase of ₹3,799 from XYZ Electronics has been confirmed. The order can be viewed from your account's order history.",

        answer:
            "normal",

        explanation:
            "This looks like a standard purchase confirmation. It provides order information and points the customer toward their existing account instead of requesting additional payment or confidential credentials."
    },


    {
        question:
            "Important: Your KYC information is incomplete. Upload your PAN card, Aadhaar details, ATM PIN, and internet banking password within 12 hours to keep your account active.",

        answer:
            "spam",

        explanation:
            "The request for an ATM PIN and internet banking password is a strong warning sign. Sensitive authentication credentials should not be submitted through an unsolicited message."
    },


    {
        question:
            "Your scheduled credit card payment of ₹5,000 was successfully processed. The updated balance is available in your banking application.",

        answer:
            "normal",

        explanation:
            "This is a normal payment confirmation. It does not request sensitive information, additional payment, or urgent action through an unfamiliar website."
    },


    {
        question:
            "A refund of ₹8,750 is waiting to be credited to your account. Confirm your bank details using the secure verification page below so the refund can be released today.",

        answer:
            "spam",

        explanation:
            "The message asks you to provide bank details through a supplied verification page and adds urgency by saying the refund must be released today. Unexpected requests for financial information are suspicious."
    },


    {
        question:
            "Your mobile service bill for this month is ₹699. The payment is due on October 1. You can check the bill and payment status in your provider's official app.",

        answer:
            "normal",

        explanation:
            "This resembles a routine mobile-billing notification. It provides a bill amount and due date while directing the customer to the provider's official application."
    },


    {
        question:
            "A new beneficiary has been added to your banking profile. If you did not authorize this change, contact your bank immediately through its official customer-service channel.",

        answer:
            "normal",

        explanation:
            "A bank may legitimately notify customers when an important account setting changes. It also recommends using an official contact method if the change was unauthorized."
    },


    {
        question:
            "Your account has been selected for a complimentary upgrade. To activate the benefits, confirm your debit card number, CVV, PIN, and OTP using the verification page.",

        answer:
            "spam",

        explanation:
            "The request for a CVV, PIN, and OTP is a major red flag. These credentials should never be submitted to an unsolicited verification page."
    },


    {
        question:
            "Your bank has received your request to update your mailing address. If you did not submit this request, please contact the bank using the official contact details on your website or card.",

        answer:
            "normal",

        explanation:
            "This is a plausible account-security notification. It does not ask the customer to reveal confidential information and recommends using an official contact method if the request was unauthorized."
    }

];


// ==========================================
// QUIZ VARIABLES
// ==========================================

let currentQuestion = 0;

let score = 0;

let selectedAnswer = false;


// ==========================================
// ELEMENTS
// ==========================================

const startScreen =
    document.getElementById("start-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const exitScreen =
    document.getElementById("exit-screen");


const startBtn =
    document.getElementById("start-btn");

const nextBtn =
    document.getElementById("next-btn");

const restartBtn =
    document.getElementById("restart-btn");

const exitBtn =
    document.getElementById("exit-btn");

const homeBtn =
    document.getElementById("home-btn");


const questionNumber =
    document.getElementById("question-number");

const questionText =
    document.getElementById("question-text");


const normalBtn =
    document.getElementById("normal-btn");

const spamBtn =
    document.getElementById("spam-btn");


const explanation =
    document.getElementById("explanation");


const progressBar =
    document.getElementById("progress-bar");


const finalScore =
    document.getElementById("final-score");

const percentage =
    document.getElementById("percentage");

const scoreMessage =
    document.getElementById("score-message");


const resultContent =
    document.getElementById("result-content");

const resultIcon =
    document.getElementById("result-icon");


// ==========================================
// AUDIO
// ==========================================

let audioContext = null;


// ==========================================
// INITIALIZE AUDIO
// ==========================================

function initializeAudio() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }

    if (
        audioContext.state ===
        "suspended"
    ) {

        audioContext.resume();

    }

}


// ==========================================
// CORRECT ANSWER SOUND
// MILD SUCCESS SOUND
// ==========================================

function playCorrectSound() {

    initializeAudio();


    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();


    oscillator.type =
        "sine";


    oscillator.frequency.setValueAtTime(
        520,
        audioContext.currentTime
    );


    oscillator.frequency.exponentialRampToValueAtTime(
        700,
        audioContext.currentTime + 0.12
    );


    gain.gain.setValueAtTime(
        0.0001,
        audioContext.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.07,
        audioContext.currentTime + 0.02
    );


    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioContext.currentTime + 0.18
    );


    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );


    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + 0.18
    );

}


// ==========================================
// WRONG ANSWER SOUND
// VERY MILD
// ==========================================

function playWrongSound() {

    initializeAudio();


    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();


    /*
        A low, soft tone instead of
        an aggressive error sound.
    */

    oscillator.type =
        "sine";


    oscillator.frequency.setValueAtTime(
        230,
        audioContext.currentTime
    );


    oscillator.frequency.exponentialRampToValueAtTime(
        180,
        audioContext.currentTime + 0.12
    );


    gain.gain.setValueAtTime(
        0.0001,
        audioContext.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.045,
        audioContext.currentTime + 0.015
    );


    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioContext.currentTime + 0.14
    );


    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );


    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + 0.14
    );

}


// ==========================================
// COMPLETION SOUND
// ==========================================

function playCompletionSound() {

    initializeAudio();


    const notes = [
        523,
        659,
        784
    ];


    notes.forEach(
        function (
            frequency,
            index
        ) {

            const oscillator =
                audioContext.createOscillator();

            const gain =
                audioContext.createGain();


            oscillator.type =
                "sine";


            oscillator.frequency.value =
                frequency;


            const startTime =
                audioContext.currentTime +
                (index * 0.15);


            gain.gain.setValueAtTime(
                0.0001,
                startTime
            );


            gain.gain.exponentialRampToValueAtTime(
                0.07,
                startTime + 0.02
            );


            gain.gain.exponentialRampToValueAtTime(
                0.0001,
                startTime + 0.22
            );


            oscillator.connect(gain);

            gain.connect(
                audioContext.destination
            );


            oscillator.start(
                startTime
            );


            oscillator.stop(
                startTime + 0.22
            );

        }
    );

}


// ==========================================
// START QUIZ
// ==========================================

startBtn.addEventListener(
    "click",
    startQuiz
);


function startQuiz() {

    currentQuestion = 0;

    score = 0;

    selectedAnswer = false;


    startScreen.classList.remove(
        "active"
    );

    resultScreen.classList.remove(
        "active"
    );

    exitScreen.classList.remove(
        "active"
    );


    quizScreen.classList.add(
        "active"
    );


    initializeAudio();


    showQuestion();

}


// ==========================================
// SHOW QUESTION
// ==========================================

function showQuestion() {

    selectedAnswer = false;


    nextBtn.disabled = true;


    explanation.className =
        "explanation";

    explanation.innerHTML =
        "";


    normalBtn.classList.remove(
        "correct",
        "wrong"
    );

    spamBtn.classList.remove(
        "correct",
        "wrong"
    );


    normalBtn.disabled = false;

    spamBtn.disabled = false;


    const question =
        questions[currentQuestion];


    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    questionText.textContent =
        question.question;


    /*
        Progress percentage.
    */

    const progress =
        (
            currentQuestion /
            questions.length
        ) * 100;


    progressBar.style.width =
        `${progress}%`;

}


// ==========================================
// SELECT ANSWER
// ==========================================

function selectAnswer(
    selectedButton
) {

    if (selectedAnswer) {

        return;

    }


    selectedAnswer = true;


    const selectedValue =
        selectedButton.dataset.answer;


    const correctAnswer =
        questions[currentQuestion].answer;


    /*
        Prevent another answer
        from being selected.
    */

    normalBtn.disabled = true;

    spamBtn.disabled = true;


    // ======================================
    // CORRECT
    // ======================================

    if (
        selectedValue ===
        correctAnswer
    ) {

        score++;


        selectedButton.classList.add(
            "correct"
        );


        playCorrectSound();


        explanation.className =
            "explanation show correct-explanation";


        explanation.innerHTML =
            `
                <strong>✓ CORRECT</strong>
                <br>
                ${questions[currentQuestion].explanation}
            `;

    }


    // ======================================
    // WRONG
    // ======================================

    else {

        /*
            Play only a very mild sound.
        */

        playWrongSound();


        selectedButton.classList.add(
            "wrong"
        );


        explanation.className =
            "explanation show wrong-explanation";


        explanation.innerHTML =
            `
                <strong>✗ INCORRECT</strong>
                <br>
                ${questions[currentQuestion].explanation}
            `;

    }


    /*
        Show the actual correct answer
        in green.
    */

    if (
        correctAnswer === "normal"
    ) {

        normalBtn.classList.add(
            "correct"
        );

    }

    else {

        spamBtn.classList.add(
            "correct"
        );

    }


    nextBtn.disabled = false;

}


// ==========================================
// NORMAL BUTTON
// ==========================================

normalBtn.addEventListener(
    "click",
    function () {

        selectAnswer(
            normalBtn
        );

    }
);


// ==========================================
// SPAM BUTTON
// ==========================================

spamBtn.addEventListener(
    "click",
    function () {

        selectAnswer(
            spamBtn
        );

    }
);


// ==========================================
// NEXT QUESTION
// ==========================================

nextBtn.addEventListener(
    "click",
    nextQuestion
);


function nextQuestion() {

    /*
        There is no previous button.
        The user cannot return to an
        earlier question.
    */

    currentQuestion++;


    if (
        currentQuestion <
        questions.length
    ) {

        showQuestion();

    }

    else {

        finishQuiz();

    }

}


// ==========================================
// FINISH QUIZ
// ==========================================

function finishQuiz() {

    quizScreen.classList.remove(
        "active"
    );


    resultScreen.classList.add(
        "active"
    );


    progressBar.style.width =
        "100%";


    const total =
        questions.length;


    const percentageValue =
        Math.round(
            (score / total) * 100
        );


    finalScore.textContent =
        `${score} / ${total}`;


    percentage.textContent =
        `${percentageValue}%`;


    playCompletionSound();


    resultContent.classList.add(
        "complete-animation"
    );


    resultIcon.classList.add(
        "complete-animation"
    );


    /*
        Different messages
        based on percentage.
    */

    if (
        percentageValue === 100
    ) {

        scoreMessage.textContent =
            "Outstanding! You identified every message correctly. Your cyber security awareness is excellent.";

    }

    else if (
        percentageValue >= 80
    ) {

        scoreMessage.textContent =
            "Excellent work! You showed a strong ability to recognize suspicious messages and identify normal communication.";

    }

    else if (
        percentageValue >= 60
    ) {

        scoreMessage.textContent =
            "Great job! You have a good understanding of common warning signs. A little more practice will make you even more confident.";

    }

    else if (
        percentageValue >= 40
    ) {

        scoreMessage.textContent =
            "Good attempt! Some messages can be difficult to judge. Keep practicing and pay close attention to unusual requests.";

    }

    else {

        scoreMessage.textContent =
            "Keep practicing! Be especially careful with unexpected requests for passwords, OTPs, payment information, or urgent action.";

    }

}


// ==========================================
// PLAY AGAIN
// ==========================================

restartBtn.addEventListener(
    "click",
    function () {

        resultContent.classList.remove(
            "complete-animation"
        );


        resultIcon.classList.remove(
            "complete-animation"
        );


        startQuiz();

    }
);


// ==========================================
// EXIT
// ==========================================

exitBtn.addEventListener(
    "click",
    function () {

        resultScreen.classList.remove(
            "active"
        );


        exitScreen.classList.add(
            "active"
        );

    }
);


// ==========================================
// RETURN HOME
// ==========================================

homeBtn.addEventListener(
    "click",
    function () {

        exitScreen.classList.remove(
            "active"
        );


        startScreen.classList.add(
            "active"
        );

    }
);

