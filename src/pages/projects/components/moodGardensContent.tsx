export default function MoodGardensContent() {
  return (
    <>
      <h1
        className="
      font-zen-loop
      text-plant-green
      text-4xl md:text-5xl
      "
      >
        Mood Gardens
      </h1>
      <p>
        Mood Gardens is a mindfulness app that transforms journal entries into
        symbolic garden illustrations. <br />
        Each picture is generated from the user’s
        own words, translating mood and emotion into colour, light and natural
        forms. Drawing on the language of colour psychology, natural symbolism
        and gentle metaphor, the app reflects feelings back like a mirror of a
        person’s day, helping users notice what nurtures their wellbeing over
        time.<br />
         Every garden can be saved, revisited and shared, creating a
        tangible record of emotional growth across the days and months.
        <br/><br />
        The front end is built with React and Tailwind CSS,
        while the back end uses Express.js and GraphQL, with Redis handling
        background workers to generate the gardens. Image creation is powered by
        the OpenAI API, allowing each garden to bloom uniquely from the user’s
        own words.
      </p>
      <br />
      <span className="glowing-blue">Frameworks</span>: Vite/React, Tailwind,
      Express.js, GraphQL, Prisma, BullMQ
      <br />
      <span className="glowing-blue">Languages</span>: Javascript, TypeScript
      <br />
      <span className="glowing-blue">Database</span>: Neon Database (Postgres
      SQL)
      <br />
      <span className="glowing-blue">Other</span>: GitHub, Heroku, OpenAI API
      <br />
      <p>
        <a
          href="https://mood-gardens-frontend.vercel.app/"
          target="_blank"
          className="ext-link"
        >
          Link to site
        </a>
        &nbsp; - &nbsp; Source code:&nbsp;
        <a
          className="ext-link"
          target="_blank"
          href="https://github.com/alexrobincrabbe/MoodGardens-Frontend"
        >
          Frontend
        </a>
        &nbsp;
        <a
          className="ext-link"
          target="_blank"
          href="https://github.com/alexrobincrabbe/MoodGardens-Backend"
        >
          Backend
        </a>
      </p>
    </>
  );
}
