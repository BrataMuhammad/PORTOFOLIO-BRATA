emailjs.init('BWh0Z-N0vVjDKJnOa')

window.onscroll = function(){
    const header = document.querySelector('header');
    const absolute = document.getElementsByClassName('absolute');
    const toTop = document.querySelector('.to-top');
    const fixedNav = header.offsetTop;


    if(window.scrollY > fixedNav ) {
        header.classList.add("navbar-fixed");
        header.classList.remove('absolute');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        header.classList.add('absolute');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }

}


const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//Outside Burger

window.addEventListener('click', (e) =>{
    if(e.target != hamburger && e.tagret != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

const html = document.querySelector('html');
const darkToggle = document.querySelector('.dark-toggle');

darkToggle.addEventListener('click', () =>{
    darkToggle.checked ? html.classList.add('dark') : html.classList.remove('dark');
});


if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
    } else {
    darkToggle.checked = false;
    }

  /* For Contact Email */



const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    emailjs.sendForm('service_nl3twmo', 'template_geflgd1', this)
        .then((response) => {
            console.log('Email berhasil dikirim!', response.status, response.text);
        }).catch((error) => {
            console.log('Email gagal dikirim.', error);
        }).finally(() => {
            form.reset();
        });
});

document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('video');

    const options = {
      root: null, // viewport default
      threshold: 0.5 // 50% dari video harus terlihat
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        const video = entry.target;

        if (entry.isIntersecting) {
            video.play();
        } else {
            video.pause();
        }
        });
    }, options);

    videos.forEach(video => {
        observer.observe(video);
    });
});
