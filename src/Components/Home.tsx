import {LastName} from './LastName';
import {Name} from './Name';
import {HomeStyle} from '../Styles/Home';
import {Title} from './Title';


export const Home: React.FC = ({}) => {
    return (
            <HomeStyle id="home">
                <Title />
                <Name />
                <LastName />
            </HomeStyle>
    )
}