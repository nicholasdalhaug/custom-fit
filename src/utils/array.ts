export const limitsToArray = (min: number, maxInclusive: number, step: number) => {
    let array: number[] = []
    const additional = (maxInclusive - min) % step === 0 ? 1 : 0;
    const nElements = (maxInclusive - min ) / step + additional;
    for(let i = 0; i < nElements; i++){
        array.push(min + i * step)
    }
    return array;
}
