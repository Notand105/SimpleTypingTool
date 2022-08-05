import {useState } from 'react'

const styles= {
    word: {
        color:'green',
        fontSize: '4.5rem',
        textAlign: 'center',
    },
    inputcontainer:{
        marginLeft: '25vw',
        marginBottom: '15px'
    },
    input:{
        textAlign: 'center',
        width: '50vw',
        height: '8vh',
        fontSize: '2.5rem',
        color:'blue'
    },
    cont:{
        color: 'blue',
        textAlign: 'center',
        fontSize: '2rem',
    }
}

const Core = () =>{
    
    var randomWords = require('random-words')
    
    const [value, setValue] = useState({normal:''})
    const [palabra, setpalabra] = useState(randomWords())
    const [contador, incrementar] = useState(0)

    const getWord = () =>{
        // eliminamos el texto del inpu
        setValue({normal:''})
        incrementar(contador + 1)
        //retornamos una palabra al azar
        return randomWords() 
    }
  
    const handleChange = (e) =>{
        //console.log(e.target.type, e.target.checked)
        setValue((state) => ({
            ...state,
            [e.target.name]: e.target.type ==='checkbox' 
                ? e.target.checked 
                : e.target.value
            }))
        }
        
    //console.log(value)
    return(
        <div >
            <h1 style={styles.word}>
                {value.normal === palabra ? setpalabra(() => getWord() ) : palabra }
            </h1>
            <div style={styles.inputcontainer}> 
                <input style={styles.input} type='text' name="normal" value={value.normal} onChange={handleChange}  />
            </div>
            <div style={styles.cont} >{contador}</div> 
        </div>
    )
}
export default Core
