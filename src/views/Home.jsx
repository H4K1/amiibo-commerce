import ProductCard from '../components/ProductCard';
import Container from '../components/Container';
import { useState, useEffect } from 'react';
import localStorage from '../services/localStorage';
import Amiibo from '../services/amiibo';

const Home = () => {
  const [amiibos, setAmiibos] = useState([]);
  const service = new Amiibo();

  const getAmiibos = async () => {
    const localAmiibos = localStorage.getData('amiibos')

    if (localAmiibos.length) {
      setAmiibos(localAmiibos)
    } else {
      const data = await service.all()
      localStorage.saveData('amiibos', data)
      setAmiibos(data)
    }
  }

  useEffect(async () => {
    await getAmiibos()
  }, []);

  return (
    <main>
      <Container className="flex justify-center">
        <div className="grid grid-cols-12 gap-2 my-2">
          {amiibos.map((amiibo) => (
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
