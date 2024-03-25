import './index.css'

import sideNavLogo from '../../assets/sideNavLogo.svg'
import DashboardMenuItem from '../../assets/dashboardNavItem.svg'
import ClustersMenuItem from '../../assets/clustersNavItem.svg'
import NamespacesMenuItem from '../../assets/namespacesNavItem.svg'
import SlicesMenuItem from '../../assets/slicesNavItem.svg'
import NodeaffinityMenuItem from '../../assets/nodeaffinityNavItem.svg'
import ReplicateMenuItem from '../../assets/replicateNavItem.svg'
import ServicesMenuItem from '../../assets/servicesNavItem.svg'
import ResourcequotesMenuItem from '../../assets/resourcequotesNavItem.svg'
import rbacMenuItem from '../../assets/rbacNavItem.svg'
import SettingsMenuItem from '../../assets/settingsNavItem.svg'
import LogoutMenuItem from '../../assets/logoutNavItem.svg'
import UpgradeLicence from '../../assets/upgradeLicence.svg'



function Sidebar(){
    return (
        <div className='w-[220px] h-[775px] gap-10 bg-[#12153e] overflow-y-hidden overflow-x-hidden ' >
            <img src={sideNavLogo} alt="kubeslice-logo"  classname="w-[Fixed_(220px)] h-[Hug_(110.24px)] pl-0 pr-[0px,] pt-[25px,] pb-[0px,]" />
            <div className='w-[Fixed_(220px)] h-[Fixed_(901px)] flex flex-col justify-between mt-3 ' >
                <button type="button" className='w-[Fixed_(220px)] h-[26px] gap-2 pl-4 pr-[0px,] py-[12px,] mt-5 hover:bg-blue-700 h-[28px]' >
                    <img src = {DashboardMenuItem} alt="dashboard" className='w-[Hug_(105px)] h-[Hug_(24px)] gap-2.5' />
                </button>
                <button type="button" className='w-[Fixed_(220px)] h-[26px] gap-2 pl-4 pr-[0px,] py-[12px,] mt-5 hover:bg-blue-700 h-[28px]' >
                    <img src = {ClustersMenuItem} alt="dashboard" className='w-[Hug_(105px)] h-[Hug_(24px)] gap-2.5' />
                </button>
                <button type="button" className='w-[Fixed_(220px)] h-[26px] gap-2 pl-4 pr-[0px,] py-[12px,] mt-5 hover:bg-blue-700 h-[28px]' >
                    <img src = {SlicesMenuItem} alt="dashboard" className='w-[Hug_(105px)] h-[Hug_(24px)] gap-2.5' />
                </button>
                <button type="button" className='w-[Fixed_(220px)] h-[26px] gap-2 pl-4 pr-[0px,] py-[12px,] mt-5 hover:bg-blue-700 h-[28px]' >
                    <img src = {NamespacesMenuItem} alt="dashboard" className='w-[Hug_(105px)] h-[Hug_(24px)] gap-2.5' />
                </button>
                
                <button type="button" className='w-[Fixed_(220px)] h-[26px] gap-2 pl-4 pr-[0px,] py-[12px,] mt-5 hover:bg-blue-700 h-[28px]' >
                    <img src = {NodeaffinityMenuItem} alt="dashboard" className='w-[Hug_(105px)] h-[Hug_(24px)] gap-2.5' />
                </button>
                <button type="button" className='w-[Fixed_(220px)] h-[46px] gap-2 pl-4 pr-[0px,] py-[12px,] mt-5 bg-[#2868F3]' >
                    <img src = {ReplicateMenuItem} alt="dashboard" className='w-[Hug_(105px)] h-[Hug_(24px)] gap-2.5' />
                </button>
                <button type="button" className='w-[Fixed_(220px)] h-[26px] gap-2 pl-4 pr-[0px,] py-[12px,] mt-5 hover:bg-blue-700 h-[28px]' >
                    <img src = {ServicesMenuItem} alt="dashboard" className='w-[Hug_(105px)] h-[Hug_(24px)] gap-2.5' />
                </button>
                <button type="button" className='w-[Fixed_(220px)] h-[26px] gap-2 pl-4 pr-[0px,] py-[12px,] mt-5 hover:bg-blue-700 h-[28px]' >
                    <img src = {ResourcequotesMenuItem} alt="dashboard" className='w-[Hug_(105px)] h-[Hug_(24px)] gap-2.5' />
                </button>
                <button type="button" className='w-[Fixed_(220px)] h-[26px] gap-2 pl-4 pr-[0px,] py-[12px,] mt-5 hover:bg-blue-700 h-[28px]' >
                    <img src = {rbacMenuItem} alt="dashboard" className='w-[Hug_(105px)] h-[Hug_(24px)] gap-2.5' />
                </button>
                <button type="button" className='w-[Fixed_(220px)] h-[26px] gap-2 pl-4 pr-[0px,] py-[12px,] mt-5 hover:bg-blue-700 h-[28px]' >
                    <img src = {SettingsMenuItem} alt="dashboard" className='w-[Hug_(105px)] h-[Hug_(24px)] gap-2.5' />
                </button>
                <button type="button" className='w-[Fixed_(220px)] h-[26px] gap-2 pl-4 pr-[0px,] py-[12px,] mt-5 hover:bg-blue-700 h-[28px]' >
                    <img src = {LogoutMenuItem} alt="dashboard" className='w-[Hug_(105px)] h-[Hug_(24px)] gap-2.5' />
                </button>
            </div>
            <button type="button" className="mt-12 ml-3 ">
                <img src={UpgradeLicence} alt="licence"  />
            </button>
        </div>
    )
}

export default Sidebar