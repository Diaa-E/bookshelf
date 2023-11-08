export function generateRandomNumber(upperBound, lowerBound)
{
    return Math.round((Math.random() * (upperBound - lowerBound + 1)) + lowerBound);
}