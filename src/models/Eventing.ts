type Callback = () => void //a type alias, empty function, function that has no arguments and no return value

export class Eventing {
  events: { [key: string]: Callback[]} = {} // when we don't know what properties this object is going to have 

  on = (eventName: string, callback: Callback): void => { //callback is going to be a function, receiving no arguments and returning no value 
    const handlers = this.events[eventName] || [] //when we first create our user and we look at this dot events and look up event name 
                                                  //that's going to give us undefined, then we'll fall back to assigning an empty array to handlers
    handlers.push(callback);

    this.events[eventName] = handlers
  } 

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName]

    if(!handlers || handlers.length === 0 ) {
      return;
    }

    handlers.forEach(callback => {
      callback();
    })
  }

}