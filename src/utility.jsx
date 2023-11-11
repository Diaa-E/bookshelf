export function generateRandomNumber(upperBound, lowerBound)
{
    return Math.round((Math.random() * (upperBound - lowerBound + 1)) + lowerBound);
}

export function generateRandomColorHSL(h = {upper: 359, lower: 0}, s = {upper: 100, lower: 0}, l = {upper: 100, lower: 0})
{
    return `hsl(${generateRandomNumber(h.upper, h.lower)}, ${generateRandomNumber(s.upper, s.lower)}%, ${generateRandomNumber(l.upper, l.lower)}%)`;
}