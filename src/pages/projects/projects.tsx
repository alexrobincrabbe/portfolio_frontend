import BoojumContent from "./components/boojumContent";
import PortfolioContent from "./components/portfolioContent";
import HackathonsContent from "./components/hackathonsContent";
import CodeInstituteProjectsContent from "./components/codeInstituteProjectsContent";
export default function Projects() {
  return (
    <>
      <div className="md:p-10">
        <div className="project-card glowing-blue-border">
          <PortfolioContent />
        </div>
        <div className="project-card glowing-blue-border">
          <BoojumContent />
        </div>

        <div>
          <div className="project-card glowing-blue-border">
            <HackathonsContent />
          </div>
        </div>
        <div>
          <div
            className={`
          project-card glowing-blue-border
          `}
          >
            <CodeInstituteProjectsContent />
          </div>
        </div>
      </div>
    </>
  );
}
