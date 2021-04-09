function removeVowels(word) {
  var characters = word.split("");

  var result = [];

  characters.forEach(function(character) {
    if (
      character === "a" ||
      character === "o" ||
      character === "i" ||
      character === "e" ||
      character === "u"
    ) {
      result.push(character);
    } else {
      result.push("_");
    }
  });

  return result.join("");
}

function removeVowelsForWords(words) {
  var result = words.map(function(word) {
    return removeVowels(word);
  });

  return result;
}

/*
  Task 1
  Let's trace this piece of code - what is the value of result with this input
  */
  var result = removeVowels('samuel');
  // El valor del resultado es un string "_a_ue_"  


/*
	Task 2
	Trace what happens if we call the function removeVowelsForWords with this input: ["Irina", "Etza", "Daniel"]
    expected output?:
*/
  let array = ["Irina", "Etza", "Daniel"];
  let whatHappens = removeVowelsForWords(array);

  // Retorna un array con los valores  ["__i_a", "___a", "_a_ie_"]
