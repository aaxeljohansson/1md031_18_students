// import { Layout } from 'bootstrap-vue/es/components';
//
// Vue.use(Layout);

var lastOrder = 0;

var vm = new Vue({
//Here comes the optional elements of the Vue object
  el: "#vue_container",

  data: {
    headingtext: "Select burger",
    descriptivetext: "This is where you select your burger",
    burgers: [
      { name: "Burger 1", img: "https://cdn.therockpoolfiles.com/therockpoolfiles/wp-content/uploads/2017/01/27000212/bp-testing-1-1.jpg", steakGrade: "Rare", extras: "Bacon", dressing: "Chipotle Dressing", bread: "Brioche Bread", stock: 5, calories: 700 },
      { name: "Burger 2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPoiNDBHrh_1u1X0SSw3c4M5-Z7jTBc7T7UPsxX8qKUvEijwhc", steakGrade: "Medium Rare", extras: "Onion Rings", dressing: "BBQ Dressing", bread: "Brioche Bread", stock: 10, calories: 300 },
      { name: "Burger 3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQj5XVTVh5x9v_KcLgiEVRLXhLYo0YPH700-xhpSG296hM-nL", steakGrade: "Medium", extras: "Pickled Onions", dressing: "Regular Dressing", bread: "Three Kinds of Flour Bread", stock: 0, calories:600 },
      { name: "Burger 4", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPoiNDBHrh_1u1X0SSw3c4M5-Z7jTBc7T7UPsxX8qKUvEijwhc", steakGrade: "Well", extras: "Blue Cheese", dressing: "Chili Dressing", bread: "Brioche Bread", stock: 1, calories:1000 },
      { name: "Burger 5", img: "https://cdn.therockpoolfiles.com/therockpoolfiles/wp-content/uploads/2017/01/27000212/bp-testing-1-1.jpg", steakGrade: "Medium", extras: "Double Cheddar",	dressing: "Regular Dressing", bread: "Regular Bread", stock: 0, calories: 500 }
    ],

    pickedBurger: [],
    fullName: '',
    email: '',
    street: '',
    house: '',
    pickedGender: '',
    selectedPaymentMethod: '',

    customerInformationArray: {
      Burger: '',
      Name: '',
      Email: '',
      // Street: '',
      // House: '',
      Gender: '',
      Payment: ''
    },

    orders: {}
  },

  // created: function () {
  //  socket.on('initialize', function (data) {
  //    this.orders = data.orders;
  //  }.bind(this));
  //
  //    socket.on('currentQueue', function (data) {
  //      this.orders = data.orders;
  //    }.bind(this));
  //  },


  methods: {
    orderPlaced: function () {
      this.customerInformationArray.Burger = this.pickedBurger;
      this.customerInformationArray.Name = this.fullName;
      this.customerInformationArray.Email = this.email;
      // this.customerInformationArray.Street = this.street;
      // this.customerInformationArray.House = this.house;
      this.customerInformationArray.Gender = this.pickedGender;
      this.customerInformationArray.Payment = this.selectedPaymentMethod;
      this.addOrder();
      this.pickedBurger=[];
      this.fullName='';
      this.email='';
      this.pickedGender='';
      this.selectedPaymentMethod='';
    },

    getNext: function () {
       lastOrder = lastOrder +1
       return lastOrder;
     },

    addOrder: function (event) {
      socket.emit("addOrder", {
          orderId: this.getNext(),
          details: this.orders.details,
          orderItems: this.pickedBurger,
          customerInfo: [this.customerInformationArray.Name, this.customerInformationArray.Email, this.customerInformationArray.Gender, this.customerInformationArray.Payment]
      });
    },

    displayOrder: function (event) {
        this.orders = {
        details: {
          x: event.clientX-10 - event.currentTarget.getBoundingClientRect().left,
          y: event.clientY-10 - event.currentTarget.getBoundingClientRect().top
        }
        };
    }
  }

})
