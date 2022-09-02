import { currencyData } from "../../data";

const ExchageEl = ({color, setColor}) => {
  console.log(color)

  return (
    <div className="w-1/2 flex flex-col h-full justify-between p-4">
      <div className="grid grid-cols-4 gap-x-1 text-center h-1/5 items-center cursor-pointer text-slate-700">
        {currencyData.map((item, index) => {
          return (
            <div
              onClick={() => setColor(item.cur)}
              key={index}
              className={`flex items-center rounded-md justify-start transition-all duration-300
            ${
              color == item.cur ? "ring-2 ring-sky-400 bg-gradient-to-br from-green-400 to-sky-400 text-white" : "bg-slate-100"
            } h-full`}
            >
              <img
                src={item.country}
                className={`object-cover w-6 h-6 rounded-full mx-2  ${
                  color == item.cur
                    ? "grayscale-0 opacity-100"
                    : "grayscale opacity-50"
                }`}
              />
              {item.cur}
            </div>
          );
        })}
      </div>
      <input
        type="text"
        className="bg-indigo-200 h-3/5 rounded-md text-[80px] px-8 "
      />
    </div>
  );
};

export default ExchageEl;
