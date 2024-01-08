import style from './footer.module.css'

const usuario = 'jebcode2021'
const repostorio = `projeto-imc-react`
const link = `https://github.com/${usuario}/${repostorio}`
const link2 = `https://github.com/${usuario}/`

const target = '_blank'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <p className={style.footer__paragrafo}>Desenvolvido por <a target={target} className={style.footer__link_none} href={link2}>Jonathan Euzébio Boza</a></p>
            <a target={target} className={style.footer__link} href={link}>Visitar o repositório de Github</a>
        </footer>
    )
}

export default Footer