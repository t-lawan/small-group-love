export class PageModel {
    id;
    title;
    content;
    type;
    constructor(id,title, type, content) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.type = type
    }
}