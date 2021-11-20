function ResetButton() {
    document.getElementById("RegistrationForm").reset();
}

//Task 2
let PlayersData = []

function Register() {

    let details = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        dob: document.getElementById('dob').value,
        age: document.getElementById('age').value,
        Gender: (function () {
            if (document.getElementById('genderO').checked == true) {
                return "Other"
            } else if (document.getElementById('genderF').checked == true) {
                return "genderF"
            } else if (document.getElementById('genderM').checked == true) {
                return "genderM"
            }
        })(),
        email: document.getElementById('email').value
    }

    console.log('Register with: ', details)

    /*
    
        validate here
    
    */

    PlayersData.push(details)
    console.log(PlayersData)
    window.location = "#letsbegin"
    PlayGame()

}

//Task 1 ii0
function Age() {
    var DateInput = document.getElementById('dob').value;
    var xDate = new Date(DateInput);
    var difference = Date.now() - xDate.getTime();
    var ageDate = new Date(difference);
    var DateOutput = Math.abs(ageDate.getUTCFullYear() - 1970);
    document.getElementById('age').value = DateOutput;
}

//Task 4
var a = 0; var b = 0;
var score = [];
function PlayGame() {
    a = Math.floor(Math.random() * 9) + 1;
    b = Math.floor(Math.random() * 5) + 1;
    document.getElementById("randNum1").innerHTML = a;
    document.getElementById("randNum2").innerHTML = b;
    document.getElementById('accept_button').disabled = false;
    document.getElementById("userAnswer").focus()
    //document.getElementById("msg").innerHTML = `What is ${a} multiplied by ${b}: ${(a * b)}`;


}

/* listen for enter keypress in useranswer field */
document.getElementById("userAnswer").addEventListener('keypress', function (event) {

    if (event.key == 'Enter') { event.preventDefault(); CheckAnswer() }
})

//Task 6___call showAll at end
function CheckAnswer() {
    document.getElementById('accept_button').disabled = true;
    answer = document.getElementById("userAnswer").value;
    if (answer == (a * b)) {
        document.getElementById("msg").innerHTML = "Correct";
        document.getElementById("userAnswer").value = "";
        //score = score + 1;
        score.push({ a, b, answer })
    }
    else {
        document.getElementById("msg").innerHTML = `Incorrect </br> correct answer: ${(a * b)}`;
        score.push({ a, b, answer })
    }
    console.log(score)
    setTimeout(() => {
        document.getElementById("userAnswer").value = "";
        PlayGame()
    }, 1000);
}


function percentage_button() {
    const percentageoutput = document.getElementById('percentageoutput')

    let correct = 0;

    let percentage = 0.0;

    score.forEach((scored) => {
        //{ a, b, answer }
        if (Number(scored.a * scored.b) == Number(scored.answer)) {
            //correct
            correct++;
        } else {
            //not correct

        }
    })

    percentage = `${correct / score.length * 100}%`

    percentageoutput.innerHTML = `
        <br>
        <table>
        <tr>
            <td>Correct</td>
            <td>${correct}</td>
        </tr>
        <tr>
            <td>Total questions</td>
            <td>${score.length}</td>
        </tr>
        <tr>
            <td>Percentage score</td>
            <td>${percentage}</td>
        </tr>
        </table>`

}

//Task 11
function endAll(){
    document.getElementById('RegistrationForm').innerHTML = " ";
}

    //document.getElementById('cost').value = 0;
    //document.getElementById('products').value = " ";
    //document.getElementById('result').innerHTML = "...";
    //document.getElementById('resetBtn').style.backgroundColor = 'red';
    //document.getElementById('resetBtn').disabled = true;
    //document.getElementById('yes').disabled = true;
    //document.getElementById('no').disabled = true;

//Task 13
function showAll() {

}

//Task 15
function showfreq() {

}


function Usersfinished() {

}