import ProductCard from '../components/ProductCard'
import Container from '../components/Container'

const Home = () => {

  return (
    <main>
      <Container>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </main>
  )
}

export default Home;
