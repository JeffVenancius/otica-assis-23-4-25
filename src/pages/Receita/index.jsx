import './Receita.css'
import { useState } from 'react'

const Receita = () => {
	const [active, setActive] = useState(null)
	const [values, setValues] = useState({
		"ODESF": "00.00",
		"ODCIL": "00.00",
		"OECIL": "00.00",
		"ADD": "00.00",
		"ODEIXO": "0",
		"OEEIXO": "0",
		"dp__number": "0.0",
		"multifocal": false,
		"dois__dp": false
	})
	const changeSelection = (type, value) => {
		console.log(values)
		let temp = {...values}
		temp[type] = value
		setActive(null)
		setValues(temp)
	}
	return (
		<div className="receipt__container">
		<div className='presentation'>
			<h1>Envie sua receita</h1>
			<p>Faça um orçamento conosco!</p>
		</div>
			<div className="receipt">
				<div className="sheet">
				<div>
					<div className="headers__col">
						<div></div>
						<p>ESF</p>
						<p>CIL</p>
						<p>EIXO</p>
					</div>
					<div className='row'>
						<p>OD</p>
							<div className={"custom__select " + (active == "ODESF" ? "active" : "")}>
								<button onClick={() => setActive(active == "ODESF" ? null : "ODESF")}>{values["ODESF"]}</button>
								<div>
									<button onClick={() => changeSelection("ODESF","+ 20.00")}>+ 20.00</button>
									<button onClick={() => changeSelection("ODESF","+ 19.75")}>+ 19.75</button>
									<button onClick={() => changeSelection("ODESF","+ 19.50")}>+ 19.50</button>
									<button onClick={() => changeSelection("ODESF","+ 19.25")}>+ 19.25</button>
									<button onClick={() => changeSelection("ODESF","+ 19.00")}>+ 19.00</button>
									<button onClick={() => changeSelection("ODESF","+ 18.75")}>+ 18.75</button>
									<button onClick={() => changeSelection("ODESF","+ 18.50")}>+ 18.50</button>
									<button onClick={() => changeSelection("ODESF","+ 18.25")}>+ 18.25</button>
									<button onClick={() => changeSelection("ODESF","+ 18.00")}>+ 18.00</button>
									<button onClick={() => changeSelection("ODESF","+ 17.75")}>+ 17.75</button>
									<button onClick={() => changeSelection("ODESF","+ 17.50")}>+ 17.50</button>
									<button onClick={() => changeSelection("ODESF","+ 17.25")}>+ 17.25</button>
									<button onClick={() => changeSelection("ODESF","+ 17.00")}>+ 17.00</button>
									<button onClick={() => changeSelection("ODESF","+ 16.75")}>+ 16.75</button>
									<button onClick={() => changeSelection("ODESF","+ 16.50")}>+ 16.50</button>
									<button onClick={() => changeSelection("ODESF","+ 16.25")}>+ 16.25</button>
									<button onClick={() => changeSelection("ODESF","+ 16.00")}>+ 16.00</button>
									<button onClick={() => changeSelection("ODESF","+ 15.75")}>+ 15.75</button>
									<button onClick={() => changeSelection("ODESF","+ 15.50")}>+ 15.50</button>
									<button onClick={() => changeSelection("ODESF","+ 15.25")}>+ 15.25</button>
									<button onClick={() => changeSelection("ODESF","+ 15.00")}>+ 15.00</button>
									<button onClick={() => changeSelection("ODESF","+ 14.75")}>+ 14.75</button>
									<button onClick={() => changeSelection("ODESF","+ 14.50")}>+ 14.50</button>
									<button onClick={() => changeSelection("ODESF","+ 14.25")}>+ 14.25</button>
									<button onClick={() => changeSelection("ODESF","+ 14.00")}>+ 14.00</button>
									<button onClick={() => changeSelection("ODESF","+ 13.75")}>+ 13.75</button>
									<button onClick={() => changeSelection("ODESF","+ 13.50")}>+ 13.50</button>
									<button onClick={() => changeSelection("ODESF","+ 13.25")}>+ 13.25</button>
									<button onClick={() => changeSelection("ODESF","+ 13.00")}>+ 13.00</button>
									<button onClick={() => changeSelection("ODESF","+ 12.75")}>+ 12.75</button>
									<button onClick={() => changeSelection("ODESF","+ 12.50")}>+ 12.50</button>
									<button onClick={() => changeSelection("ODESF","+ 12.25")}>+ 12.25</button>
									<button onClick={() => changeSelection("ODESF","+ 12.00")}>+ 12.00</button>
									<button onClick={() => changeSelection("ODESF","+ 11.75")}>+ 11.75</button>
									<button onClick={() => changeSelection("ODESF","+ 11.50")}>+ 11.50</button>
									<button onClick={() => changeSelection("ODESF","+ 11.25")}>+ 11.25</button>
									<button onClick={() => changeSelection("ODESF","+ 11.00")}>+ 11.00</button>
									<button onClick={() => changeSelection("ODESF","+ 10.75")}>+ 10.75</button>
									<button onClick={() => changeSelection("ODESF","+ 10.50")}>+ 10.50</button>
									<button onClick={() => changeSelection("ODESF","+ 10.25")}>+ 10.25</button>
									<button onClick={() => changeSelection("ODESF","+ 10.00")}>+ 10.00</button>
									<button onClick={() => changeSelection("ODESF","+ 9.75")}>+ 9.75</button>
									<button onClick={() => changeSelection("ODESF","+ 9.50")}>+ 9.50</button>
									<button onClick={() => changeSelection("ODESF","+ 9.25")}>+ 9.25</button>
									<button onClick={() => changeSelection("ODESF","+ 9.00")}>+ 9.00</button>
									<button onClick={() => changeSelection("ODESF","+ 8.75")}>+ 8.75</button>
									<button onClick={() => changeSelection("ODESF","+ 8.50")}>+ 8.50</button>
									<button onClick={() => changeSelection("ODESF","+ 8.25")}>+ 8.25</button>
									<button onClick={() => changeSelection("ODESF","+ 8.00")}>+ 8.00</button>
									<button onClick={() => changeSelection("ODESF","+ 7.75")}>+ 7.75</button>
									<button onClick={() => changeSelection("ODESF","+ 7.50")}>+ 7.50</button>
									<button onClick={() => changeSelection("ODESF","+ 7.25")}>+ 7.25</button>
									<button onClick={() => changeSelection("ODESF","+ 7.00")}>+ 7.00</button>
									<button onClick={() => changeSelection("ODESF","+ 6.75")}>+ 6.75</button>
									<button onClick={() => changeSelection("ODESF","+ 6.50")}>+ 6.50</button>
									<button onClick={() => changeSelection("ODESF","+ 6.25")}>+ 6.25</button>
									<button onClick={() => changeSelection("ODESF","+ 6.00")}>+ 6.00</button>
									<button onClick={() => changeSelection("ODESF","+ 5.75")}>+ 5.75</button>
									<button onClick={() => changeSelection("ODESF","+ 5.50")}>+ 5.50</button>
									<button onClick={() => changeSelection("ODESF","+ 5.25")}>+ 5.25</button>
									<button onClick={() => changeSelection("ODESF","+ 5.00")}>+ 5.00</button>
									<button onClick={() => changeSelection("ODESF","+ 4.75")}>+ 4.75</button>
									<button onClick={() => changeSelection("ODESF","+ 4.50")}>+ 4.50</button>
									<button onClick={() => changeSelection("ODESF","+ 4.25")}>+ 4.25</button>
									<button onClick={() => changeSelection("ODESF","+ 4.00")}>+ 4.00</button>
									<button onClick={() => changeSelection("ODESF","+ 3.75")}>+ 3.75</button>
									<button onClick={() => changeSelection("ODESF","+ 3.50")}>+ 3.50</button>
									<button onClick={() => changeSelection("ODESF","+ 3.25")}>+ 3.25</button>
									<button onClick={() => changeSelection("ODESF","+ 3.00")}>+ 3.00</button>
									<button onClick={() => changeSelection("ODESF","+ 2.75")}>+ 2.75</button>
									<button onClick={() => changeSelection("ODESF","+ 2.50")}>+ 2.50</button>
									<button onClick={() => changeSelection("ODESF","+ 2.25")}>+ 2.25</button>
									<button onClick={() => changeSelection("ODESF","+ 2.00")}>+ 2.00</button>
									<button onClick={() => changeSelection("ODESF","+ 1.75")}>+ 1.75</button>
									<button onClick={() => changeSelection("ODESF","+ 1.50")}>+ 1.50</button>
									<button onClick={() => changeSelection("ODESF","+ 1.25")}>+ 1.25</button>
									<button onClick={() => changeSelection("ODESF","+ 1.00")}>+ 1.00</button>
									<button onClick={() => changeSelection("ODESF","+ 0.75")}>+ 0.75</button>
									<button onClick={() => changeSelection("ODESF","+ 0.50")}>+ 0.50</button>
									<button onClick={() => changeSelection("ODESF","+ 0.25")}>+ 0.25</button>
									<button onClick={() => changeSelection("ODESF","0.00")}>0.00</button>
									<button onClick={() => changeSelection("ODESF","-0.25")}>- 0.25</button>
									<button onClick={() => changeSelection("ODESF","-0.50")}>- 0.50</button>
									<button onClick={() => changeSelection("ODESF","-0.75")}>- 0.75</button>
									<button onClick={() => changeSelection("ODESF","-1.00")}>- 1.00</button>
									<button onClick={() => changeSelection("ODESF","-1.25")}>- 1.25</button>
									<button onClick={() => changeSelection("ODESF","-1.50")}>- 1.50</button>
									<button onClick={() => changeSelection("ODESF","-1.75")}>- 1.75</button>
									<button onClick={() => changeSelection("ODESF","-2.00")}>- 2.00</button>
									<button onClick={() => changeSelection("ODESF","-2.25")}>- 2.25</button>
									<button onClick={() => changeSelection("ODESF","-2.50")}>- 2.50</button>
									<button onClick={() => changeSelection("ODESF","-2.75")}>- 2.75</button>
									<button onClick={() => changeSelection("ODESF","-3.00")}>- 3.00</button>
									<button onClick={() => changeSelection("ODESF","-3.25")}>- 3.25</button>
									<button onClick={() => changeSelection("ODESF","-3.50")}>- 3.50</button>
									<button onClick={() => changeSelection("ODESF","-3.75")}>- 3.75</button>
									<button onClick={() => changeSelection("ODESF","-4.00")}>- 4.00</button>
									<button onClick={() => changeSelection("ODESF","-4.25")}>- 4.25</button>
									<button onClick={() => changeSelection("ODESF","-4.50")}>- 4.50</button>
									<button onClick={() => changeSelection("ODESF","-4.75")}>- 4.75</button>
									<button onClick={() => changeSelection("ODESF","-5.00")}>- 5.00</button>
									<button onClick={() => changeSelection("ODESF","-5.25")}>- 5.25</button>
									<button onClick={() => changeSelection("ODESF","-5.50")}>- 5.50</button>
									<button onClick={() => changeSelection("ODESF","-5.75")}>- 5.75</button>
									<button onClick={() => changeSelection("ODESF","-6.00")}>- 6.00</button>
									<button onClick={() => changeSelection("ODESF","-6.25")}>- 6.25</button>
									<button onClick={() => changeSelection("ODESF","-6.50")}>- 6.50</button>
									<button onClick={() => changeSelection("ODESF","-6.75")}>- 6.75</button>
									<button onClick={() => changeSelection("ODESF","-7.00")}>- 7.00</button>
									<button onClick={() => changeSelection("ODESF","-7.25")}>- 7.25</button>
									<button onClick={() => changeSelection("ODESF","-7.50")}>- 7.50</button>
									<button onClick={() => changeSelection("ODESF","-7.75")}>- 7.75</button>
									<button onClick={() => changeSelection("ODESF","-8.00")}>- 8.00</button>
									<button onClick={() => changeSelection("ODESF","-9.25")}>- 9.25</button>
									<button onClick={() => changeSelection("ODESF","-9.50")}>- 9.50</button>
									<button onClick={() => changeSelection("ODESF","-9.75")}>- 9.75</button>
									<button onClick={() => changeSelection("ODESF","-10.00")}>- 10.00</button>
									<button onClick={() => changeSelection("ODESF","-10.25")}>- 10.25</button>
									<button onClick={() => changeSelection("ODESF","-10.50")}>- 10.50</button>
									<button onClick={() => changeSelection("ODESF","-10.75")}>- 10.75</button>
									<button onClick={() => changeSelection("ODESF","-11.00")}>- 11.00</button>
									<button onClick={() => changeSelection("ODESF","-11.25")}>- 11.25</button>
									<button onClick={() => changeSelection("ODESF","-11.50")}>- 11.50</button>
									<button onClick={() => changeSelection("ODESF","-11.75")}>- 11.75</button>
									<button onClick={() => changeSelection("ODESF","-12.00")}>- 12.00</button>
									<button onClick={() => changeSelection("ODESF","-12.25")}>- 12.25</button>
									<button onClick={() => changeSelection("ODESF","-12.50")}>- 12.50</button>
									<button onClick={() => changeSelection("ODESF","-12.75")}>- 12.75</button>
									<button onClick={() => changeSelection("ODESF","-13.00")}>- 13.00</button>
									<button onClick={() => changeSelection("ODESF","-13.25")}>- 13.25</button>
									<button onClick={() => changeSelection("ODESF","-13.50")}>- 13.50</button>
									<button onClick={() => changeSelection("ODESF","-13.75")}>- 13.75</button>
									<button onClick={() => changeSelection("ODESF","-14.00")}>- 14.00</button>
									<button onClick={() => changeSelection("ODESF","-14.25")}>- 14.25</button>
									<button onClick={() => changeSelection("ODESF","-14.50")}>- 14.50</button>
									<button onClick={() => changeSelection("ODESF","-14.75")}>- 14.75</button>
									<button onClick={() => changeSelection("ODESF","-15.00")}>- 15.00</button>
									<button onClick={() => changeSelection("ODESF","-15.25")}>- 15.25</button>
									<button onClick={() => changeSelection("ODESF","-15.50")}>- 15.50</button>
									<button onClick={() => changeSelection("ODESF","-15.75")}>- 15.75</button>
									<button onClick={() => changeSelection("ODESF","-16.00")}>- 16.00</button>
									<button onClick={() => changeSelection("ODESF","-16.25")}>- 16.25</button>
									<button onClick={() => changeSelection("ODESF","-16.50")}>- 16.50</button>
									<button onClick={() => changeSelection("ODESF","-16.75")}>- 16.75</button>
									<button onClick={() => changeSelection("ODESF","-17.00")}>- 17.00</button>
									<button onClick={() => changeSelection("ODESF","-17.25")}>- 17.25</button>
									<button onClick={() => changeSelection("ODESF","-17.50")}>- 17.50</button>
									<button onClick={() => changeSelection("ODESF","-17.75")}>- 17.75</button>
									<button onClick={() => changeSelection("ODESF","-18.00")}>- 18.00</button>
									<button onClick={() => changeSelection("ODESF","-18.25")}>- 18.25</button>
									<button onClick={() => changeSelection("ODESF","-18.50")}>- 18.50</button>
									<button onClick={() => changeSelection("ODESF","-18.75")}>- 18.75</button>
									<button onClick={() => changeSelection("ODESF","-19.00")}>- 19.00</button>
									<button onClick={() => changeSelection("ODESF","-19.25")}>- 19.25</button>
									<button onClick={() => changeSelection("ODESF","-19.50")}>- 19.50</button>
									<button onClick={() => changeSelection("ODESF","-19.75")}>- 19.75</button>
									<button onClick={() => changeSelection("ODESF","-20.00")}>- 20.00</button>
									<button onClick={() => changeSelection("ODESF","-20.25")}>- 20.25</button>
									<button onClick={() => changeSelection("ODESF","-20.50")}>- 20.50</button>
									<button onClick={() => changeSelection("ODESF","-20.75")}>- 20.75</button>
									<button onClick={() => changeSelection("ODESF","-21.00")}>- 21.00</button>
									<button onClick={() => changeSelection("ODESF","-21.25")}>- 21.25</button>
									<button onClick={() => changeSelection("ODESF","-21.50")}>- 21.50</button>
									<button onClick={() => changeSelection("ODESF","-21.75")}>- 21.75</button>
									<button onClick={() => changeSelection("ODESF","-22.00")}>- 22.00</button>
									<button onClick={() => changeSelection("ODESF","-22.25")}>- 22.25</button>
									<button onClick={() => changeSelection("ODESF","-22.50")}>- 22.50</button>
									<button onClick={() => changeSelection("ODESF","-22.75")}>- 22.75</button>
									<button onClick={() => changeSelection("ODESF","-23.00")}>- 23.00</button>
									<button onClick={() => changeSelection("ODESF","-23.25")}>- 23.25</button>
									<button onClick={() => changeSelection("ODESF","-23.50")}>- 23.50</button>
									<button onClick={() => changeSelection("ODESF","-23.75")}>- 23.75</button>
									<button onClick={() => changeSelection("ODESF","-24.00")}>- 24.00</button>
									<button onClick={() => changeSelection("ODESF","-24.25")}>- 24.25</button>
									<button onClick={() => changeSelection("ODESF","-24.50")}>- 24.50</button>
									<button onClick={() => changeSelection("ODESF","-24.75")}>- 24.75</button>
									<button onClick={() => changeSelection("ODESF","-25.00")}>- 25.00</button>
									<button onClick={() => changeSelection("ODESF","-26.25")}>- 26.25</button>
									<button onClick={() => changeSelection("ODESF","-26.50")}>- 26.50</button>
									<button onClick={() => changeSelection("ODESF","-26.75")}>- 26.75</button>
									<button onClick={() => changeSelection("ODESF","-27.00")}>- 27.00</button>
									<button onClick={() => changeSelection("ODESF","-27.25")}>- 27.25</button>
									<button onClick={() => changeSelection("ODESF","-27.50")}>- 27.50</button>
									<button onClick={() => changeSelection("ODESF","-27.75")}>- 27.75</button>
									<button onClick={() => changeSelection("ODESF","-28.00")}>- 28.00</button>
									<button onClick={() => changeSelection("ODESF","-28.25")}>- 28.25</button>
									<button onClick={() => changeSelection("ODESF","-28.50")}>- 28.50</button>
									<button onClick={() => changeSelection("ODESF","-28.75")}>- 28.75</button>
									<button onClick={() => changeSelection("ODESF","-29.00")}>- 29.00</button>
									<button onClick={() => changeSelection("ODESF","-29.25")}>- 29.25</button>
									<button onClick={() => changeSelection("ODESF","-29.50")}>- 29.50</button>
									<button onClick={() => changeSelection("ODESF","-29.75")}>- 29.75</button>
									<button onClick={() => changeSelection("ODESF","-30.00")}>- 30.00</button>
								</div>
						</div>
						<div>
							<div className={"custom__select " + (active == "ODCIL" ? "active" : "")} >
								<button onClick={() => setActive(active == "ODCIL" ? null : "ODCIL")}>00.00</button>
								<div>
									<button onClick={() => changeSelection("ODCIL", "0.00")}>0.00</button>
									<button onClick={() => changeSelection("ODCIL", "-0.25")}>- 0.25</button>
									<button onClick={() => changeSelection("ODCIL", "-0.50")}>- 0.50</button>
									<button onClick={() => changeSelection("ODCIL", "-0.75")}>- 0.75</button>
									<button onClick={() => changeSelection("ODCIL", "-1.00")}>- 1.00</button>
									<button onClick={() => changeSelection("ODCIL", "-1.25")}>- 1.25</button>
									<button onClick={() => changeSelection("ODCIL", "-1.50")}>- 1.50</button>
									<button onClick={() => changeSelection("ODCIL", "-1.75")}>- 1.75</button>
									<button onClick={() => changeSelection("ODCIL", "-2.00")}>- 2.00</button>
									<button onClick={() => changeSelection("ODCIL", "-2.25")}>- 2.25</button>
									<button onClick={() => changeSelection("ODCIL", "-2.50")}>- 2.50</button>
									<button onClick={() => changeSelection("ODCIL", "-2.75")}>- 2.75</button>
									<button onClick={() => changeSelection("ODCIL", "-3.00")}>- 3.00</button>
									<button onClick={() => changeSelection("ODCIL", "-3.25")}>- 3.25</button>
									<button onClick={() => changeSelection("ODCIL", "-3.50")}>- 3.50</button>
									<button onClick={() => changeSelection("ODCIL", "-3.75")}>- 3.75</button>
									<button onClick={() => changeSelection("ODCIL", "-4.00")}>- 4.00</button>
									<button onClick={() => changeSelection("ODCIL", "-4.25")}>- 4.25</button>
									<button onClick={() => changeSelection("ODCIL", "-4.50")}>- 4.50</button>
									<button onClick={() => changeSelection("ODCIL", "-4.75")}>- 4.75</button>
									<button onClick={() => changeSelection("ODCIL", "-5.00")}>- 5.00</button>
									<button onClick={() => changeSelection("ODCIL", "-5.25")}>- 5.25</button>
									<button onClick={() => changeSelection("ODCIL", "-5.50")}>- 5.50</button>
									<button onClick={() => changeSelection("ODCIL", "-5.75")}>- 5.75</button>
									<button onClick={() => changeSelection("ODCIL", "-6.00")}>- 6.00</button>
								</div>
							</div>
						</div>
							<div>
								<input type="number" value={values["ODEIXO"]} onChange={(e) => changeSelection("ODEIXO", e.target.value)} placeholder="0" min="0" max="180" step="1"></input>
							</div>
					</div>
					<div className="row">
						<p>OE</p>
						<div>
							<div className={"custom__select " + (active == "OEESF" ? "active" : "")}>
								<button onClick={() => setActive(active == "OEESF" ? null : "OEESF")}>00.00</button>
								<div>
									<button onClick={() => changeSelection("OEESF", "+ 20.00")}>+ 20.00</button>
									<button onClick={() => changeSelection("OEESF", "+ 19.75")}>+ 19.75</button>
									<button onClick={() => changeSelection("OEESF", "+ 19.50")}>+ 19.50</button>
									<button onClick={() => changeSelection("OEESF", "+ 19.25")}>+ 19.25</button>
									<button onClick={() => changeSelection("OEESF", "+ 19.00")}>+ 19.00</button>
									<button onClick={() => changeSelection("OEESF", "+ 18.75")}>+ 18.75</button>
									<button onClick={() => changeSelection("OEESF", "+ 18.50")}>+ 18.50</button>
									<button onClick={() => changeSelection("OEESF", "+ 18.25")}>+ 18.25</button>
									<button onClick={() => changeSelection("OEESF", "+ 18.00")}>+ 18.00</button>
									<button onClick={() => changeSelection("OEESF", "+ 17.75")}>+ 17.75</button>
									<button onClick={() => changeSelection("OEESF", "+ 17.50")}>+ 17.50</button>
									<button onClick={() => changeSelection("OEESF", "+ 17.25")}>+ 17.25</button>
									<button onClick={() => changeSelection("OEESF", "+ 17.00")}>+ 17.00</button>
									<button onClick={() => changeSelection("OEESF", "+ 16.75")}>+ 16.75</button>
									<button onClick={() => changeSelection("OEESF", "+ 16.50")}>+ 16.50</button>
									<button onClick={() => changeSelection("OEESF", "+ 16.25")}>+ 16.25</button>
									<button onClick={() => changeSelection("OEESF", "+ 16.00")}>+ 16.00</button>
									<button onClick={() => changeSelection("OEESF", "+ 15.75")}>+ 15.75</button>
									<button onClick={() => changeSelection("OEESF", "+ 15.50")}>+ 15.50</button>
									<button onClick={() => changeSelection("OEESF", "+ 15.25")}>+ 15.25</button>
									<button onClick={() => changeSelection("OEESF", "+ 15.00")}>+ 15.00</button>
									<button onClick={() => changeSelection("OEESF", "+ 14.75")}>+ 14.75</button>
									<button onClick={() => changeSelection("OEESF", "+ 14.50")}>+ 14.50</button>
									<button onClick={() => changeSelection("OEESF", "+ 14.25")}>+ 14.25</button>
									<button onClick={() => changeSelection("OEESF", "+ 14.00")}>+ 14.00</button>
									<button onClick={() => changeSelection("OEESF", "+ 13.75")}>+ 13.75</button>
									<button onClick={() => changeSelection("OEESF", "+ 13.50")}>+ 13.50</button>
									<button onClick={() => changeSelection("OEESF", "+ 13.25")}>+ 13.25</button>
									<button onClick={() => changeSelection("OEESF", "+ 13.00")}>+ 13.00</button>
									<button onClick={() => changeSelection("OEESF", "+ 12.75")}>+ 12.75</button>
									<button onClick={() => changeSelection("OEESF", "+ 12.50")}>+ 12.50</button>
									<button onClick={() => changeSelection("OEESF", "+ 12.25")}>+ 12.25</button>
									<button onClick={() => changeSelection("OEESF", "+ 12.00")}>+ 12.00</button>
									<button onClick={() => changeSelection("OEESF", "+ 11.75")}>+ 11.75</button>
									<button onClick={() => changeSelection("OEESF", "+ 11.50")}>+ 11.50</button>
									<button onClick={() => changeSelection("OEESF", "+ 11.25")}>+ 11.25</button>
									<button onClick={() => changeSelection("OEESF", "+ 11.00")}>+ 11.00</button>
									<button onClick={() => changeSelection("OEESF", "+ 10.75")}>+ 10.75</button>
									<button onClick={() => changeSelection("OEESF", "+ 10.50")}>+ 10.50</button>
									<button onClick={() => changeSelection("OEESF", "+ 10.25")}>+ 10.25</button>
									<button onClick={() => changeSelection("OEESF", "+ 10.00")}>+ 10.00</button>
									<button onClick={() => changeSelection("OEESF", "+ 9.75")}>+ 9.75</button>
									<button onClick={() => changeSelection("OEESF", "+ 9.50")}>+ 9.50</button>
									<button onClick={() => changeSelection("OEESF", "+ 9.25")}>+ 9.25</button>
									<button onClick={() => changeSelection("OEESF", "+ 9.00")}>+ 9.00</button>
									<button onClick={() => changeSelection("OEESF", "+ 8.75")}>+ 8.75</button>
									<button onClick={() => changeSelection("OEESF", "+ 8.50")}>+ 8.50</button>
									<button onClick={() => changeSelection("OEESF", "+ 8.25")}>+ 8.25</button>
									<button onClick={() => changeSelection("OEESF", "+ 8.00")}>+ 8.00</button>
									<button onClick={() => changeSelection("OEESF", "+ 7.75")}>+ 7.75</button>
									<button onClick={() => changeSelection("OEESF", "+ 7.50")}>+ 7.50</button>
									<button onClick={() => changeSelection("OEESF", "+ 7.25")}>+ 7.25</button>
									<button onClick={() => changeSelection("OEESF", "+ 7.00")}>+ 7.00</button>
									<button onClick={() => changeSelection("OEESF", "+ 6.75")}>+ 6.75</button>
									<button onClick={() => changeSelection("OEESF", "+ 6.50")}>+ 6.50</button>
									<button onClick={() => changeSelection("OEESF", "+ 6.25")}>+ 6.25</button>
									<button onClick={() => changeSelection("OEESF", "+ 6.00")}>+ 6.00</button>
									<button onClick={() => changeSelection("OEESF", "+ 5.75")}>+ 5.75</button>
									<button onClick={() => changeSelection("OEESF", "+ 5.50")}>+ 5.50</button>
									<button onClick={() => changeSelection("OEESF", "+ 5.25")}>+ 5.25</button>
									<button onClick={() => changeSelection("OEESF", "+ 5.00")}>+ 5.00</button>
									<button onClick={() => changeSelection("OEESF", "+ 4.75")}>+ 4.75</button>
									<button onClick={() => changeSelection("OEESF", "+ 4.50")}>+ 4.50</button>
									<button onClick={() => changeSelection("OEESF", "+ 4.25")}>+ 4.25</button>
									<button onClick={() => changeSelection("OEESF", "+ 4.00")}>+ 4.00</button>
									<button onClick={() => changeSelection("OEESF", "+ 3.75")}>+ 3.75</button>
									<button onClick={() => changeSelection("OEESF", "+ 3.50")}>+ 3.50</button>
									<button onClick={() => changeSelection("OEESF", "+ 3.25")}>+ 3.25</button>
									<button onClick={() => changeSelection("OEESF", "+ 3.00")}>+ 3.00</button>
									<button onClick={() => changeSelection("OEESF", "+ 2.75")}>+ 2.75</button>
									<button onClick={() => changeSelection("OEESF", "+ 2.50")}>+ 2.50</button>
									<button onClick={() => changeSelection("OEESF", "+ 2.25")}>+ 2.25</button>
									<button onClick={() => changeSelection("OEESF", "+ 2.00")}>+ 2.00</button>
									<button onClick={() => changeSelection("OEESF", "+ 1.75")}>+ 1.75</button>
									<button onClick={() => changeSelection("OEESF", "+ 1.50")}>+ 1.50</button>
									<button onClick={() => changeSelection("OEESF", "+ 1.25")}>+ 1.25</button>
									<button onClick={() => changeSelection("OEESF", "+ 1.00")}>+ 1.00</button>
									<button onClick={() => changeSelection("OEESF", "+ 0.75")}>+ 0.75</button>
									<button onClick={() => changeSelection("OEESF", "+ 0.50")}>+ 0.50</button>
									<button onClick={() => changeSelection("OEESF", "+ 0.25")}>+ 0.25</button>
									<button onClick={() => changeSelection("OEESF", "0.00")}>0.00</button>
									<button onClick={() => changeSelection("OEESF", "-0.25")}>- 0.25</button>
									<button onClick={() => changeSelection("OEESF", "-0.50")}>- 0.50</button>
									<button onClick={() => changeSelection("OEESF", "-0.75")}>- 0.75</button>
									<button onClick={() => changeSelection("OEESF", "-1.00")}>- 1.00</button>
									<button onClick={() => changeSelection("OEESF", "-1.25")}>- 1.25</button>
									<button onClick={() => changeSelection("OEESF", "-1.50")}>- 1.50</button>
									<button onClick={() => changeSelection("OEESF", "-1.75")}>- 1.75</button>
									<button onClick={() => changeSelection("OEESF", "-2.00")}>- 2.00</button>
									<button onClick={() => changeSelection("OEESF", "-2.25")}>- 2.25</button>
									<button onClick={() => changeSelection("OEESF", "-2.50")}>- 2.50</button>
									<button onClick={() => changeSelection("OEESF", "-2.75")}>- 2.75</button>
									<button onClick={() => changeSelection("OEESF", "-3.00")}>- 3.00</button>
									<button onClick={() => changeSelection("OEESF", "-3.25")}>- 3.25</button>
									<button onClick={() => changeSelection("OEESF", "-3.50")}>- 3.50</button>
									<button onClick={() => changeSelection("OEESF", "-3.75")}>- 3.75</button>
									<button onClick={() => changeSelection("OEESF", "-4.00")}>- 4.00</button>
									<button onClick={() => changeSelection("OEESF", "-4.25")}>- 4.25</button>
									<button onClick={() => changeSelection("OEESF", "-4.50")}>- 4.50</button>
									<button onClick={() => changeSelection("OEESF", "-4.75")}>- 4.75</button>
									<button onClick={() => changeSelection("OEESF", "-5.00")}>- 5.00</button>
									<button onClick={() => changeSelection("OEESF", "-5.25")}>- 5.25</button>
									<button onClick={() => changeSelection("OEESF", "-5.50")}>- 5.50</button>
									<button onClick={() => changeSelection("OEESF", "-5.75")}>- 5.75</button>
									<button onClick={() => changeSelection("OEESF", "-6.00")}>- 6.00</button>
									<button onClick={() => changeSelection("OEESF", "-6.25")}>- 6.25</button>
									<button onClick={() => changeSelection("OEESF", "-6.50")}>- 6.50</button>
									<button onClick={() => changeSelection("OEESF", "-6.75")}>- 6.75</button>
									<button onClick={() => changeSelection("OEESF", "-7.00")}>- 7.00</button>
									<button onClick={() => changeSelection("OEESF", "-7.25")}>- 7.25</button>
									<button onClick={() => changeSelection("OEESF", "-7.50")}>- 7.50</button>
									<button onClick={() => changeSelection("OEESF", "-7.75")}>- 7.75</button>
									<button onClick={() => changeSelection("OEESF", "-8.00")}>- 8.00</button>
									<button onClick={() => changeSelection("OEESF", "-9.25")}>- 9.25</button>
									<button onClick={() => changeSelection("OEESF", "-9.50")}>- 9.50</button>
									<button onClick={() => changeSelection("OEESF", "-9.75")}>- 9.75</button>
									<button onClick={() => changeSelection("OEESF", "-10.00")}>- 10.00</button>
									<button onClick={() => changeSelection("OEESF", "-10.25")}>- 10.25</button>
									<button onClick={() => changeSelection("OEESF", "-10.50")}>- 10.50</button>
									<button onClick={() => changeSelection("OEESF", "-10.75")}>- 10.75</button>
									<button onClick={() => changeSelection("OEESF", "-11.00")}>- 11.00</button>
									<button onClick={() => changeSelection("OEESF", "-11.25")}>- 11.25</button>
									<button onClick={() => changeSelection("OEESF", "-11.50")}>- 11.50</button>
									<button onClick={() => changeSelection("OEESF", "-11.75")}>- 11.75</button>
									<button onClick={() => changeSelection("OEESF", "-12.00")}>- 12.00</button>
									<button onClick={() => changeSelection("OEESF", "-12.25")}>- 12.25</button>
									<button onClick={() => changeSelection("OEESF", "-12.50")}>- 12.50</button>
									<button onClick={() => changeSelection("OEESF", "-12.75")}>- 12.75</button>
									<button onClick={() => changeSelection("OEESF", "-13.00")}>- 13.00</button>
									<button onClick={() => changeSelection("OEESF", "-13.25")}>- 13.25</button>
									<button onClick={() => changeSelection("OEESF", "-13.50")}>- 13.50</button>
									<button onClick={() => changeSelection("OEESF", "-13.75")}>- 13.75</button>
									<button onClick={() => changeSelection("OEESF", "-14.00")}>- 14.00</button>
									<button onClick={() => changeSelection("OEESF", "-14.25")}>- 14.25</button>
									<button onClick={() => changeSelection("OEESF", "-14.50")}>- 14.50</button>
									<button onClick={() => changeSelection("OEESF", "-14.75")}>- 14.75</button>
									<button onClick={() => changeSelection("OEESF", "-15.00")}>- 15.00</button>
									<button onClick={() => changeSelection("OEESF", "-15.25")}>- 15.25</button>
									<button onClick={() => changeSelection("OEESF", "-15.50")}>- 15.50</button>
									<button onClick={() => changeSelection("OEESF", "-15.75")}>- 15.75</button>
									<button onClick={() => changeSelection("OEESF", "-16.00")}>- 16.00</button>
									<button onClick={() => changeSelection("OEESF", "-16.25")}>- 16.25</button>
									<button onClick={() => changeSelection("OEESF", "-16.50")}>- 16.50</button>
									<button onClick={() => changeSelection("OEESF", "-16.75")}>- 16.75</button>
									<button onClick={() => changeSelection("OEESF", "-17.00")}>- 17.00</button>
									<button onClick={() => changeSelection("OEESF", "-17.25")}>- 17.25</button>
									<button onClick={() => changeSelection("OEESF", "-17.50")}>- 17.50</button>
									<button onClick={() => changeSelection("OEESF", "-17.75")}>- 17.75</button>
									<button onClick={() => changeSelection("OEESF", "-18.00")}>- 18.00</button>
									<button onClick={() => changeSelection("OEESF", "-18.25")}>- 18.25</button>
									<button onClick={() => changeSelection("OEESF", "-18.50")}>- 18.50</button>
									<button onClick={() => changeSelection("OEESF", "-18.75")}>- 18.75</button>
									<button onClick={() => changeSelection("OEESF", "-19.00")}>- 19.00</button>
									<button onClick={() => changeSelection("OEESF", "-19.25")}>- 19.25</button>
									<button onClick={() => changeSelection("OEESF", "-19.50")}>- 19.50</button>
									<button onClick={() => changeSelection("OEESF", "-19.75")}>- 19.75</button>
									<button onClick={() => changeSelection("OEESF", "-20.00")}>- 20.00</button>
									<button onClick={() => changeSelection("OEESF", "-20.25")}>- 20.25</button>
									<button onClick={() => changeSelection("OEESF", "-20.50")}>- 20.50</button>
									<button onClick={() => changeSelection("OEESF", "-20.75")}>- 20.75</button>
									<button onClick={() => changeSelection("OEESF", "-21.00")}>- 21.00</button>
									<button onClick={() => changeSelection("OEESF", "-21.25")}>- 21.25</button>
									<button onClick={() => changeSelection("OEESF", "-21.50")}>- 21.50</button>
									<button onClick={() => changeSelection("OEESF", "-21.75")}>- 21.75</button>
									<button onClick={() => changeSelection("OEESF", "-22.00")}>- 22.00</button>
									<button onClick={() => changeSelection("OEESF", "-22.25")}>- 22.25</button>
									<button onClick={() => changeSelection("OEESF", "-22.50")}>- 22.50</button>
									<button onClick={() => changeSelection("OEESF", "-22.75")}>- 22.75</button>
									<button onClick={() => changeSelection("OEESF", "-23.00")}>- 23.00</button>
									<button onClick={() => changeSelection("OEESF", "-23.25")}>- 23.25</button>
									<button onClick={() => changeSelection("OEESF", "-23.50")}>- 23.50</button>
									<button onClick={() => changeSelection("OEESF", "-23.75")}>- 23.75</button>
									<button onClick={() => changeSelection("OEESF", "-24.00")}>- 24.00</button>
									<button onClick={() => changeSelection("OEESF", "-24.25")}>- 24.25</button>
									<button onClick={() => changeSelection("OEESF", "-24.50")}>- 24.50</button>
									<button onClick={() => changeSelection("OEESF", "-24.75")}>- 24.75</button>
									<button onClick={() => changeSelection("OEESF", "-25.00")}>- 25.00</button>
									<button onClick={() => changeSelection("OEESF", "-26.25")}>- 26.25</button>
									<button onClick={() => changeSelection("OEESF", "-26.50")}>- 26.50</button>
									<button onClick={() => changeSelection("OEESF", "-26.75")}>- 26.75</button>
									<button onClick={() => changeSelection("OEESF", "-27.00")}>- 27.00</button>
									<button onClick={() => changeSelection("OEESF", "-27.25")}>- 27.25</button>
									<button onClick={() => changeSelection("OEESF", "-27.50")}>- 27.50</button>
									<button onClick={() => changeSelection("OEESF", "-27.75")}>- 27.75</button>
									<button onClick={() => changeSelection("OEESF", "-28.00")}>- 28.00</button>
									<button onClick={() => changeSelection("OEESF", "-28.25")}>- 28.25</button>
									<button onClick={() => changeSelection("OEESF", "-28.50")}>- 28.50</button>
									<button onClick={() => changeSelection("OEESF", "-28.75")}>- 28.75</button>
									<button onClick={() => changeSelection("OEESF", "-29.00")}>- 29.00</button>
									<button onClick={() => changeSelection("OEESF", "-29.25")}>- 29.25</button>
									<button onClick={() => changeSelection("OEESF", "-29.50")}>- 29.50</button>
									<button onClick={() => changeSelection("OEESF", "-29.75")}>- 29.75</button>
									<button onClick={() => changeSelection("OEESF", "-30.00")}>- 30.00</button>
								</div>
							</div>
						</div>
						<div>
							<div className={"custom__select " + (active == "OECIL" ? "active" : "")}>
								<button onClick={() => setActive(active == "OECIL" ? null : "OECIL")}>00.00</button>
								<div>
									<button onClick={() => changeSelection("OECIL","0.00")}>0.00</button>
									<button onClick={() => changeSelection("OECIL","-0.25")}>- 0.25</button>
									<button onClick={() => changeSelection("OECIL","-0.50")}>- 0.50</button>
									<button onClick={() => changeSelection("OECIL","-0.75")}>- 0.75</button>
									<button onClick={() => changeSelection("OECIL","-1.00")}>- 1.00</button>
									<button onClick={() => changeSelection("OECIL","-1.25")}>- 1.25</button>
									<button onClick={() => changeSelection("OECIL","-1.50")}>- 1.50</button>
									<button onClick={() => changeSelection("OECIL","-1.75")}>- 1.75</button>
									<button onClick={() => changeSelection("OECIL","-2.00")}>- 2.00</button>
									<button onClick={() => changeSelection("OECIL","-2.25")}>- 2.25</button>
									<button onClick={() => changeSelection("OECIL","-2.50")}>- 2.50</button>
									<button onClick={() => changeSelection("OECIL","-2.75")}>- 2.75</button>
									<button onClick={() => changeSelection("OECIL","-3.00")}>- 3.00</button>
									<button onClick={() => changeSelection("OECIL","-3.25")}>- 3.25</button>
									<button onClick={() => changeSelection("OECIL","-3.50")}>- 3.50</button>
									<button onClick={() => changeSelection("OECIL","-3.75")}>- 3.75</button>
									<button onClick={() => changeSelection("OECIL","-4.00")}>- 4.00</button>
									<button onClick={() => changeSelection("OECIL","-4.25")}>- 4.25</button>
									<button onClick={() => changeSelection("OECIL","-4.50")}>- 4.50</button>
									<button onClick={() => changeSelection("OECIL","-4.75")}>- 4.75</button>
									<button onClick={() => changeSelection("OECIL","-5.00")}>- 5.00</button>
									<button onClick={() => changeSelection("OECIL","-5.25")}>- 5.25</button>
									<button onClick={() => changeSelection("OECIL","-5.50")}>- 5.50</button>
									<button onClick={() => changeSelection("OECIL","-5.75")}>- 5.75</button>
									<button onClick={() => changeSelection("OECIL","-6.00")}>- 6.00</button>
								</div>
							</div>
						</div>
						<div>
							<input type="number" value={values["OEEIXO"]} onChange={(e) => changeSelection("OEEIXO", e.target.value)} placeholder="0" min="0" max="180" step="1"></input>
						</div>
					</div>
					<div className="row">
						<p>ADD</p>
						<div></div>
						<div></div>
						<div>
							<div className={"custom__select " + (active == "ADD" ? "active": "")}>
								<button onClick={() => setActive(active == "ADD" ? null : "ADD")}>00.00</button>
								<div>
									<button onClick={() => changeSelection("ADD", "+ 4.00")}>+ 4.00</button>
									<button onClick={() => changeSelection("ADD", "+ 3.75")}>+ 3.75</button>
									<button onClick={() => changeSelection("ADD", "+ 3.50")}>+ 3.50</button>
									<button onClick={() => changeSelection("ADD", "+ 3.25")}>+ 3.25</button>
									<button onClick={() => changeSelection("ADD", "+ 3.00")}>+ 3.00</button>
									<button onClick={() => changeSelection("ADD", "+ 2.75")}>+ 2.75</button>
									<button onClick={() => changeSelection("ADD", "+ 2.50")}>+ 2.50</button>
									<button onClick={() => changeSelection("ADD", "+ 2.25")}>+ 2.25</button>
									<button onClick={() => changeSelection("ADD", "+ 2.00")}>+ 2.00</button>
									<button onClick={() => changeSelection("ADD", "+ 1.75")}>+ 1.75</button>
									<button onClick={() => changeSelection("ADD", "+ 1.50")}>+ 1.50</button>
									<button onClick={() => changeSelection("ADD", "+ 1.25")}>+ 1.25</button>
									<button onClick={() => changeSelection("ADD", "+ 1.00")}>+ 1.00</button>
									<button onClick={() => changeSelection("ADD", "+ 0.75")}>+ 0.75</button>
									<button onClick={() => changeSelection("ADD", "+ 0.50")}>+ 0.50</button>
									<button onClick={() => changeSelection("ADD", "+ 0.25")}>+ 0.25</button>
									<button onClick={() => changeSelection("ADD", "0.00")}>0.00</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
			<div className='complex'>
				<div>
					<input type="checkbox" name="multifocal" value={values['multifocal']} onChange={(e) => setValues({...values, multifocal: values['multifocal']})}/>
					<label htmlFor="multifocal">Receita para longe e perto (multifocal)</label>
				</div>
		<div className='dp'>
				<div className="dp__number">
						<p>DP</p>
						<input type="number" maxLength="3" value={values["dp__number"]} onChange={(e) => changeSelection("dp__number", e.target.value)} step="0.01" min="0.00" max="180"></input>
				</div>
					<div className="dois__dp">
						<input type="checkbox" name="dois__dp" value={values['dois__dp']} onChange={(e) => setValues({...values, multifocal: values['dois__dp']})}/>
						<label htmlFor="dois__dp">Tenho dois números de DP</label>
					</div>
			</div>
		</div>
			</div>
		<div className='orcamento__lentes'><a><button>Fazer orçamento</button></a></div>
		</div>
	)
}

export default Receita
