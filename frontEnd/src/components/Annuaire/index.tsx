import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/all";
import { User } from "../../utils/types";
import { useQuery } from "react-query";
import api from "../../utils/api";
import AnnuaireCard from "./AnnuaireCard";

const Annuaire = () => {
  const [search, setSearch] = useState<string>("");
  const [filteredData, setFilteredData] = useState<User[]>([]);

  const { data: users } = useQuery(["app", "users"], () => api.user.showAll(), {
    staleTime: Infinity,
  });

  useEffect(() => {
    const term = search.toLowerCase();

    const filterArray = users.data.filter((user: User) =>
      user.username.toLowerCase().includes(term)
    );

    setFilteredData(filterArray);
  }, [search]);

  return (
    <div className="h-[100vh] flex flex-col pt-24 justify-start items-center ">
      <div className="w-full backdrop-blur py-2 shadow-md">
        <h1 className="text-3xl text-primary-300 font-bold">ANNUAIRE</h1>
      </div>
      <div className="flex items-center backdrop-blur mt-4 rounded-full shadow-md px-6 py-3 mx-10  my-4 flew-grow max-w-3xl">
        <input
          type="text"
          className="w-full bg-transparent placeholder-slate-300 focus:outline-none"
          placeholder="Votre recherche"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FiSearch
          className={`h-7  ${
            search ? "text-primary-300 cursor-pointer" : "text-gray-400"
          }`}
          onClick={() => {}}
        />
      </div>
      <div className="flex flex-wrap justify-center w-full">
        {filteredData.length === 0
          ? users.data.map((user: User) => (
              <AnnuaireCard user={user} key={user.id} />
            ))
          : filteredData.map((user) => (
              <AnnuaireCard user={user} key={user.id} />
            ))}
      </div>
    </div>
  );
};

export default Annuaire;
