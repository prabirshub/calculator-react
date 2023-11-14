import { useState } from 'react'
import ButtonsContainer from './components/ButtonsContainer'
import Display from './components/Display'
import styles from './App.module.css'

const App = () => {
  const [calVal, setCalVal] = useState('')

  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal('')
    } else if (buttonText === '=') {
      const result = eval(calVal)
      setCalVal(result)
    } else {
      const newDisplayValue = calVal + buttonText

      setCalVal(newDisplayValue)
    }
  }

  return (
    <center className={`${styles.mainContainer} mt-5`}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </center>
  )
}
export default App
