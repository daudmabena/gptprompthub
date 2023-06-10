import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const MenuLink = (props) => {
    return (
        <NavLink
            className="uppercase font-bold text-lg"
            to={props.href}
            aria-label={props.title}
            title={props.title}>
            {props.title}
        </NavLink>
    );
}

MenuLink.propTypes = {
    href: PropTypes.string,
    title: PropTypes.string
};
export default MenuLink;
