import DateCard from "./DateCard";

const Calendar = () => {
  return (
    <ul className="bg-blue-50 grid grid-cols-7 gap-4">
      <li className="bg-purple-100 w-[120px] h-[120px] text-xl rounded-md"></li>
      <li className="bg-purple-100 w-[120px] h-[120px] text-xl rounded-md"></li>
      <li className="bg-purple-100 w-[120px] h-[120px] text-xl rounded-md"></li>
      <DateCard date={1} />
      <DateCard date={2} />
      <DateCard date={3} />
      <DateCard date={4} />
      <DateCard date={5} />
      <DateCard date={6} isHoliday={true} />
      <DateCard date={7} />
      <DateCard date={8} />
      <DateCard date={9} />
      <DateCard date={10} />
      <DateCard date={11} />
      <DateCard date={12} />
      <DateCard date={13} />
      <DateCard date={14} />
      <DateCard date={15} isHoliday={true} />
      <DateCard date={16} />
      <DateCard date={17} />
      <DateCard date={18} />
      <DateCard date={19} />
      <DateCard date={20} />
      <DateCard date={21} />
      <DateCard date={22} />
      <DateCard date={23} />
      <DateCard date={24} />
      <DateCard date={25} />
      <DateCard date={26} />
      <DateCard date={27} />
      <DateCard date={28} />
      <DateCard date={29} />
      <DateCard date={30} />
      <DateCard date={31} />
    </ul>
  );
};

export default Calendar;