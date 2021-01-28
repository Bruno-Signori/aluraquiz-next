
import db from '../db.json';



export default function quiz() {
  return (
      <div className="flex-1 w-screen h-screen bg-cover bg-center"  style={{backgroundImage:`url(${db.bg})`}}>
            <div className=" justify-items-center p-10 pt-10 max-w-screen-sm max-h-screen-96 "></div>
            </div>
  )};