import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                item={item}
            />
        )
    })

    return (
        <>
            <Navbar />
            <section>
                {cards}
            </section>
        </>
    )
}