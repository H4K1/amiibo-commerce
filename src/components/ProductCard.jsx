import Button from "./Button";
import Card from "./Card";

const ProductCard = () => {
  return (
    <Card>
      <img
        className="mb-4 object-contain h-48 w-96 "
        src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png"
        alt="Mario"
      />
      <div className="md:flex md:justify-between">
        <section className="pl-6 pb-4">
          <div className="font-bold text-sm md:text-xl mb-2">Mario bros</div>
          <p className="font-semibold text-green-500 text-base">$20.000</p>
        </section>

        <section>
          <Button className="w-full md:w-none md:h-full" color="green">
            Add
          </Button>
        </section>
      </div>
    </Card>
  );
};

export default ProductCard;
