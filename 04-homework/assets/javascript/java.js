var startBtn = document.querySelector("#startBtn");
var timer = document.getElementById('timerDisplay');
var header = document.getElementById('h1');
var myQuestions = [
    {
        question: "(HTML) How would you write 'Hello World!' as the first header of an HTML doc?",
        answers: {
            a: "<h1>Hello World!</h1>",
            b: "(first-header)Hello World!(end-first-header)",
            c: "# Hello World!",
            d: "Hello World!"
        },
        correctAnswer: "a"
    },
    {
        question: "(JavaScript) How do you log to the console?",
        answers: {
            a: ".log-to-ocnsole",
            b: "[save.to.console]",
            c: "console.log()",
            d: "#console"
        },
        correctAnswer: "c"
    },
    {
        question: "(JavaScript) How do you declare a variable?",
        answers: {
            a: "variable: givenName",
            b: "var givinName = '_';",
            c: "$givenName",
            d: ".declareVariable: '_' "
        },
        correctAnswer: "b"
    },
    {
        question: "(CSS) How do you change text size using CSS?",
        answers: {
            a: "#fontsize: big",
            b: "50 = text.size",
            c: "font-size: __px;",
            d: "//font-size: 5"
        },
        correctAnswer: "c"
    },
    {
        question: "(HTML) Whats the correct syntax for adding a CSS stylesheet to an HTML doc?",
        answers: {
            a: "(add.stylesheet)",
            b: "link: stylesheet;",
            c: "#stylesheet",
            d: "<link rel='__' href='__'>"
        },
        correctAnswer: "d"
    }
];

 startBtn.addEventListener("click", function (){
    header.style.display = 'none';
    startBtn.style.display = 'none';
    console.log(myQuestions);
    // document.body.append(myQuestions[0].question);
   var timeRem = 300; 
   var timeInt = setInterval(function (){
       if (timeRem > 1){
           timer.textContent = timeRem + ' seconds remaining.';
           timeRem--;
      } else if (timeRem === 0){
           timer.textContent = ' ';
           clearInterval(timeInt);
       }
   }, 1000);

})
