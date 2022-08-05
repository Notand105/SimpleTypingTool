const styles = {
    text: {
        marginTop:'5px',
        fontSize: '2.1rem',
        textAlign:'center',
        color: '#213299',
        marginBottom:'5px'
    },
    subtit: {
        fontSize: '1.3rem',
        textAlign:'center',
        color: '#213299',
            marginTop:'0'
    }
    
}

const Title = () =>{
    return(
        <div>
            <h1 style={styles.text} >Simple typing test</h1>
            <h3 style={styles.subtit}>Powered by notand</h3>
        </div>
    )
}

export default Title