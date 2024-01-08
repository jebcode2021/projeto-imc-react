import style from './cabecalho.module.css'

const Cabecalho = () => {
  return (
   <header>
      <div className={style.cabecalho}>
        <h1>Calculadora de IMC</h1>
      </div>
   </header>
  )
}

export default Cabecalho