/**
 * javascript pseudoclasses
 * @param {*} floor 
 */
// javascript new does nothing

function Build(floor) {
    this.what = "building";
    this.floor = floor;
} 

var myHouse = new Build(3);

// what it really looks like
{what: "building", floor: 3};

/*
*mystery of the new keyword, 
*all it does is return this behind the scene
// function Build(floor) {
    this = {}
//     this.what = "building";
//     this.floor = floor;
    return this;
// } 
what happens is that the function returns whatever this is bound to. if u return something else, the created state is inaccessible.
*/

/**
 * Prototypes allows method available to an instance of the function
 * The reason we make use of prototype is to prevent creation of that method on every new instance.
 */
Build.prototype.countFloors = function() {
    console.log("I have", this.floor, 'floors')
}

