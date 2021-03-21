
const fade = (element) => {
if(!element.classList.contains('animate__animated','animate__fadeIn')) {
element.classList.add('animate__animated','animate__fadeIn')
element.style.animationDuration = "3s"
} else {
element.classList.remove('animate__animated','animate__fadeIn')
}
// Add animation classes back to our element after 1 milisecond;
setTimeout(function(){
  element.classList.add('animate__animated','animate__fadeIn');
}, 100);
}

const pulse = (element) => {
  if(!element.classList.contains('animate__animated','animate__pulse')) {
    element.classList.add('animate__animated','animate__pulse')
    element.style.animationDuration = "0.5s"
    } else {
    element.classList.remove('animate__animated','animate__pulse')
    }
    // Add animation classes back to our element after 1 milisecond;
    setTimeout(function(){
      element.classList.add('animate__animated','animate__pulse');
    }, 100);
  }


// why doesn't this work??

const hideImage = (element) => {
  element.style.opacity = "0.5"
}
const showImage = (element) => {
  element.style.opacity = "1"
}

const showPhoneNumber = () => {
document.querySelector(".phonenumber").classList.add('animate__animated','animate__fadeIn')
document.querySelector(".phonenumber").style.display = "block";
}

const showEmail = () => {
  document.querySelector(".email").classList.add('animate__animated','animate__fadeIn')
  document.querySelector(".email").style.display = "block"
  }

