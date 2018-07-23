// (function () {

    function GameSnake() {
        this.areaRowsLengthX = 10
        this.areaColumnsLengthY = 10
        this.gameTickDuration = 1000
    
        this.container = document.body
        this.gameContainer = null
        this.scoreContainer = null
    
        this.area = this.createEmptyArea()
    
        this.snakeBody = [
            { x: 6, y: 7 },
            { x: 6, y: 8 },
            { x: 6, y: 9 }
        ]
        this.foodPosition = { x: 3, y: 3 }
        this.direction = { deltaY: -1, deltaX: 0 }
    
        this.score = 0
        this.gameIntervalId = null
    
        this.init()
    }
    
    GameSnake.prototype.createEmptyArea = function () {
        return Array(this.areaRowsLengthX).fill(1).map(() => {
            return Array(this.areaColumnsLengthY).fill(1)
        })
    }
    
    GameSnake.prototype.init = function () {
        this.prepareLayout()
        this.render()
        this.attachEventListeners()
        this.startGameInterval()
        this.placeFood()
    
        alert(`PRESS "enter" to START a game!`)
    }
    
    GameSnake.prototype.prepareLayout = function () {
        function makeGameContainer() {
            gameContainer = document.createElement('div')
            gameContainer.classList.add('game')
            return gameContainer
        }
        function makeScoreContainer() {
            scoreContainer = document.createElement('div')
            scoreContainer.classList.add('score')
    
            return scoreContainer
        }
        this.gameContainer = makeGameContainer()
        this.scoreContainer = makeScoreContainer()
        this.scoreContainer = document.createElement('div')
        this.container.appendChild(this.scoreContainer)
        this.container.appendChild(this.gameContainer)
    }
    
    GameSnake.prototype.placeFood = function () {
        this.area[this.foodPosition.y][this.foodPosition.x] = 'F'
    }
    
    GameSnake.prototype.placeNewFood = function () {
        this.foodPosition = this.getAvailabelPositionOfNewFood()
    
        this.placeFood()
    }
    
    GameSnake.prototype.getAvailabelPositionOfNewFood = function () {
        const newFoodPosition = {
            x: this.getRandomInt(0, this.areaRowsLengthX - 1),
            y: this.getRandomInt(0, this.areaColumnsLengthY - 1)
        }
    
        const ifFoodIsOnSnakeBody = this.snakeBody.filter(
            cell => cell.x === newFoodPosition.x && cell.y === newFoodPosition.y
        ).length
    
        return ifFoodIsOnSnakeBody ? this.getAvailabelPositionOfNewFood() : newFoodPosition
    }
    
    GameSnake.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    GameSnake.prototype.checkIfSnakeIsOnFood = function (newHeadPosition) {
        return newHeadPosition.x === this.foodPosition.x && newHeadPosition.y === this.foodPosition.y
    }
    
    GameSnake.prototype.placeSnake = function () {
        this.snakeBody.forEach(cellPosition => {
            this.area[cellPosition.y][cellPosition.x] = 0
        })
    }
    
    GameSnake.prototype.render = function () {
        this.gameContainer.innerHTML = ''
    
        this.area = this.createEmptyArea()
        this.placeFood()
        this.placeSnake()
    
        this.area.forEach((areaRow, y) => {
            const row = this.makeRows()
    
            areaRow.forEach((element, x) => {
                const cell = this.makeCell(element, y, x)
                row.appendChild(cell)
            })
    
            this.gameContainer.appendChild(row)
        })
    }
    
    GameSnake.prototype.makeRows = function () {
        const row = document.createElement('div')
        row.classList.add('row')
        row.style.display = 'flex'
        return row
    }
    
    GameSnake.prototype.makeCell = function (element, y, x) {
        const gameSnakeElement = (creating) => () => {
            const element = document.createElement('div')
            element.classList.add('cell-' + creating)
            return element
        }
    
        const cellHeadSnake = gameSnakeElement('snake-head')
        const cellBodySnake = gameSnakeElement('snake-body')
        const cellFood = gameSnakeElement('food')
        const cellZero = gameSnakeElement('zero')
    
        if (element === 1) {
            return cellZero()
        } else if (element === 0 && this.snakeBody[0].y === y && this.snakeBody[0].x === x) {
            return cellHeadSnake()
        } else if (element === 0) {
            return cellBodySnake()
        } else if (element === 'F') {
            return cellFood()
        }
    }
    
    GameSnake.prototype.move = function (newHeadPosition) {
        const bodyWithoutTail = this.snakeBody.slice(0, -1)
        const newSnakeBody = [newHeadPosition].concat(bodyWithoutTail)
    
        this.snakeBody = newSnakeBody
    
        this.render()
    }
    GameSnake.prototype.checkIfNewSnakeHeadIsOnFood = function (newHeadPosition) {
        if (this.foodPosition.x === newHeadPosition.x && this.foodPosition.y === newHeadPosition.y) {
            this.scoreUp()
            this.placeNewFood()
            this.snakeBody = [newHeadPosition].concat(this.snakeBody)
        }
    }
    
    GameSnake.prototype.checkIfMoveIsAvailable = function (y, x) {
        const currentHeadPosition = this.snakeBody[0]
        const newHeadPosition = {
            x: currentHeadPosition.x + x,
            y: currentHeadPosition.y + y,
        }
    
        if (this.area[newHeadPosition.y] && this.area[newHeadPosition.y][newHeadPosition.x]) {
            this.checkIfNewSnakeHeadIsOnFood(newHeadPosition)
            this.move(newHeadPosition)
        } else {
            this.endGame()
        }
    }
    
    GameSnake.prototype.attachEventListeners = function () {
        this.container.addEventListener(
            'keydown',
            event => {
    
                switch (event.key) {
                    case 'ArrowLeft':
                        this.direction = { deltaY: 0, deltaX: -1 }
                        event.preventDefault()
                        break
                    case 'ArrowUp':
                        this.direction = { deltaY: -1, deltaX: 0 }
                        event.preventDefault()
                        break
                    case 'ArrowRight':
                        this.direction = { deltaY: 0, deltaX: 1 }
                        event.preventDefault()
                        break
                    case 'ArrowDown':
                        this.direction = { deltaY: 1, deltaX: 0 }
                        event.preventDefault()
                        break
                }
            }
        )
    
        this.render()
    }
    
    GameSnake.prototype.startGameInterval = function () {
        this.gameIntervalId = setInterval(
            this.gameTick.bind(this),
            this.gameTickDuration
        )
    }
    
    GameSnake.prototype.gameTick = function () {
        this.checkIfMoveIsAvailable(this.direction.deltaY, this.direction.deltaX)
    }
    
    GameSnake.prototype.endGame = function () {
        clearInterval(this.gameIntervalId)
        this.addRankingElemnts()
        alert(`GAME OVER...\n Your final score is ${this.score}`)
    }
    
    GameSnake.prototype.scoreUp = function () {
        this.score += 1
        this.displayScore(this.score)
        if (this.score === 2) {
            this.levelUp(500)
        }
        else if (this.score === 4) {
            this.levelUp(250)
        }
    }
    
    GameSnake.prototype.levelUp = function (time) {
        clearInterval(this.gameIntervalId)
        this.gameTickDuration = time
        this.startGameInterval()
    }
    GameSnake.prototype.displayScore = function (score) {
        this.score = score || this.score
        this.scoreContainer.innerHTML = `Your current score is: ${this.score}`
    }
    
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
        rankingContainer.style.position = 'fixed'
        rankingContainer.style.top = '50%'
        rankingContainer.style.left = '50%'
        rankingContainer.style.transform = 'translate(-50%, -50%)'
        rankingContainer.style.zIndex = '9999'
        rankingContainer.style.backgroundColor = 'white'
        rankingContainer.style.padding = '30px'
    
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
                    this.addNickUserToRankingList(el, ul)
                })
                    // window.location = ''
                //this.addNickUserToRankingList(input, ul)
            }
        )
    }
    const game1 = new GameSnake()
    // })()