import { useSearchParams } from 'react-router';
import './Header.css'
import HeaderOptions from './HeaderOptions';
import { useState } from 'react';
import optionsData from '../../data/types.json'
import header_msgs from '../../data/header_msgs'
import { Link } from 'react-router';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function useOutsideAlerter(changeActive) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (!event.target.classList.contains("search__class")) {
				changeActive(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, );
}

const Header = (props) => {
	const [curr_header_msg, set_curr_header_msg] = useState([0, true])
	const [searchParams] = useSearchParams();
	const wppLink = "https://api.whatsapp.com/send/?phone=55"
	const currWpp = searchParams.get("wpp") ? searchParams.get("wpp") : "3598652571"
	const [active, setActive] = useState(null)
	const [mobile, setMobile] = useState(false)
	const [started, setStarted] = useState(false)
	const [searchInput, setSearchInput] = useState("")

	useOutsideAlerter(setActive)

	useEffect(()=> setStarted(true))
	useEffect(() => {
		if (mobile) {
			document.querySelector("body").style = 'position: fixed'
		} else if (started){
			document.querySelector("body").style = ''
		}
	}, [mobile])

	const changeActive = (e) => {
		if (active === e) setActive(null)
		else setActive(e)
	}

	const changeMobile = () => {
			setMobile(!mobile)
	}

	const isMobile = mobile ? " mobile__on" : ""

	let hasItems = {}
	hasItems['Óculos de Grau'] = props.totalItems.totalItems.filter(e => e['Grau/Sol'] == 'Óculos de Grau')
	hasItems['Óculos de Sol'] = props.totalItems.totalItems.filter(e => e['Grau/Sol'] == 'Óculos de Sol')
	optionsData['Marcas'].forEach(e => {
		hasItems[e] = props.totalItems.totalItems.filter(f => {
			return f['marca'] === e})
	})

	optionsData['Formato'].forEach(e => {
		hasItems[e] = props.totalItems.totalItems.filter(f => {
			return f['Formato'] === e})
	})

	const navigate = useNavigate()
	const search_event = (event) => {
		if (event.key === "Enter" && searchInput) {
			navigate('/?search=' + encodeURI(searchInput), { replace: true})
			window.location.reload(true)
		}

	}


	useEffect(() => {
		let more = curr_header_msg[1]
		if (more && curr_header_msg[0] == header_msgs.length - 1) more = false
		if (!more && curr_header_msg[0] == 0) more = true
		const next = more == true ? curr_header_msg[0] + 1 : curr_header_msg[0] - 1
		const timedOut = setTimeout(() => set_curr_header_msg([next, more]), 3000)
		return () => clearTimeout(timedOut)
	},[curr_header_msg])


return (
	<div className="header">
		<div className="header__msgs">{header_msgs.map(e => <p key={e} style={{translate: `${-100 * curr_header_msg[0]}%`}}>{e}</p>)}</div>
		<div className='header__nav'>

			<button onClick={changeMobile} className={'mobile__hamburger ' + (mobile ? "hambuger__outside" : "") }><img src= "/assets/burger.svg" alt="Filtrar"></img></button>
			<Link reloadDocument to='/'><img className="header__logo" src={props.headerLogo} alt={props.headerAlt}/></Link>
			<div className= {'header__nav--menu--mobile' + isMobile}>
				<div className='mobile__background'>
						<div className='inside__header--mobile'>
							<button onClick={changeMobile} className={'mobile__hamburger ' + (mobile ? "hambuger__close" : "hambuger__inside") }><img src= "/assets/burger.svg" alt="Filtrar"></img></button>
							<div className='Category--first'>
							</div>
							<HeaderOptions/>

						</div>
					</div>
				</div>

				<div className='header__nav__right__container mobile'>
					<div className={"search__container search__class " + (active == "search" ? "active" : "")}>
						<button className="header__nav__right header__buttons search__class" onClick={() => changeActive("search")}><img src='/assets/Search_Icon.svg'/></button>
						<div className='search__bar--container search__class'>
							<input type="text" placeholder='Pesquisar' value={searchInput} className='search__class' onChange={(e) => setSearchInput(e.target.value)} onKeyPress={search_event}></input>
							{searchInput ? <Link reloadDocument to={"/?search=" + encodeURI(searchInput)} className='search__class'><button className='search__class'><img className='search__class' src="/assets/Search_Icon.svg"/></button></Link> : <button className='search__class'><img className="search__class" src="/assets/Search_Icon.svg"/></button>}
						</div>
					</div>
						</div>

			<div className='header__nav--menu'>
				<HeaderOptions/>
				<div className='header__nav__right__container'>
					<div className={"search__container search__class " + (active == "search" ? "active" : "")}>
						<button className="header__nav__right header__buttons search__class" onClick={() => changeActive("search")}><img src='/assets/Search_Icon.svg'/>Busca</button>
						<div className='search__bar--container search__class'>
							<input type="text" placeholder='Pesquisar' value={searchInput} className="search__class"  onChange={(e) => setSearchInput(e.target.value)} onKeyPress={search_event}></input>
							{searchInput ? <Link reloadDocument to={"/?search=" + encodeURI(searchInput)} className='search__class'><button className='search__class'><img src="/assets/Search_Icon.svg" className='search__class'/></button></Link> : <button className='search__class'><img src="/assets/Search_Icon.svg" className='search__class'/></button>}
						</div>
					</div>
					<a href={wppLink + currWpp} ><button className='header__buttons header__buttons--contact header__nav__right'><img src="/assets/wpp.svg"/>Contato</button></a>
						</div>
					</div>
				</div>
				<div className="header__banner">
				{props.children}
			</div>
	</div>
)
}

export default Header
