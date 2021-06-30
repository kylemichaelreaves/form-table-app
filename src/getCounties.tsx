import {counties} from './counties';
import {states} from './states';

function getCounties(state: string) {
    if (!states.includes(state)) {
        return "Please choose a valid territory"
    } else {
        const filtered = counties.filter((obj: any) => obj.state === state);
        return filtered.map((obj: any) => <option key={obj.county}>{obj.county}</option>);
    }
}

export default getCounties;