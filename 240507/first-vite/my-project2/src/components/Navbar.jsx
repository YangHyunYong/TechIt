import Button from "./Button";

const Navbar = () => {
    return (
        <nav className="hidden md:flex gap-4">
            {/* Button1 */}
            <Button name={"메뉴1"}></Button>
            {/* Button2 */}
            <Button name={"메뉴2"}></Button>
            {/* Button3 */}
            <Button name={"로그인"}></Button>
        </nav>
    );
}

export default Navbar;