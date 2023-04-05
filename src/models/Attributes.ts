export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => { // K represents some kind of type
    //K extends keyof T => sets up a generic constraint; we are limiting the different types that K can be
    //(key: K) => argument; whatever argument we're passing in is going to be of type K
    //T[K] => return type annotation
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update); //take all the properties on update and the values 
                                    //and copy/paste them over into this data and override all the properties on this data
  }

  getAll(): T {
    return this.data;
  }
}
