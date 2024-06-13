import { FC, useState } from "react";
import Search from "./Search";
import { POKEMON_API } from "../../consts";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

const SearchWithData: FC = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const onShuffle = () => navigate(`/pokemon/${_.random(1025)}`);

  const onSearch = async () => {
    if (!search) return;
    const data = await fetch(`${POKEMON_API}/pokemon/${search}`).then((res) =>
      res.text()
    );
    if (data === "Not Found") {
      alert("Pokemon not found");
      return;
    }
    navigate(`/pokemon/${JSON.parse(data).id}`);
  };

  return (
    <Search
      search={search}
      setSearch={setSearch}
      onSearch={onSearch}
      onShuffle={onShuffle}
    />
  );
};

export default SearchWithData;
