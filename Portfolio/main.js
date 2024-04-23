const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
// MENU SHOW //
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    });
}

// Menu Hidden //
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    });
}

// Remove Menu Mobile //
const navLink = document.querySelectorAll('.nav_link');
const linkAction = ()=>{
    const nevMenu = document.getElementById('nav-menu');
    nevMenu.classList.remove('show-menu');
}
navLink.forEach(n=> n.addEventListener('click', linkAction));


// Shadow Header //

const shadowHeader = ()=>{
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header')
} 

window.addEventListener('scroll', shadowHeader);

// Accordion Skills //
const skillsContent = document.getElementsByClassName('skills_content');
const skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0; i< skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click', toggleSkills)
})

// QUALIFICATION TABLE //

const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})



// Email Js //

const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) =>{
e.preventDefault();

// ServiceID - templateID - #form - publickey
emailjs.sendForm('service_7wn6ken','template_gyoi6bd','#contact-form','duE2CwOP4B4FNPwPj').then(()=>{
    // Show sent message
    contactMessage.textContent= 'Message sent successfully ✅'

    // Remove message after five seconds
    setTimeout(()=>{
        contactMessage.textContent = ''
    }, 5000)

    // Clear input fields
    contactForm.reset();
}, ()=>{
    // Show error message
    contactMessage.textContent = 'Message not sent (service error) ❌'
})
}

contactForm.addEventListener('submit', sendEmail);

// Show ScrollUp //
const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Scroll Sections Active Link //

const sections = document.querySelectorAll('section[id]')

const scrollActive = ()=>{
    const scrollDown = window.scrollY
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute('id')
        const sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Dark Light Theme //
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = ()=> document.body.classList(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Scroll Reveal Animation //
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home_perfil, .about_image, .contact_mail, .skills_animation-3, .qualification_button_animation-2`,{origin: 'right'})
sr.reveal(`.home_name, .home_info, .about_container .section__title-1, .about_info, .contact_social, .contact_data, .skills_animation-1, .qualification_button_animation-1`,{origin: 'left'})
sr.reveal(`.skills_animation-2, .qualification_sections`,{origin: 'bottom'})
sr.reveal(`.projects_card`,{interval: 100})