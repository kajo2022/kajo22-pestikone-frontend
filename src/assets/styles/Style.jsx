import { StyleSheet } from "aphrodite";
import { fadeInRight, fadeInUp } from 'react-animations';

const Styles = StyleSheet.create({
    app : {
        backgroundColor: 'black',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'aliceblue',
      },
    frame: {
        height: '70vh',
        minWidth: '70vh',
        maxWidth: '90vh',
        borderRadius: '25px',
        marginRight: 'auto',
        marginLeft: 'auto',
        backgroundColor: 'blueviolet',
        color: 'aliceblue',
        overflowY: 'auto',
        overflowX: 'hidden'
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
    container: {
        display: 'flex'
    },
    column: {
        flexDirection: 'column',
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
    },
    input: {
        height: '35px',
        borderColor: "gray",
        borderWidth: '1px',
        fontSize: '20px',
        width: '100px',
        display: "flex",
        textAlign: "center",
      },
      label: {
        margin: "auto",
        paddingRight: '10px',
        color: "Yellow",
      },
      outer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      textCent: {
          textAlign: 'center'
      },
      fadeInRight: {
        animationName: fadeInRight, 
        animationDuration: '2s',
        display: 'flex',
        flexWrap: 'wrap'
      },
})

export default Styles;
