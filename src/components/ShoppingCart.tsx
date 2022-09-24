import { NavItem, Offcanvas , Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilies/formatCurrency"
import { CartItem } from "./CartItem"
import {StoreData} from '../data/StoreData.js'



type ShoppingCartProps = {
	isOpen: boolean
}


export const ShoppingCart = ({isOpen} : ShoppingCartProps) => {
	const {closeCart , cartItems} = useShoppingCart()
	return (
		<Offcanvas show = {isOpen} placement = "end" onHide={closeCart}  >
            <Offcanvas.Header closeButton>
			<Offcanvas.Title>
				Cart
			</Offcanvas.Title>	
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Stack gap ={3}>
                   {cartItems.map(item => 
				   <CartItem key = {item.id} {...item} />
				   )}
				   	<div className = "ms-auto fw-bold fs-5 ">
					Total {" "}
					 {formatCurrency(cartItems.reduce((total , cartItem) => {
						const item = StoreData.find(i => i.id === cartItem.id)
						return total + (item?.price || 0) * cartItem.quantity } , 0)
					 )}

				</div>
				</Stack>
			
			</Offcanvas.Body>
		</Offcanvas>
		
	)
} 