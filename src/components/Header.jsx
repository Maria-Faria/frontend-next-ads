import { BsFileBarGraphFill as LogoIFFinance } from "react-icons/bs";
import { FaRegUserCircle as IconUser} from "react-icons/fa";

export default function Header({isLogged, user}) {
    return (
    <div className="flex bg-black h-14 dark:bg-neutral-900 items-center p-5 justify-between">
        <LogoIFFinance className="text-orange-700 text-4xl"/>
        {user && <p className="text-white">{user?.name} tem {user?.age} anos de idade</p>}
        {isLogged && <IconUser className="text-white text-3xl" />}
    </div>
    )
}