import React from "react";
import {useNavigate} from 'react-router-dom';
import { Button } from "react-bootstrap";

const MenuButton = ({name, path, icon}) => {
    const navigate = useNavigate();
    return(
        <Button className="menu-button p-3 d-flex gap-3" onClick={() => navigate(`${path}`)}>
            <img className="img" src={icon}/>
            <h6 className="h6 m-0 pt-1">{name}</h6>
        </Button>
    )
}

export default MenuButton;