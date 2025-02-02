// Function to extract the first word from the string
function firstWord(str) {
    // Trim any leading or trailing spaces
    str = str.trim();
    
    // Find the first space and return the substring before it
    let spaceIndex = str.indexOf(' ');
    
    if (spaceIndex === -1) {
        // If no space found, return the whole string
        return str;
    }
    
    return str.slice(0, spaceIndex);
}

// Function to display the first word
function showFirstWord() {
    const inputString = document.getElementById('inputString').value;
    const result = firstWord(inputString);
    document.getElementById('result').textContent = `First Word: ${result}`;
}
