import CardTicker from "@/components/CardTicker";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Tickers() {

    const tickers = [
        {
            bolsa: "NASDAQ",
            codigo: "APPL",
            empresa: "Apple Inc",
            valor: 25080,
            variacao: 0.35,
            nAcoes: 40
        },

        {
            bolsa: "NASDAQ",
            codigo: "MSFT",
            empresa: "Microsoft Corp",
            valor: 50234,
            variacao: -1.5,
            nAcoes: 20
        },

        {
            bolsa: "NASDAQ",
            codigo: "META",
            empresa: "Meta Platforms Inc",
            valor: 43262,
            variacao: 2.3,
            nAcoes: 5
        },

        {
            bolsa: "NASDAQ",
            codigo: "GOOGL",
            empresa: "Alphabet Inc Class A",
            valor: 16615,
            variacao: -0.78,
            nAcoes: 5
        },

        {
            bolsa: "NASDAQ",
            codigo: "NVIDIA",
            empresa: "Meta Platforms Inc",
            valor: 43262,
            variacao: 2.3,
            nAcoes: 5
        }
    ]

    return (
        <>
            <Header isLogged={true} />

            <main className="p-5">
                <h1 className="text-3xl">Tickers</h1>
                <br></br>

                <div className="flex justify-start gap-12 flex-wrap" style={{marginLeft: "4%"}}>
                    <CardTicker tickers={tickers[0]} />
                    <CardTicker tickers={tickers[1]} />
                    <CardTicker tickers={tickers[2]} />
                    <CardTicker tickers={tickers[3]} />
                    <CardTicker tickers={tickers[4]} />
                </div>

            </main>

            <Footer />
        </>
    )
}
