import { BsFileBarGraphFill as LogoIFFinance } from "react-icons/bs";
import { FaRegUserCircle as IconUser} from "react-icons/fa";
import { NavBar } from "../components/NavBar";
import Logo from "../components/Logo";

export default function Header() {
    return (
    <div className="flex bg-black h-14 dark:bg-neutral-900 items-center p-5 justify-between">
        <Logo />
        <NavBar />
    </div>
    )
}