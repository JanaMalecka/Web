import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";

const users = new Collection('http://localhost:3000/users', 
  (json: UserProps) => {
    return User.buildUser(json);
  })

  users.on('change', () => {
    const root = document.getElementById('root');

    if (root) {
      new UserList(root, users).render();
    }
  })

  users.fetch();

/* import { UserEdit } from "./views/UserEdit";
import { User } from "./models/User";

const user = User.buildUser({ name: 'NAME', age: 20});

const root = document.getElementById('root')
if (root) {
  const userEdit = new UserEdit(root, user);

  userEdit.render();

  console.log(userEdit)
} else {
  throw new Error('Root element not found')
} 
 */
/* import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const user = User.buildUser({ name: 'NAME', age: 20});

const root = document.getElementById('root')
if (root) {
  const userForm = new UserForm(root, user);

  userForm.render();
} else {
  throw new Error('Root element not found')
} */

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