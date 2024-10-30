import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Dashboard() {

    const user = {
        name: "Maria Eduarda",
        age: 20
    }

    return (
        <>
            <Header isLogged={true} user={user} />

            <main className="p-5">
                <h1 className="text-3xl">Dashboard</h1>

                <p>
                    We'll lose them! Here's where the fun begins! How long before you can make the jump to light speed? It'll take a few moments to get the coordinates from the navi-computer. Are you kidding? At the rate they're gaining. Traveling through hyperspace isn't like dusting crops, boy! Without precise calculations we could fly right through a star or bounce too close to a supernova and that'd end your trip real quick, wouldn't it? What's that flashing? We're losing our deflector shield. Go strap yourself in, I'm going to make the jump to light speed. We've entered the Alderaan system. Governor Tarkin, I should have expected to find you holding Vader's leash. I recognized your foul stench when I was brought on board.
                </p>

                <p>
                    I can't maneuver! Stay on target. We're too close. Stay on target! Loosen up! Gold Five to Red Leader. Lost Tiree, lost Dutch. I copy, Gold Five. They came from behind.. We've analyzed their attack, sir, and there is a danger.
                </p>

            </main>

            <Footer />
        </>
    )
}
