function GameSnake() {
    this.areaRowsLengthX = 10
    this.areaColumnsLengthY = 10
    this.gameContainer = null
    this.scoreContainer = null
    //here we declaared that when we call initialArea it call the function createEmptyArea and give her a two variable -areaRowsLenghtX and areaColumnsLenghtY 
    this.initialArea = this.createEmptyArea(this.areaRowsLengthX, this.areaColumnsLengthY)
    // var clearArea = JSON.parse(JSON.stringify(initialArea))  //i dont know yet if there should be a clear, first area or only one area for all
    this.area = JSON.parse(JSON.stringify(this.initialArea))
    // console.log(initialArea !== clearArea)   //it works because it says: true! (so it copy a old area but without references!!!! (changing area not changing a initialArea))
    this.initialPosition = (whatRow, whatColumn) => ({
        whatRow: whatRow,
        whatColumn: whatColumn
    })
    this.initialPositionSnakeHead = this.initialPosition(6, 6)
    this.initialPositionSnakeBody1 = this.initialPosition(7, 6)
    this.initialPositionSnakeBody2 = this.initialPosition(8, 6)
    //	this.initialPositionSnakeBody3 = this.initialPosition(9, 6)  //dodanie ogona
    this.initialPositionFood = this.initialPosition(3, 3)
    this.foodPosition = null
    this.score = null
    this.gameInterval = null
    this.container = document.body
    this.init()
}
GameSnake.prototype.createEmptyArea = function (areaRowsLengthX, areaColumnsLengthY) {
    return Array(areaRowsLengthX).fill('0').map(function (element, index, array) {
        return Array(areaColumnsLengthY).fill('0')
    })
}
GameSnake.prototype.init = function () {
    this.prepareLayout()
    this.addSnakeAndFoodToArea()
    this.render()
}
GameSnake.prototype.prepareLayout = function () {
    function makeGameContainer() {
        gameContainer = document.createElement('div')
        gameContainer.classList.add('game')
        return gameContainer
    }
    this.gameContainer = makeGameContainer()
    this.scoreContainer = document.createElement('div')
    this.container.appendChild(this.scoreContainer)
    this.container.appendChild(this.gameContainer)
}
//this function will be transform the table from js to HTML 
GameSnake.prototype.render = function () {
    this.gameContainer.innerHTML = ''

    this.area.forEach(areaRow => {
        const row = this.makeRows()

        areaRow.forEach(element => {
            const cell = this.makeCell(element)
            row.appendChild(cell)
        })

        this.gameContainer.appendChild(row)
    })
}

GameSnake.prototype.makeRows = () => {
    const row = document.createElement('div')
    row.classList.add('row')
    row.style.display = 'flex'
    return row
}

GameSnake.prototype.makeCell = (element) => {
    const GameSnakeElement = (creating) => () => {
        const element = document.createElement('div')
        element.classList.add('cell-' + creating)
        return element
    }

    const CellHeadSnake = GameSnakeElement('snake-head')
    const CellBodySnake = GameSnakeElement('snake-body')
    const CellFood = GameSnakeElement('food')
    const CellZero = GameSnakeElement('zero')

    if (element === '0') {
        return CellZero()
    } else if (element === 'H') {
        return CellHeadSnake()
    } else if (element === '1') {
        return CellBodySnake()
    } else if (element === 'F') {
        return CellFood()
    }

}

GameSnake.prototype.addSnakeAndFoodToArea = function () {
    this.area[this.initialPositionSnakeHead.whatRow][this.initialPositionSnakeHead.whatColumn] = 'H'
    this.area[this.initialPositionSnakeBody1.whatRow][this.initialPositionSnakeBody1.whatColumn] = '1'
    this.area[this.initialPositionSnakeBody2.whatRow][this.initialPositionSnakeBody2.whatColumn] = '1'
    //	this.area[this.initialPositionSnakeBody3.whatRow][this.initialPositionSnakeBody3.whatColumn] = '1'  //ogon snejka
    this.area[this.initialPositionFood.whatRow][this.initialPositionFood.whatColumn] = 'F'
}

const game1 = new GameSnake()

GameSnake.prototype.addNickUserToRankingList = function (scoreObject, ulRef) {
    const li = document.createElement('li')
    ulRef.appendChild(li)
    li.innerText = scoreObject.nick + ' : ' + scoreObject.score
}


GameSnake.prototype.addRankingElemnts = function () {
    const rankingContainer = document.createElement('div')
    const input = document.createElement('input')
    const button = document.createElement('button')
    const ul = document.createElement('ul')
    rankingContainer.style.position= 'fixed'
    rankingContainer.style.top= '50%'
    rankingContainer.style.left= '50%'
    rankingContainer.style.transform= 'translate(-50%, -50%)'
    rankingContainer.style.zIndex = '9999'
    rankingContainer.style.backgroundColor= 'white'
    rankingContainer.style.padding= '30px'

    const scoreBoard = JSON.parse(localStorage.getItem('osh-snake-game')) || []

    document.querySelector('body').appendChild(rankingContainer)
    rankingContainer.appendChild(input)
    rankingContainer.appendChild(button)
    rankingContainer.appendChild(ul)

    input.value = 'NICK'
    button.innerText = 'confirm'
    button.addEventListener(
        'click',
        () => {
            const newScoreBoard = scoreBoard.concat({
                    nick: input.value,
                    score: this.score
                })

            localStorage.setItem('osh-snake-game', JSON.stringify(newScoreBoard))

            input.remove()
            button.remove()

            newScoreBoard.forEach((el, i, arr) => {
                this.addNickUserToRankingList(el,ul)
             })
            //this.addNickUserToRankingList(input, ul)
        }
    )
}
game1.addRankingElemnts()
