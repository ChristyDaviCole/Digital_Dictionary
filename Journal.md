Phase 1 Journal Prompt: How are you passing data from one then() call to another?
The first .then() uses 'return' to pass the json data to the second .then(), where it is received as data.

Phase 2 Journal Prompt:
Explain what a “Promise” actually represents in this code. What happens if the API is down or the URL is wrong? How does .catch() help us handle that?
A promise represents a future result. If the API is down or the URL is wrong, then the promise can reject. .catch() gives a place  to handle the error with an error message.

Phase 3 Journal Prompt:
