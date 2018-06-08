export class Category {
    name:string;
    id:number;
    parent:Category;
    date_created:Date;

    constructor(id?:number, name?:string, parent?:Category, date_created?:Date){
        this.id = id;
        this.name = name;
        this.parent = parent;
        this.date_created = date_created;
    }
}
