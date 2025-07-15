const roles = [
  { title: "Frontend Developer", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { title: "Youtuber", image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { title: "Traveler", image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=400" }
];

let roleIndex = 0;
const roleText = document.getElementById("role-text");
const roleImage = document.getElementById("role-image");

function showNextRole() {
  roleText.style.opacity = 0;
  roleImage.style.opacity = 0;

  setTimeout(() => {
    const current = roles[roleIndex];
    roleText.textContent = current.title;
    roleImage.src = current.image;

    roleText.style.opacity = 1;
    roleImage.style.opacity = 1;

    roleIndex = (roleIndex + 1) % roles.length;
  }, 500);
}

setInterval(showNextRole, 3000);

const projects = [
  {
    title: "Pet Care Website",
    description: "A responsive veterinary clinic website with booking features, service listings, and contact forms. Built using HTML, CSS, JavaScript.",
    link: "#"
  },
  {
    title: "Group Project - Quiz Application",
    description: "A comprehensive second-year university group project where I served as the project tester. This interactive quiz web application features multiple categories, timer functionality, score tracking, and user authentication. I was responsible for quality assurance, bug testing, user experience testing, and ensuring the application met all project requirements. Developed collaboratively using JavaScript, HTML, CSS, and API integration.",
    link: "#"
  },
  {
    title: "Personal Portfolio",
    description: "This modern responsive portfolio website showcases my skills, projects, and contact details. Designed with HTML, CSS, and JavaScript.",
    link: "#"
  }
];

function showProjectDetails(index) {
  document.getElementById("modal-title").textContent = projects[index].title;
  document.getElementById("modal-description").textContent = projects[index].description;
  document.getElementById("modal-link").href = projects[index].link;
  document.getElementById("project-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("project-modal").style.display = "none";
}


const activities = [
  {
    title: "Cricket",
    description: "I have played cricket passionately since Under-13 to Under-17. At university, I proudly represented in the Battle of Coders match as a wicket-keeper, showcasing teamwork, focus, and sportsmanship.",
    images: [
      "https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1661951/pexels-photo-1661951.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=400"
    ]
  },
  {
    title: "Volleyball",
    description: "I have been an active volleyball player since school. I participated in inter-faculty volleyball tournaments and proudly led my team as the captain, honing leadership and collaboration skills.",
    images: []
  },
  {
    title: "Rānamayura Sport Club",
    description: "As the active secretary of Rānamayura Sport Club in Bentota, I organize community sports events, encourage youth participation, and promote healthy lifestyles in my village.",
    images: []
  }
];

function showActivityDetails(index) {
  document.getElementById("activity-title").textContent = activities[index].title;
  document.getElementById("activity-description").textContent = activities[index].description;

  const gallery = document.getElementById("activity-gallery");
  gallery.innerHTML = ""; // Clear previous images

  if (activities[index].images.length > 0) {
    activities[index].images.forEach((img) => {
      const imgElement = document.createElement("img");
      imgElement.src = img;
      imgElement.alt = activities[index].title;
      gallery.appendChild(imgElement);
    });
  }

  document.getElementById("activity-modal").style.display = "flex";
}

function closeActivityModal() {
  document.getElementById("activity-modal").style.display = "none";
}

// Scroll Spy for Active Navbar Links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Mobile Menu Toggle
function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');
  
  if (!navbar.contains(e.target)) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// Image Modal Popup for Testimonials
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");
  const images = document.querySelectorAll(".testimonial-avatar img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});


