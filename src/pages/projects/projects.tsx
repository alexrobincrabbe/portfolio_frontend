import BoojumContent from "./components/boojumContent";
import PortfolioContent from "./components/portfolioContent";
import HackathonsContent from "./components/hackathonsContent";
import CodeInstituteProjectsContent from "./components/codeInstituteProjectsContent";
export default function Projects() {
  return (
    <>
      <div className="md:p-10">
        <div className="project-card">
          <PortfolioContent />
        </div>
        <div className="project-card">
          <BoojumContent />
        </div>

        <div>
          <div className="project-card">
            <HackathonsContent/>
          </div>
        </div>
         <div>
          <div className="project-card">
            <CodeInstituteProjectsContent/>
          </div>
        </div>
      </div>
    </>
  );
}
