// HERO SLIDER
const slides = document.querySelectorAll(".hero-bg-slider .slide");
const pagination = document.querySelector(".slider-pagination");
let current = 0;

// Create dots dynamically
slides.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showSlide(index));
  pagination.appendChild(dot);
});
const dots = document.querySelectorAll(".slider-pagination .dot");

function showSlide(index) {
  slides[current].classList.remove("active");
  dots[current].classList.remove("active");
  current = index;
  slides[current].classList.add("active");
  dots[current].classList.add("active");
}

function showNextSlide() {
  let next = (current + 1) % slides.length;
  showSlide(next);
}

setInterval(showNextSlide, 3000);

// OUR SERVICE
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content-box > div");

  tabButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      btn.classList.add("active");
      tabContents[index].classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const CORE_SERVICES_DATA = [
    {
      icon: "./assets/images/svg/sustainable-solutions-icon.svg",
      heading: "Asset Lifecycle",
      title: "Remanufacturing & rebuilds",
      description:
        "Extend asset life through refurbishment, rebuilds, and lifecycle optimisation programs.",
        link: "asset-lifecycle.html",
    },
    {
      icon: "./assets/images/png/sustainability.png",
      heading: "Sustainability Solutions",
      title: "ESG compliance",
      description:
        "Support ESG goals with waste reduction, energy efficiency, and circular engineering solutions",
        link:"sustainability-solutions.html",
    },
    {
      icon: "./assets/images/svg/process-management-icon.svg",
      heading: "Custom Engineering",
      title: "Custom mechanical design",
      description:
        "Tailored mechanical, electrical, and structural engineering solutions for complex applications.",
            link:"custom-engineering.html",
    },
    {
      icon: "./assets/images/png/technical-design.png",
      heading: "Technical Design",
      title: "CAD modelling & drafting",
      description:
        "Engineered system designs, modelling, and performance validation for industrial operations.",
            link:"technical-design.html",
    },
     {
      icon: "./assets/images/png/process.png",
      heading: "Process Systems",
      title: "Process optimisation",
      description:
        "End-to-end process engineering for safe, efficient material and fluid handling.",
            link:"process-system.html",
    },
    {
      icon: "./assets/images/png/fluid-icon.png",
      heading: "Fluid Management",
      title: "Hydraulics & lubrication",
      description:
        "Hydraulic, lubrication, and hose system solutions engineered for high-performance reliability.",
            link:"fluid-management.html",
    },
     {
      icon: "./assets/images/png/parts-supply.png",
      heading: "Parts Supply",
      title: "OEM parts & kitting",
      description:
        "Reliable sourcing of critical components, consumables, and OEM-grade parts.",
            link:"parts-supply.html",
    },
    {
      icon: "./assets/images/png/logistics.png",
      heading: "Logistics Support",
      title: "Global sourcing",
      description:
        "Strategic procurement, kitting, and delivery services to keep operations running smoothly.",
            link:"logistics-support.html",
    },
    {
      icon: "./assets/images/png/drilling.png",
      heading: "Drilling Services",
      title: "Rock drills & rotation units",
      description:
        "Specialised drilling component support, rebuilds, and performance improvement programs.",
            link:"drilling-services.html",
    },
    {
      icon: "./assets/images/png/heavy-equipment.png",
      heading: "Heavy Equipment",
      title: "Component rebuilds",
      description:
        "Maintenance, upgrades, and component solutions for mining and heavy-duty machinery.",
            link:"heavy-equipment.html",
    },
    {
      icon: "./assets/images/png/training.png",
      heading: "Training",
      title: "Technical upskilling",
      description:
        "Operator and technician training programs to enhance skills, safety, and equipment performance.",
            link:"technical-design.html",
    },
    {
      icon: "./assets/images/png/energy.png",
      heading: "Energy Solutions",
      title: "Renewable integration",
      description:
        "Energy efficiency, renewable integration, and industrial energy optimisation services.",
            link:"energy.html",
    },
  ];

  const desktopContainer = document.getElementById("cards-container-desktop");
  const mobileWrapper = document.querySelector(
    "#cards-container-mobile .swiper-wrapper"
  );

  CORE_SERVICES_DATA.forEach((item) => {
    // ---- Desktop Card ----
    const card = document.createElement("div");
    card.className = "col-md-6 col-xl-4 pb-26 px-3";
    card.innerHTML = `
      <div class="bg-white core-service-card w-100 d-flex flex-column justify-content-between h-100">
        <div>
          <div class="core-service-card-img-box d-flex justify-content-center align-items-center bg-sky-blue mb-40">
            <img src="${item.icon}" alt="icon" class="core-service-card-icon" />
          </div>
          <h3 class="max-w-320 fw-medium text-3xl mb-8 text-black">${item.heading}</h3>
          <h4 class="mb-24 text-lg lh-144 text-black">${item.title}</h4>
          <p class="mb-32 text-dark-gray text-lg lh-144">${item.description}</p>
        </div>
       <a href="${item.link}" class="read-more-btn fw-medium text-lg d-flex align-items-center"> 

Read More  

<span class="read-more-box d-flex justify-content-center align-items-center"> 

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" 

xmlns="http://www.w3.org/2000/svg"> 

<path d="M12.47 6.47007C12.6106 6.32962 12.8012 6.25073 13 6.25073C13.1988 6.25073 13.3894 6.32962 13.53 6.47007L18.53 11.4701C18.6705 11.6107 18.7493 11.8013 18.7493 12.0001C18.7493 12.1988 18.6705 12.3894 18.53 12.5301L13.53 17.5301C13.4613 17.6038 13.3785 17.6629 13.2865 17.7039C13.1945 17.7448 13.0952 17.7669 12.9945 17.7687C12.8938 17.7704 12.7938 17.7519 12.7004 17.7142C12.607 17.6765 12.5222 17.6203 12.451 17.5491C12.3797 17.4779 12.3236 17.3931 12.2859 17.2997C12.2482 17.2063 12.2296 17.1063 12.2314 17.0056C12.2332 16.9048 12.2552 16.8055 12.2962 16.7135C12.3372 16.6215 12.3963 16.5387 12.47 16.4701L16.19 12.7501H6C5.80109 12.7501 5.61032 12.6711 5.46967 12.5304C5.32902 12.3898 5.25 12.199 5.25 12.0001C5.25 11.8012 5.32902 11.6104 5.46967 11.4697C5.61032 11.3291 5.80109 11.2501 6 11.2501H16.19L12.47 7.53007C12.3295 7.38945 12.2507 7.19882 12.2507 7.00007C12.2507 6.80132 12.3295 6.6107 12.47 6.47007Z" 

fill="#3C3B47" fill-opacity="0.75"/> 

</svg> 

</span> 

</a> 
      </div>
    `;
    desktopContainer.appendChild(card);

    // ---- Mobile Slide ----
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = card.innerHTML;
    mobileWrapper.appendChild(slide);
  });

  const swiper = new Swiper("#cards-container-mobile", {
    slidesPerView: 1.22,
    spaceBetween: 12,
    autoplay: {
      delay: 3000,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 1.5,
        spaceBetween: 12,
      },
    },
  });
});

// LATEST NEWS INSIGHTS
var swiper = new Swiper(".latestNews", {
  slidesPerView: 3,
  spaceBetween: 32,
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 800,
  navigation: {
    nextEl: ".latest-swiper-button-next",
    prevEl: ".latest-swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  breakpoints: {
    0: { slidesPerView: 1.15, spaceBetween: 20 },
    576: { slidesPerView: 1.5, spaceBetween: 20 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
