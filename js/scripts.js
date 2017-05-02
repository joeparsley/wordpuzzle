// $(document).ready(function() {
//   var sentence = document.getElementById("sentence").innerHTML;
//   console.log(sentence);
//   var noVowels = sentence.replace(/[aAeEiIoOuU]/ig," _ ");
//   console.log(noVowels);
//
//   $("span#challenge").append(noVowels);
//
//   $("#button").click(function() {
//   $("#challenge").toggle();
//   $("#sentence").toggle();
//
//   event.preventDefault();
//   });
// });

var vowels = ['a', 'e', 'i', 'o', 'u'];
var sentence = "here we go";
var newSentence = sentence
for (var index = 0; index < vowels.length; index++) {
  newSentence = newSentence.split(vowels[index]).join("-");

}
