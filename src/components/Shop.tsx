import {Container , Card} from 'react-bootstrap'
import '../styles/shop.css'
import { JeweryData } from '../data/JeweryData'

export const Shop = () => {
  return (
	<>
	<Container>
	<div className='shopBackground'>
       	<div className = "shopContent">
           <div className='shopTitle'>
             <h2 className='shopTitleContent'>SHOP BY JEWELRY TYPE</h2>
		   </div>
		   <div className='shopCards'>
			{JeweryData.map(item => (
              <>
			  <div className='shopItem'>
					<div className='shopItem-1'>
					<Card>
						<Card.Img className = "w-170 h-70" src = {item.img} variant = "top"></Card.Img>

					</Card>
					</div>
					<div className = 'shopItem-2'>
                     <h5 className='shopItem-label'>{item.name}</h5>

					</div>
				</div>
			  
			  
			  </>
			))}
				
				
			
			</div>
		</div>
	</div>


	</Container>
	</>
  )
}

