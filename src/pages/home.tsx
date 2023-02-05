import profile from "../assets/me.png"


export default function Home() {
    return (
        <>
            <header>
                <p className="text-center font-bold text-3xl">Hi, my name is <span className="text-5xl text-zinc-500">Saar Paz.</span>
            </p>
            </header>
            <section className="flex justify-evenly text-justify align-middle max-h-min mx-20 mt-5 border-8 border-onPrimaryBg p-10 gap-10 max-xl:flex-col max-xl:items-center">
                <img className="h-96 w-96 rounded-full object-contain" src={profile} alt="profile picture"/>
                <p className="w-3/4 text-xl self-center	max-h-96 break-words">
                    Enthusiastic web developer and problem solver. Certified programmer and PC technician.
                    Skilled in Javascript, ECMAScript ,TypeScript, React, Node.js, Redux, CSS, HTML, Python...
                    Experience in functional, OOP, State-oriented programming.
                    Working today as a web developer on a React-Node.js based online website editor.
                    Fast learner, autodidact, passionate for knowledge and analytical thinking. People’s person.
                    Has past in Solidity, Arduino and Python projects.
                </p>
            </section>
        </>
    )
}