import { useContext } from "react"
import { ParkContext } from "./ParkContext"


function Child2() {
  const dataparkinfo = useContext(ParkContext)

    return (
      <div className='children'>Child2 : Roller coaster{dataparkinfo.ticketForRollerCoaster()}
      
       </div>
    )
  }
  
  export default Child2