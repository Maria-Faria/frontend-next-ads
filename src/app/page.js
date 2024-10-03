import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image"; 

export default function Home() {
  return (
    <>
      <Header />

      <main className="p-5">
        <h1 className="text-3xl">Force Ipsum</h1>

        <Image 
          src={'/img/react.png'}
          width={500}
          height={500}
          alt="logo-react"
        />

        <p>
        Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah., This is a consular ship.
        </p>

        <p>
        Hang on back there. Red Six. Can you see Red Five? There's a heavy fire zone on this side. Red Five, where are you? I can't shake him! I'm on him, Luke! Hold on! Blast it! Wedge where are you? Thanks, Wedge. Good shooting, Wedge! Red Leader. This is Gold Leader. We're starting out attack run.
        </p>
      </main>

      <Footer />
    </>
  )
}
