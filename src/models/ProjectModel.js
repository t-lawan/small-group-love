export class ProjectModel {
    id;
    title;
    isCurrent;
    start_date;
    end_date;
    content;
    url;
    participant;
    constructor(id,title, url, isCurrent, start_date, end_date, content, participant) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.isCurrent = isCurrent;
        this.start_date = start_date;
        this.end_date = end_date;
        this.content = content;
        this.participant = participant;
    }
}