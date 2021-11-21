//Task 2
let PlayersData = []

document.getElementById('end_button').disabled = true;
document.getElementById('startbutton').disabled = true;


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
        email: document.getElementById('email').value,
        score: [],
    }

    console.log('Register with: ', details)


    document.getElementById('fname').disabled = true;
    document.getElementById('lname').disabled = true;
    document.getElementById('dob').disabled = true;
    document.getElementById('age').disabled = true;
    document.getElementById('genderO').disabled = true;

    document.getElementById('end_button').disabled = false;
    document.getElementById('startbutton').disabled = false;
    document.getElementById('register_button').disabled = true;

    /*
    
        validate here
    
    */
    if (true) {//good registration data
        PlayersData.push(details)
        console.log(PlayersData)
        viewp_switch.gamecontainer()
    } else {// bad registration data

    }


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
    document.getElementById("a").value = a;
    document.getElementById("b").value = b;
    document.getElementById('accept_button').disabled = false;
    document.getElementById("userAnswer").focus()
    document.getElementById("msg").innerHTML = `What is ${a} multiplied by ${b}`;


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


function findPercentage() {//remane to find percentage
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
function showAll() {

    viewp_switch.resultsarepain()
    //results and scores for all previous players    
    console.log('show all player data ', PlayersData, score);
    const showallplayers = document.getElementById('showallplayers');
    showallplayers.innerHTML = "";
    const headerrow = document.createElement('tr');

    headerrow.innerHTML = `
    <th>First name</th>
    <th>Last name</th>
    <th>Date of birth</th>
    <th> age</th>
    <th> Gender</th>
    <th> email </th>
    <th>score</th>`

    showallplayers.appendChild(headerrow)

    PlayersData[PlayersData.length - 1].score = score//attach score to current player
    score = [];//empty score variable

    for (let i in PlayersData) {
        let playerbar = document.createElement('div');
        playerbar.className = "playerbar";
        processplayerdata(PlayersData[i])
    }

    function processplayerdata(player) {
        console.log('Processing player: ', player)
        let playerrow = document.createElement('tr');
        //first name
        let fname = document.createElement('td')
        fname.innerHTML = player.fname;
        playerrow.appendChild(fname)

        //last name
        let lname = document.createElement('td')
        lname.innerHTML = player.lname;
        playerrow.appendChild(lname)

        //date of birth
        let dob = document.createElement('td')
        dob.innerHTML = player.dob;
        playerrow.appendChild(dob)

        //age
        let age = document.createElement('td')
        age.innerHTML = player.age;
        playerrow.appendChild(age)

        //GEnder
        let Gender = document.createElement('td')
        Gender.innerHTML = player.Gender;
        playerrow.appendChild(Gender)

        //email
        let email = document.createElement('td')
        email.innerHTML = player.email;
        playerrow.appendChild(email)

        //score
        let scored = document.createElement('td')
        scored.innerHTML = processscore(player.score);
        playerrow.appendChild(scored)

        showallplayers.appendChild(playerrow)
    }

    function processscore(sco) {
        let correct = 0;

        let percentage = 0.0;

        sco.forEach((scored) => {
            //{ a, b, answer }
            if (Number(scored.a * scored.b) == Number(scored.answer)) {
                //correct
                correct++;
            } else {
                //not correct

            }
        })

        percentage = `${correct / sco.length * 100}%`
        return percentage
    }

}


//Task 15

setInterval(() => {
    showfreq()
}, 5000);

function showfreq() {
    //frequency chart male / female

    let males = 0;
    let females = 0;
    let totalplayers = PlayersData.length;

    PlayersData.forEach((individual) => {
        if (individual.Gender == "genderM") {
            //male
            males++;
        } else if (individual.Gender == "genderF") {
            females++
        }
    })

    console.log('Males: ', males, ' Females: ', females)

    document.getElementById('malebartxt').innerHTML = "males: " + males
    document.getElementById('femalebartxt').innerHTML = "females: " + females
    document.getElementById('malebar').style.backgroundColor = "blue"
    document.getElementById('malebar').style.width = `${males / totalplayers * 100}%`

    document.getElementById('femalebar').style.backgroundColor = "pink"
    document.getElementById('femalebar').style.width = `${females / totalplayers * 100}%`

    //frequency chart scores

    //let maximum_score = 0;

    let scoretable = [0,0,0,0,0,0,0,0,0,0];


    for (let i in PlayersData) {
        console.log('Processing player: ', PlayersData[i])
        let percentagescore = processscore(PlayersData[i].score)
        //maximum_score = Math.max(maximum_score,percentagescore)

        if(percentagescore<10){//0% - 9.999%
            scoretable[0]++;
        }else if(percentagescore<20){//10% - 19.999%
            scoretable[1]++;
        }else if(percentagescore<30){//20% - 29.999%
            scoretable[2]++;
        }else if(percentagescore<40){//30% - 39.999%
            scoretable[3]++;
        }else if(percentagescore<50){//40% - 49.999%
            scoretable[4]++;
        }else if(percentagescore<60){//50% - 59.999%
            scoretable[5]++;
        }else if(percentagescore<70){//60% - 69.999%
            scoretable[6]++;
        }else if(percentagescore<80){//70% - 79.999%
            scoretable[7]++;
        }else if(percentagescore<90){//80% - 89.999%
            scoretable[8]++;
        }else{//90 - 100%
            scoretable[9]++;
        }
    }

    document.getElementById('under10pertxt').innerHTML = "0 - 10%";
    document.getElementById('under10perbar').style.backgroundColor = "pink";
    document.getElementById('under10perbar').style.width = `${scoretable[0] / PlayersData.length * 100}%`;

    document.getElementById('under20pertxt').innerHTML = "10 - 20%";
    document.getElementById('under20perbar').style.backgroundColor = "pink";
    document.getElementById('under20perbar').style.width = `${scoretable[1] / PlayersData.length * 100}%`;

    document.getElementById('under30pertxt').innerHTML = "20 - 30%";
    document.getElementById('under30perbar').style.backgroundColor = "pink";
    document.getElementById('under30perbar').style.width = `${scoretable[2] / PlayersData.length * 100}%`;

    document.getElementById('under40pertxt').innerHTML = "30 - 40%";
    document.getElementById('under40perbar').style.backgroundColor = "pink";
    document.getElementById('under40perbar').style.width = `${scoretable[3] / PlayersData.length * 100}%`;

    document.getElementById('under50pertxt').innerHTML = "40 - 50%";
    document.getElementById('under50perbar').style.backgroundColor = "pink";
    document.getElementById('under50perbar').style.width = `${scoretable[4] / PlayersData.length * 100}%`;

    document.getElementById('under60pertxt').innerHTML = "50 - 60%";
    document.getElementById('under60perbar').style.backgroundColor = "pink";
    document.getElementById('under60perbar').style.width = `${scoretable[5] / PlayersData.length * 100}%`;

    document.getElementById('under70pertxt').innerHTML = "60 - 70%";
    document.getElementById('under70perbar').style.backgroundColor = "pink";
    document.getElementById('under70perbar').style.width = `${scoretable[6] / PlayersData.length * 100}%`;

    document.getElementById('under80pertxt').innerHTML = "70 - 80%";
    document.getElementById('under80perbar').style.backgroundColor = "pink";
    document.getElementById('under80perbar').style.width = `${scoretable[7] / PlayersData.length * 100}%`;

    document.getElementById('under90pertxt').innerHTML = "80 - 90%";
    document.getElementById('under90perbar').style.backgroundColor = "pink";
    document.getElementById('under90perbar').style.width = `${scoretable[8] / PlayersData.length * 100}%`;

    document.getElementById('under100pertxt').innerHTML = "90 - 100%";
    document.getElementById('under100perbar').style.backgroundColor = "pink";
    document.getElementById('under100perbar').style.width = `${scoretable[9] / PlayersData.length * 100}%`;

    function processscore(sco) {
        let correct = 0;
        let percentage = 0.0;
        sco.forEach((scored) => {
            //{ a, b, answer }
            if (Number(scored.a * scored.b) == Number(scored.answer)) {
                //correct
                correct++;
            } else {
                //not correct

            }
        })
        percentage = correct / sco.length * 100;
        return percentage
    }

}


function Usersfinished() {

}

let viewp_switch = {
    registrationpain: function () {
        document.getElementById('registrationpain').style.display = "block"
        document.getElementById('gamecontainer').style.display = "none"
        document.getElementById('resultsarepain').style.display = "none"
    },
    gamecontainer: function () {

        document.getElementById('registrationpain').style.display = "none"
        document.getElementById('gamecontainer').style.display = "flex"
        document.getElementById('resultsarepain').style.display = "none"
    },
    resultsarepain: function () {

        document.getElementById('registrationpain').style.display = "none"
        document.getElementById('gamecontainer').style.display = "none"
        document.getElementById('resultsarepain').style.display = "block"
    }
}

viewp_switch.registrationpain()

document.getElementById('playagain').addEventListener('click', () => {
    viewp_switch.registrationpain()

    document.getElementById('fname').disabled = false;
    document.getElementById('lname').disabled = false;
    document.getElementById('dob').disabled = false;
    document.getElementById('age').disabled = false;
    document.getElementById('genderO').disabled = false;

})