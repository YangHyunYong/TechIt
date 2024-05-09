const DateCard = ({ date, isHoliday, todos }) => {
  console.log(todos);
  return (
    <li className="bg-purple-100 w-[120px] h-[200px] text-xl rounded-md">
      <div
        className={`${
          date % 7 === 4
            ? "bg-orange-500"
            : date % 7 === 5
            ? "bg-red-500"
            : "bg-blue-500"
        } ${isHoliday && "bg-red-500"} p-2 font-bold text-white rounded-t-md`}
      >
        {date}
      </div>
      <ul className="p-2">
        {todos && todos.map((v, i) => {
          return <li key={i}>{v}</li>
        })}  
      </ul>
    </li>
  );
};

export default DateCard;