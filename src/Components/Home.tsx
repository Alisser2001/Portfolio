import LastName from './LastName';
import Name from './Name';
import {HomeStyle} from '../Styles/Home';
import Title from './Title';
import NavBar from './NavBar';


export default function Home() {
    return (
            <HomeStyle>
                <NavBar />
                <Title />
                <Name />
                <LastName />
            </HomeStyle>
    )
}