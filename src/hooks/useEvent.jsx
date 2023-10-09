import { useState } from "react";
import shortid from "shortid";

const EVENT_INIT = {
    
}
const useEvent = () => {
    const [state, setState] = useState({ ...EVENT_INIT })
    const getEvent = (isArray) => {
        if (isArray) {
            return Object.values(state)
        }
        return state
    }

    const getEventsByClockID = (id) => {
        return Object.keys(state).filter(event => event.startsWith(id));
    }

    const addEvent = (eventInfo) => {
        eventInfo.id = shortid.generate()
        setState(pre => ({
            ...pre,
            [`${eventInfo.clockId}|${eventInfo.id}`]:eventInfo
        }))
        return state
    }
    return {
		getEvent,
		getEventsByClockID,
        addEvent,
        event: state
	};

};

export default useEvent;