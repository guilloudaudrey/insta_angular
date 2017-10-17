export class Picture{
    id?:number;
    description:string;
    link:string;
    owner:number;
    likes:number[];

    constructor(description:string, link:string, owner:number, likes:number[] = [], id?:number){
this.description = description;
this.link = link;
this.owner = owner;
this.likes = likes;
    }
}