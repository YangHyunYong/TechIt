import Card from "./Card";

const CardList = () => {
    const cardData = [
        "card1",
        "card2",
        "card3",
        "card4",
        "card5",
        "card6",
        "card7",
        "card8",
        "card9",
        "card10",
    ];

    return (
        <ul className="bg-red-100 mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-4">
            {/* Card */}
            {cardData.map((v) => (
                <Card>{v}</Card>
            ))}
        </ul>
    );
}
export default CardList;