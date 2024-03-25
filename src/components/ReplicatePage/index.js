import {useState} from 'react'
import './index.css'
import Replication from '../Replication/index'
import TopHeaderHeading from '../../assets/replicatePageTopHeaderHeading.svg'
import NotifyTab from '../../assets/notifyTab.svg'
import SlicesBtn from '../../assets/SlicesBtn.svg'
import SearchIcon from '../../assets/searchIcon.svg'
import WorkClusters from '../../assets/workClusters.svg'
import SliceBtn from '../../assets/slicebtn.svg'
import UpArrow from '../../assets/upArrow.svg'
import DownArrow from '../../assets/downArrow.svg'
import SuccessImg from '../../assets/successImg.svg'
import AlertComponent from '../AlertComponent';

function ReplicatePage () {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const [isOpenTimeStamp , setOpenTimeStamp] = useState(false)

    const [alert, setAlert] = useState(false);

    function makePopup () {
            setAlert(true);
            console.log("opened");
    }


    const closeAlert = () => {
        setAlert(false);
    }

    const openPopup = () => {
        setPopupOpen(true)
        console.log(isPopupOpen)
    }

    const clickedCross = () => {
        setPopupOpen(false);
    }


    return(
        <div className='overflow-y-hidden overflow-x-hidden '>

        {alert && (
             <div className='flex justify-center items-center  z-10'>
             <AlertComponent close={closeAlert}/>
         </div>
  
        )}
           
        <div className='overflow-y-hidden overflow-x-hidden ' >
            {!isPopupOpen ? 
                    ( <div className='w-[1310px] h-[770px] left-[221px]  ' >
                        {/* top header */}
                        <div className='w-[1310px] h-[60px] gap-2.5 bg-white pl-4 pr-[16px,] py-[14px,] border-b-[#B6B8D6] border-[0px,] border-[1px,0px] border-b border-solid items-center' >
                            <div className='w-[1288px] h-[43px] gap-[791px] flex flex-row justify-between mt-3 ' >
                                <img src={TopHeaderHeading} alt="heading" />
                                <button>
                                    <img src={NotifyTab} alt="notify"  />
                                </button>
                            </div>
                        </div>

                        {/* main -content */}
                        <div className='w-[1219px] h-[839px] p-4' >
                            {/* content-header */}
                            <div className='w-[1265px] h-[667px] rounded border gap-4 bg-white border pl-0 pr-[0px,] py-[24px,] border-solid border-[#B6B8D6]' >
                                <div className='w-[1187px] h-10 flex flex-row justify-between pl-6 pr-[24px,] py-[0px,] mt-2' >
                                    <button type="button" >
                                        <img src={SlicesBtn} alt="slices" />
                                    </button>
                                    <div className='w-[383px] h-10 gap-3.5 rounded border bg-white border pl-4 pr-[0px,] pt-[1px,] pb-[0px,] border-solid border-[#B6B8D6] flex flex-row justify-between ' >
                                        <input type="search" placeholder="Search slice from name" className="p-1 w-[300px] cursor-pointer outline-none" />
                                        <button type='button' >
                                            <img src={SearchIcon} alt='searcg icon' className=''  />
                                        </button>
                                    </div>
                                </div>
                                <table className='mt-3 w-[1263px] bg-[#ECF2FF] text-left '  >
                                    <tr className='w-[1187px] h-[50px] bg-[#DEE8FF] text-left '>
                                        <th className='w-[243px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] ' >NAME</th>
                                        <th className='w-[312px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] ' >DESCRIPTION</th>
                                        <th className='w-[116px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] ' >QOS PROFILE</th>
                                        <th className='w-[415px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] ' >CLUSTERS</th>
                                    </tr>
                                    <tr className='w-[1187px] h-[50px] text-left ml-1'>
                                        <th className='flex flex-row'>
                                            <button onClick={() => setOpenTimeStamp(!isOpenTimeStamp)} >
                                                {isOpenTimeStamp ? <img src={UpArrow} alt="note-icon" className='w-[60px] h-[60px]' />:<img src={DownArrow} alt="note-icon" className='w-[60px] h-[60px]' />}
                                            </button>
                                            <p className='w-[243px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] mt-5' >red-slice</p>
                                        </th>
                                        <th className='w-[312px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[15px] text-base font-normal leading-5 tracking-normal text-left text-[#12153E] font-family: Bai Jamjuree ' >this is a slice description</th>
                                        <th className='w-[116px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] text-base font-normal leading-5 tracking-normal text-left text-[#12153E] font-family: Bai Jamjuree '  >High</th>
                                        <th className='w-[455px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px]' >
                                            <div className='flex flex-row' >
                                                <img src={WorkClusters} alt="work-cluster" />
                                                <button type='button' onClick={openPopup} >
                                                    <img src={SliceBtn} alt="arrow" className='ml-7' />
                                                </button>
                                            </div>
                                        </th>
                                    </tr>
                                </table>
                            {isOpenTimeStamp && <div className='w-[1263px] h-[170px] gap-1 opacity-[0px] pl-20 pr-6 py-4 border-0 border-[1px_0px] bg-[#ECF2FF] '>
                                <table className='w-[1083px] h-[136px] gap-0 opacity-[0px]' >
                                    <tr className='w-[1083px] h-[31px] bg-[#DEE8FF] text-left '>
                                        <th className='w-[270.75px] h-[31px] gap-0 opacity-[0px] pl-6 pr-[58px] py-2' >Timestamp</th>
                                        <th className='w-[270.75px] h-[31px] gap-0 opacity-[0px] pl-6 pr-[58px] py-2' >Source Cluster</th>
                                        <th className='w-[270.75px] h-[31px] gap-0 opacity-[0px] pl-6 pr-[58px] py-2' >Destination Cluster</th>
                                        <th className='w-[270.75px] h-[31px] gap-0 opacity-[0px] pl-6 pr-[58px] py-2' >Status</th>
                                    </tr>
                                    <tr className='w-[1083px] h-[20px] text-left bg-[#FFFFFF] '>
                                        <th className='w-[270.75px] h-[20px] gap-1 opacity-[0px] pl-6 pr-0 py-2 shadow-[-1px_0px_0px_0px_#D9DFEE_inset] shadow-[0px_-1px_0px_0px_#D9DFEE_inset] border border-r-[#D9DFEE] border-solid' >
                                            <p className='text-sm font-semibold leading-[17.5px] text-left text-[#12153E] font-family: Bai Jamjuree'>2024-03-11T12:04:03+00:00	</p>
                                        </th>
                                        <th className='w-[270.75px] h-[20px] gap-1 opacity-[0px] pl-6 pr-0 py-2 shadow-[-1px_0px_0px_0px_#D9DFEE_inset] shadow-[0px_-1px_0px_0px_#D9DFEE_inset] border border-r-[#D9DFEE] border-solid' >
                                            <p className='text-sm font-semibold leading-[17.5px] text-left text-[#12153E] font-family: Bai Jamjuree'>worker-cluster-1</p>
                                        </th>
                                        <th className='w-[270.75px] h-[20px] gap-1 opacity-[0px] pl-6 pr-0 py-2 shadow-[-1px_0px_0px_0px_#D9DFEE_inset] shadow-[0px_-1px_0px_0px_#D9DFEE_inset] border border-r-[#D9DFEE] border-solid' >
                                            <p className='text-sm font-semibold leading-[17.5px] text-left text-[#12153E] font-family: Bai Jamjuree'>worker-cluster-2</p>
                                        </th>
                                        <th className='w-[270.75px] h-[20px] gap-1 opacity-[0px] pl-6 pr-0 py-2 shadow-[-1px_0px_0px_0px_#D9DFEE_inset] shadow-[0px_-1px_0px_0px_#D9DFEE_inset] border border-r-[#D9DFEE] border-solid' >
                                            <button type="">
                                                <img src={SuccessImg} alt="success"/>
                                            </button>
                                        </th>
                                    </tr>
                                    <tr className='w-[1083px] h-[20px] text-left bg-[#FFFFFF] border-none '>
                                        <th className='w-[270.75px] h-[20px] gap-3 opacity-[0px] pl-6 pr-0 py-2 shadow-[-1px_0px_0px_0px_#D9DFEE_inset] shadow-[0px_-1px_0px_0px_#D9DFEE_inset] border border-r-[#D9DFEE] border-solid' >
                                            <p className='text-sm font-semibold leading-[17.5px] text-left text-[#12153E] font-family: Bai Jamjuree'>2024-03-11T12:04:03+00:00	</p>
                                        </th>
                                        <th className='w-[270.75px] h-[20px] gap-3 opacity-[0px] pl-6 pr-0 py-2 shadow-[-1px_0px_0px_0px_#D9DFEE_inset] shadow-[0px_-1px_0px_0px_#D9DFEE_inset] border border-r-[#D9DFEE] border-solid' >
                                            <p className='text-sm font-semibold leading-[17.5px] text-left text-[#12153E] font-family: Bai Jamjuree'>worker-cluster-1</p>
                                        </th>
                                        <th className='w-[270.75px] h-[20px] gap-3 opacity-[0px] pl-6 pr-0 py-2 shadow-[-1px_0px_0px_0px_#D9DFEE_inset] shadow-[0px_-1px_0px_0px_#D9DFEE_inset] border border-r-[#D9DFEE] border-solid' >
                                            <p className='text-sm font-semibold leading-[17.5px] text-left text-[#12153E] font-family: Bai Jamjuree'>worker-cluster-2</p>
                                        </th>
                                        <th className='w-[270.75px] h-[20px] gap-3 opacity-[0px] pl-6 pr-0 py-2 shadow-[-1px_0px_0px_0px_#D9DFEE_inset] shadow-[0px_-1px_0px_0px_#D9DFEE_inset] border border-r-[#D9DFEE] border-solid' >
                                            <button type="">
                                                <img src={SuccessImg} alt="success"/>
                                            </button>
                                        </th>
                                    </tr>
                                </table>
                            </div>}
                                <hr className='w-[1260px]' />
                                
                            </div>

                        </div>
                    </div>) : 
                    (<div className='relative blur-sm'>
                       <div className='w-[1310px] h-[770px] left-[221px]  ' >
                        {/* top header */}
                        <div className='w-[1310px] h-[60px] gap-2.5 bg-white pl-4 pr-[16px,] py-[14px,] border-b-[#B6B8D6] border-[0px,] border-[1px,0px] border-b border-solid items-center' >
                            <div className='w-[1288px] h-[43px] gap-[791px] flex flex-row justify-between mt-3 ' >
                                <img src={TopHeaderHeading} alt="heading" />
                                <button>
                                    <img src={NotifyTab} alt="notify"  />
                                </button>
                            </div>
                        </div>

                        {/* main -content */}
                        <div className='w-[1219px] h-[839px] p-4' >
                            {/* content-header */}
                            <div className='w-[1265px] h-[667px] rounded border gap-4 bg-white border pl-0 pr-[0px,] py-[24px,] border-solid border-[#B6B8D6]' >
                                <div className='w-[1187px] h-10 flex flex-row justify-between pl-6 pr-[24px,] py-[0px,] mt-2' >
                                    <button type="button" >
                                        <img src={SlicesBtn} alt="slices" />
                                    </button>
                                    <div className='w-[383px] h-10 gap-3.5 rounded border bg-white border pl-4 pr-[0px,] pt-[1px,] pb-[0px,] border-solid border-[#B6B8D6] flex flex-row justify-between ' >
                                        <input type="search" placeholder="Search slice from name" className="p-1 w-[300px] cursor-pointer outline-none" />
                                        <button type='button' >
                                            <img src={SearchIcon} alt='searcg icon' className=''  />
                                        </button>
                                    </div>
                                </div>
                                <table className='mt-3 w-[1263px] bg-[#ECF2FF] text-left '  >
                                    <tr className='w-[1187px] h-[50px] bg-[#DEE8FF] text-left '>
                                        <th className='w-[243px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] ' >NAME</th>
                                        <th className='w-[312px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] ' >DESCRIPTION</th>
                                        <th className='w-[116px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] ' >QOS PROFILE</th>
                                        <th className='w-[415px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] ' >CLUSTERS</th>
                                    </tr>
                                    <tr className='w-[1187px] h-[50px] text-left ml-1'>
                                        <th className='flex flex-row'>
                                            <button onClick={() => setOpenTimeStamp(!isOpenTimeStamp)} >
                                                {isOpenTimeStamp ? <img src={UpArrow} alt="note-icon" className='w-[60px] h-[60px]' />:<img src={DownArrow} alt="note-icon" className='w-[60px] h-[60px]' />}
                                            </button>
                                            <p className='w-[243px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] mt-5' >red-slice</p>
                                        </th>
                                        <th className='w-[312px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[15px] text-base font-normal leading-5 tracking-normal text-left text-[#12153E] font-family: Bai Jamjuree ' >this is a slice description</th>
                                        <th className='w-[116px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px] text-base font-normal leading-5 tracking-normal text-left text-[#12153E] font-family: Bai Jamjuree '  >High</th>
                                        <th className='w-[455px] h-[45px] gap-6 pl-6 pr-[0px,] py-[15px,] text-[13px]' >
                                            <div className='flex flex-row' >
                                                <img src={WorkClusters} alt="work-cluster" />
                                                <button type='button' onClick={openPopup} >
                                                    <img src={SliceBtn} alt="arrow" className='ml-7' />
                                                </button>
                                            </div>
                                        </th>
                                    </tr>
                                </table>
                            {isOpenTimeStamp && <div className='w-[1263px] h-[170px] gap-1 opacity-[0px] pl-20 pr-6 py-4 border-0 border-[1px_0px] bg-[#ECF2FF] '>
                                <table className='w-[1083px] h-[136px] gap-0 opacity-[0px]' >
                                    <tr className='w-[1083px] h-[31px] bg-[#DEE8FF] text-left '>
                                        <th className='w-[270.75px] h-[31px] gap-0 opacity-[0px] pl-6 pr-[58px] py-2' >Timestamp</th>
                                        <th className='w-[270.75px] h-[31px] gap-0 opacity-[0px] pl-6 pr-[58px] py-2' >Source Cluster</th>
                                        <th className='w-[270.75px] h-[31px] gap-0 opacity-[0px] pl-6 pr-[58px] py-2' >Destination Cluster</th>
                                        <th className='w-[270.75px] h-[31px] gap-0 opacity-[0px] pl-6 pr-[58px] py-2' >Status</th>
                                    </tr>
                                    <tr className='w-[1083px] h-[20px] text-left bg-[#FFFFFF] '>
                                        <th className='w-[270.75px] h-[20px] gap-1 opacity-[0px] pl-6 pr-0 py-2 shadow-[-1px_0px_0px_0px_#D9DFEE_inset] shadow-[0px_-1px_0px_0px_#D9DFEE_inset] border border-r-[#D9DFEE] border-solid' >
                                            <p className='text-sm font-semibold leading-[17.5px] text-left text-[#12153E] font-family: Bai Jamjuree'>2024-03-11T12:04:03+00:00	</p>
                                        </th>
                                        <th className='w-[270.75px] h-[20px] gap-1 opacity-[0px] pl-6 pr-0 py-2 shadow-[-1px_0px_0px_0px_#D9DFEE_inset] shadow-[0px_-1px_0px_0px_#D9DFEE_inset] border border-r-[#D9DFEE] border-solid' >
                                            <p className='text-sm font-semibold leading-[17.5px] text-left text-[#12153E] font-family: Bai Jamjuree'>worker-cluster-1</p>
                                        </th>
                                        <th className='w-[270.75px] h-[20px] gap-1 opacity-[0px] pl-6 pr-0 py-2 shadow-[-1px_0px_0px_0px_#D9DFEE_inset] shadow-[0px_-1px_0px_0px_#D9DFEE_inset] border border-r-[#D9DFEE] border-solid' >
                                            <p className='text-sm font-semibold leading-[17.5px] text-left text-[#12153E] font-family: Bai Jamjuree'>worker-cluster-2</p>
                                        </th>
                                        <th className='w-[270.75px] h-[20px] gap-1 opacity-[0px] pl-6 pr-0 py-2 shadow-[-1px_0px_0px_0px_#D9DFEE_inset] shadow-[0px_-1px_0px_0px_#D9DFEE_inset] border border-r-[#D9DFEE] border-solid' >
                                            <button type="">
                                                <img src={SuccessImg} alt="success"/>
                                            </button>
                                        </th>
                                    </tr>
                                    <tr className='w-[1083px] h-[20px] text-left bg-[#FFFFFF] border-none '>
                                        <th className='w-[270.75px] h-[20px] gap-3 opacity-[0px] pl-6 pr-0 py-2 shadow-[-1px_0px_0px_0px_#D9DFEE_inset] shadow-[0px_-1px_0px_0px_#D9DFEE_inset] border border-r-[#D9DFEE] border-solid' >
                                            <p className='text-sm font-semibold leading-[17.5px] text-left text-[#12153E] font-family: Bai Jamjuree'>2024-03-11T12:04:03+00:00	</p>
                                        </th>
                                        <th className='w-[270.75px] h-[20px] gap-3 opacity-[0px] pl-6 pr-0 py-2 shadow-[-1px_0px_0px_0px_#D9DFEE_inset] shadow-[0px_-1px_0px_0px_#D9DFEE_inset] border border-r-[#D9DFEE] border-solid' >
                                            <p className='text-sm font-semibold leading-[17.5px] text-left text-[#12153E] font-family: Bai Jamjuree'>worker-cluster-1</p>
                                        </th>
                                        <th className='w-[270.75px] h-[20px] gap-3 opacity-[0px] pl-6 pr-0 py-2 shadow-[-1px_0px_0px_0px_#D9DFEE_inset] shadow-[0px_-1px_0px_0px_#D9DFEE_inset] border border-r-[#D9DFEE] border-solid' >
                                            <p className='text-sm font-semibold leading-[17.5px] text-left text-[#12153E] font-family: Bai Jamjuree'>worker-cluster-2</p>
                                        </th>
                                        <th className='w-[270.75px] h-[20px] gap-3 opacity-[0px] pl-6 pr-0 py-2 shadow-[-1px_0px_0px_0px_#D9DFEE_inset] shadow-[0px_-1px_0px_0px_#D9DFEE_inset] border border-r-[#D9DFEE] border-solid' >
                                            <button type="">
                                                <img src={SuccessImg} alt="success"/>
                                            </button>
                                        </th>
                                    </tr>
                                </table>
                            </div>}
                                <hr className='w-[1260px]' />
                                
                            </div>

                        </div>
                    </div>
                    </div> )
            }
            {isPopupOpen && (
            <div className="fixed right-0 top-0 bottom-0 bg-white shadow-md p-4">
                <Replication clickedCross = {clickedCross} makePopup = {makePopup} />
            </div>
            )}
        </div>

        </div>
    )
}

export default ReplicatePage