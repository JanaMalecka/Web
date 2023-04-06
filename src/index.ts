import { UserForm } from "./views/UserForm";

const userForm = new UserForm(
  document.getElementById('root')
)

userForm.render();

/* import { User } from "./models/User";

const collection = User.buildUserCollection()

collection.on('change', () => {
  console.log(collection)
})

collection.fetch() */

/* import { User } from "./models/User";

const user = User.buildUser({ id: 1});

user.on('change', () => {
  console.log(user)
})

user.fetch() */

//user.set({ name: 'New Name'})

//on is on function from the eventing class, we are getting back a reference to the method on the eventing class

/* user.on('change', () => { //the parentheses invoke function this.events.on
  console.log('user was changed')
}) */

//reminder on how 'this' works in JS
// const colors = {
//   color: 'red',
//   printColor() {
//     console.log(this.color) //this is equal to whatever is to the left of our function call printColor()
//   }
// }

// const printColor = colors.printColor;
// printColor() //there is nothing in left => undefined