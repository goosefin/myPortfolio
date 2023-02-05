let linkedin = document.getElementById('linkedin-img')
let github = document.getElementById('github-img')
let resume = document.getElementById('resume-img')

// const openLinkedIn = () =>{
    
// }

// const openGitHub = () =>{

// }

// const openResume = () =>{

// }

linkedin.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/agustina-fin', '_blank')
})

github.addEventListener('click', () => {
    window.open('https://github.com/goosefin', '_blank')
})

resume.addEventListener('click', () => {
    window.open('https://docs.google.com/document/d/1SIZu5EYgMRr1LMFZ5cy1YVdIq5tKPhVK_RA5FId7i8c/edit?usp=sharing','_blank')
})