import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
    eventsMap():{ [key: string]: () => void } {
    return {
       //we want to set up a click event handler to the button inside of our template
      'mouseenter:h1': this.onHeaderHover,
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick
    }
  }

  onSaveClick = (): void => {
    this.model.save()
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) { // type guard - if element,then...if null - nothing
      const name = input.value

      this.model.set({ name})
    }
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge()
  }
  /* onSetAgeClick(): void {
    this.model.setRandomAge() //error: cannot read properties of undefined
  } */

  onHeaderHover(): void {
    console.log('hovered')
  }

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}"/>
        <button class="set-name">Change name</button>
        <button class="set-age">Set random age</button>
        <button class="save-model">Save user </button>
      </div>
    `
  }
}

      //template element is a type of HTML element  <template></template>; 
      //turn some string into some actual HTML that can be stuck into the DOM