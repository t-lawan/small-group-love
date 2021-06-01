export class ProjectModel {
    id;
    title;
    isCurrent;
    start_date;
    end_date;
    content;
    url;
    participant;
    page;
    pages;
    constructor(id,title, url, isCurrent, start_date, end_date, content, participant, page, pages) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.isCurrent = isCurrent;
        this.start_date = start_date;
        this.end_date = end_date;
        this.content = content;
        this.participant = participant;
        this.page = page;
        this.pages = pages;
    }
}