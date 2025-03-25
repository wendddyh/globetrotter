import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import SearchBar from "~/components/SearchBar";
import Filter from "~/components/Filter";
import CountryCard from "~/components/CountryCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
    <div className="w-screen h-full bg-amber-500">
      <Welcome />
      <SearchBar />
      <Filter />
      <CountryCard />
    </div>

    </>
  );
}
