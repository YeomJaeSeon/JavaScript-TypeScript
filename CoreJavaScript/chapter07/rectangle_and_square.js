var Rectangle = function (width, height){
    this.width = width;
    this.height = height;
}

Rectangle.prototype.getArea = function(){
    return this.width * this.height
}

var rect = new Rectangle(3, 4)
console.log(rect.getArea())

// var Square = function (width){
//     this.width = width
// }
// Square.prototype.getArea = function(){
//     return this.width * this.width
// }

var Square = function (width){
    // this.width = width;
    // this.height = height
    Rectangle.call(this, width, width)
}
// Square.prototype.getArea = function (){
//     return this.width * this.height
// }

Square.prototype = new Rectangle()
var sq = new Square(5)
console.log(sq.getArea())