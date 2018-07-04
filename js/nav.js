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