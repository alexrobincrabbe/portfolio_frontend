export default function PortfolioContent() {
  return (
    <>
      <h1 className="font-bold">Portfolio</h1>
      <p>
        This Portolio was built with a Vite/React/Tailwind frontend deployed
        using Vercel. The backend which serves the AI chat was built with a
        FastAPI backend, deployed to Heroku.{" "}
      </p>
      <span className="text-color-1">Frameworks</span>: Vite/React, FastAPI,
      Tailwind
      <br />
      <span className="text-color-1">Languages</span>: Typescript, JavaScript,
      Python
      <br />
      <span className="text-color-1">Other</span>: Vercel, Heroku, OpenAI API
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
