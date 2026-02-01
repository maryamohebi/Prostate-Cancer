/*
const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

*/
console.log("JS is working!");

var dropdown = document.getElementsByClassName("dropdown");
var i;
 for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling; 
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }else {
            dropdownContent.style.display = "block";
        }

    });
}

document.getElementById("chat-toggle").addEventListener("click", () => {
    const chatBox = document.getElementById("chat-box");
    chatBox.style.display = chatBox.style.display === "block" ? "none" : "block";
  });

  
document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion");
  
    accordions.forEach((accordion) => {
      accordion.addEventListener("click", function () {
        const isActive = this.classList.contains("active");
  
        // Close all panels
        accordions.forEach((acc) => {
          acc.classList.remove("active");
          acc.querySelector(".icon").textContent = "+";
          acc.nextElementSibling.style.maxHeight = null;
        });
  
        // If it wasn't already active, open it
        if (!isActive) {
          this.classList.add("active");
          this.querySelector(".icon").textContent = "–";
          const panel = this.nextElementSibling;
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });
  });

// Toggle accordion-style symptom cards
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.symptom-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const content = card.querySelector('.card-content');
      content.classList.toggle('open');
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".accordion-toggle");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const item = toggle.parentElement;
      item.classList.toggle("active");
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
});

function toggleAccordion(header) {
  const content = header.nextElementSibling;
  const icon = header.querySelector('.toggle-icon');
  const allContents = document.querySelectorAll('.accordion-content');
  const allIcons = document.querySelectorAll('.toggle-icon');

  allContents.forEach(c => {
    if (c !== content) c.style.display = 'none';
  });

  allIcons.forEach(i => {
    if (i !== icon) i.textContent = '+';
  });

  if (content.style.display === 'block') {
    content.style.display = 'none';
    icon.textContent = '+';
  } else {
    content.style.display = 'block';
    icon.textContent = '-';
  }
}

let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  if (slides.length === 0) return; // 💥 Stop if no slides on the page

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

showSlides();


const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

faders.forEach(el => observer.observe(el));

