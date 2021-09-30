var startBtn = document.querySelector("#startBtn");
var timer = document.getElementById('timerDisplay');
var header = document.getElementById('h1');
var submitBtn = document.getElementById('submitBtn');
var quest = $('#quest');
var choice = $('.form-check-label');
var choice1 = $('.form-check-label1')
var choice2 = $('.form-check-label2')
var choice3 = $('.form-check-label3')
var radiobutton =$("#flexRadioDefault");
var radiobutton1 = $("#flexRadioDefault1");
var radiobutton2 = $("#flexRadioDefault2");
var radiobutton3 = $("#flexRadioDefault3");
var form = $('.form');
var buttons = $('.buttons');
var score = document.getElementById('score');
var index = 0;
var timeRem = 300; 
var myQuestions = [
    {
        question: "1.) (HTML) How would you write 'Hello World!' as the first header of an HTML doc?",
        answers: ['a: "<h1>Hello World!</h1>"','b: "(first-header)Hello World!(end-first-header)"','c: "# Hello World!"','d: "Hello World!"'],
        correctAnswer: 'a: "<h1>Hello World!</h1>"'    
        },
    {
        question: "2.) (JavaScript) How do you log to the console?",
        answers: ['a: ".log-to-ocnsole"','b: "[save.to.console]"','c: "console.log()"','d: "#console"'],
        correctAnswer: "c"
    },
    {
        question: "3.) (JavaScript) How do you declare a variable?",
        answers: [' a: "variable: givenName"','b: "var givinName = "_";', 'c: "$givenName"','d: ".declareVariable: "_" "'],
        correctAnswer: "b"
    },
    {
        question: "4.) (CSS) How do you change text size using CSS?",
        answers: ['a: "#fontsize: big"','b: "50 = text.size"',' c: "font-size: __px;"','d: "/font-size: 5"'],
        correctAnswer: "c"
    },
    {
        question: "5.) (HTML) Whats the correct syntax for adding a CSS stylesheet to an HTML doc?",
        answers: ['a: "(add.stylesheet)"','b: "link: stylesheet;"','c: "#stylesheet"','d: "<link rel="__" href="__">"'],
        correctAnswer: "d"
    }
];

startBtn.addEventListener("click", function (){
    header.style.display = 'none';
    startBtn.style.display = 'none';
    console.log(myQuestions);
   var timeInt = setInterval(function (){
       if (timeRem > 0){
           timer.textContent = timeRem + ' seconds remaining.';
           timeRem--;
      } else if (timeRem === 0){
           timer.textContent = 'OUT OF TIME';
           clearInterval(timeInt);
       }
   }, 1000);

   displayQuestion();
    
   
})



function displayQuestion() {
    var currentQuestion = myQuestions[index];
    quest.append(currentQuestion.question);
    form.css('visibility','visible');
    submitBtn.removeAttribute('class');
    choice.text(currentQuestion.answers[0]);
    choice1.text(currentQuestion.answers[1]);
    choice2.text(currentQuestion.answers[2]);
    choice3.text(currentQuestion.answers[3]);
    radiobutton.attr('value', currentQuestion.answers[0]);  
    radiobutton1.attr('value', currentQuestion.answers[1]); 
    radiobutton2.attr('value', currentQuestion.answers[2]); 
    radiobutton3.attr('value', currentQuestion.answers[3]);
    submitBtn.addEventListener("click", response);
}
    function response() {
        var radios = document.getElementsByName('flexRadioDefault');
        console.log(radios);
    for (var radio of radios)
    {
        console.log(radio);
        if (radio.value !== myQuestions[index].correctAnswer) {
            timRem = timeRem -10;
            timer.innerHTML = timRem + " seconds remaining";
        }
    }
    }
