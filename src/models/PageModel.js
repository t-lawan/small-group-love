export class PageModel {
    id;
    title;
    content;
    type;
    backgroundImage;
    constructor(id,title, type, content, backgroundImage = null) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.type = type;
        this.backgroundImage = backgroundImage;
    }
}