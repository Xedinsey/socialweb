import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems} activeClassName={classes.active}>
                <div>
                    <NavLink to="/dialogs/id=0" className={classes.dialog + " " + classes.active}>Dima</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/id=1" className={classes.dialog}>Sveta</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/id=2" className={classes.dialog}>Max</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/id=3" className={classes.dialog}>Lena</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/id=4" className={classes.dialog}>Oleg</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>Hello!</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>Fine, thanks, and you?</div>
            </div>
        </div>
    )
}

export default Dialogs;