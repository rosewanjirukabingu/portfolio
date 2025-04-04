document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");
    const closeBtn = document.getElementById("close-btn");
    const navLinks = document.querySelectorAll(".nav-links a");

    hamburger.addEventListener("click", () => {
        nav.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        nav.classList.remove("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });

    const texts = ["Frontend Developer", "UI/UX Designer", "Data Analyst", "Networking" ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const typewriterElement = document.querySelector(".typewriter");
        const currentText = texts[textIndex];
    
        typewriterElement.textContent = currentText.slice(0, charIndex);
    
        if (!isDeleting) {
           
            if (charIndex < currentText.length) {
                charIndex++;
                setTimeout(typeWriter, 150); 
            } else {
                isDeleting = true;
                setTimeout(typeWriter, 1000); 
            }
        } else {
          
            if (charIndex > 0) {
                charIndex--;
                setTimeout(typeWriter, 100);
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length; 
                setTimeout(typeWriter, 500);
            }
        }
    }
    
    typeWriter();
    
    


    function createShootingStar() {
        const starContainer = document.querySelector(".shooting-stars");
        const star = document.createElement("div");
        star.classList.add("shooting-star");

        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        star.style.left = `${startX}px`;
        star.style.top = `${startY}px`;

        const moveX = (Math.random() - 0.5) * 700; 
        const moveY = (Math.random() - 0.5) * 700;
        star.style.setProperty("--moveX", `${moveX}px`);
        star.style.setProperty("--moveY", `${moveY}px`);

        const duration = Math.random() * 3 + 2; 
        const delay = Math.random() * 4;
        star.style.animation = `shooting ${duration}s linear ${delay}s`;

        starContainer.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, (duration + delay) * 1000);
    }

    setInterval(() => {
        for (let i = 0; i < 2; i++) {
            createShootingStar();
        }
    }, 500);
});

//----------------about section --------------------- -->

        var tabLinks = document.getElementsByClassName("tab-links");
        var tabContents = document.getElementsByClassName("tab-contents");

        function openTab(tabName){
            for(tabLink of tabLinks){
                tabLink.classList.remove("active-link");
            }
            for(tabContent of tabContents){
                tabContent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabName).classList.add("active-tab");
        }

        
document.addEventListener("DOMContentLoaded", function () {
    const skillCards = document.querySelectorAll(".skill-card");
  
    function checkVisibility() {
      skillCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          card.classList.add("visible");
  
          const progressBar = card.querySelector(".progress-bar");
          if (progressBar) {
            progressBar.style.width = progressBar.getAttribute("data-width");
          }
        }
      });
    }
  
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); 
  });
  

  function animateProgressBars() {
    document.querySelectorAll(".progress-circle").forEach((circle) => {
        let progress = parseInt(circle.getAttribute("data-progress"));
        let start = 0;
        let progressText = circle.querySelector(".progress-value");

        let interval = setInterval(() => {
            if (start <= progress) {
                progressText.innerText = `${start}%`;
                circle.style.background = `conic-gradient(#4CAF50 ${start * 3.6}deg, #333 ${start * 3.6}deg)`;
                start++;
            } else {
                clearInterval(interval);
            }
        }, 20);
    });
}

function onScroll() {
    let skillsSection = document.getElementById("skills");
    let sectionTop = skillsSection.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (sectionTop < screenHeight * 0.75) {
        animateProgressBars();
        window.removeEventListener("scroll", onScroll);
    }
}

window.addEventListener("scroll", onScroll);



// -----------------contact form submission handling------------------

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    fetch(this.action, {
        method: "POST",
        body: new FormData(this),
    }).then(response => {
        if (response.ok) {
            document.getElementById("success-message").classList.remove("hidden");
            setTimeout(() => {
                document.getElementById("success-message").classList.add("hidden"); 
            }, 5000);
            this.reset(); 
        }
    }).catch(error => console.log("Error:", error));
});