import profile from "../assets/merounded.png";

export default function Home() {
  return (
    <>
      <header>
        <p className="text-center text-sm font-bold sm:text-3xl">
          Hi, my name is{" "}
          <span className="text-sm text-h1TXT underline sm:text-5xl">
            Saar Paz.
          </span>
        </p>
      </header>
      <section className="flex justify-evenly text-justify align-middle w-auto max-h-min mx-20 mt-5 border-8 border-onPrimaryBg p-10 gap-10 overflow-auto max-xl:flex-col max-xl:items-center sm:w-auto">
        <img
          className="h-auto w-96 rounded-full object-contain"
          src={profile}
          alt="profile picture"
        />
        <p className="w-auto text-sm self-center	max-h-96 break-words whitespace-pre-wrap sm:text-xl">
          Enthusiastic web developer and problem solver. Certified software
          engineer from the IDF. Skilled in Javascript ,TypeScript, React,
          Node.js, CSS, HTML, ECMAScript, Redux, mobx, Python and more.
          Experience in functional, OOP, State-oriented programming. Working
          today as a full stack software engineer on a React-Node.js based
          online website editor. Fast learner, autodidact, passionate for
          knowledge and analytical thinking. People’s person.
          <br />
          <br />I also have an academic background, as I hold a Master's degree
          in Philosophy of Language from Tel Aviv University.
        </p>
      </section>
    </>
  );
}
