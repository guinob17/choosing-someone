/*The code's goal is to discover how many mens with legal age and brown skin
and how many womans with age between 25 and 30 years old were signed in on the system!*/
let input = require('readline-sync')
header();

//declaring procedure
function header(){
    console.log('=========================')
    console.log(' *** CHOOSING PEOPLE *** ')
    console.log('=========================')
}

//Variables
let totalmen = 0
let totalwoman = 0
let gender = 0
let age = 0
let skin = 0
let login = ''

//Do-while looping
do{
    console.log('Gender: ')
    console.log('[1] Male')
    console.log('[2] Female')
    gender = Number(input.question(' '))

    console.clear()
    header();
    age = Number(input.question('Type the age: '))

    console.clear()
    header();
    console.log('Skin color: ')
    console.log('[1] Black')
    console.log('[2] Brown')
    console.log('[3] Blond')
    console.log('[4] Ginger')
    skin = Number(input.question(' '))

    console.clear()
    header();
    console.log('would you like to sign in someone more?')
    login = String(input.question('[Y]Yes / [N]No '))

    switch (gender) {
        case 1:
            if(age >= 18 && skin == 2){
                totalmen ++
            }
            break;
        case 2:
            if(age >= 25 && age <= 30 && skin == 3){
                totalwoman ++
            }
            break;
    }
}while(login == 'y')

//End of the code
console.clear()
header();
console.log(`Total mens with legal age and brown skin is ${totalmen}!`)
console.log(`Total womans with age between 25 and 30 years old and blond skin is ${totalwoman}!`)
console.log('=========================')