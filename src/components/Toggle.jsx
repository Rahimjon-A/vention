import React, { useContext } from "react";
import "./Toggle.css";
import { ModeContext } from "../context/Theme";


const Toggle = ({ fromApp }) => {

    const { ChangeMode, theme} = useContext(ModeContext)

    const handleChecked = () => {
        ChangeMode()
    }

    return (
        <div className=" absolute top-[80%] left-4 ">
            <div className="toggle">
                <input
                    className={ theme ? "switched" : ""}
                    type="checkbox"
                    value=""
                    onChange={handleChecked}
                />
                <label></label>
            </div>
        </div>
    );
};

export default Toggle;
