import {getDiceRollArray, getDicePlaceholderHtml, getPercent} from './utils.js'



function Character(data) {
    Object.assign(this, data),

    this.diceArray = getDicePlaceholderHtml(this.diceCount),

    this.maxHealth = this.health,

    this.getDiceHtml = function () {
        this.currentDiceScore = getDiceRollArray(this.diceCount)

        this.diceArray = this.currentDiceScore.map( num => {
            return `<div class="dice">${num}</div>` 
        }).join('')
    }

    this.getCharacterHtml = function () {
        const { name, avatar, health, diceArray } = this;
        const healthBar = this.getHealthBatHtml();
        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                ${healthBar}
                <div class="dice-container">
                    ${diceArray}
                </div>
            </div>`;
    }

    this.getHealthBatHtml = function () {
        const percent = getPercent(this.health, this.maxHealth);

        return `
        <div class="health-bar-outer">
            <div class="health-bar-inner ${percent < 25 && "danger"} " 
                style="width: ${percent}%;">
            </div>
        </div>
        `
    }

    this.takeDamage = function (attackScoreArray) {

        const totalAttackScore = attackScoreArray.reduce((tot, cur)=> {
            return tot + cur
        })

        this.health -= totalAttackScore

        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
    }
}

export default Character