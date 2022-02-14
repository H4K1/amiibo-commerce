import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { useState, useEffect } from "react";
import Amiibo from "../services/amiibo";

const Home = () => {
  const [amiibos, setAmiibos] = useState([]);
  const service = new Amiibo();

  useEffect(async () => {
    setAmiibos(await service.all());
  }, []);

  return (
    <main>
      <Container className="flex justify-center">
        <div className="grid grid-cols-12 gap-2 my-2">
          {amiibos.map((amiibo, index) => (
            <div key={amiibo.id} className="col-span-12 md:col-span-3">
              <ProductCard key={amiibo.id} amiibo={amiibo} />
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
};

export default Home;
