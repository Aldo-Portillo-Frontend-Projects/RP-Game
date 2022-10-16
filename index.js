import characterData from "./data.js"
import  Character  from "./Character.js"

let monstersArray = ["orc", "goblin", "demon"];

function getNewMonster () { 
        const nextMonsterData = characterData[monstersArray.shift()]

        return nextMonsterData ? new Character(nextMonsterData) : {}
    
}

let activeButton = true; 


function render () {
    document.getElementById('hero').innerHTML =  wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()   
}

function endGame(){
    activeButton = false
    setTimeout(()=> {
        let endMessage = wizard.health === 0 && monster.health === 0 ? "No victors - all creatures are dead" : wizard.health > 0 ? "The Wizard Wins" : `The ${monster.name} is Victorious`;
    
        const endEmoji = wizard.health === 0 && monster.health === 0 ? "☠️" : wizard.health > 0 ? "🔮" : "☠️";
        console.log(endEmoji)
    
        document.body.innerHTML = `
        <div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>` 

        activeButton = true
    },1000)
}
function attack () {
    if(activeButton){
        wizard.getDiceHtml();
        monster.getDiceHtml();
        wizard.takeDamage(monster.currentDiceScore);
        monster.takeDamage(wizard.currentDiceScore);
        if ( wizard.dead ) {
            endGame() 
        } else if (monster.dead){
            if (monstersArray.length > 0) {
                activeButton = false
               setTimeout(()=> {
                monster = getNewMonster()
                activeButton = true
                render()
               }, 1000) 
            } else {
                endGame()
            }
        }
        render()

    }
}


document.getElementById('attack-button').addEventListener('click', attack)

const wizard = new Character(characterData.hero)
let monster = getNewMonster()

render()