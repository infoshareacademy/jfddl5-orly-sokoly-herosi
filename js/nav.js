document.querySelector('.menu__list--icon').addEventListener(
    'click',
    () => {
        let ifMenuOpen = document.querySelector('nav div ul').classList.contains('open')

        if (ifMenuOpen) {
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
        let sections = document.getElementsByClassName("scroll");
        const scrollarr = []

        for (let i = 0; i < sections.length; i++) {
            const section = sections[i]

            scrollarr[i] = {
                section: section,
                id: section.getAttribute('id'),
                heightToTop: (section.offsetTop - heightOfScroll + section.offsetHeight / 2)
            }
        }

        let activeSection = null

        for (let i = 0; i < scrollarr.length; i++) {
            if (scrollarr[i].heightToTop > 0) {
                activeSection = scrollarr[i]
                break;
            }
        }

        makeActiveNavElement(activeSection.id)
    }
);

const makeActiveNavElement = id => {
    console.log(id)
    // code her ;)
}