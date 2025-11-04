import Header from "../components/Header";
import Headline from "../components/Headline";
import Arrow from "../components/Arrow";

function Hero() {
    return (
        <section className={"relative h-screen flex flex-col justify-center"}>
            <Header />

            <div className={"flex flex-1 items-center justify-center"}>
                <Headline />
            </div>

            <div>
                <Arrow />
            </div>
        </section>
    )
}

export default Hero;