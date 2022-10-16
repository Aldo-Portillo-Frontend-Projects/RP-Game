import characterData from "./data.js"
import  Character  from "./Character.js"

let monstersArray = ["orc", "goblin", "demon"];

function getNewMonster () {
    const nextMonsterData = characterData[monstersArray.shift()]

    return nextMonsterData ? new Character(nextMonsterData) : {}
}


function render () {
    document.getElementById('hero').innerHTML =  wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()   
}

function endGame(){
    let endMessage = wizard.health === 0 && monster.health === 0 ? "No victors - all creatures are dead" : wizard.health > 0 ? "The Wizard Wins" : `The ${monster.name} is Victorious`;

    const endEmoji = wizard.health === 0 && monster.health === 0 ? "☠️" : wizard.health > 0 ? "🔮" : "☠️";
    console.log(endEmoji)

    document.body.innerHTML = `
    <div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>` 
}
function attack () {
    wizard.getDiceHtml();
    monster.getDiceHtml();
    wizard.takeDamage(monster.currentDiceScore);
    monster.takeDamage(wizard.currentDiceScore);
    if (wizard.dead || monster.dead ) {
        endGame()
    }
    render()
}


document.getElementById('attack-button').addEventListener('click', attack)

const wizard = new Character(characterData.hero)
const monster = getNewMonster()

render()