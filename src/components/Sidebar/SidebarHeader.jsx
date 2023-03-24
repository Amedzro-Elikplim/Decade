import {FaChartPie} from "react-icons/fa";
import {FiBell, FiSearch, FiArrowLeft} from "react-icons/fi";

const SidebarHeader = () => {
    return (
        <div className="header d-flex align-items-center space-between p-10">
            <div className="d-flex justify-content-center align-items-center g-10">
                <FaChartPie className="icon-pie-chart pointer" />
                <h1>Decade</h1>
            </div>
            
            <div className="d-flex justify-content-center align-items-center g-10">
                <FiBell className="header-icons" />
                <FiSearch className="header-icons"/>
                <FiArrowLeft className="header-icons"/>
            </div>
        </div>
    )
};

export default SidebarHeader;