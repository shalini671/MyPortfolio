const nameText = "SHALINI";
const nameElement = document.getElementById("name");

// Show name one letter at a time
[...nameText].forEach((letter, index) => {
  const span = document.createElement("span");
  span.textContent = letter;
  span.style.animationDelay = `${index * 0.15}s`;
  nameElement.appendChild(span);
});

// Upload and preview your photo
const photoUpload = document.getElementById("photoUpload");
const myPhoto = document.getElementById("myPhoto");

photoUpload.addEventListener("change", function () {
  const file = this.files[0];

  if (!file) return;

  if (!file.type.startsWith("image/")) {
    alert("Please select an image.");
    return;
  }

  const reader = new FileReader();

  reader.onload = function (event) {
    myPhoto.src = event.target.result;
  };

  reader.readAsDataURL(file);
});

// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Copy email address
const email = "shalinisaravanan822@gmail.com";
const copyButton = document.getElementById("copyEmail");
const toast = document.getElementById("toast");

copyButton.addEventListener("click", async function () {
  try {
    await navigator.clipboard.writeText(email);
    showToast("Email copied successfully!");
  } catch (error) {
    window.location.href = "mailto:" + email;
  }
});

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}