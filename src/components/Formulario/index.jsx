import { useState } from 'react'
import style from './formulario.module.css'

const Formulario = () => {
    const [height, setHeight] = useState(0) // Criando um estado para a altura e o peso
    const [weight, setWeight] = useState(0) // O useState é um hook que retorna um array com duas posições, a primeira é o valor do estado e a segunda é uma função para atualizar o valor do estado
    const resultado = (parseFloat(weight) / (parseFloat(height) ** 2)).toFixed(2)

    const idAltura = document.getElementById('idAltura')
    const idPeso = document.getElementById('idPeso')

    const inputHeight = (value) => { // Função para mudar a altura de metros para centímetros
        if (parseFloat(value) >= 100) {
            setHeight(value / 100)
        } else {
            setHeight(value)
        }
    }

    let mudarColor = '' // Variável para mudar a cor do resultado

    const mostradoResultado = () => {

        if (resultado < 17) {
            mudarColor = 'Você está com muito abaixo do peso'
        } else if (resultado >= 17 && resultado <= 18.49) {
            mudarColor = 'Você está com abaixo do peso' 
        } else if (resultado >= 18.5 && resultado <= 24.99) {
            mudarColor = 'Você está com peso normal'
        } else if (resultado >= 25 && resultado <= 29.99) {
            mudarColor = 'Você está com acima do peso'
        } else if (resultado >= 30 && resultado <= 34.99) {
            mudarColor = 'Você está com obesidade I'
        } else if (resultado >= 35 && resultado <= 39.99) {
            mudarColor = 'Você está com obesidade II (severa)'
        } else if (resultado >= 40) {
            mudarColor = 'Você está com obesidade III (mórbida)'
        } else { 
            mudarColor = 'Ainda não tem um resultado'
        }

        if (resultado != 'NaN') { // Se o resultado for diferente de NaN, mostre o resultado 
            return <h1>{resultado}</h1>
        } else {
            return <h1>0.00</h1>
        }
    }

    const resultadoColor = () => { // Função para mudar a cor do resultado
        if (mudarColor === 'Você está com muito abaixo do peso'
            || mudarColor === 'Você está com obesidade I') {
            return 'red'
        } else if (mudarColor === 'Você está com abaixo do peso'
            || mudarColor === 'Você está com acima do peso') {
            return '#fff'
        } else if (mudarColor === 'Você está com obesidade II (severa)') {
            return '#ff6b81'
        } else if (mudarColor === 'Você está com obesidade III (mórbida)') {
            return '#ff4757'
        } else {
            return '#fff'
        }
    }

    const botaoReset = () => {
        idAltura.value = ''
        idPeso.value = ''
        setHeight(0)
        setWeight(0)
        return <h1>0.00</h1>
    }

    const botaoInputHeight = () => {
        return (evento) => (inputHeight(evento.target.value))
    }

    const botaoInputWeight = () => {
        return (evento) => (setWeight(evento.target.value))
    }

    return (
        <div className={style.container}>
            <form className={style.formulario}>

                <div className={style.formulario__grupo}>
                    <label className={style.formulario__label} htmlFor="altura">Altura</label>
                    <input className={style.formulario__input} type="number" placeholder="Digite sua altura em metros" onChange={botaoInputHeight()} id={'idAltura'} />
                </div>

                <div className={style.formulario__grupo}>
                    <label className={style.formulario__label} htmlFor="peso">Peso</label>
                    <input className={style.formulario__input} type="number" placeholder="Digite seu peso em kg" onChange={botaoInputWeight()} id={'idPeso'} />
                </div>

                <div className={style.formulario__botao}>
                    <button className={style.formulario__botao__reset} onClick={botaoReset}>Limpar</button>
                </div>
            </form>

            <div className={style.formulario__resultado}>
                <p className={style.formulario__paragrafo}>Seu IMC é:</p>
                <span className={style.formulario__resultado__imc}> {mostradoResultado()}</span>
                <p className={style.formulario__resultado__imc}><span className={style.formulario__resultado__imc} style={{ color: resultadoColor() }}> {mudarColor}</span></p>
            </div>
        </div>
    )
}

export default Formulario