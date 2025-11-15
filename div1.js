// Smooth scroll
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// ================= HERO JAVASCRIPT ANIMATION =================
// Generate floating particles
const particles = document.querySelector(".particles");

for (let i = 0; i < 22; i++) {
  const dot = document.createElement("span");
  dot.style.left = Math.random() * 100 + "%";
  dot.style.top = Math.random() * 100 + "%";
  dot.style.animationDuration = 5 + Math.random() * 5 + "s";
  particles.appendChild(dot);
}


// ================= SKILLS ANIMATION =================
document.addEventListener("DOMContentLoaded", () => {
    const skillSection = document.querySelector("#skills");
    const skills = document.querySelectorAll(".skill");
    const skillBars = document.querySelectorAll(".skill-fill");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {

                    skills.forEach((skill, index) => {
                        setTimeout(() => {
                            skill.classList.add("visible");
                            const bar = skill.querySelector(".skill-fill");
                            bar.style.width = bar.dataset.level + "%";
                        }, index * 150);
                    });

                }
            });
        },
        { threshold: 0.2 }
    );

    observer.observe(skillSection);
});

// ================= PROJECT JAVASCRIPT ANIMATION =================

/* PROJECTS ANIMATION */
document.addEventListener("DOMContentLoaded", () => {
  const projectSection = document.getElementById("projectsContent");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        projectSection.classList.add("animate-show");
      }
    },
    { threshold: 0.2 }
  );

  observer.observe(projectSection);
});



// ================= EDUCATION JAVASCRIPT ANIMATION =================
/* EDUCATION ANIMATION */


document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.1 }
    );

    items.forEach((item) => observer.observe(item));
});


// ================= CERTIFICATION JAVASCRIPT ANIMATION =================

// Certifications section fade-in animation
document.addEventListener("DOMContentLoaded", () => {
  const certCard = document.querySelector(".cert-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          certCard.classList.add("fade-up");
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(certCard);
});

// ================= CONTACT JAVASCRIPT ANIMATION =================


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("All fields are required.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email address.");
    return;
  }

  alert("Message Sent!\nThank you for reaching out. I'll get back to you soon!");

  document.getElementById("contactForm").reset();
});



// ================= FOOTER JAVASCRIPT ANIMATION =================
   
document.getElementById("year").innerText = new Date().getFullYear();

// Download CV file
function downloadCV() {
  const link = document.createElement("a");
  link.href = "sriramcv.pdf"; // change to your actual CV URL
  link.download = "Sriram_V_CV.pdf";
  link.click();
}







