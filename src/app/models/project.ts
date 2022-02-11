export class Project {
    constructor(
        public name: string,
        public id: string | number,
        public imgUrl:string,
        public description: string,
        public pageLink:string,
        public codeLink:string
    ) { }
}
