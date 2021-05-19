import React from "react";
import classes from "./Dialogs.module.css";


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems} activeClassName={classes.active}>
                <div className={classes.dialog + " " + classes.active}>
                    Dima
                </div>
                <div className={classes.dialog}>
                    Sveta
                </div>
                <div className={classes.dialog}>
                    Max
                </div>
                <div className={classes.dialog}>
                    Lena
                </div>
                <div className={classes.dialog}>
                    Oleg
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