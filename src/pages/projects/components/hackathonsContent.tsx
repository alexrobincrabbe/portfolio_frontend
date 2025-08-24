export default function HackathonsContent() {
  return (
    <>
      <h1 className="glowing-blue">Hackathon Projects</h1>
      <h2 className="text-yellow-500 text-3xl">AI-powered hackathon prototype with RAG and citations</h2>
      <p>
        Built for the <a href="https://chef-treff.de/" target="_blank" className="ext-link">
          Cheftreff
        </a> Hackathon in April 2025. This was an in-person
        event where I collaborated with a team of three to develop a simple AI
        application. My focus was on using LlamaIndex to generate the RAG and
        provide responses with citations.
      </p>
      <span className="glowing-blue">Frameworks</span>: Flask, LlamaIndex
      <br />
      <span className="glowing-blue">Languages</span>:Python
      <br />
      <span className="glowing-blue">Other</span>: OpenAI API
      <br />
      <a
        href="https://github.com/alexrobincrabbe/ai-hackathon-2025"
        target="_blank"
        className="ext-link"
      >
        Source code
      </a>
      <br /> <br />
      <h2 className="text-yellow-500 text-3xl">Healthcare AI assistant with speech recognition</h2>
      <p>
        I participated in the
        &nbsp;
        <a
          href="https://newsletter.genai.works/p/buildwithai-hackathon-2024-win-big-connect-globally-and-make-an-impact-4505"
          target="_blank"
          className="ext-link"
        >
        Build With AI
        </a> Hackathon in November 2024 as part
        of a team of eight, including three developers. We organised the team
        via Slack, held daily stand-ups and scheduled additional developer
        meetings over the four day event. My focus was on building the Django
        backend and connecting it to the React frontend through the Django REST
        Framework, as well as integrating speech recognition into the frontend.
        For expediency, I used Gitpod to share the development environment for
        our demo (see video link below).
      </p>
      <span className="glowing-blue">Frameworks</span>: Django, React, Langchain
      <br />
      <span className="glowing-blue">Languages</span>: Python, JavaScript,
      TypeScript
      <br />
      <span className="glowing-blue">Other</span>: OpenAI API, Gitpod
      <br />
      <a
        href="https://github.com/alexrobincrabbe/LunaCareAI"
        target="_blank"
        className="ext-link"
      >
        Source code
      </a>
      &nbsp;
      <a
        href="https://www.youtube.com/watch?v=YO0R75X8vH8&t=1s"
        target="_blank"
        className="ext-link"
      >
        video demo
      </a>
      <br />
      <br />
      <h2 className="text-yellow-500 text-3xl">Star Wars Fansite</h2>
      <p>
        An early project created for one of the Code Institute hackathons. My
        main focus was developing the Wiki page. Over the five day event, our
        team worked with a kanban board and held daily stand-ups. Through this
        project, I gained experience resolving merge conflicts on GitHub.
      </p>
      <span className="glowing-blue">Languages</span>: HTML, CSS, JavaScript
      <br />
      <span className="glowing-blue">Other</span>: GitHub, Agile
      <br />
      <a
        href="https://github.com/alexrobincrabbe/2405-hackathon-team1-StarWars"
        target="_blank"
        className="ext-link"
      >
        Source code
      </a>
      &nbsp;
      <a
        href="https://desislavanaydenova.github.io/2405-hackathon-team1-StarWars/quiz.html"
        target="_blank"
        className="ext-link"
      >
        Site
      </a>
      <br />
    </>
  );
}
