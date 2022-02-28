import './style.sass';
import Button from './Button';
import Card from './Card';
import { addItemToCart } from '../redux/shoppingCart/action';
import { currencyFormat } from '../helpers';
import { useDispatch } from 'react-redux';
import { object } from 'prop-types';

const ProductCard = ({ amiibo }) => {
  const dispatch = useDispatch();
  const { name, price, image, amiiboSeries } = amiibo;

  return (
    <Card className="product">
      <img className="product--image" src={image} />

      <section className="product__body">
        <div className="product__body--title">{name}</div>
        <span className="product__body--description">{amiiboSeries}</span>
        <p className="product__body--price">{currencyFormat(price)}</p>
      </section>

      <section>
        <Button
          onClick={() => dispatch(addItemToCart(amiibo))}
          className="w-full"
          color="green"
        >
          Add
        </Button>
      </section>
    </Card>
  );
};

ProductCard.propTypes = {
  amiibo: object,
};

export default ProductCard;
