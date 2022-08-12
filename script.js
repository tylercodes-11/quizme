let score = 0;
let reset;
let answers = [11,47,481];
function result() {
   let answer1 = document.getElementById('correctfeedback1').innerHTML = "The correct answer is " + answers[0];
    let answer2 = document.getElementById('correctfeedback2').innerHTML = "The correct answer is " + answers[1];
    let answer3 = document.getElementById('correctfeedback3').innerHTML = "The correct answer is " + answers[2];


if (document.getElementById('correct1').checked) {
    score ++;
   
}
   

if (document.getElementById('correct2').checked){
    score ++;
}

if (document.getElementById('correct3').checked){
    score ++;
}
answer1;
answer2;
answer3;
alert('Your score is:'+score);

}