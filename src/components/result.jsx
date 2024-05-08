import {searchEmoji} from "../helpers/searchEmoji";
import Item from "./item";
const Result = ({ valueEmoji}) => {

    const arrayEmojis = searchEmoji(valueEmoji);

    return ( 
        <section className="container results">
            {
               arrayEmojis && arrayEmojis.map(item =>(
                <Item
                key={item.title}
                title={item.title}
                emoji={item.symbol}
                
                
                />
               ) )
            }

        </section>
     );
}
 
export default Result;