// erlangCalculator.js
function calculateErlangC(availAgents, incomingCalls, avgCallDuration) {
    if (availAgents < 0 || incomingCalls < 0 || avgCallDuration < 0) {
        throw new Error('Input values must be non-negative.');
    }
    const trafficIntensity = incomingCalls * avgCallDuration;
    return (Math.pow(trafficIntensity, availAgents) / factorial(availAgents)) / 
           calculateProb(trafficIntensity, availAgents);
}

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

function calculateProb(trafficIntensity, availAgents) {
    let sum = 0;
    for (let k = 0; k <= availAgents; k++) {
        sum += Math.pow(trafficIntensity, k) / factorial(k);
    }
    return sum;
}

module.exports = { calculateErlangC };