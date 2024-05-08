import ButtonOther from "./ButtonOther";
import Logo from "./Logo";
import NavBar from "./Navbar";

const Header = () => {
    return (
        <header className="bg-blue-100 px-2 py-4 flex justify-between">
            {/* Logo */}
            <Logo></Logo>
            {/* NavBar */}
            <NavBar></NavBar>
            {/* ButtonMore */}
            <ButtonOther></ButtonOther>
        </header>
    )
};

export default Header;