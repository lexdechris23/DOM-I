const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//header links
const headerLinks = document.getElementsByTagName('a');
headerLinks[0].textContent = siteContent["nav"]["nav-item-1"];
headerLinks[1].textContent = siteContent["nav"]["nav-item-2"];
headerLinks[2].textContent = siteContent["nav"]["nav-item-3"];
headerLinks[3].textContent = siteContent["nav"]["nav-item-4"];
headerLinks[4].textContent = siteContent["nav"]["nav-item-5"];
headerLinks[5].textContent = siteContent["nav"]["nav-item-6"];

//top section elements
const topText = document.querySelector("h1");
topText.textContent = siteContent["cta"]["h1"];

const topButton = document.querySelector("button");
topButton.textContent = siteContent["cta"]["button"];

const topImg = document.querySelector("#cta-img");
topImg.src = siteContent["cta"]["img-src"];

//nav headings
const headingText = document.querySelectorAll(".text-content h4");
headingText[0].textContent = siteContent["main-content"]["features-h4"];
headingText[1].textContent = siteContent["main-content"]["about-h4"];
headingText[2].textContent = siteContent["main-content"]["services-h4"];
headingText[3].textContent = siteContent["main-content"]["product-h4"];
headingText[4].textContent = siteContent["main-content"]["vision-h4"];

//add 2 new nav headings and append to DOM, change color to green.

const newNav1 = document.createElement("a");
newNav1.textContent = 'DOM Stuff';
newNav1.href = '#';
document.querySelector("nav").appendChild(newNav1);

const newNav2 = document.createElement("a")
newNav2.textContent = 'Newsletter';
newNav2.href = '#';
document.querySelector("nav").prepend(newNav2)

newNav1.style.color = "green";
newNav2.style.color = "green";


//paragraph content
const paragraphText = document.querySelectorAll(".text-content p");
paragraphText[0].textContent = siteContent["main-content"]["features-content"];
paragraphText[1].textContent = siteContent["main-content"]["about-content"];
paragraphText[2].textContent = siteContent["main-content"]["services-content"];
paragraphText[3].textContent = siteContent["main-content"]["product-content"];
paragraphText[4].textContent = siteContent["main-content"]["vision-content"];

//middle image
const midImg = document.getElementById("middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];

//contact section
const contactHeading = document.querySelector(".contact h4");
contactHeading.textContent = siteContent["contact"]["contact-h4"];

const contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];


//footer
const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];