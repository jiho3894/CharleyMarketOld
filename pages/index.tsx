import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid gap-10 bg-slate-400 py-20 px-20 ">
      <div className="rounded-3xl bg-white p-6 shadow-xl">
        <span className="text-3xl font-semibold">Select Item</span>
        <div className="my-2 flex justify-between">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <div className="flex justify-center">
          <button
            className="mx-auto mt-5 w-2/4 rounded-xl
          bg-blue-500 p-3 text-center text-white
          hover:bg-red-400 focus:bg-green-500
          active:bg-black active:text-white
          "
          >
            Checkout
          </button>
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-2xl text-white">Profile</span>
        </div>
        <div className="relative -top-5 rounded-3xl bg-white p-6">
          <div className="relative -top-16 flex items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 rounded-full bg-red-400" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
          </div>
          <div className="relative -mt-10 -mb-5 flex flex-col items-center">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center  justify-between text-3xl ">
              <span>←</span>
            </div>
            <div className="mb-2 flex items-center justify-between space-x-2 text-xl">
              <span>⭐ 4.9</span>
              <span className="rounded-md p-2 shadow-xl">❤</span>
            </div>
          </div>
          <div className="m-auto h-64 w-64 bg-red-400" />
          <div className="flex justify-between py-3">
            <div className="flex flex-col">
              <span className="text-xl font-bold">Swoon Lounge</span>
              <span className="text-gray-500">Chair</span>
              <div>
                <div className="mt-2 space-x-2">
                  <button className="h-5 w-5 rounded-full bg-yellow-500 ring-yellow-500 ring-offset-2 transition focus:ring-2" />
                  <button className="h-5 w-5 rounded-full bg-indigo-500 ring-indigo-500 ring-offset-2 transition focus:ring-2" />
                  <button className="h-5 w-5 rounded-full bg-teal-500 ring-teal-500 ring-offset-2 transition focus:ring-2" />
                </div>
              </div>
            </div>
            <div className="flex items-end space-x-5">
              <button className=" flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className=" flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="my-4 flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold">$450</span>
            </div>
            <button className="rounded-lg bg-blue-500 py-3 px-8 text-center text-xs text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-white p-10 shadow-xl"></div>
    </div>
  );
};

export default Home;
