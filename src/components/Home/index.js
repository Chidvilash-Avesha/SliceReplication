import ReplicatePage from '../ReplicatePage'
import Sidebar from '../Sidebar'
import './index.css'

function Home(){

    return(
        <div className='flex flex-row overflow-y-hidden overflow-x-hidden' >
            <Sidebar/>
            <ReplicatePage/>
        </div>
    )

}
export default Home