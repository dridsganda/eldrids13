const menuBtn = document.getElementById("menubtn"); 
const navLinks = document.getElementById("check");
const menuBtnIcon = document.querySelector("i");
const homeLink = document.querySelector('a[href="#home"]');
const aboutMeLink = document.querySelector('a[href="#about"]'); 
const favoritesLink = document.querySelector('a[href="#favorites"]');
const homeSection = document.querySelector(".section"); 
const aboutMeSection = document.getElementById("about");
const favoritesSection = document.getElementById("favorites");

function showSection(section) {
    [homeSection, aboutMeSection, favoritesSection].forEach(sec => {
        sec.style.display = sec === section ? "block" : "none";
    });
}

showSection(homeSection);

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");

    if (menuBtnIcon.classList.contains("ri-close-line")) {
        menuBtnIcon.setAttribute("class", "ri-menu-line");
    } else {
        menuBtnIcon.setAttribute("class", "ri-close-line");
    }
});

if (homeLink) {
    homeLink.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(homeSection);
    });
}

if (aboutMeLink) {
    aboutMeLink.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(aboutMeSection);
    });
}

if (favoritesLink) {
    favoritesLink.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(favoritesSection);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const favorites = [
        { img: "favartist.jpeg", desc: "Taylor Swift" },
        { img: "favgroup.jpeg", desc: "BOYNEXTDOOR (보이넥스트도어)" },
        { img: "favsong.jpeg", desc: "I DO ME - KiiKii" },
        { img: "favlove.jpeg", desc: "Riwoo (리우)" },
        { img: "favart.jpeg", desc: "The Starry Night - Vincent van Gogh" },
        { img: "favgame.jpeg", desc: "Lunox - MLBB" },
        { img: "favkpop.jpeg", desc: "WHO! - BOYNEXTDOOR" },
        { img: "favhob.jpeg", desc: "Crocheting" },
        
    ];

    const favoritesGrid = document.querySelector(".favorites-grid");
    
    if (favoritesGrid) {
        favoritesGrid.innerHTML = ""; 

        favorites.forEach((fav) => {
            const favoriteItem = document.createElement("div");
            favoriteItem.classList.add("favorite-item");

            favoriteItem.innerHTML = `
                <img src="${fav.img}" alt="${fav.desc}">
                <p>${fav.desc}</p>
            `;

            favoritesGrid.appendChild(favoriteItem);
        });
    }
});
