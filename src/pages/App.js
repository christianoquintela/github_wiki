import { useState } from "react";
import gitlogo from "../img/5.png";
import Input from "../componentes/input/input";
import Button from "../componentes/button/button";
import ItemRepo from "../componentes/itemRepo";
import { api } from "../services/api";

import "./App.css";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`users/${currentRepo}`);
    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);

      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      }
    }
    alert("Repositório não encontrado e ou já existe!");
    setCurrentRepo("");
  };

  const handleRemoveRepo = (id) => {
    const result = repos.filter((repo) => repo.id !== id);
    setRepos(result);
  };

  return (
    <div className='container_app'>
      <img
        src={gitlogo}
        width={72}
        height={72}
        alt="Logo Github transparente."
      />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      <div className='results'>
        {repos.map((repo) => (
          <ItemRepo
            handleRemoveRepo={handleRemoveRepo}
            repo={repo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
