export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex items-center"
          >
            Prime Assessoria Inteligente
          </a>
        </div>



        <div className="flex flex-col gap-2 bg-">
          <h3 className="font-bold text-lg">Siga-nos</h3>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.instagram.com/sst.prime"
              className="opacity-60 hover:opacity-100"
            >
              Instagram
            </a>
          </div>
          {/* <div>
            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/eduardo-gerhardt/"
              className="opacity-60 hover:opacity-100"
            >
              Linkedin
            </a>
          </div> */}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Sobre</h3>

          <div>
            <a
              rel="noreferrer noopener"
              href="#about"
              className="opacity-60 hover:opacity-100"
            >
              Sobre nós
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#services"
              className="opacity-60 hover:opacity-100"
            >
              Serviços
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2025 Prime, Assessoria Inteligente
        </h3>
      </section>
    </footer>
  );
};
