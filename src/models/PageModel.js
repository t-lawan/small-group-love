export class PageModel {
    id;
    title;
    content;
    type;
    backgroundImage;
    showTitle;
    constructor(id,title, type, content, showTitle, backgroundImage = null) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.type = type;
        this.showTitle= showTitle;
        this.backgroundImage = backgroundImage;
    }
}