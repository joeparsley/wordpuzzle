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
$(document).ready(function() {
    $("#form").submit(function(event) {
    event.preventDefault();
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var sentence = $("#sentence-input").val();
    var newSentence = sentence;
    for (var index = 0; index < vowels.length; index++) {
      newSentence = newSentence.split(vowels[index]).join("-");
    }

    // $("#button").click(function() {
    $(".output").text(newSentence);

  });
});
