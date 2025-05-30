import { useSearchParams } from "react-router";
import './Footer.css'

const Footer = (props) => {
	const [searchParams] = useSearchParams();
	const wppLink = "https://api.whatsapp.com/send/?phone=55"

	const wpp = searchParams.get('wpp') ? useSearchParams.get('wpp') : "35998652571"
	const wppNumber = "(" + wpp.length < 10 ? "35" : wpp.substring(0,2) + ") " + wpp.length > 10 ? wpp.substring(2,3) + " " + wpp.substring(3,7) + "-" + wpp.substring(7) : wpp.substring(2,6) + "-" + wpp.substring(6)
	return (
		<div className="footer">
		<div className='footer__fields--container'>
		<div className="footer--fields" >
		<div className="footer__second_col footer__block">
		<div className='contato f--field'>
		<h2>CONTATO</h2>

		<div>
		<a href={wppLink + searchParams.get("wpp")} className='wpp'>WHATSAPP COMERCIAL: <span>{wppNumber}</span></a>
		<a href={wppLink + searchParams.get("wpp")} className='wpp__mobile'><p>WHATSAPP COMERCIAL: </p><p>{wppNumber}</p></a>
		<div className="footer__follow_us">
		<h2>Nos siga:</h2>
		<a className="footer__social footer__fb" href="https://www.facebook.com/oticaassisoficial">
		<img src={props.facebookLogo} alt="Siga-nos no Facebook"/>
		<p>/OTICAASSISOFICIAL</p>
		</a>
		<a className="footer__social footer__ig" href="https://www.instagram.com/otica.assis/">
		<img src={props.instagramLogo} alt="Siga-nos no Instagram"/>
		<p>@ÓTICA.ASSIS</p>
		</a>
</div>
		</div>
		</div>

		</div>
		<div className="logo__footer footer__block">
		<img className="logo__footer__img" src={props.companyLogo} alt={props.companyAlt}/>
		<div className="follow__us__mobile">

		<a className="footer__social footer__fb" href="https://www.facebook.com/oticaassisoficial">
		<img src={props.facebookLogo} alt="Siga-nos no Facebook" />
</a>

		<a className="footer__social footer__ig" href="https://www.instagram.com/otica.assis/">
		<img src={props.instagramLogo} alt="Siga-nos no Instagram" />
</a>

		</div>
		</div>
		</div>
		</div>
		<div className="rights__reserved">
		<img src="/assets/certificado.svg"/>
		<p>2024 Ótica Assis. Todos os direitos reservados</p>
		</div>
		</div>
	)
}

export default Footer
