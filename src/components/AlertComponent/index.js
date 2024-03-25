import React from "react";
import AlertNotificationSymbol from '../../assets/alertIcon.svg'
const AlertComponent = ({close}) => {

    const closePopup = () => {
        close()
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-75 bg-gray-200 flex flex-col justify-center items-center z-20">
            <div className="w-[445px] h-[228px] gap-0 opacity-[0px] pt-0 pb-3 px-0 rounded-[4px_0px_0px_0px] left-[498px] top-[336px]" >
                <div className="w-[445px] h-[154px] gap-2.5 opacity-[0px] shadow-[0px_1.8618346452713013px_9.309173583984375px_0px_#0000000F] px-0 py-3.5 rounded-[4px_4px_0px_0px] border-t-[#2868F3] border-[3px] border-[0px_0px] border-solid bg-[#ffffff] " >
                    <div className="w-[397px] h-[78px] gap-4 opacity-[0px] flex flex-row justify-center " >
                        <img src={AlertNotificationSymbol} alt="notify symbol" className="w-[40px] mb-10 ml-10" />
                        <div className="w-[344px] h-[78px] gap-3 opacity-[0px]" >
                            <h1 className="font-semibold leading-[30px] text-left leading-4 text-lg mt-1 gap-0 opacity-[0px] font-baijamjuree text-[#2868f3]" >Resource Replication Initiated</h1>
                            <h1 className="text-sm font-medium leading-[17.5px] text-left font-baijamjuree text-[#828490]" >
                                From source cluster worker-cluster-1  to destination cluster worker-cluster-2
                            </h1>
                        </div>
                    </div>
                    <button type="default" className="w-[96px] h-[50px] gap-0 border  border px-6 py-2.5 rounded-[4px_0px_0px_0px]  border-solid border-[#B6B8D6] bg-[#ffffff] ml-80" onClick={closePopup} >Ok</button>
                </div>
                
            </div>
        </div>
    )
}

export default AlertComponent;