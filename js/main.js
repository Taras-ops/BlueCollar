// header

const burgerMenu = document.getElementById('burgerMenu'),
      headerMenu = document.querySelector('.header-menu'),
      body = document.querySelector('body'),
      logoBurgerWrapper = document.querySelector('.header-main__logo-wrapper')

burgerMenu.addEventListener('click', (e) => {
    burgerMenu.classList.toggle('_active')
    headerMenu.classList.toggle('_show')
    body.classList.toggle('_overlflow')
    logoBurgerWrapper.classList.toggle('_active')
})


// tabs

const tabLinks = document.querySelectorAll('.we-offer__tablinks') // we offer tab
const tabContents = document.querySelectorAll('.we-offer__tabcontent')

const deleteClassActiveOnTabLinks = () => { // for everyone
    tabLinks.forEach((item) => {
        item.classList.remove('_active')
    })
}

const deleteClassShowOnTabContents = () => { // for everyone
    tabContents.forEach((item) => {
        item.classList.remove('_show')
    })
}

const addClassShowToTabContent = (attr) => {
    tabContents.forEach((item) => {
        if(item.dataset.tabcontent === attr) item.classList.add('_show')
    })
}

tabLinks.forEach((item) => {
    item.addEventListener('click', (e) => {
        deleteClassActiveOnTabLinks()
        deleteClassShowOnTabContents()
        item.classList.add('_active')
        const attr = item.dataset.tablink
        addClassShowToTabContent(attr)
    })
})

// лічильник 

window.addEventListener('load', windowLoad);

function windowLoad() {
    function digitsCountersInit(digitsCounterItems) {
        let digitsCounters = digitsCounterItems ? digitsCounterItems : document.querySelectorAll("[data-digits-counter]");
        if(digitsCounters) {
            digitsCounters.forEach((digitsCounter) => {
                digitsCountersAnimate(digitsCounter);
            })
        }
    }


    function digitsCountersAnimate(digitsCounter) {
        let startTimestamp = null;
        const duration = 1000;
        const startValue = parseInt(digitsCounter.innerHTML);
        const startPosition = 0;
        const step = (timestamp) => {
            if(!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
            if(progress < 1) {
                window.requestAnimationFrame(step);
            }
        }
        window.requestAnimationFrame(step);
    }

    //digitsCountersInit()

    const options = {
        treshold: 0.3
    }

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                const targetElement = entry.target;
                const digitsCounterItems = targetElement.querySelectorAll('[data-digits-counter]');
                if(digitsCounterItems.length) {
                    digitsCountersInit(digitsCounterItems);
                }
            }
        });
    }, options);

    let section = document.querySelector('.why-choose-us');
    observer.observe(section);

}


// slider

new Splide( '.splide' ).mount();

// aos
AOS.init({
    once: true
});