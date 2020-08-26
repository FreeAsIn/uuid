/** UUID v4 utilizing the crypto API for randomness */
function v4() {
    // Create a string template for the UUID, without directly hard-coding it
    const uuidTemplate = `` + 1e7 + -1e3 + -4e3 + -8e3 + -1e11;
    // Replace all 0, 1, and 8 values in the template with a random character
    return uuidTemplate.replace(/[018]/g, characterReplacement);
}
/**
 * Get a random value based on the provided digit
 * @param digitAsString - digit from the template
 */
function characterReplacement(digitAsString) {
    const digit = +digitAsString, randomValue = generateSecureRandomValue();
    // Get a manipulated value by: digit XOR randomVal AND 15 RIGHT-SHIFT digit divided by 4
    const manipulatedValue = digit ^ randomValue & 15 >> digit / 4;
    // Return the hexadecimal representation
    return manipulatedValue.toString(16);
}
/** Get a cryptographically secure random value */
function generateSecureRandomValue() {
    const randomArray = new Uint8Array(1);
    /*
     * NodeJS Crypto doesn't support .getRandomValues()
     * Instead, use .randomBytes() to fill the array
     * Ignore the Typescript compiler error
     */
    //@ts-ignore - .randomBytes() doesn't exist on Window.crypto in a browser
    if (!!crypto.randomBytes)
        //@ts-ignore - .randomBytes() doesn't exist on Window.crypto in a browser
        randomArray[0] = crypto.randomBytes(1)[0];
    else
        // Fill the array
        crypto.getRandomValues(randomArray);
    // The array's only element is the value we want
    return randomArray[0];
}
export { v4, };
