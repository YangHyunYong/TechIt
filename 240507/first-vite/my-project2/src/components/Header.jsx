import Button from "./Button";
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
            <Button name="..." isMoreButton={true}></Button>
        </header>
    )
};

export default Header;