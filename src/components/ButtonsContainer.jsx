import styles from './ButtonsContainer.module.css'

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonsText = [
    'C',
    '1',
    '2',
    '+',
    '3',
    '4',
    '-',
    '5',
    '6',
    '*',
    '7',
    '8',
    '/',
    '=',
    '9',
    '0',
    '.',
  ]
  return (
    <div className={styles.btnContainer}>
      {buttonsText.map((btnText) => (
        <button
          key={btnText}
          className={styles.keyPad}
          onClick={() => onButtonClick(btnText)}
        >
          {btnText}
        </button>
      ))}
    </div>
  )
}
export default ButtonsContainer
