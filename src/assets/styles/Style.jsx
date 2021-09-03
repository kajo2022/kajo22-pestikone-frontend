import { StyleSheet } from "aphrodite";
import { fadeInUp } from 'react-animations';

const Styles = StyleSheet.create({
    frame: {
        height: '70vh',
        minWidth: '70vh',
        maxWidth: '90vh',
        borderRadius: '25px',
        marginRight: 'auto',
        marginLeft: 'auto',
        backgroundColor: 'blueviolet',
        color: 'aliceblue',
        overflowY: 'auto'
    },
    frame2: {
        maxHeight: '30vh',
        minHeight: '10vh',
        minWidth: '70vh',
        maxWidth: '90vh',
        borderRadius: '25px',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '10px',
        backgroundColor: 'blueviolet',
        color: 'aliceblue',
        padding: '10px',
        display: 'flex'
    },
    userTalker: {
        backgroundColor: 'yellow',
        borderRadius: '25px',
        color: 'black',
        margin: '10px',
        padding: '10px',
        width: 'max-content',
        display: 'flex',
        maxWidth: '70%',
        height: 'max-content',
    },
    talker: {
        ':hover': {
            backgroundColor: 'aqua',
            cursor: 'pointer',
        }
    },
    
    direct: {
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    
    row: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    
    avatar: {
        maxWidth: '70px',
        maxHeight: '70px',
        margin: '10px',
        borderRadius: '20px',
    },
    btn: {
        backgroundColor: 'yellow',
        marginLeft: '10px',
        padding: '10px',
        borderRadius: '15px',
        fontWeight: 'bold',
        maxHeight: '45px',
        ':hover': {
            cursor: 'pointer'
        }
        
    },
    fadeInUp: {
        animationName: fadeInUp, 
        animationDuration: '3s',
        display: 'flex',
        flexWrap: 'wrap'
      },
    position: {
        display: 'flex',
        flexWrap: 'wrap'
    }

})

export default Styles;
