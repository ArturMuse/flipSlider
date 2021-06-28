import '../scss/app.scss';

/* Your JS Code goes here */

const cards = [
    {
        name: "Steven Huot",
        subname: "CEO",
        social: {
            fb: "#",
            inst: "#",
            twitter: "#"
        },
        url: "http://ipic.su/img/img7/fs/Steven-Huot3x.1624876831.png",
        desc: "David is our quartermaster, he’s the man who gets you the supplies you need to sail the high seas. Focused on client relationships, David looks after our clients and delivers everything you’ll need to drive your game forward, to be successful and to grow. He’s a point of contact for clients when they want help, or have questions. With our own teams, David drives us to deliver world-class experiences and creative excellence for ourselves and our clients. David’s vast experience in the industry allows him to foresee key products and strategies and to ensure that we’re all embarking on the correct course."
    },
    {
        name: "Nazih Fares",
        subname: "Head of Communication & Localization",
        social: {
            fb: "#",
            inst: "#",
            twitter: "#"
        },
        url: "http://ipic.su/img/img7/fs/NazihFares3x.1624881164.png",
        desc: "David is our quartermaster, he’s the man who gets you the supplies you need to sail the high seas. Focused on client relationships, David looks after our clients and delivers everything you’ll need to drive your game forward, to be successful and to grow. He’s a point of contact for clients when they want help, or have questions. With our own teams, David drives us to deliver world-class experiences and creative excellence for ourselves and our clients. David’s vast experience in the industry allows him to foresee key products and strategies and to ensure that we’re all embarking on the correct course."
    },
    {
        name: "Alexey Pastushenko",
        subname: "Operations Chief",
        social: {
            fb: "#",
            inst: "#",
            twitter: "#"
        },
        url: "http://ipic.su/img/img7/fs/AlexeyPastushenko3x.1624881193.png",
        desc: "David is our quartermaster, he’s the man who gets you the supplies you need to sail the high seas. Focused on client relationships, David looks after our clients and delivers everything you’ll need to drive your game forward, to be successful and to grow. He’s a point of contact for clients when they want help, or have questions. With our own teams, David drives us to deliver world-class experiences and creative excellence for ourselves and our clients. David’s vast experience in the industry allows him to foresee key products and strategies and to ensure that we’re all embarking on the correct course."
    },
    {
        name: "David Mashashvili",
        subname: "Creative & Growth Chief",
        social: {
            fb: "#",
            inst: "#",
            twitter: "#"
        },
        url: "http://ipic.su/img/img7/fs/DavidMashashvili3x.1624881217.png",
        desc: "David is our quartermaster, he’s the man who gets you the supplies you need to sail the high seas. Focused on client relationships, David looks after our clients and delivers everything you’ll need to drive your game forward, to be successful and to grow. He’s a point of contact for clients when they want help, or have questions. With our own teams, David drives us to deliver world-class experiences and creative excellence for ourselves and our clients. David’s vast experience in the industry allows him to foresee key products and strategies and to ensure that we’re all embarking on the correct course."
    },
    {
        name: "Lily Chen",
        subname: "China Business Development Leader",
        social: {
            fb: "#",
            inst: "#",
            twitter: "#"
        },
        url: "http://ipic.su/img/img7/fs/LilyChen3x.1624881309.png",
        desc: "David is our quartermaster, he’s the man who gets you the supplies you need to sail the high seas. Focused on client relationships, David looks after our clients and delivers everything you’ll need to drive your game forward, to be successful and to grow. He’s a point of contact for clients when they want help, or have questions. With our own teams, David drives us to deliver world-class experiences and creative excellence for ourselves and our clients. David’s vast experience in the industry allows him to foresee key products and strategies and to ensure that we’re all embarking on the correct course."
    },
    {
        name: "Ana Maria Piedrahíta",
        subname: "Administrative Manager",
        social: {
            fb: "#",
            inst: "#",
            twitter: "#"
        },
        url: "http://ipic.su/img/img7/fs/AnaMariaPiedrahta3x.1624881350.png",
        desc: "David is our quartermaster, he’s the man who gets you the supplies you need to sail the high seas. Focused on client relationships, David looks after our clients and delivers everything you’ll need to drive your game forward, to be successful and to grow. He’s a point of contact for clients when they want help, or have questions. With our own teams, David drives us to deliver world-class experiences and creative excellence for ourselves and our clients. David’s vast experience in the industry allows him to foresee key products and strategies and to ensure that we’re all embarking on the correct course."
    },
    {
        name: "Mikhail Sketin",
        subname: "Head of Media, CRM & Data Management",
        social: {
            fb: "#",
            inst: "#",
            twitter: "#"
        },
        url: "http://ipic.su/img/img7/fs/MikhailSketin3x.1624881395.png",
        desc: "David is our quartermaster, he’s the man who gets you the supplies you need to sail the high seas. Focused on client relationships, David looks after our clients and delivers everything you’ll need to drive your game forward, to be successful and to grow. He’s a point of contact for clients when they want help, or have questions. With our own teams, David drives us to deliver world-class experiences and creative excellence for ourselves and our clients. David’s vast experience in the industry allows him to foresee key products and strategies and to ensure that we’re all embarking on the correct course."
    },
    {
        name: "Ugur Ulger",
        subname: "Brand & Project Manager",
        social: {
            fb: "#",
            inst: "#",
            twitter: "#"
        },
        url: "http://ipic.su/img/img7/fs/UgurUlger3x.1624881442.png",
        desc: "David is our quartermaster, he’s the man who gets you the supplies you need to sail the high seas. Focused on client relationships, David looks after our clients and delivers everything you’ll need to drive your game forward, to be successful and to grow. He’s a point of contact for clients when they want help, or have questions. With our own teams, David drives us to deliver world-class experiences and creative excellence for ourselves and our clients. David’s vast experience in the industry allows him to foresee key products and strategies and to ensure that we’re all embarking on the correct course."
    }
]

