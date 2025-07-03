      async function searchWord() {
      const word = document.getElementById("wordInput").value.trim();
      const resultDiv = document.getElementById("result");

      if (word === "") {
        resultDiv.innerHTML = "Please enter a word.";
        return;
      }

      resultDiv.innerHTML = "Searching...";

      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();

        if (data.title === "No Definitions Found") {
          resultDiv.innerHTML = "No meaning found. Try another word.";
        } else {
          const meaning = data[0].meanings[0].definitions[0].definition;
          resultDiv.innerHTML = `<strong>${word}</strong>: ${meaning}`;
        }
      } catch (error) {
        resultDiv.innerHTML = "Something went wrong. Check your internet or try again.";
      }
    }
 