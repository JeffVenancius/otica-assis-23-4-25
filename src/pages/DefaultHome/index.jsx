import caroussels_order from '../../../public/data/carousels_order.json'
import home from '../../../public/data/home.json'
import Caroussel from '../../components/Caroussel'
import Stores from '../../components/Stores'
import parse from 'html-react-parser'
import React from 'react'
import './DefaultHome.css'

const DefaultHome = () => {
	const caroussels = caroussels_order.map(title => {
			if (Object.keys(home).includes(title)) {
				return (
					<React.Fragment
						key={title + "__" + home[title]['subtitle']}
					>
					<Caroussel 
						title={title}
						subtitle={home[title]['subtitle']}
						cards={home[title]['cards']}
					/>
					{Object.keys(home[title]).includes("banner") ? parse(home[title]["banner"]) : ""}
					</React.Fragment>
				)
			} 
		})
	return (
		<>
			{caroussels}
			<Stores/>
		</>
	)
}

export default DefaultHome
