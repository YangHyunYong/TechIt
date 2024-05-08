import Card from "./Card";

const CardList = () => {
    return (
        <ul className="bg-red-100 mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-4">
            {/* Card */}
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </ul>
    );
}
export default CardList;