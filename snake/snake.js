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
GameSnake.prototype.render = function () { }
GameSnake.prototype.addSnakeAndFoodToArea = function () {
    this.area[this.initialPositionSnakeHead.whatRow][this.initialPositionSnakeHead.whatColumn] = 'H'
    this.area[this.initialPositionSnakeBody1.whatRow][this.initialPositionSnakeBody1.whatColumn] = '1'
    this.area[this.initialPositionSnakeBody2.whatRow][this.initialPositionSnakeBody2.whatColumn] = '1'
    this.area[this.initialPositionFood.whatRow][this.initialPositionFood.whatColumn] = 'F'
}
const game1 = new GameSnake()


 