import React from "react";
import "./styles.css";

function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <div className='container_repo'>
      <hr />
      <img src={repo.avatar_url} alt="Imagem avatar" />
      <h3>{repo.name}</h3>
      <p>{repo.location}</p>
      <p>{repo.created_at}</p>
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        Repositórios
      </a>
      <div className='box_follow'>
        <p><strong>Seguidores:</strong> {repo.followers}</p>
        <p><strong>Seguindo:</strong> {repo.following}</p>        
      </div>
      
      <hr />
      <button onClick={handleRemove}>Remover</button>
      <hr />

    </div>
  );
}

export default ItemRepo;
