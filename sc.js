const quizdata=[
    {
        question:"javascript is a ______________ language?",
        ans1:"Object-oriented",
        ans2:"Object-based",
        ans3:"Procedural",
        ans4:"None of the Above",
        correct:"ans1",
    },
    {
        question:"which of following keywords is used to define  a variable  in javascript?",
        ans1:"var",
        ans2:"let",
        ans3:"Both a and b",
        ans4:"None of the Above",
        correct:"ans3",
    },
    {
        question:"which of following methods used to access HTML elements using javascript?",
        ans1:"getElementsbyId",
        ans2:"getElementsbyClassname",
        ans3:"Both a and b",
        ans4:"None of the Above",
        correct:"ans3",
    },
    {
        question:"Which of the following methods can be used to display data in some form using Javascript?",
        ans1:"document.write()",
        ans2:"console.log()",
        ans3:"window.alert()",
        ans4:"All of the Above",
        correct:"ans4",
    },
    {
        question:"How can a datatype be declared to be a constant type?",
        ans1:"const",
        ans2:"var",
        ans3:"let",
        ans4:"constant",
        correct:"ans1",
    },
]

const quiz=document.getElementById('quiz');
const answerEls=document.querySelectorAll('.answer')
const questionEl=document.getElementById('question')
const ans1_text=document.getElementById('ans1_text')
const ans2_text=document.getElementById('ans2_text')
const ans3_text=document.getElementById('ans3_text')
const ans4_text=document.getElementById('ans4_text')

const subbtn=document.getElementById("submit")

let currQuiz=0;
let score=0;

loadQuiz()

function loadQuiz(){
    deselectAnswers()
    
    const currQuizdata=quizdata[currQuiz]

    questionEl.innerText=currQuizdata.question
    ans1_text.innerText=currQuizdata.ans1
    ans2_text.innerText=currQuizdata.ans2
    ans3_text.innerText=currQuizdata.ans3
    ans4_text.innerText=currQuizdata.ans4
    
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked=false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer
}

subbtn.addEventListener("click", () =>{
    const answer=getSelected()
    if(answer){
        if (answer=== quizdata[currQuiz].correct){
            score++
        }
        currQuiz++
        if(currQuiz<quizdata.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML=`
            <h2>You Answered ${score}/${quizdata.length} questions correctly</h2>
            
            <button onclick="location.reload()">Relaod</button> 
            `
        }
    }   
})