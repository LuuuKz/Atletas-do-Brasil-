// app.js
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Limpa os resultados anteriores
    section.innerHTML = "";
  
    // Sai da função se a caixa de busca estiver vazia
    if (!campoPesquisa.trim()) {
      return;
    }
  
    let resultados = dados.filter(dado => {
      const titulo = dado.titulo.toLowerCase();
      const descricao = dado.descricao.toLowerCase();
      const tags = dado.tags.toLowerCase();
  
      // Divide a string de pesquisa em palavras-chave
      const palavrasChave = campoPesquisa.split(/\s+/);
  
      // Verifica se todas as palavras-chave estão presentes no título, descrição ou tags
      return palavrasChave.every(palavra => 
        titulo.includes(palavra) || 
        descricao.includes(palavra) || 
        tags.includes(palavra)
      );
    });
  
    // Exibe os resultados ou uma mensagem se nenhum resultado for encontrado
    if (resultados.length > 0) {
      resultados.forEach(dado => {
        section.innerHTML += `
          <div class="item-resultado">
            <h2>
              <a href="${dado.link}" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
          </div>
        `;
      });
    } else {
      section.innerHTML = "<p>Nada foi encontrado</p>";
    }
  }
  
  