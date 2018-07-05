document.querySelector('.menu__icon--item').addEventListener(
        'click',
        () => {
                let ifMenuOpen = document.querySelector('nav div ul').classList.contains('open')

                if(ifMenuOpen)
                {
                    document.querySelector('nav div ul').classList.remove('open')
                }
                    else {
                         
                    document.querySelector('nav div ul').classList.add('open') 
                        }
        }
    );




// na przesuniecie skrola znajdować na której wysokości jest scroll

//znaleźć wysokości wszystkich id 

//odjąć od każdje wysokości id 
// swoją wysokość 


//wyrzucić najmniejszą różnice (nieujemną)

//klasa .scroll dla id z nagłowkami


window.addEventListener(
    'scroll',
    () => {

let heightOfScroll = window.scrollY

console.log(heightOfScroll)

let navbar = document.getElementsByClassName("scroll"); 

console.log(navbar)

const a = navbar[0].offsetTop - heightOfScroll;

console.log(a)

const b = navbar[1].offsetTop - heightOfScroll;

const c = navbar[2].offsetTop - heightOfScroll;

const d = navbar[3].offsetTop - heightOfScroll;

const arr = [a, b, c, d];

console.log(arr)

Math.min(a,b,c,d)

console.log(Math.min())

});




// for (i=0; i<arr.length; i++) {
//     if (arr[i] < 0) {
//         continue 
//     }
//         else { 
//             arr[i] < arr[i+1]
//         }
//     }

// }

// Math.min(a,b,c,d)

// const getTheMinValue = () => {
//     if (a>b) {


//     }
// }

// for(i=0; i<4; i++) {
//     navbar(i).offsetTop
// }


// if (window.scrollyY )
// let scrolllenght = navbar.offsetTop

//         console.log('dfsfs')
//     }
//  )

// //świecenie

// function lightnavbar = navbar[x];
// .classList.add('light') 



// if (navbar[0]<navbar[1]) {

// }


//  //".scroll".scrollY