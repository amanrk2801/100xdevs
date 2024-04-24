import {once} from 'helpful-decorators'
class DateClass{
    private timeZone:string;
    constructor(timeZone: string){
        this.timeZone= timeZone;
    }
    @once
    getTime(){
        var d = new Date();
        console.log("hi from getTime");
        return d.getTime()
    }
    getMonth(){
        var d = new Date();
        return d.getMonth()
    }
    getTimezone(){
        return this.timeZone
    }
}

const dateObject = new DateClass("IND");
dateObject.getTime();
dateObject.getTime();
dateObject.getTime();
