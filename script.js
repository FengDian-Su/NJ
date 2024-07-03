const iframe = document.getElementById("myIframe");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    const newUrl = button.dataset.url;
    iframe.src = newUrl;
  });
});

function scrollToProject() {
  document.getElementById('project').scrollIntoView({ behavior: 'smooth' });
}

function scrollToLink() {
  document.getElementById('link').scrollIntoView({ behavior: 'smooth' });
}