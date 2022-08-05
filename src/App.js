import Core from './Core'
import Title from './Title'

const styles ={
    all: {
        boxSizing: 'border-box',
        height:'100%',
        backgroundColor:'#ffffff'
    }
}

const App = () =>{
    return(
        <div  style={styles.all}>
            <Title />
            <Core />
        </div>
    )
}

export default App