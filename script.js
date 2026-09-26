/*PHASE I
Use the fetch() API to request a specific word (e.g., “hello”) from the Dictionary API.
Chain your promises using .then().
The first .then() should check if the response is valid (response.ok), then send the json data to the next call
The second .then() should parse the data as JSON and log the entire resulting data object to the console.*/

//Remember that the Free Dictionary API returns an object containing a word property and an entries array (representing different grammatical contexts/parts of speech). You will need to inspect this structure in your browser console to see how the data is organized.

/*PHASE II
Update your fetch logic to include a .catch() block that logs a clear error message 
(e.g., "Error: Could not connect to the dictionary service") if the network request fails.

Add a check inside your first .then() to throw an Error if response.ok is false 
(this happens if the network request encounters an HTTP error, like a mistyped URL or server issue), and then send the json data to the next then call.

    *We haven’t directly covered error handling, but you can see how to throw an error in the reading material examples for fetch()

In your second .then():
    *Check if any entries were returned (data.entries.length === 0). If no entries are found, print “Word not found”.
    *If entries are found, log the word and the first definition string found in the JSON structure to the console.*/

//The JSON structure is nested: Object -> entries (Array) -> senses (Array) -> definition (String). For example, to access the first definition of the primary entry: 
// data.entries[0].senses[0].definition. You will need to use indices (like [0]) to dig into these arrays.



fetch("https://freedictionaryapi.com/api/v1/entries/en/hello")

.then(response => {

    if (!response.ok) {

        throw new Error("Response was not successful");

    }

    return response.json();

})

.then(data => {

    //console.log(data);

    if (data.entries.length === 0) {

        console.log("Word not found");

        return;

    }

    console.log(data.word);

    console.log(data.entries[0].senses[0].definition);

})

.catch(error => {

    console.error("Error: Could not connect to the dictionary service");

});

