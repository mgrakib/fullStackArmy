import { milliseconds } from "date-fns";

/**
 * 
 * @param {object} info 
 * 
 */
export const timeConvert = (info) => {

    
    // get current data 
    const nowTime = new Date();

    // calculate total time in milliseconds
    const timeCalculate = new Date(nowTime.getTime() + info.offset * 60 * 1000);

    return timeCalculate.toISOString();
}