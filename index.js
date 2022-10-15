// document.getElementById('hero').innerHTML = `
// <div class="character-card">
//     <h4 class="name"> Wizard </h4>
//     <img class="avatar" src="images/wizard.png"/>
//     <p class="health">health: <b> 60 </b></p>
//     <div class="dice-container"><div class="dice"> 6 </div></div>
// </div>    
// `
// document.getElementById('monster').innerHTML = `
// <div class="character-card">
//     <h4 class="name"> Orc </h4>
//     <img class="avatar" src="images/orc.png"/>
//     <p class="health">health: <b> 10 </b></p>
// <div class="dice-container"><div class="dice"> 4 </div></div>
// </div>
// `

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

function getDiceRollArray (diceCount) {
    let diceArray = []
    for (let i = 0; i < diceCount ; i++){
        diceArray.push(Math.floor(Math.random() * 6 ) + 1)
    }
    return diceArray
}  

function getDiceHtml (diceCount) {
    return getDiceRollArray(diceCount).map(die => {
        return `<div class="dice">${die}</div>`
    }).join('')
}

console.log(getDiceHtml(3))


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