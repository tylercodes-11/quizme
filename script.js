let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');

let myQuestion = [
    {
        question: "What is 10/2?",
        answers: {
            a: '3',
            b: '5',
            c: '115'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is 30/3",
        answers: {
            a: '3',
            b: '5',
            c: '10'
        },
        correctAnswer: 'c'
    }
]




function genQuiz(questions,quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        let output = []; // storing output array
        let answers; // answer choices

        //for each question

        for (let i=0; i<questions.length; i++){
            //reset answers list
            answers = [];

            for(letter in questions[i].answers){
                // ... add an html radio
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'"value"'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
            //add this question and its answers to the output
            output.push(
                'div class="question>' + questions[i].question + '</div'
                + '<div class="answers"' + answers.join('') + '</div>'
            );
        }
        //combine output list into 1 string of html and put on page
        quizContainer.innerHTML = output.join('');

    
    }

    function showResults(questions, quizContainer, resultsContainer) {

        // gather answer containers from quiz
        let answersContainers = quizContainer.querySelectorAll('.answers');

        //keep track of user;s answers 
        let userAnswer = '';
        let numCorrect = 0;

        //for each question
        for (let i=0; i<questions.length; i++){

            //find the selected answer
            userAnswer = (answersContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value; // answer or empty object if not selected

            //if correct
            if(userAnswer===questions[i].correctAnswer){
                // add to number of correct answer
                numCorrect++;

                // style answer green
                answersContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                //color the answer red
                answersContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total

        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length; 
    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}


showQuestions(questions, quizContainer);
genQuiz(myQuestion, quizContainer, resultsContainer, submitButton);