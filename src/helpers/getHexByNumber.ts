import data from "../data/data.json"
export function getHexByNumber(number: Number) {
    return data.find((hex) => hex.number === number)
}