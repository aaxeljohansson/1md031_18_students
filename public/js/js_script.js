function MenuItem(na, sg, ex, dr, br, st, ca) {
    this.name = na;
    this.steakGrade = sg;
    this.extras = ex;
    this.dressing = dr;
    this.bread = br;
    this.stock = st;
    this.calories = ca;
    this.selection = function() {
        return this.name + ' ' + this.steakGrade + ' ' + this.extras + ' ' + this.dressing + ' ' + this.bread + ' ' + this.stock + ' ' + this.ca;
    };
}

var burger1 = new MenuItem('Burger 1', 'Rare', 'Bacon', 'Chipotle Dressing', 'Brioche Bread', 5, 500)
var burger2 = new MenuItem('Burger 2', 'Medium Rare', 'Onion Rings', 'BBQ Dressing', 'Gluten-Free Corn Bread', 10, 600)
var burger3 = new MenuItem('Burger 3', 'Medium', 'Pickled Onions', 'Regular Dressing', 'Three Kinds of Flour Bread', 0, 200)
var burger4 = new MenuItem('Burger 4', 'Well', 'Blue Cheese', 'Chili Sauce', 'Brioche Bread', 3, 400)
var burger5 = new MenuItem('Burger 5', 'Medium', 'Double Cheddar', 'Regular Dressing', 'Regular Bread', 0, 350)

var burgers = [burger1, burger2, burger3, burger4, burger5];

// for (burger in burgers) {
//
// }

// var click1 = document.getElementById('burger1pic');
//
// click1.onclick = function(){
//   console.log( bur1.selection() );
// };
//
// document.getElementById('burger2pic').onclick = function(){
//   console.log( bur2.selection() );
// };
//
// document.getElementById('burger3pic').onclick = function(){
//   console.log( bur3.selection() );
// };
