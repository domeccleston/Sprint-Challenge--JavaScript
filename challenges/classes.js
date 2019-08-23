// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


/* class CuboidMaker {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume() {
        return `volume: ${this.length * this.width * this.height}`;
    }
    surfaceArea() {
        return `surface area: ${ 2 * (this.length * this.width + this.length * this.height + this.width * this.height)}`;
    }
} */
 
  let cuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
    console.log(cuboid.volume()); // 100
    console.log(cuboid.surfaceArea()); // 130

    let cubeNum = num => num * num * num;
    let validateCube = (height, width, length) => { return (height === width && width == length) }
  
  class CubeMaker extends CuboidMaker {
      constructor(length, width, height) {
          super(length, width, height);
          this.validCube = validateCube(this.height, this.width, this.length);
      }
      volume() {
          if (this.validCube) {
            return `volume: ${cubeNum(this.height)}`
          }
          else {
            return `cube parameters must be equal`;
        }
      }
      surfaceArea() {
          if (this.validCube) {
            return `surface area: ${6 * (this.height * this.height)}`
          }
          else {
              return `cube parameters must be equal`;
          }
      }

  }

let cube = new CubeMaker(4, 4, 4)
let notCube = new CubeMaker(5, 4, 3)

console.log(cube.height)
console.log(cube.volume())
console.log(cube.surfaceArea())
console.log(cube.validCube);
console.log(notCube.volume());