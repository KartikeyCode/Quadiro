import Image from "next/image";

export default function Home() {
  return (
   <div className="min-h-screen bg-slate-700 flex items-center justify-center">
      <div className="p-5 rounded-xl bg-slate-300 w-3/4 lg:min-h-[30rem] xl:min-h-[40rem] 2xl:min-h-[50rem] flex flex-col items-center">
          <h1 className="text-3xl text-black font-semibold"> Assignment for Quadiro Technologies </h1>
          <div className="flex mt-24 justify-center gap-44 w-full">
          <button className="p-4 w-60 rounded-3xl bg-red-800 text-white text-4xl "> Admin </button>
          <button className="p-4 w-60 rounded-3xl bg-green-600 text-white text-4xl "> User </button>
          </div>
      </div>
   </div>
  );
}
