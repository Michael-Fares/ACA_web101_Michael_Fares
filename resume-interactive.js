
const fade = (element) => {
element.classList.add('animate__animated','animate__fadeIn')
element.style.animationDuration = "5s"
}

const pulse = (element) => {
  element.classList.add('animate__animated','animate__pulse')
  element.style.animationIterationCount = "3"
  }


// why doesn't this work??
const clear = (element) => {
  element.classList.remove('animate__animated')
}

const hideImage = (element) => {
  element.style.display = "none"
}
const showImage = (element) => {
  element.style.display = "block"
}

const showPhoneNumber = () => {
document.querySelector(".phonenumber").classList.add('animate__animated','animate__fadeIn')
document.querySelector(".phonenumber").style.display = "block";
}

const showEmail = () => {
  document.querySelector(".email").classList.add('animate__animated','animate__fadeIn')
  document.querySelector(".email").style.display = "block"
  }