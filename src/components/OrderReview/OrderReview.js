import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {

    const [products] = useProducts();

    const [cart, setCart] = useCart(products);

    // use history added
    const history = useHistory();
    

    // Add event handler
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handleProcceedToShipping = () => {
        // setCart([]);
        // clearTheCart();
        history.push('/shipping');
    }

    return (
        <div className="shop-container">

            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    />)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <button
                        onClick={handleProcceedToShipping}
                        className="btn-regular">Procceed to shipping
                    </button>
                </Cart>
            </div>

        </div>
    );
};

export default OrderReview;