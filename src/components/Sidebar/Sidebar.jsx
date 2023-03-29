import "./sidebar.css";
import SidebarContent from "./SidebarContent";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {

    return (
         <aside className="d-grid flex-sidebar sidebar">
            <SidebarHeader />
            <SidebarContent />
            <SidebarFooter />
         </aside>
    )
};

export default Sidebar;