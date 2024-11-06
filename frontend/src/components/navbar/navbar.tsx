import { ROUTER_KEYS } from "../../shared/keys/routes";
import { Link } from 'react-router-dom';
import { home__image, item__container, navigation, spanText } from "./navbar.style";
import homeLogo from '../../assets/homelogo.png'
const Navbar = () => (
    <div css={navigation}>
        <Link to={ROUTER_KEYS.FIRST} css={item__container}>
            <div css={item__container}>
                <img src={homeLogo} alt="Home logo" css={home__image} />
                <span css={spanText}>First page</span>
            </div>
            </Link>

            <Link to={ROUTER_KEYS.SECOND} css={item__container}>
            <div css={item__container}>
                <img src={homeLogo} alt="Home logo" css={home__image} />
                <span css={spanText}>Second page</span>
            </div>
            </Link>

            <Link to={ROUTER_KEYS.THIRD} css={item__container}>
            <div css={item__container}>
                <img src={homeLogo} alt="Home logo" css={home__image} />
                <span css={spanText}>Third page</span>
            </div>
            </Link>
    </div>
  );
  
  export default Navbar;