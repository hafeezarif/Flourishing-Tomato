var coll = document.getElementsByClassName("collapsible");
var i;

const collapsibleToggle = document.querySelector('#collapsible-toggle');
const collapsibleContent = document.querySelector('#collapsible-content');

collapsibleToggle.addEventListener('click', function() {
  collapsibleContent.classList.toggle('hidden');
})
