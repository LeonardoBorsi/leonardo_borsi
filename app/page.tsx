import Contacts from "@/sections/contacts";
import Education from "@/sections/education";
import LandingPage from "@/sections/landing-page";
import WorkExperience from "@/sections/work-experience";

export default function Home() {
  return (
    <div className="pb-32">
      <LandingPage />
      <div className="space-y-72">
        <WorkExperience />
        <Education />
        <Contacts />
      </div>
    </div>
  );
}
