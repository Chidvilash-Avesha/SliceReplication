import * as React from 'react';
import { useState } from 'react';
import SourceSelectNative from '../SourceClusterSelect'
import DestinationSelectNative from '../DestinationClusterSelect'
import ClusterArrows from '../../assets/clusterArrows.svg'
import './index.css'
import NavLogo from '../../assets/replicaNavLogo.svg';
import NavCross from '../../assets/navCross.svg';
import NamespaceCluster from '../NamespaceCluster';
import NamespaceClusterAfterSourceClusterSelected from '../NamespaceClusterAfterSourceClusterSelected';


const Replication = (props) =>{

    const {clickedCross,makePopup} = props
    const onClickingCross = () =>{
        clickedCross(true)
       
    }

    const onClickingReplicate = () =>{
        clickedCross(true)
        makePopup()
        console.log("replicate");
    }

    const [sourceClusterSelectedState, setsourceClusterSelected] = useState(false)
    const [destinationClusterSelectedState, setDestinationClusterSelected] = useState(false)
    const [sourceClusterValue, setsourceClusterValue] = useState('')
    // const [destinationClusterValue, setDestinationClusterValue] = useState('')


    const handleSourceClustervalue = (val) =>{
        setsourceClusterValue(val)
    }

    // const onChangeDestinationClustervalue = (val) =>{
    //     setDestinationClusterValue(val)
    // }

    const handleDestinationClusterValue = (val) =>{
        setDestinationClusterSelected(val)
    }

    const sourceClusterSelected = (val) =>{
        setsourceClusterSelected(val)
    }

    return (
        <div className='w-[560px] h-[760px]  background: #ffffff overflow-y-hidden overflow-x-hidden '>

            {/* nav*/}
            <div className=' w-[Fill_(250px)] h-[Hug_(46px)] gap-[30px] flex flex-row justify-between pl-6 pr-[24px,] py-[16px,] p-5 border-b-[#D9DFEE] border-[0px,] border-[1px,0px] border-b border-solid' >
                    <div className='w-[Hug_(274.79px)] h-[Hug_(44px)] gap-3 flex flex-row'>
                        <img src={NavLogo}alt="nav-logo" />
                        <div className='w-[(234px)] h-[(44px)] gap-1 flex flex-col' >
                            <h1 className='w-[234px] h-6 text-2xl font-semibold leading-6 tracking-normal text-left font-family: Bai Jamjuree  text-[#12153e]' >
                                Replicate Resources
                            </h1>
                            <h1 className='w-[65px] h-4 text-base font-medium leading-4 tracking-normal text-left text-[#2868F3] font-family: Bai Jamjuree' >
                               red-slice
                            </h1>
                        </div>
                    </div>
                    <div className='w-[30px] h-[30px] pl-[5.17px] pr-[5.19px,] pt-[5px,] pb-[5.36px,] ml-auto mt-auto mb-auto ' >
                        <button type="button" className='' onClick={onClickingCross} >
                            <img src={NavCross} alt= "nav-cross" className='w-[30px] h-[30px] pl-[5.17px] pr-[5.19px,] pt-[5px,] pb-[5.36px,]' />
                        </button>
                    </div>
            </div>
            <div className='mt-1'>
                <SourceSelectNative sourceClusterSelected = {sourceClusterSelected} handleSourceClustervalue = {handleSourceClustervalue} />
            </div>

            <div>
                {sourceClusterSelectedState ? <NamespaceClusterAfterSourceClusterSelected val = {sourceClusterValue} /> : <NamespaceCluster/> }
            </div>

            <img src={ClusterArrows} alt="arrows" className='h-[20px]' />

            <div className='mt-1' >
                <DestinationSelectNative handleDestinationClusterValue={handleDestinationClusterValue} filterValue={sourceClusterValue}  />
            </div>

            {/*Replicate button */}
            {(sourceClusterSelectedState && destinationClusterSelectedState)?<button className='cursor-pointer rounded w-[540px] h-[45px] bg-[#2868F3] text-center pl-6 pr-[24px,] py-[10px,] outline: none ml-3 mt-2 text-white ' onClick={onClickingReplicate} >
                Replicate
            </button> : <button className='cursor-pointer rounded w-[540px] h-[45px] bg-[#B3B5B9] text-center pl-6 pr-[24px,] py-[10px,] outline: none ml-3 mt-1 ' >
                Replicate
            </button> }
        </div>
    )


}

export default Replication