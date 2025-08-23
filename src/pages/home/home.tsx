import Chat from "../home/components/Chat";
import profImg from "../../assets/images/portfolio_pic.webp";


 function Home() {
  return (
    <>
      <div className="flex flex-col p-10 h-full">
        <div className="flex flex-wrap justify-center items-center h-full">

          <div className="flex justify-center order-1 md:order-2 w-full md:w-3/5">
            <img
              className="w-96 h-96 rounded-full object-cover"
              src={profImg}
              alt="profile picture"
            />
          </div>

          <div className="order-3 md:order-1 w-full">
            <p className="text-2xl">
               Originally from England, I relocated to Germany in 2010. 
               I earned a Master’s degree in Physics in 2023, during which I gained substantial experience with programming, 
               particularly using MATLAB for my thesis work. 
               This experience lit the spark for a deeper dive into software development, 
               so after graduating I pivoted into software development. I completed an intensive full-stack development course in 2024. 
               I’ve since poured energy into a passion project: a multiplayer online word game platform that blends creativity with 
               technical challenge. It’s a project that I am excited to expand. 
               The site has attracted players from across the world and has a vibrant user community.
            </p>
          </div>

          <div className="p-10 w-full flex flex-col flex-1 justify-start items-center md:w-2/5 order-1 md:order-3">
            <p className="
            text-2xl
            text-center 
            py-3 md:p-5 
            glowing-blue
            ">
              Ask this AI about my background, skills and projects.
            </p>
            <Chat />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Home;