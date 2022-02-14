import Button from "./Button";
import Card from "./Card";
import { addItemToCart } from "../redux/shoppingCart/action";
import { currencyFormat } from '../helpers'
import { useDispatch } from "react-redux";

const ProductCard = ({ amiibo }) => {
  // TODO: Don't use useDispatch here, search alternative on the future
  const dispatch = useDispatch();
  const { name, price, image, amiiboSeries } = amiibo;

  return (
    <Card className="">
      <img className="mb-4 object-contain h-48 w-96 " src={image} />

      <section className="p-3 pb-4">
        <div className="font-bold text-sm mb-0 md:text-xl mb-2">{name}</div>
        <span className="font-thin text-sm">{ amiiboSeries }</span>
        <p className="font-semibold text-green-500 text-base">{currencyFormat(price)}</p>
      </section>

      <section className="">
        <Button
          onClick={() => addItemToCart(dispatch, amiibo)}
          className="w-full"
          color="green"
        >
          Add
        </Button>
      </section>
    </Card>
  );
};

export default ProductCard;
