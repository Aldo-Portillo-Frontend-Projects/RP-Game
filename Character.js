import {getDiceRollArray, getDicePlaceholderHtml} from './utils.js'

const getpercent = (remainingHealth, maximumHealth) => {
    return (remainingHealth * 100) / maximumHealth
}

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
        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${diceArray}
                </div>
            </div>`;
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

        console.log(getpercent(this.health, this.maxHealth))
    }
}

export default Character