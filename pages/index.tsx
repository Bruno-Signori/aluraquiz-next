import db from '../db.json';
import FooterAlura from '../src/components/footerAlura';
import { GithubCorner } from '../src/components/githubCorner';
import { LogoSVG } from '../src/components/logoSVG';
import SectionHomeOne from '../src/components/sectionHomeOne';
export default function Home() {
  return (
      <div className="flex-1 w-screen h-screen bg-cover bg-center"  style={{backgroundImage:`url(${db.bg})`}}>
            <div className=" justify-items-center p-10 pt-10 max-w-screen-sm max-h-screen-96 ">
              <GithubCorner/>
              <LogoSVG />
              <SectionHomeOne />
              <FooterAlura/>

            </div>

      </div>
  )
}
