export function CapstoneContent() {
  return (
    <>
      <h2 className="text-yellow-500 text-3xl">AI social game player</h2>
      <p>
        My Digital Futures capstone project, built as a prototype for a AI game
         player to populate game rooms on sites like my Boojum Games site. 
         The Agent can choose to store memories based on conversations with players, 
         and recall memories for context when replying. It is capable of engaging in 
         a realtime chat with multiple players, choosing when to respond and commenting on the gamestate.
      </p>
      <span className="glowing-blue">Languages</span>:Python, Typescript
      <br />
      <span className="glowing-blue">Frameworks</span>: Langchain, Langgraph
      <br />
      <a
        href="https://github.com/alexrobincrabbe/capstone_backend"
        target="_blank"
        className="ext-link"
      >
        Source code
      </a>
      &nbsp;
      <a
        href="https://captstone-frontend.vercel.app/"
        target="_blank"
        className="ext-link"
      >
        Site
      </a>
    </>
  );
}

export function ESGContent() {
  return (
    <>
      <h2 className="text-yellow-500 text-3xl">ESG tracker</h2>
      <p>
       This app uses a webscraper of news articles, and a LLM classifier to rank the articles
         based on 15 ESG(Environmental Social Governance) metrics. The front end dashboard allows
         browsing of ESG scores of different companies adjusted over time, based on third party
         news articles. The app was built as a group project.
      </p>
      <span className="glowing-blue">Languages</span>:Python, Typescript
      <br />
      <span className="glowing-blue">Frameworks</span>: React, Flask
      <br />
      <a
        href="https://github.com/LuqmaanHak1m/value-stream-esg"
        target="_blank"
        className="ext-link"
      >
        Source code
      </a>
      &nbsp;
      <a
        href="https://esg-app-109086040760.europe-west2.run.app/"
        target="_blank"
        className="ext-link"
      >
        Site
      </a>
    </>
  );
}

export function ImageMatcherContent() {
  return (
    <>
      <h2 className="text-yellow-500 text-3xl">Image Matcher</h2>
      <p>
       A simple app built with google sheets. The backend matches the prompt in the first column to the
       closest matchinge image based on 100 images, using embeddings and cosine similarity.
      </p>
      <span className="glowing-blue">Languages</span>:Python
      <br />
      <span className="glowing-blue">Frameworks</span>: Google sheets, Flask
      <br />
      <a
        href="https://docs.google.com/spreadsheets/d/1mvqq2duCYybSjooU9OLnmQLq8KiNPy37forNgaSYDPs/edit"
        target="_blank"
        className="ext-link"
      >
        Site
      </a>
    </>
  );
}


