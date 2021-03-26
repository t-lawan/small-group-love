export class ContentModel {
    id;
    title;
    images;
    text;
    isTextTranslucent;
    type;
    constructor(id,title, type, images, text, isTextTranslucent = false) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.images = images;
        this.text = text;
        this.isTextTranslucent = isTextTranslucent;
    }
}