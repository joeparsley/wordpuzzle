$(document).ready(function() {
  var sentence = document.getElementById("sentence").innerHTML;
  console.log(sentence);
  var noVowels = sentence.replace(/[aAeEiIoOuU]/ig," _ ");
  console.log(noVowels);

  $("span#challenge").append(noVowels);

  $("#button").click(function() {
  $("#challenge").toggle();
  $("#sentence").toggle();

  event.preventDefault();
  });
});
