export class Category {
    name:string;
    id:number;
    parent:Category;

    constructor(id?:number, name?:string, parent?:Category){
        this.id = id;
        this.name = name;
        this.parent = parent;
    }
}
