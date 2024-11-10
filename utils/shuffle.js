
import getBolas from "./getBolas";

export default function shuffle({ min, max }) {

    let array = getBolas({ min, max })
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }


    //array.splice(1, 1, 18)

    return array;

}