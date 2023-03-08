function Footer(): JSX.Element {
    return(
        <div className= "flex shrink group bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 animate-gradient inset-4 py-1 px-9 border border-t-gray-500 border-b-0 border-r-0 border-l-0 flex gap-3">
            <img src="/favicon.svg" alt="" height={35} width={35} className="align-middle gap-9 scroll-smooth transition-all hover:animate-pulse duration-700" />

            <span className="group container font-mono text-center justify-center">
                Copyright 2023 heliac.dev<br/>Built with
                <span className="animate-pulse duration-75 mix-blend-plus-lighter"> ❤️ </span> 
                using <a href="https://reactjs.org/" className="underline underline-offset-2">React</a> and <a href="https://astro.build" className="underline underline-offset-2">Astro</a>
            </span>
        </div>
    );
}

export default Footer;
