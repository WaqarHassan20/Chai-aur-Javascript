// switch (key) { //key can be of any data type
//     case value:
        
//         break;

//     default:
//         break;
// }

const number=2;

switch(number){
    case 1:
        console.log('Number is one');
        break;
    case 2:
        console.log('Number is two');
        break;
    case 3:
        console.log("Number is 3");

    default:
        console.log('Number is Invalid'); //If we don't use break then everything below that number will be executed except default
        break;
}



const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}