


let userName = prompt('please enter your name');
// console.log('userName', userName);

let gender = prompt('please enter your gender(male/female)');
// console.log('gender', gender);

let age = prompt('please enter your age');
// console.log('age', age);

if (age <= 0) { alert('your age can not be under or equal to zero') };


let skipWelcoming = confirm("Do you want to skip the welcoming message?");
// console.log('skipWelcoming', skipWelcoming);

if (!skipWelcoming) {
    if (gender === 'male') {
        alert(`Welcome Mr ${userName}`)
    } else if (gender === 'female') {
        alert(`Welcome Ms ${userName}`);
    } else {
        alert(`Welcome ${userName}`)
    }
}



let answersArray = [];

function askQuestion(question) {
    let answer = prompt(question);
    // console.log('answer', answer);
    switch (answer) {
        case '':
            console.log('invalid');
            break;
        default:
            answersArray.push(answer)
            break;
    }

}


askQuestion("Do you use to-do list in daily basis? (yes/no)");
askQuestion("Do you like planning your day? (yes/no)");
askQuestion("Do you want to reach the mental clarity you have been longing for? (yes/no)");

for (let i = 0; i < answersArray.length; i++) {
    console.log(answersArray[i]);
}





