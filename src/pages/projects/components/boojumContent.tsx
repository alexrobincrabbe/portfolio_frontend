export default function BoojumContent() {
  return (
    <>
      <h1
        className="
      font-monoton
      text-3xl md:text-4xl
      "
      >
        <span className="text-bj-pink">B</span>
        <span className="text-bj-green">o</span>
        <span className="text-bj-pink">o</span>
        <span className="text-bj-green">j</span>
        <span className="text-bj-pink">u</span>
        <span className="text-bj-green">m</span>
        &nbsp;&nbsp;
        <span className="text-bj-pink">G</span>
        <span className="text-bj-green">a</span>
        <span className="text-bj-pink">m</span>
        <span className="text-bj-green">e</span>
        <span className="text-bj-pink">s</span>
      </h1>
      <p>
        Boojum Games is an ongoing project I launched in October 2024, shortly
        after completing my Full-Stack Software Development course. It is an
        online multiplayer game with around 200 registered users and 30-50
        active players. The live gameplay and chat are powered by web sockets
        through Django Channels, with RabbitMQ handling the cache memory layer.
        I have also developed Django command scripts to automate a wide range of
        processes, including tournament management, gameboard generation, daily
        boards and puzzles and the creation of the game dictionary.
      </p>
      <p>
        Currently, I am working on migrating the Django templates to a React
        frontend and converting my views into Django REST APIs using the Django
        REST Framework. Looking ahead, I plan to develop a mobile app version
        with React Native and to replace the Django views entirely with a
        GraphQL endpoint.
      </p>
      <br />
      <span className="glowing-blue">Frameworks</span>: Bootstrap, Django,
      Django Channels
      <br />
      <span className="glowing-blue">Languages</span>: JavaScript, Python
      <br />
      <span className="glowing-blue">Database</span>: Neon Database (Postgres
      SQL)
      <br />
      <span className="glowing-blue">Other</span>: GitHub, Heroku, RabbitMQ,
      Google Cloud Console, MailGun, Heroku Scheduler, Papertrail
      <br />
      <a
        href="https://boojumgames.com"
        target="_blank"
        className="text-bj-yellow ext-link"
      >
        Link to site
      </a>
      <br />
      <br />
      <span className="italic">The source code is Top Secret.</span>
    </>
  );
}
