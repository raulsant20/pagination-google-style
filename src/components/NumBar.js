import styled from 'styled-components'
import { useState } from 'react'

const NumBar = ({ max }) => {

  const ButtonArrow = styled.button`
  margin-top: 20px;
  width: 40px;
  background: #fff;
  font-weigth: bold;
  color: blue;
  border: none;
  font-size: 20px;
  box-shadow: -1px 0px 0px 0px blue, 1px 0px 0px 0px blue;
  
  &.clicked {
    outline: 1px solid aqua;
    position: relative;
    color: aquamarine;
  }
  `

  const Button = styled.input`
  width: 40px;
  background: #fff;
  font-weigth: bold;
  color: blue;
  border: none;
  font-size: 20px;
  margin: 0 2px;
  `
  const [focus, setFocus] = useState(1)

  const f = (i) => {
    setFocus(i)
  }

  const atras = (focus) => {
    if(focus > 1){
      setFocus(focus-1)
    }
  }
  const adelante = () => {
    if(focus < max){
      setFocus(focus+1)
    }
  }
  const array = (focus) => {
    const arr = []
    let i = 1
    let limit = 11
      if(focus < max-4 && focus > 6) {
        i = focus-5
        limit = focus+5
        }
      else if(focus >= max-4) {
        i = max-9
        limit = max+1
        }

      for(i; i < limit; i++){
        arr.push(i)
      }      
      return arr
  }


  return (
    <div>
      <Button type={'button'}
              onClick={()=>atras(focus)}
              value={focus!==1 ? '<' : ''}
      ></Button>
      {array(focus).map(e => <ButtonArrow onClick={()=>f(e)} 
                  className={e===focus ? 'clicked' : ''}
                  >
                    {e}
                  </ButtonArrow>)
      }
      <Button type={'button'}
              onClick={()=>adelante(focus)}
              value={focus!==max ? '>' : ''}
      ></Button>
      <h1>{focus}</h1>
    </div>
  )
}

export default NumBar