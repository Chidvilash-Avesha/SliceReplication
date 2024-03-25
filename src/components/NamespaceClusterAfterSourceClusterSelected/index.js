import './index.css'
import InputLabel from '@mui/material/InputLabel';

const NamespaceClusterAfterSourceClusterSelected = ({val})=> {

    return (
        <div className=' opacity-[0px] mt-8 ml-4 mb-2'>
            <h1 className='w-[490px] h-[18px] gap-0 opacity-[0px]  font-bold leading-[17.5px] text-left text-[#828490] mb-3' >Select Namespaces from source cluster</h1>
            <InputLabel  className='ml-8 -mb-4 bg-white w-[132px] text-[14px] text-[#12153E] '>
                {val}
            </InputLabel>
            <div className='w-[512px] h-[350px] gap-2.5 opacity-[0px] pt-4 pb-0 px-0 rounded-[8px_0px_0px_0px] border-2 border-[0px_0px] border-solid border-[#8FB7EA] mt-2 flex flex-col justify-start border-dashed ' >
                <div className='w-[480px] h-[38px] gap-4 opacity-[0px] flex flex-row justify-evenly' >
                    <div className='w-[232px] h-[38px] gap-2 opacity-[0px] px-4 py-2.5 rounded-[4px_0px_0px_0px] bg-[#eef3ff] flex flex-row ml-4 mb-3' >
                        <input type="checkbox" className= "w-[18px] h-[18px] gap-0 opacity-[0px] rounded-[4px_0px_0px_0px] border-[1.5px] border-solid border-white" />
                        <h1 className='w-[87px] h-[18px] gap-0 opacity-[0px] text-sm font-medium leading-[17.5px] text-left text-[#5A607C] font-family: Bai Jamjuree' >Namespace-1</h1>
                    </div>
                    <div className='w-[232px] h-[38px] gap-2 opacity-[0px] px-4 py-2.5 rounded-[4px_0px_0px_0px] bg-[#eef3ff] flex flex-row ml-4' >
                        <input type="checkbox" className= "w-[18px] h-[18px] gap-0 opacity-[0px] rounded-[4px_0px_0px_0px] border-[1.5px] border-solid border-white bg-[#2868f3] " />
                        <h1 className='w-[87px] h-[18px] gap-0 opacity-[0px] text-sm font-medium leading-[17.5px] text-left text-[#5A607C] font-family: Bai Jamjuree' >Namespace-2</h1>
                    </div>
                </div>  
                <div className='w-[480px] h-[38px] gap-4 opacity-[0px] flex flex-row justify-evenly' >
                    <div className='w-[232px] h-[38px] gap-2 opacity-[0px] px-4 py-2.5 rounded-[4px_0px_0px_0px] bg-[#eef3ff] flex flex-row ml-4' >
                        <input type="checkbox" className= "w-[18px] h-[18px] gap-0 opacity-[0px] rounded-[4px_0px_0px_0px] border-[1.5px] border-solid border-white bg-[#2868f3]  " />
                        <h1 className='w-[87px] h-[18px] gap-0 opacity-[0px] text-sm font-medium leading-[17.5px] text-left text-[#5A607C] font-family: Bai Jamjuree' >Namespace-3</h1>
                    </div>
                    <div className='w-[232px] h-[38px] gap-2 opacity-[0px] px-4 py-2.5 rounded-[4px_0px_0px_0px] bg-[#eef3ff] flex flex-row ml-4' >
                        <input type="checkbox" className= "w-[18px] h-[18px] gap-0 opacity-[0px] rounded-[4px_0px_0px_0px] border-[1.5px] border-solid border-white bg-[#2868f3] " />
                        <h1 className='w-[87px] h-[18px] gap-0 opacity-[0px] text-sm font-medium leading-[17.5px] text-left text-[#5A607C] font-family: Bai Jamjuree' >Namesace-4</h1>
                    </div>
                </div>  
                <div className='w-[480px] h-[38px] gap-4 opacity-[0px] flex flex-row justify-evenly' >
                    <div className='w-[232px] h-[38px] gap-2 opacity-[0px] px-4 py-2.5 rounded-[4px_0px_0px_0px] bg-[#eef3ff] flex flex-row ml-4' >
                        <input type="checkbox" className= "w-[18px] h-[18px] gap-0 opacity-[0px] rounded-[4px_0px_0px_0px] border-[1.5px] border-solid border-white bg-[#2868f3] " />                 
                        <h1 className='w-[87px] h-[18px] gap-0 opacity-[0px] text-sm font-medium leading-[17.5px] text-left text-[#5A607C] font-family: Bai Jamjuree' >Namespace-5</h1>
                    </div>
                    <div className='w-[232px] h-[38px] gap-2 opacity-[0px] px-4 py-2.5 rounded-[4px_0px_0px_0px] bg-[#eef3ff] flex flex-row ml-4' >
                        <input type="checkbox" className= "w-[18px] h-[18px] gap-0 opacity-[0px] rounded-[4px_0px_0px_0px] border-[1.5px] border-solid border-white bg-[#2868f3] " />
                        <h1 className='w-[87px] h-[18px] gap-0 opacity-[0px] text-sm font-medium leading-[17.5px] text-left text-[#5A607C] font-family: Bai Jamjuree' >Namespace-6</h1>
                    </div>
                </div>  
                <div className='w-[480px] h-[38px] gap-4 opacity-[0px] flex flex-row justify-evenly' >
                    <div className='w-[232px] h-[38px] gap-2 opacity-[0px] px-4 py-2.5 rounded-[4px_0px_0px_0px] bg-[#eef3ff] flex flex-row ml-4' >
                        <input type="checkbox" className= "w-[18px] h-[18px] gap-0 opacity-[0px] rounded-[4px_0px_0px_0px] border-[1.5px] border-solid border-white bg-[#2868f3] " />
                        <h1 className='w-[87px] h-[18px] gap-0 opacity-[0px] text-sm font-medium leading-[17.5px] text-left text-[#5A607C] font-family: Bai Jamjuree' >Namespace-7</h1>
                    </div>
                    <div className='w-[232px] h-[38px] gap-2 opacity-[0px] px-4 py-2.5 rounded-[4px_0px_0px_0px] bg-[#eef3ff] flex flex-row ml-4' >
                        <input type="checkbox" className= "w-[18px] h-[18px] gap-0 opacity-[0px] rounded-[4px_0px_0px_0px] border-[1.5px] border-solid border-white bg-[#2868f3] " />    
                        <h1 className='w-[87px] h-[18px] gap-0 opacity-[0px] text-sm font-medium leading-[17.5px] text-left text-[#5A607C] font-family: Bai Jamjuree' >Namespace-8</h1>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default NamespaceClusterAfterSourceClusterSelected