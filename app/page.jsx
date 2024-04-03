import PatternTable from "@/components/PatternTable";
import SearchBar from "@/components/Search";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-4 pt-24 lg:px-40 lg:pt-28 xl:px-60">
      <h1 className="absolute top-0 w-full text-center text-white bg-gray-800 py-4 text-3xl font-bold  ">Randomize Scrapper</h1>
      <div className="w-full mt-8">
        <SearchBar />
      </div>
      <div className="flex w-full flex-col space-x-4 mt-5 ">
        <PatternTable />

      </div>
    </main>
  );
}
