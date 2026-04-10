// validator.js

/**
 * Validates input parameters for the Erlang C calculator.
 * @param {number} totalDailyCalls - The total daily calls.
 * @param {number} peakTrafficPercent - The peak traffic percentage.
 * @param {number} aht - The average handle time in minutes.
 * @param {number} targetSL - The target service level.
 * @param {number} targetTime - The target time in minutes.
 * @param {number} shrinkage - The shrinkage percentage.
 * @returns {string|null} - Returns an error message if validation fails, otherwise returns null.
 */
function validateInputs(totalDailyCalls, peakTrafficPercent, aht, targetSL, targetTime, shrinkage) {
    if (typeof totalDailyCalls !== 'number' || totalDailyCalls < 0) {
        return 'Error: totalDailyCalls must be a non-negative number.';
    }
    if (typeof peakTrafficPercent !== 'number' || peakTrafficPercent < 0 || peakTrafficPercent > 100) {
        return 'Error: peakTrafficPercent must be a number between 0 and 100.';
    }
    if (typeof aht !== 'number' || aht <= 0) {
        return 'Error: aht must be a positive number.';
    }
    if (typeof targetSL !== 'number' || targetSL < 0 || targetSL > 100) {
        return 'Error: targetSL must be a number between 0 and 100.';
    }
    if (typeof targetTime !== 'number' || targetTime <= 0) {
        return 'Error: targetTime must be a positive number.';
    }
    if (typeof shrinkage !== 'number' || shrinkage < 0 || shrinkage > 100) {
        return 'Error: shrinkage must be a number between 0 and 100.';
    }
    return null; // All inputs are valid
}

module.exports = { validateInputs };