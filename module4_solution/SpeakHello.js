// STEP 2, 3, 4, 5 combined
(function(window) {
  var helloSpeaker = {};  // create helloSpeaker object

  var speakWord = "Hello"; // local variable

  // attach 'speak' method to helloSpeaker
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  // expose helloSpeaker to global scope
  window.helloSpeaker = helloSpeaker;
})(window);
