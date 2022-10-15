const hero = {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/wizard.png",
    health: 10,
    diceCount: 3,
}

const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: 10,
    diceCount: 1,
}

function getDiceHtml (diceCount) {
    const diceRollArray = new Array(diceCount).fill(0).map(die => {
        return `<div class="dice">${Math.floor(Math.random() * 6 ) + 1}</div>`
    }).join('')


   

    return diceRollArray
}


function renderCharacter({elementId,name, avatar, health,  diceCount}) {
    // //If problems later on destructure them here

    let diceHtml = getDiceHtml(diceCount)
    document.getElementById(elementId).innerHTML = `
    <div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health} </b></p>
    <div class="dice-container">${diceHtml}</div>
    </div>
`
}

renderCharacter(hero)
renderCharacter(monster)