const loadCards = () => {
    const cardsName = document.querySelectorAll(".f_title")
    const cardsSubName = document.querySelectorAll(".f_subline")
    const cardsImage = document.querySelectorAll(".f_img")
    const cardslink0 = document.querySelectorAll(".js-link0")
    const cardslink1 = document.querySelectorAll(".js-link1")
    const cardslink2 = document.querySelectorAll(".js-link2")
    const cardsBackName = document.querySelectorAll(".b_headline")
    const cardsBackSubName = document.querySelectorAll(".b_subline")
    const cardsBackDesc = document.querySelectorAll(".b_text")

    for (let i = 0; i < cardsName.length; i++) {
        cardsName[i].innerHTML = cards[i].name
        cardsSubName[i].innerHTML = cards[i].subname
        cardsImage[i].setAttribute("src", cards[i].url)
        cardslink0[i].setAttribute("href", cards[i].social.fb)
        cardslink1[i].setAttribute("href", cards[i].social.inst)
        cardslink2[i].setAttribute("href", cards[i].social.twitter)
        cardsBackName[i].innerHTML = cards[i].name
        cardsBackSubName[i].innerHTML = cards[i].subname
        cardsBackDesc[i].innerHTML = cards[i].desc
    }
}

loadCards()
const leaderSlider = new Swiper(".leaders__slider", {
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    slidesPerView: "1",
    navigation: {
        nextEl: '.leaders-btn-next',
        prevEl: '.leaders-btn-prev',
    },
    breakpoints: {
        1150: {
            loop: true,
            slidesPerView: "3",
            centeredSlides: true,
            spaceBetween: 20
        }
    }
})

let leadersCard = document.querySelectorAll(".flip_box")
let leadersCardBtn = document.querySelectorAll(".f_btn")
let leadersCardBtnBack = document.querySelectorAll(".back")

leadersCard.forEach((element, index) => {
    leadersCardBtn[index].addEventListener("click", () => {
        leadersCard.forEach(element => {
            element.classList.remove("flipped")
        })
        element.classList.toggle("flipped")
    })
    leadersCardBtnBack[index].addEventListener("click", () => {
        leadersCard.forEach(element => {
            element.classList.remove("flipped")
        })
    })
})

