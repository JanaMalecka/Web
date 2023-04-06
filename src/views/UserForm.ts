export class UserForm {
  constructor(public parent: Element) {}

  eventsMap():{ [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick, //we want to set up a click event handler to the button inside of our template
      'mouseenter:h1': this.onHeaderHover,
    }
  }

  onHeaderHover(): void {
    console.log('hovered')
  }

  onButtonClick(): void {
    console.log('Hi there')
  }

  template(): string {
    return `
      <div>
        <h1>User form</h1>
        <input />
        <button>Click me</button>
      </div>
    `
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':') //S2015 syntax; 
                  //when we call the event Key, we're going to expect to get back an array with 2 elements inside of it
      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey])
      }) 
    }
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content)

    this.parent.append(templateElement.content); //reference to a DocumentFragment
  }
}

      //template element is a type of HTML element  <template></template>; 
      //turn some string into some actual HTML that can be stuck into the DOM