const supportGroups = {
  "Kaitaia": {
    name: "Raewyn Paviour",
    phone: "0800 660 0800",
    email: "kaitaia@prostate.org.nz"
  },
  "Whangarei": {
    name: "Raewyn Paviour",
    phone: "027 274 2435 or 027 293 9920",
    email: "whangarei@prostate.org.nz"
  },
  "Auckland - Rodney": {
    name: "Doug Cresswell",
    phone: "0274958157",
    email: "rodney@prostate.org.nz"
  },
  "Auckland - North Shore": {
    name: "Bruce Cochrane",
    phone: "Phone: 021 650 289",
    email: "aucklandnorth@prostate.org.nz"
  },
  "Auckland - Central": {
    name: "Raewyn Paviour",
    phone: " 0800 66 0800",
    email: "aucklandcentral@prostate.org.nz"
  },
  "Auckland - East": {
    name: "Ruben Naidoo",
    phone: "0272413668",
    email: "aucklandeast@prostate.org.nz"
  },
  "Auckland - West": {
    name: "John and Lilian Woodards",
    phone: "021 208 2089",
    email: "aucklandwest@prostate.org.nz"
  },
  "Auckland Women's Group": {
    name: "Raewyn Paviour",
    phone: "09 414 46100 or 027 ",
    email: "womensakl@prostate.org.nz"
  },
  "Auckland - South": {
    name: "Raewyn Paviour",
    phone: " 0800 66 0800",
    email: "aucklandsouth@prostate.org.nz"
  },
  "Cambridge": {
    name: "Ron Greenwood",
    phone: " 07 823 5877 or 027 ",
    email: "cambridge@prostate.org.nz"
  },
  "Whangamata": {
    name: "Ian Hunt and Ross Falconer",
    phone: " 027 479 1768 (Ian) or 021 894 832 (Ross)",
    email: "whangamata@prostate.org.nz"
  },
  "Waihi": {
    name: "Raewyn Paviour",
    phone: " 0800 66 0800",
    email: "waihi@prostate.org.nz"
  },
  "Hamilton": {
    name: "Brent Wood",
    phone: "  027 222 2575",
    email: "hamilton@prostate.org.nz"
  },
  "Katikati": {
    name: "Rod Calver",
    phone: " 07 5490363 or 027 590 9710",
    email: "katikati@prostate.org.nz"
  },
  "Tauranga": {
    name: "Mike Lane and Mike Jolly",
    phone: "021 054 4660 (Mike Lane) 0275 868 789 (Mike Jolly",
    email: "tauranga@prostate.org.nz"
  },
  "Rotorua": {
    name: "Heinz Fett",
    phone: "027 570 7601",
    email: "rotorua@prostate.org.nz"
  },
  "Whakatane": {
    name: "Mark Wootton",
    phone: "027 273 1437",
    email: "whakatane@prostate.org.nz"
  },
  "Gisborne": {
    name: "Darrington Slater",
    phone: "021 063 4515",
    email: "gisborne@prostate.org.nz"
  },
  "Hawke's Bay Partners": {
    name: "Heather Osborne",
    phone: " 021 252 6534",
    email: "hawkesbaypartners@prostate.org.nz"
  },
  "Hawke's Bay": {
    name: "Ven and Trish Plummer",
    phone: "06 834 6302 or 021 487 373 (Ven)",
    email: "hawkesbay@prostate.org.nz"
  },
  "New Plymouth": {
    name: "Paul Klenner and Dennis Hardie",
    phone: "021 084 30914 (Dennis) or 022 413 1994 (Paul)",
    email: "newplymouth@prostate.org.nz"
  },
  "Wanganui": {
    name: "Brian Deadman",
    phone: "06 348 7115 or 027 555 0338",
    email: "wanganui@prostate.org.nz"
  },
  "Palmerston North": {
    name: "Bruce Avery",
    phone: "021 625 180",
    email: "manawatu@prostate.org.nz"
  },
  "Masterton": {
    name: "Robert and Susan Brader",
    phone: "06 370 8699 or 027 272 1892",
    email: "masterton@prostate.org.nz"
  },
  "Wellington Pals": {
    name: "Graeme Coutts",
    phone: " 022 674 7832",
    email: "lowerhutt@prostate.org.nz"
  },
  "Lower Hutt": {
    name: "Bill Guthrie",
    phone: "027 247 5427",
    email: "lowerehutt@prostate.org.nz"
  },
  "Marlborough": {
    name: "Murray Eyles",
    phone: "027 608 5667",
    email: "marlborough@prostate.org.nz"
  },
  "Nelson": {
    name: "Bill Fergie",
    phone: "03 544 8635 or 021 062 0427",
    email: "nelson@prostate.org.nz"
  },
  "Greymouth/Westport": {
  name: "David and Ruth Clarke",
  phone: "027 877 8070",
  email: "westport@prostate.org.nz"
  },
  "Rangiora": {
  name: "Dean and Lois Farrow",
  phone: "021 0224 6078 (Dean)",
  email: "rangiora@prostate.org.nz"
  },
  "Christchurch AM Group": {
  name: "Derek Goring",
  phone: "021 277 7639",
  email: "christchurch.am@prostate.org.nz"
  },
    "Christchurch PM Group": {
  name: "Russell George",
  phone: "022 697 3614",
  email: "christchurch.pm@prostate.org.nz"
  },
  "Selwyn": {
  name: "Chris and Dianne Ward",
  phone: "(03) 321 7046, 027 437 1254 (Chris) or 021 371 254 (Dianne)",
  email: "selwyn@prostate.org.nz"
  },
  "Ashburton": {
  name: "Doug Collie",
  phone: "0727 5100 556",
  email: "ashburton@prostate.org.nz"
  },
  "Timaru": {
  name: "Chris Ward",
  phone: "027 437 1254",
  email: "timaru@prostate.org.nz"
  },
    "Selwyn Men's Coffee Chat Group": {
  name: "Chris Ward",
  phone: "027 437 1254",
  email: "selwyn@prostate.org.nz"
  },
  "Selwyn Women's Coffee Chat Group": {
  name: "Dianne Ward",
  phone: "021 371 254",
  email: "selwyn@prostate.org.nz"
  },
  "Dunedin": {
  name: "Geoff Gray",
  phone: "021 959 591",
  email: "dunedin@prostate.org.nz"
  },
  "Dunedin Partners Network": {
  name: "Angela Melrose",
  phone: "027 406 2948",
  email: "support@prostate.org.nz"
  },
    "Central Otago 'Alexandra'": {
  name: "David and Ruth Clarke",
  phone: "027 877 8070",
  email: "alexandra@prostate.org.nz"
  },
  "Central Otago 'Roxburgh'": {
  name: "David and Ruth Clarke",
  phone: "027 877 8070",
  email: "roxburgh@prostate.org.nz"
  },
  "Central Otago 'Queenstown'": {
  name: "David and Ruth Clarke",
  phone: "027 877 8070",
  email: "alexandra@prostate.org.nz"
  },
  "Invercargill": {
    name: "Trish and Terry Wright",
    phone: "021 029 32711 (Terry) or 021 110 9103 (Trish)",
    email: "invercargill@prostate.org.nz"
  },

};

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('supportSearchForm');
  const resultBox = document.getElementById('supportResult');
  console.log("JS loaded");

  if (!form || !resultBox) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const city = document.getElementById('city').value.trim();

    if (supportGroups[city]) {
      const group = supportGroups[city];
      resultBox.innerHTML = `
        <div class="result-card">
          <h3>Support Group in ${city}</h3>
          <p><i class="fa fa-user"></i> <strong>Contact:</strong> ${group.name}</p>
          <p><i class="fa fa-phone"></i> <strong>Phone:</strong> ${group.phone}</p>
          <p><i class="fa fa-envelope"></i> <strong>Email:</strong> <a href="mailto:${group.email}">${group.email}</a></p>
        </div>
      `;
    } else {
      resultBox.innerHTML = `<p class="no-result">No support group found for "${city}". Please check the spelling or try another city.</p>`;
    }
  });
});

// Launch date 
const launchDate = new Date("2025-07-01T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = launchDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour   = minute * 60;
  const day    = hour * 24;

  const days    = Math.floor(gap / day);
  const hours   = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  document.getElementById('days').innerText = String(days).padStart(2, '0');
  document.getElementById('hours').innerText = String(hours).padStart(2, '0');
  document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
  document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form from reloading page

  const searchTerm = document.getElementById("site-search").value.toLowerCase();
  const allText = document.body.querySelectorAll("*:not(script):not(style)");

  let found = false;

  allText.forEach(el => {
    if (el.children.length === 0 && el.textContent.toLowerCase().includes(searchTerm)) {
      // Highlight match
      const regex = new RegExp(`(${searchTerm})`, 'gi');
      el.innerHTML = el.textContent.replace(regex, `<mark>$1</mark>`);
      
      // Scroll to first match
      if (!found) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        found = true;
      }
    }
  });

  if (!found) {
    alert("No match found!");
  }
});



