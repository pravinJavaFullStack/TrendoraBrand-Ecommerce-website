// ✅ Contact Form Submission
function submitForm(event) {
  event.preventDefault();
  alert("Thank you for contacting us!");
}

// ✅ Slider Logic
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  const totalSlides = slides.length;
  if (index >= totalSlides) currentSlide = 0;
  else if (index < 0) currentSlide = totalSlides - 1;
  else currentSlide = index;

  const slideWidth = slides[0].clientWidth;
  document.querySelector(".slides").style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// ✅ Auto-slide every 4 seconds
setInterval(() => {
  nextSlide();
}, 4000);

// ✅ On window resize, reposition slide
window.addEventListener('resize', () => showSlide(currentSlide));

// ✅ Initialize slider on load
showSlide(currentSlide);

// ✅ Responsive Navbar Toggle for Mobile
 function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
  }

  const products = [
    {
      title: "T-Shirt",
      desc: "Soft cotton T-Shirt perfect for daily wear.",
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/3/j/x/xl-fs01002-blue-dove-original-imah3yhy7mxmjydh.jpeg?q=70"
    },
    {
      title: "Jeans",
      desc: "Comfortable and stretchable jeans.",
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/f/g/x/l-collar-tshirt-for-men-n-and-j-original-imah9n9u4hawk9uq.jpeg?q=70"
    },
    // Add all your other products here...
  ];

  function showDetails(title, desc, img) {
    document.getElementById('detail-title').textContent = title;
    document.getElementById('detail-description').textContent = desc;
    document.getElementById('detail-image').src = img;
    document.getElementById('product-detail').classList.remove('hidden');

    // Related Products Logic
    const relatedBox = document.getElementById('related-products');
    relatedBox.innerHTML = '';
    const related = products.filter(p => p.title !== title).sort(() => 0.5 - Math.random()).slice(0, 4);

    related.forEach(p => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${p.img}" alt="${p.title}" />
        <h4>${p.title}</h4>
      `;
      div.onclick = () => showDetails(p.title, p.desc, p.img);
      relatedBox.appendChild(div);
    });
  }


  // login and Registration form line in down of code ---------------

  const loginForm = document.getElementById("login");
  const registerForm = document.getElementById("registration");
  const formTitle = document.getElementById("form-title");
  const toggleText = document.getElementById("toggle-text");

  function toggleForm() {
    if (loginForm.classList.contains("active")) {
      loginForm.classList.remove("active");
      registerForm.classList.add("active");
      formTitle.textContent = "Create a New Account";
      toggleText.innerHTML = `Already a member? <a onclick="toggleForm()">Login here</a>`;
    } else {
      registerForm.classList.remove("active");
      loginForm.classList.add("active");
      formTitle.textContent = "Login to Your Account";
      toggleText.innerHTML = `New user? <a onclick="toggleForm()">Register here</a>`;
    }
  }

  // 👇 Automatically toggle form if #registration is in URL
  window.onload = function () {
    if (window.location.hash === "#registration") {
      toggleForm(); // show registration form
    }
  };