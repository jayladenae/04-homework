var question = $("#question")
var currentQuestion = 0
var secondsLeft = 100
let timeEl = $('#timer')
var grid = $('#answer-grid')
var body = $('body')
var nextButton = $('#next-btn')
var startButton = $('#bottom-btn')
var score = 0
var form = $('form')
var choices = $(".answer-btn")
var questionArray = [
    {
        question:"1.) (HTML) How would you write 'Hello World!' as the first header of an HTML doc?",
        answer: 'a: "<h1>Hello World!</h1>"',
        options:  ['a: "<h1>Hello World!</h1>"','b: "(first-header)Hello World!(end-first-header)"','c: "# Hello World!"','d: "Hello World!"']
    },
    {
        question:"2.) (JavaScript) How do you log to the console?",
        answer: 'c: "console.log()"',
        options:  ['a: ".log-to-ocnsole"', 'b: "[save.to.console]"','c: "console.log()"', 'd: "#console"']
    },
    {
        question:"3.) (JavaScript) How do you declare a variable?",
        answer: 'b: "var givinName = "_";',
        options:  [' a: "variable: givenName"','b: "var givinName = "_";', 'c: "$givenName"','d: ".declareVariable: "_" "']
    },
    {
        question:"4.) (CSS) How do you change text size using CSS?",
        answer: ' c: "font-size: __px;"',
        options:  ['a: "#fontsize: big"','b: "50 = text.size"',' c: "font-size: __px;"','d: "/font-size: 5"']
    },
    {
        question:"5.) (HTML) Whats the correct syntax for adding a CSS stylesheet to an HTML doc?",
        answer: 'd: "<link rel="__" href="__">"',
        options:  ['a: "(add.stylesheet)"','b: "link: stylesheet;"','c: "#stylesheet"','d: "<link rel="__" href="__">"']
    }]

    form.hide()

    function startGame(event){
        startButton.remove();
        nextButton.show();   
        updateQuiz();
    }

    function updateQuiz() {
        body.removeClass();
        grid.empty()
        question.text('')
        question.text(questionArray[currentQuestion].question);
        console.log(questionArray[currentQuestion].options.length)
        for (var i = 0; i < questionArray[currentQuestion].options.length; i++) { 
        let btn = document.createElement('button');
        btn.textContent = questionArray[currentQuestion].options[i]
        btn.value=questionArray[currentQuestion].options[i]
        btn.classList.add("btn")
        btn.classList.add("answer-btn")
        btn.addEventListener('click', function(){
            checkAnswer(this.value);
            currentQuestion++;
            })
            grid.append(btn);
        }}
    
    function checkAnswer(selectedAnswer){
        //var selectedAnswer = this.value
        console.log(selectedAnswer)
        if (currentQuestion + 1 === questionArray.length && selectedAnswer === questionArray[currentQuestion].answer) {
            score++;
            body.addClass("correct");
            clearInterval(timerInterval);
            timeEl.text('');
            grid.empty();
            endGame();
            //Have to add scoring and local storage instead of alert
        } else if (currentQuestion + 1 === questionArray.length && selectedAnswer !== questionArray[currentQuestion].answer) {
            body.addClass("wrong");
            clearInterval(timerInterval);
            timeEl.text('');
            grid.empty();
            endGame();
        } else if (selectedAnswer === questionArray[currentQuestion].answer) {
            score++;
            console.log(score)
            body.addClass("correct")
            // setTimeout(function())
        } else {
            body.addClass("wrong")
        }
    }

    function endGame(){
        body.removeClass();
        grid.empty();
        nextButton.hide();
        question.text('Are you a true dev?');
        timeEl.text('Your score: ' + score +'/5');
        console.log("end")
    }

var timerInterval;

    function timerCountdown(event) {
        timerInterval = setInterval(function(){
        timeEl.text(secondsLeft + " seconds left");
        secondsLeft--;
    
        if(secondsLeft === 0) {
            alert('Game Over. Restarting');
            clearInterval(timerInterval);
            timeEl.text('')}
    
    }, 1000)}

    startButton.on('click', timerCountdown)
    startButton.on('click', startGame)
    nextButton.hide()
    nextButton.on('click', updateQuiz)
    
  
