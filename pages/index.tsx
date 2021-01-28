import db from '../db.json';
import FooterAlura from '../components/footerAlura';
import { GithubCorner } from '../components/githubCorner';
import { LogoSVG } from '../components/logoSVG';
import SectionHomeOne from '../components/sectionHomeOne';



export default function Home() {
  return (
      <div className="flex-1 w-screen h-screen bg-cover bg-center bg-gray-dark"  style={{backgroundImage:`url(${db.bg})`}}>
            <div className=" justify-items-center p-10 pt-10 ">
            <GithubCorner/>

            <div className="flex-1 max-w-max max-h-screen md:justify-center">
              <LogoSVG />
              <SectionHomeOne />
              <FooterAlura/>
            </div>
            </div>
      </div>
  )
}
