/*
PHASE I - Fetch & Promises

Use the fetch() API to request a specific word (e.g., “hello”) from the Dictionary API.
Chain your promises using .then().
The first .then() should check if the response is valid (response.ok), then send the json data to the next call
The second .then() should parse the data as JSON and log the entire resulting data object to the console.

Remember that the Free Dictionary API returns an object containing a word property and an entries array (representing different grammatical contexts/parts of speech). You will need to inspect this structure in your browser console to see how the data is organized.
*/

/*
PHASE II - Handling Errors & Object Exploration

Update your fetch logic to include a .catch() block that logs a clear error message 
(e.g., "Error: Could not connect to the dictionary service") if the network request fails.

Add a check inside your first .then() to throw an Error if response.ok is false 
(this happens if the network request encounters an HTTP error, like a mistyped URL or server issue), and then send the json data to the next then call.

    *We haven’t directly covered error handling, but you can see how to throw an error in the reading material examples for fetch()

In your second .then():
    *Check if any entries were returned (data.entries.length === 0). If no entries are found, print “Word not found”.
    *If entries are found, log the word and the first definition string found in the JSON structure to the console.

The JSON structure is nested: Object -> entries (Array) -> senses (Array) -> definition (String). For example, to access the first definition of the primary entry: 
data.entries[0].senses[0].definition. You will need to use indices (like [0]) to dig into these arrays.
*/

/*
PHASE III - Dynamic UI Interactions

Move the data from the console to the screen. Create an interface where the user can type a word and click a button to see the results.

Create an HTML page with an <input type="text"> for the word and a <button> to trigger the search.

Create a <div> or <section> with an ID (e.g., result-container) where the word and its definitions will be displayed.

Implement the fetch logic from Phase 2 to update the UI:

    *Use the value of the input as the word to fetch

    *Display the searched word using a semantically relevant tag (such as an <h2>).

    *Loop through all the definitions (senses) of the primary entry (data.entries[0].senses) and add each definition to your result container.

    *Use semantically relevant HTML tags for displaying your definitions (for example, creating an unordered list <ul> with list items <li>, or paragraphs <p>).

    *Prefer DOM manipulation methods like document.createElement() and parentElement.appendChild() to build and insert your elements.

If the word is not found or an error occurs, display a user-friendly error message inside your result container instead of leaving the page blank or broken.

Ensure that each time a new search is performed, old results or error messages are cleared out before new content is displayed.
*/

const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {

    const word = document.getElementById("word-input").value;
    
    const resultContainer = document.getElementById("result-container");

    if (word === "") {

        resultContainer.textContent = "Please enter a word to search.";
        
        return;

    }

    resultContainer.innerHTML = "";

    fetch(`https://freedictionaryapi.com/api/v1/entries/en/${word}`)

.then(response => {

    if (!response.ok) {

        throw new Error("Response was not successful");

    }

    return response.json();

})

.then(data => {

    const wordHeading = document.createElement("h2");

    wordHeading.textContent = data.word;

    resultContainer.appendChild(wordHeading);

    if (data.entries.length === 0) {

        resultContainer.textContent = "Word not found";

        return;

    }

    const definitionList = document.createElement("ul");

    const definitions = data.entries[0].senses;

    for (const sense of definitions) {

        const definitionItem = document.createElement("li");

        definitionItem.textContent = sense.definition;

        definitionList.appendChild(definitionItem);

    }

    resultContainer.appendChild(definitionList);

})

.catch(error => {

    console.error("Error: Could not connect to the dictionary service");

    resultContainer.textContent = "Could not connect to dictionary service.";

});


})