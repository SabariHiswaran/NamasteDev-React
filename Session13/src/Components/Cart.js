import { useSelector } from "react-redux/es/hooks/useSelector"


const Cart = () => {

const selector = useSelector((store) => store.cartS.items)

    return (
<>
        <h3> {selector[0]} </h3>
        <h3> {selector[1]}</h3>
        </>
    )
}

export default Cart