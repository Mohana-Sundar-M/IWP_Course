// STEP 6, 7, 8, 9 combined
(function(window) {
  var byeSpeaker = {}; // create byeSpeaker object

  var speakWord = "Good Bye"; // local variable

  // attach 'speak' method to byeSpeaker
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  // expose byeSpeaker to global scope
  window.byeSpeaker = byeSpeaker;
})(window);
