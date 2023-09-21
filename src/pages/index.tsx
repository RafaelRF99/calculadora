import styles from '@/styles/Home.module.scss'

import { Calculo } from '../functions/calculo'

export default function Home() {
  const { display, handleDisplay, handleSoma, handleSubtracao, handleDivisao,
    handleMultiplicacao, handlePoncentagem, handleC, handleReset,
    handleResultado } = Calculo()

  return (
    <div className={styles.container}>
      <h1>Calculadora</h1>
      <hr />
      <div className={styles.content}>
        <div className={styles.valores}>
          <div className={styles.extra}>
            <button onClick={() => handlePoncentagem()}>%</button>
            <button onClick={() => handleC()}>AC</button>
            <button onClick={() => handleReset()}>C</button>
          </div>
          <div className={styles.numeros}>
            <div className={styles.zero}>
              <button onClick={() => handleDisplay('0')}>0</button>
              <button onClick={() => handleDisplay('.')}>.</button>
            </div>
            <button onClick={() => handleDisplay('1')}>1</button>
            <button onClick={() => handleDisplay('2')}>2</button>
            <button onClick={() => handleDisplay('3')}>3</button>
            <button onClick={() => handleDisplay('4')}>4</button>
            <button onClick={() => handleDisplay('5')}>5</button>
            <button onClick={() => handleDisplay('6')}>6</button>
            <button onClick={() => handleDisplay('7')}>7</button>
            <button onClick={() => handleDisplay('8')}>8</button>
            <button onClick={() => handleDisplay('9')}>9</button>
          </div>
        </div>
        <div className={styles.sinais}>
          <button onClick={() => handleDivisao()}>/</button>
          <button onClick={() => handleMultiplicacao()}>*</button>
          <button onClick={() => handleSubtracao()}>-</button>
          <button onClick={() => handleSoma()}>+</button>
          <button onClick={() => handleResultado()}>=</button>
        </div>
      </div>
      <div className={styles.resultado}>
        {display}
      </div>
    </div>
  )
}
