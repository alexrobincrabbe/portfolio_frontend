export default function Projects() {
  return (
    <>
      <div className="p-10">
        <div className="project-card">
          <h1 className="font-bold">Portfolio</h1>
          <p>
            This Portolio was built with a Vite/React/Tailwind frontend deployed
            using Vercel. The backend which serves the AI chat was built with a
            FastAPI backend, deployed to Heroku.{" "}
          </p>
          <span className="text-blue-500">Frameworks</span>: Vite/React,
          FastAPI, Tailwind
          <br />
          <span className="text-blue-500">Languages</span>: Typescript,
          JavaScript, Python
          <br />
          <span className="text-blue-500">Other</span>: Vercel, Heroku, OpenAI
          API
          <p>
            The source code can be found here:&nbsp;
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
        </div>

        <div className="project-card">
          <h1 className="font-monoton">Boojum Games</h1>
          <p>
            Boojum Games is an on ongoing project that I started in October 2024
            after completing my Full-stack software development course.
          </p>
          <p>
            It is An online Multiplyer game with around 200 registered users and
            30-50 active users. The live game and chat uses web-sockets via the
            Django Channels framework, and RabbitMQ to manage to cache memory
            layer. I used Django Command scripts to automate many processes,
            including management of the tournamens, generating the gameboards,
            generating daily boards, daily puzzles, generating the game
            dictionary.
          </p>
          <p>
            I am also currently working on coverting the Django templates to a
            React frontend and converting my views to Django Rest APIs using the
            Django Rest Framework
          </p>
          <p>
            I have plans to eventually build a mobile app version using React
            Native, and eventually replace my Django views entirely with a
            GraphQL endpoint.
          </p>
          <span className="text-blue-500">Frameworks</span>: Bootstrap, Django,
          Django Channels
          <br />
          <span className="text-blue-500">Languages</span>: JavaScript, Python
          <br />
          <span className="text-blue-500">Database</span>: Neon Database
          (Postgres SQL)
          <br />
          <span className="text-blue-500">Other</span>: Github, Heroku,
          RabbitMQ, Google Cloud Console, MailGun, Heroku Scheduler, Papertrail
          <br />
          The source code is private.
        </div>

        <div>Hackathon Projects</div>
        <div>full-stack software development course portfolio project</div>
      </div>
    </>
  );
}
