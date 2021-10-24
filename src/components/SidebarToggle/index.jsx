import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    sidebarToggle: {
        background: '#F8F9FE',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        width: 57,
        height: 108,
        margin: 15.5
    },
    sidebarToggleButton: {
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 43,
        height: 43,
        margin: 2,
        borderRadius: 15,
        cursor: "pointer",
        '&:hover': {
            background: '#F8F9FE'
        }
    }
}));

const star = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star"
                  viewBox="0 0 16 16">
    <path
        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>

const filledStar = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-star-fill" viewBox="0 0 16 16">
    <path
        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>

const pie = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-pie-chart" viewBox="0 0 16 16">
    <path
        d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0V7.5h6.482A7.001 7.001 0 0 0 8.5 1.018zM14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
</svg>

const filledPie = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       className="bi bi-pie-chart-fill" viewBox="0 0 16 16">
    <path
        d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"/>
</svg>


const SidebarToggle = () => {
    const classes = useStyles();
    const [isFavoriteToggled, toggleFavorite] = useState(false);
    const [isPieToggled, togglePie] = useState(false);


    return (
        <div className={classes.sidebarToggle}>
            <Paper className={classes.sidebarToggleButton}
                   onClick={() => toggleFavorite(prevState => !prevState)}>
                {isFavoriteToggled ? filledStar : star}
            </Paper>
            <Paper className={classes.sidebarToggleButton}
                   onClick={() => togglePie(prevState => !prevState)}>
                {isPieToggled ? filledPie : pie}
            </Paper>
        </div>
    );
};

export default SidebarToggle;