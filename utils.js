function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(() => {
        return Math.floor(Math.random() * 6) + 1
    })
}


function getDicePlaceholderHtml (diceCount) {
    return new Array(diceCount).fill(0).map(()=> {
        return `<div class="placeholder-dice"></div>`
    }).join('')
}

const getPercent = (remainingHealth, maximumHealth) => {
    return (remainingHealth * 100) / maximumHealth
}


export {getDiceRollArray, getDicePlaceholderHtml, getPercent}