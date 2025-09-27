// STEP 1: Wrap everything in an IIFE
(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 10: Loop over the names array
  for (var i = 0; i < names.length; i++) {

    // STEP 11: Get first letter and convert to lowercase
    var firstLetter = names[i].charAt(0).toLowerCase();

    // STEP 12: Call the appropriate speaker
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

})();
