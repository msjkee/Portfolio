function Headline() {
    return (
        <div className={"flex items-center justify-between min-h-screen px-[10%]"}>
            <div className={"max-w-xl"}>
                <div>
                    <h2 className={"text-6xl font-light uppercase"}>Mikhail</h2>
                    <h1 className={"text-8xl font-bold uppercase"}>Stukalov</h1>
                    <p className={"text-2xl text-gray-300"}>Software Engineer</p>
                </div>

                <div className={"flex gap-8 justify-center items-center mt-[5%]"}>
                    <button type="button" className={"text-center rounded-full font-semibold px-[8%] py-[2.5%] border border-indigo-600" +
                        " hover:bg-gradient-to-r from-slate-900 to-indigo-600 shadow-lg shadow-indigo-600/30" +
                        " transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/50"}>
                        Resume
                    </button>
                    <button type="button" className={"text-center rounded-full font-semibold px-[8%] py-[2.5%] border border-indigo-600" +
                        " hover:bg-gradient-to-r from-slate-900 to-indigo-600 shadow-lg shadow-indigo-600/30" +
                        " transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/50"}>
                        Portfolio
                    </button>
                </div>
            </div>

            <div className={"w-1/2 flex justify-center"}>
                <img src="/images/me_headline.JPG" alt="My Image" className={"rounded-full w-128 h-128 object-cover"} />
            </div>
        </div>
    )
}

export default Headline;