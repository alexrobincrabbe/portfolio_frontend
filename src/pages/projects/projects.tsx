import BoojumContent from "./components/boojumContent";
import PortfolioContent from "./components/portfolioContent";
import HackathonsContent from "./components/hackathonsContent";
import MoodGardensContent from "./components/moodGardensContent";
import {
  HowToBuildATreeHouseContent,
  BoopBallContent,
  MonstoryumContent,
  WordwellContent,
  DiagnosticToolContent,
} from "./components/codeInstituteProjectsContent";
import HoverVideoCard from "./components/hoverVideoCard";
import testVideo from "../../assets/videos/test.mov";
import moodGardensVideo from "../../assets/videos/MoodGardens.mov"

export default function Projects() {
  return (
    <>
      <div className="md:p-10">
        <HoverVideoCard videoSrc="">
          <PortfolioContent />
        </HoverVideoCard>
         <HoverVideoCard videoSrc={moodGardensVideo}>
          <MoodGardensContent />
        </HoverVideoCard>
        <HoverVideoCard videoSrc={testVideo}>
          <BoojumContent />
        </HoverVideoCard>
        <h1 className="bg-background-dark w-full text-center p-2 md:text-7xl glowing-blue">
          Code Institute Projects
        </h1>
        <HoverVideoCard videoSrc="">
          <HowToBuildATreeHouseContent />
        </HoverVideoCard>
        <HoverVideoCard videoSrc="">
          <BoopBallContent />
        </HoverVideoCard>
        <HoverVideoCard videoSrc="">
          <MonstoryumContent />
        </HoverVideoCard>
        <HoverVideoCard videoSrc="">
          <WordwellContent />
        </HoverVideoCard>
        <HoverVideoCard videoSrc="">
          <DiagnosticToolContent />
        </HoverVideoCard>
        <HoverVideoCard videoSrc="">
          <HackathonsContent />
        </HoverVideoCard>
      </div>
    </>
  );
}
