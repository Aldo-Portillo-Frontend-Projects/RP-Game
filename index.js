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
    diceRoll: [3, 1, 4],
}

const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: 10,
    diceRoll: [4],
}

function renderCharacter({elementId,name, avatar, health, diceRoll, diceCount}) {

    let diceHtml = diceRoll.map (die => {
        return `<div class="dice">${die}</div>`
    })
    //If problems later on destructure them here
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