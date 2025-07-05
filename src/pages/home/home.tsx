import Chat from "../home/components/Chat";
import profImg from "../../assets/images/portfolio_pic.png";

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap p-10 flex justify-center items-center">
        <div className="w-full md:w-1/3" >
          <img
            className="w-96 h-96 rounded-full object-cover"
            src={profImg}
            alt="profile picture"
          />
        </div>
        <div className="w-full md:w-2/3">
          <p className="p-10">
            I am Alex, a full-stack software developer. I have experience
            building full-stack websites with the Django framework. I have also
            built react front ends using the Djano Rest Framework as well as
            FastAPI. Bio: I am english born, and moved to Germany in 2010. I
            completed a masters degree in phyics in 2023, and after graduating
            decided to transition into software development, after doing a lot
            of programming with Matlab during my master thesis. I completed a
            6-month full-stack software development course in 2024. After
            completing my course, I began working on an online multiplayer game,
            which is still a work in progress.
          </p>
        </div>
      </div>
      <div>
        <p className="p-10">
          You can ask anything about me and my experience using this AI chat
          interface:
        </p>
        <Chat />
      </div>
    </>
  );
}
