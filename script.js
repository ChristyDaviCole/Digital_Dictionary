/*Use the fetch() API to request a specific word (e.g., “hello”) from the Dictionary API.
Chain your promises using .then().
The first .then() should check if the response is valid (response.ok), then send the json data to the next call
The second .then() should parse the data as JSON and log the entire resulting data object to the console.*/

//Remember that the Free Dictionary API returns an object containing a word property and an entries array (representing different grammatical contexts/parts of speech). You will need to inspect this structure in your browser console to see how the data is organized.

fetch("https://freedictionaryapi.com/api/v1/entries/en/hello")

.then(response => {

    if (!response.ok) {

        throw new Error("Response was not successful");

    }

    return response.json();

})

.then(data => {

    console.log(data);

})