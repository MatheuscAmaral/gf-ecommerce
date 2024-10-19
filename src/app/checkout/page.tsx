
import Container from "../components/container";
import GetCardsProducts from "../components/getCardsProducts";


const Checkout = () => {
    return (
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-6xl gap-2 px-3 max-h-96 h-full mx-auto mt-24">
                <GetCardsProducts />

                <section className="w-full border border-gray-200 rounded-lg">
                
                </section>
            </div>
        </Container>
    )
}

export default Checkout;