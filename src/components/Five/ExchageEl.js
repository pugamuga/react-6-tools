import React from 'react'

const ExchageEl = () => {
  return (
    <div className="w-1/2 flex flex-col h-full justify-between p-4">
            <div className="flex w-full text-slate-700 shadow-md shadow-orange-100 ">
              <button className="ring-1 hover:opacity-50 ring-slate-200 bg-sky-400 py-[12px] w-full rounded-l-md">RUB</button>
              <button className="ring-1 hover:opacity-50 ring-slate-200 bg-orange-100 py-[12px] w-full">USD</button>
              <button className="ring-1 hover:opacity-50 ring-slate-200 bg-orange-100 py-[12px] w-full">EUR</button>
              <button className="ring-1 hover:opacity-50 ring-slate-200 bg-orange-100 py-[12px] w-full rounded-r-md">GBR</button>
            </div>
            <input type="text" className="bg-sky-100 h-3/5 rounded-md text-[80px] px-8 shadow-md shadow-orange-100" />
          </div>
  )
}

export default ExchageEl