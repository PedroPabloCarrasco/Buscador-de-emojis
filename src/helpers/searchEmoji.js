import emojiList from "./emojiList.json"

 export const searchEmoji = (value) => {

    const response = [];
    emojiList.map(item => {
        if (item.keywords.includes(value)){
            response.push(item);

        }
    })
    return response.slice(0, 24);

 }