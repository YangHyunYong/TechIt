const Box = ({name="Box", bgColor, isRounded}) => {
    return (
        <div className={`w-60 h-60 ${bgColor} ${isRounded && "rounded-full"} text-6xl font-bold flex justify-center items-center`}>
            {name}
        </div>
    );
}
export default Box;