import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
  id?: number;
  name?: string;  //? means optional, it can have a name and an age
  age?: number;   // optional properties
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl)

  constructor(private data: UserProps) {}

  get(propName: string): (string | number) {
    return this.data[propName]
  }

  set(update: UserProps): void {
    Object.assign(this.data, update) //take all the properties on update and the values 
                                    //and copy/paste them over into this data and override all the properties on this data
  }
}