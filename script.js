let content = document.querySelector(".content-main-wrapper");
let testimonial = document.querySelector('.testimonial-container');


let CurrentDate = new Date().toLocaleString().slice(0, 9);


// HOMEPAGE CONTENT DATA

let HomePageContentData = [
  {
    image: "./Images/img10.png",
    time: CurrentDate,
    heading: "Tailwind Course In Hindi",
    subHeading:
      "Complete Tailwind CSS Course by CapicoMedia in Hindi - Learn Tailwind CSS from scratch for free!",
  },
  {
    image: "./Images/img11.png",
    time: CurrentDate,
    heading: "Next.js Tutorials For Beginners",
    subHeading:
      "Complete Next.js Course by CapicoMedia in Hindi - Learn Next.js from Scratch.",
  },
  {
    image: "./Images/img9.png",
    time: CurrentDate,
    heading: "React Js Tutorials For Beginners",
    subHeading:
      "React is a free and open-source front-end JavaScript library. This series will cover React from starting to the end.!",
  },
];

// TESTIMONIAL DATA

let testimonialData = [
  {
    image : './Images/man pic1.jpg',
    desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos doloribus eius culpa corrupti, placeat nulla doloremque hic molestiae odit accusantium.',
    name : 'Jonny albert',
    profession : 'web devloper'
  },
  {
    image : './Images/man pic2.jpg',
    desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos doloribus eius culpa corrupti, placeat nulla doloremque hic molestiae odit accusantium.',
    name : 'Mike tumbler',
    profession : 'App devloper'
  },
  {
    image : './Images/man pic3.jpg',
    desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos doloribus eius culpa corrupti, placeat nulla doloremque hic molestiae odit accusantium.',
    name : 'Akash singhal',
    profession : 'Cheif Accountant'
  },
]


// Homepage content function 
let showContent = () => {
    return content.innerHTML = HomePageContentData.map((elem)=>{
        let {image,time,heading,subHeading} = elem;
        return `
        <div class="content-wrapper">
        <div class="content-img">
            <img src="${image}" alt="img" />
        </div>
        <div class="content-title">
            <p class="content-time">⏱️ ${time}</p>
            <p class="content-heading">${heading}</p>
            <p class="content-subheading">
               ${subHeading}
            </p>
        </div>
        <div class="content-btn">
            <a href="#">Read more</a>
        </div>
    </div>
        `
    }).join('')
}

showContent()


// Testimonial function 

let showTestimonialData = () => {
  return testimonial.innerHTML = testimonialData.map((elem)=>{
    let {image,desc,name,profession} = elem;
    return (
      `
      <div class="testimonial-content-wrapper">
      <div class="testimonial-img-wrapper">
          <img src="${image}" alt="dp">
      </div>
     <div class="testimonial-main-text">
       <p>${desc}</p>
     </div>            
     <div class="testimonial-name">
          <h4>${name}</h4>
      </div>
      <div class="testimonial-proffesion">
          <p>${profession}</p>
      </div>
  </div>
      `
    )
  }).join('');
}

showTestimonialData();