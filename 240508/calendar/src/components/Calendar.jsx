import DateCard from "./DateCard";

const calendarData = [
  { date: 1, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
  { date: 2, isHoliday: false, todos: ["💵 돈벌기"] },
  { date: 3, isHoliday: false, todos: ["🏃‍♀️ 달리기", "🎉 생일"] },
  { date: 4, isHoliday: false },
  { date: 5, isHoliday: false },
  { date: 6, isHoliday: true },
  { date: 7, isHoliday: false, todos: ["🏃‍♀️ 달리기", "🚗 여행"]},
  { date: 8, isHoliday: false },
  { date: 9, isHoliday: false },
  { date: 10, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
  { date: 11, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"]},
  { date: 12, isHoliday: false },
  { date: 13, isHoliday: false },
  { date: 14, isHoliday: false },
  { date: 15, isHoliday: true },
  { date: 16, isHoliday: false, todos: ["🏃‍♀️ 달리기", "🏞 등산"]},
  { date: 17, isHoliday: false },
  { date: 18, isHoliday: false },
  { date: 19, isHoliday: false },
  { date: 20, isHoliday: false },
  { date: 21, isHoliday: false },
  { date: 22, isHoliday: false },
  { date: 23, isHoliday: false, todos: ["🏃‍♀️ 달리기", "🧹 청소"] },
  { date: 24, isHoliday: false },
  { date: 25, isHoliday: false },
  { date: 26, isHoliday: false },
  { date: 27, isHoliday: false },
  { date: 28, isHoliday: false },
  { date: 29, isHoliday: false, todos: ["🏃‍♀️ 달리기", "🏀 농구"] },
  { date: 30, isHoliday: false },
  { date: 31, isHoliday: false },
];

const Calendar = () => {
  return (
    <ul className="bg-blue-50 grid grid-cols-7 gap-4">
      <li className="bg-purple-100 w-[120px] h-[200px] text-xl rounded-md"></li>
      <li className="bg-purple-100 w-[120px] h-[200px] text-xl rounded-md"></li>
      <li className="bg-purple-100 w-[120px] h-[200px] text-xl rounded-md"></li>
      {calendarData.map((v,i) => (
        <DateCard key={i} date={v.date} isHoliday={v.isHoliday} todos={v.todos}></DateCard>
      ))}
    </ul>
  );
};

export default Calendar;