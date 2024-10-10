import { BsFileBarGraphFill as LogoIFFinance } from "react-icons/bs";
import { FaRegUserCircle as IconUser } from "react-icons/fa";

export default function CardTicker({tickers}) {
    return (
        tickers ?
            <div style={card_ticker}>

                <header className="flex justify-around items-center" style={{marginBottom: 20, fontSize: 12}}>
                    <h2><span style={{fontWeight: 600}}>{tickers.bolsa}</span> {tickers.codigo}</h2>
                    <h1 style={{fontSize: 14}}>{tickers.empresa}</h1>
                </header>

                <main className="flex justify-between items-center" style={{marginTop: "17%"}}>
                    <p style={{fontSize: 25}}>R${(tickers.valor/100).toFixed(2).replace('.', ',')}</p>

                    <span className={tickers.variacao < 0 ? 'text-red-700' : 'text-green-500'} style={{fontWeight: 600}}>{tickers.variacao < 0 ? '▼' : '▲'} {tickers.variacao}%</span>
                </main>

                <footer className="flex justify-between" style={{marginTop: "17%"}}>
                    <div>
                        <p style={style}>{tickers.nAcoes}</p>
                        <span>Ações</span>
                    </div>


                    <div>
                        <p style={style}>R${(tickers.nAcoes * (tickers.valor / 100)).toFixed(2).replace('.', ',')}</p>
                        <span>Posição</span>
                    </div>

                </footer>
            </div>

        : null
    )
}

const style = {
    marginBottom: 5,
    fontWeight: 600
}

const card_ticker = {
    width: "350px",
    height: "280px",
    backgroundColor: "gray",
    borderRadius: 20,
    marginBottom: 5,
    fontFamily: 'Lucida Sans Unicode',
    position: "relative",
    padding: 15
}