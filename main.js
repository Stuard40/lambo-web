// Ošetření odhalování elementů při skrolování
function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Zavolat jednou hned na začátku pro elementy viditelné bez skrolování
reveal();

// Změna barvy pozadí navigace při scrolování
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(10, 10, 12, 0.95)";
    navbar.style.borderBottom = "1px solid rgba(212, 175, 55, 0.2)";
  } else {
    navbar.style.background = "rgba(10, 10, 12, 0.8)";
    navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.05)";
  }
});

// --- LIGHTBOX GALERIE ---
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");
const galleryImages = document.querySelectorAll(".gallery-img");

if (galleryImages.length > 0 && lightbox) {
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.classList.add("show");
      lightboxImg.src = img.src;
      // Zamezení scrollování stránky, když je fotka otevřená
      document.body.style.overflow = "hidden";
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove("show");
    document.body.style.overflow = "auto";
  };

  lightboxClose.addEventListener("click", closeLightbox);

  // Zavření po kliknutí kamkoliv do černého pozadí
  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
      closeLightbox();
    }
  });
}

// --- TABS LOGIKA PRO ÚSPĚCHY ---
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Odstranění aktivní třídy u všech
    tabBtns.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    // Přidání aktivní třídy kliknutému tlačítku
    btn.classList.add("active");

    // Zobrazení odpovídajícího obsahu
    const targetId = btn.getAttribute("data-target");
    document.getElementById(targetId).classList.add("active");
  });
});
