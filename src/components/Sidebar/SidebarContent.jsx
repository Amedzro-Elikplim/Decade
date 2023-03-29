import "./sidebar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import {Collapse, Nav, Navbar, NavItem, NavLink as DashboardNavLink} from "reactstrap";
import { useState } from "react";

const SidebarContent = () => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(open => !open);
    }
    return (
        <Nav vertical>
            <div className="nav-item" onClick={() => handleOpen()}>
                Home
            </div>
            <Collapse isOpen={open}>
            book
            </Collapse>
        </Nav>
        // <div>hello</div>
    )
};

export default SidebarContent;