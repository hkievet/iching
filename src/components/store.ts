import type { TrigramPair } from "src/types";
import { writable } from "svelte/store";
import hexagrams from "../data/data.json"

export const selectedLine = writable({
    hexagram: undefined,
    changedLine: undefined
})

export const trigrams = ['☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷'];
export const trigramMapping = {
    '☰': '888',
    '☱': '788',
    '☲': '878',
    '☳': '778',
    '☴': '887',
    '☵': '787',
    '☶': '877',
    '☷': '777'
};

// lookup trigram by "777" or "787" etc.,
export function lookupTrigramByValue(val: string) {
    return Object.keys(trigramMapping).find((k) => trigramMapping[k] === val)
}

export function lookupHexagramByTrigrams({ above, below }: TrigramPair) {
    return hexagrams.find((h) => h.trigramPair.above === above && h.trigramPair.below === below)
}
