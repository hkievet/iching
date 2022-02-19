export interface Hexagram {
    number: number
    name: Name
    trigramPair: TrigramPair
    judgement: string
    images: string
    lines: Line[]
}

export interface Name {
    chinese: string
    pinyin: string
    english: string
}

export interface TrigramPair {
    above: number
    below: number
}

export interface Line {
    position: number
    meaning: string
}


export type Trigram = 