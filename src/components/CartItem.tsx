import React from "react"
import { useShoppingCart } from "../context/ShoppingCartContext"
import {StoreData} from '../data/StoreData.js'
import {Button, Stack } from 'react-bootstrap'
import { formatCurrency } from "../utilies/formatCurrency"


type CartItemProps = {
	id : number,
	quantity : number
}


export const CartItem = ({id , quantity} : CartItemProps) => {
     const {removeFromCart } = useShoppingCart()
	 const item = StoreData.find(item => item.id === id)
	 if(item == null) return null

	return (
		<Stack direction = "horizontal" gap = {2}  className = "d-flex align-items-center">
			<img src={item.imgUrl} style={{width: "125px" , height: "75px" , objectFit : "cover"}} />
			<div className = "me-auto">
				<div>
					{item.name} {""} 
					{quantity > 1 && 
					(<span className="text-muted" style={{fontSize: ".65rem"}}>
                           x{quantity}
					</span>)}
				</div>
				<div className="text-muted" style={{fontSize: ".75ren"}}>
					{formatCurrency(item.price)}
				</div>
			</div>
				<div>{formatCurrency(item.price * quantity)}</div>
				<Button onClick = {() => removeFromCart(item.id)} variant = "outline-danger" size ="sm" >x</Button>
		
		</Stack>

	)

}