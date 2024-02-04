const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yipee!";
  
  const gifWidth = gif.offsetWidth;
  const gifHeight = gif.offsetHeight;

  gif.src = "https://i.pinimg.com/originals/91/bb/e5/91bbe5c5c9d32d755661e2cde47107e5.gif";

  gif.onload = () => {
    gif.style.width = gifWidth + 'px';
    gif.style.height = gifHeight + 'px';
  };
  
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  // Make sure button can freely move within the wrapper
  const maxX = wrapper.offsetWidth - noBtn.offsetWidth;
  const maxY = wrapper.offsetHeight - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
