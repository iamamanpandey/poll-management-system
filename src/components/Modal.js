import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { deletePollReq } from "../redux/actions";
import { useHistory } from 'react-router-dom';
function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: "none"
    }
}));

function SimpleModal({ id }) {
    console.log("id", id)
    const [open, setOpen] = useState(false);
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);
    const [modalData, setData] = useState();
    const dispatch = useDispatch()
    const history = useHistory()

    const data = [
        {
            icon: <DeleteIcon />,
            Info: "Ae you sure want to delete ?"
        }
    ];

    const CustomModal = () => {
        return modalData ? (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <Typography variant="h6" id="modal-title" >
                        {modalData.Info}
                    </Typography>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={handleDelete} color="secondary">Delete</Button>
                </div>
            </Modal>
        ) : null;
    };

    const handleOpen = index => {
        setOpen(true);
        setData(data[index]);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = (id) => {

        dispatch(deletePollReq(id));
        setOpen(false);
        history.push("/");


    }

    const classes = useStyles();

    return (
        <div>
            {data.map((d, index) => (
                <div>
                    <Button
                        onClick={() => {
                            handleOpen(index);
                        }}
                        color="secondary"
                    >
                        {d.icon}
                    </Button>
                </div>
            ))}
            <CustomModal />
        </div>
    );
}

export default SimpleModal;
