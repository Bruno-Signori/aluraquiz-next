import db from '../db.json';
import FooterAlura from '../components/footerAlura';
import { GithubCorner } from '../components/githubCorner';
import { LogoSVG } from '../components/logoSVG';
import SectionHomeOne from '../components/sectionHomeOne';



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
