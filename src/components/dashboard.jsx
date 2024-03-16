"use client";
export default function dashboard() {
  return (
    <div className="flex-1 bg-gray-100">
      <div className="grid grid-cols-2 gap-8 p-8 text-black">
        <div className="bg-gray-300 p-4 rounded-md shadow-md h-[100px] flex items-center justify-center hover:bg-slate-400  hover:ring-4 hover:ring-slate-800 hover:ring-opacity-50 hover:ring-offset-2">
          <a href="/customizespace"> Create Customised Warehouse Model</a>
        </div>
        <div className="bg-gray-300 p-4 rounded-md shadow-md h-[100px] flex items-center justify-center  hover:bg-slate-400  hover:ring-4 hover:ring-slate-800 hover:ring-opacity-50 hover:ring-offset-2 ">
          <a href="http://localhost:4000/">Market Analysis</a>
        </div>
        <div className="bg-gray-300 p-4 rounded-md shadow-md h-[480px]  hover:ring-4   hover:bg-slate-400  hover:ring-slate-800 hover:ring-opacity-50 hover:ring-offset-2 overflow-scroll">
          <div className="flex justify-center">
            {" "}
            Current Inventory Statistics
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {/* Total Quantity */}
            <div className="bg-gray-300 p-3 rounded-md shadow-md hover:ring-4 hover:ring-slate-400 hover:ring-opacity-50 hover:ring-offset-4 hover:text-black">
              <h2 className="text-xl font-bold mb-2">
                Total Quantity in Inventory
              </h2>
              <p>1000 units</p>
            </div>

            {/* Number of Small Sortable Items */}
            <div className="bg-gray-300 p-3 rounded-md shadow-md hover:ring-4 hover:ring-slate-400 hover:ring-opacity-50 hover:ring-offset-4">
              <h2 className="text-xl font-bold mb-2">
                Number of Small Sortable Items
              </h2>
              <p>500 units</p>
            </div>

            {/* Number of Large Sortable Items */}
            <div className="bg-gray-300 p-3 rounded-md shadow-md hover:ring-4 hover:ring-slate-400 hover:ring-opacity-50 hover:ring-offset-4">
              <h2 className="text-xl font-bold mb-2">
                Number of Large Sortable Items
              </h2>
              <p>300 units</p>
            </div>

            {/* Number of Large Non-Sortable Items */}
            <div className="bg-gray-300 p-3 rounded-md shadow-md hover:ring-4 hover:ring-slate-400 hover:ring-opacity-50 hover:ring-offset-4">
              <h2 className="text-xl font-bold mb-2">
                Number of Large Non-Sortable Items
              </h2>
              <p>200 units</p>
            </div>

            {/* Remaining Storage */}
            <div className="bg-gray-300 p-3 rounded-md shadow-md hover:ring-4 hover:ring-slate-400 hover:ring-opacity-50 hover:ring-offset-4">
              <h2 className="text-xl font-bold mb-2">Remaining Storage</h2>
              <p>2000 sq ft</p>
            </div>

            <div className="bg-gray-300 p-3 rounded-md shadow-md hover:ring-4 hover:ring-slate-400 hover:ring-opacity-50 hover:ring-offset-4">
              <h2 className="text-xl font-bold mb-2">Maximum Storage</h2>
              <p>2000 sq ft</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 p-3 rounded-md shadow-md h-[480px] hover:ring-4 hover:ring-slate-800 hover:ring-opacity-50 hover:ring-offset-2  hover:bg-slate-400 ">
          <div className=" flex justify-center align-middle pb-10 pt-5">
            Transactions
          </div>
          <div className="w-[80%] h-[30%] m-auto bg-stone-400 rounded-xl p-4 lg:p-8 text-stone-800 text-center border-4 border-stone-800 font-bold">
            <div>Total Revenue</div>
            <div className="pt-2 text-md lg:text-xl">&#x20B9; 500000</div>
          </div>
          <div className=" flex flex-wrap justify-around font-bold mt-12">
            <div className=" h-[5rem] lg:h-[10rem] mt-4 rounded-2xl p-2 lg:p-10  bg-stone-400  border-4 border-stone-800">
              <div className="text-center text-stone-800">Total Profit</div>
              <div className="pt-2 text-md lg:text-xl text-center">
                &#x20B9; 20000
              </div>
            </div>
            <div className=" h-[5rem] lg:h-[10rem]  mt-4 rounded-2xl p-2 lg:p-10 bg-stone-400  border-4 border-stone-800 pb-5">
              <div className="text-center text-stone-800">Cash Burn</div>
              <div className="pt-2 text-md lg:text-xl text-center">
                &#x20B9; 10000
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
