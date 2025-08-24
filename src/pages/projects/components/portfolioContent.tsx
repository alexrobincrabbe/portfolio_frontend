export default function PortfolioContent() {
  return (
    <>
      <h1
        className="
      w-fit
      glowing-blue
      "
      >
        Portfolio
      </h1>
      <p>
        This portfolio brings together a Vite/React/Tailwind frontend deployed
        using Vercel, with an AI chat served by a FastAPI backend deployed on
        Heroku.
      </p>
      <br />
      <span className="glowing-blue">Frameworks</span>: Vite/React, FastAPI,
      Tailwind
      <br />
      <span className="glowing-blue">Languages</span>: Typescript, JavaScript,
      Python
      <br />
      <span className="glowing-blue">Other</span>: GitHub, Vercel, Heroku, OpenAI API
      <p>
        Source code:&nbsp;
        <a
          className="ext-link"
          target="_blank"
          href="https://github.com/alexrobincrabbe/portfolio_frontend"
        >
          Frontend
        </a>
        &nbsp;
        <a
          className="ext-link"
          target="_blank"
          href="https://github.com/alexrobincrabbe/portfolio_backend"
        >
          Backend
        </a>
      </p>
    </>
  );
}
