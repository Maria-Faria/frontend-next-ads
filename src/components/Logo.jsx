import { BsFileBarGraphFill as LogoIFFinance } from "react-icons/bs";
import '../components/Logo.css'; //CSS externo

export default function Logo() {
  return (
    <div style={style.container}>
        <LogoIFFinance className="text-orange-700 text-4xl margintop"/>
        <h1><span style={style.span}>IF</span>Finance</h1>
    </div>
  )
}

//CSS in JS
const style = {
    container: {
        display: "flex",
        alignItems: "center",
        gap: 5,
        fontSize: 18,
        justifyContent: "center"
    },

    span: {
        color: "#F57C00",
        fontWeight: "bold"
    }
}