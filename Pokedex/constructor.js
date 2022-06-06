function MakePizza(toppings,size,numOfSlices,sauce){
this.toppings = toppings
this.size = size
this.numOfSlices = numOfSlices
this.sauce = sauce

this.deliveryCheck = function deliveryCheck(){
    console.log("calculating")
}
this.burnMouth = function burnMouth(){
    console.log("Ouch!")
}
}


let pizza = new MakePizza(["spinach","Garlic"],"Large",8,"bbq")

