import moment from 'moment';


export class DateManager {

    static toMonthYearString = date => {
        return moment(date).format("MMM YYYY");
    }
}