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

var allNavElements = document.querySelectorAll('.menu__list--item')

//    console.log(allNavElements)     

const makeActiveNavElement = actualId => {
    // console.log(actualId) 

    for(i = 0; i < allNavElements.length; i++) {

            // console.log(allNavElements.length)

        var a = allNavElements[i].getAttribute("href")

        // console.log(a)
    
        if(a.includes(actualId)) 
        {

            allNavElements[i].classList.add('active-nav')
        } 
            else {

            allNavElements[i].classList.remove('active-nav')
        }
    }
}
