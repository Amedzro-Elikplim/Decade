import Sidebar from "../components/Sidebar/Sidebar";
import Content from "../components/Content";

const Dashboard = () => {

    return (
        <div className="d-flex h-100">
            <Sidebar />
            <Content />
        </div>
    )
};

export default Dashboard;