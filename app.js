//função que pesquisa no objeto dados e exibe as informações
function pesquisar() {
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("busca").value;
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    // console.log(campoPesquisa);
    let  nome ="";
    let aplicacao = "";
    let tags = "";
     
    if(campoPesquisa == ""){
      section.innerHTML = "<p>Não foi encontrado nenhum produto ou tecnologia. Você precisa digitar algo neste campo.</p>"
      return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Itera sobre cada item do array de dados
    for (let item of dados) {
      nome = item.nome.toLowerCase();
      aplicacao = item.aplicacao.toLowerCase();
      tags = item.tags.toLowerCase();
      //se titulo includes campoPesquisa
        //então faça...
        if (tags.includes(campoPesquisa) || nome.includes(campoPesquisa) || aplicacao.includes(campoPesquisa)){
          resultados += `
            <div class="item-resultado">
              <h2>${item.nome}</h2>
              <p class="descricao-meta">${item.aplicacao}</p>
              <p class="descricao-meta">${item.exemplo}</p>
              <a href="${item.link}" target="_blank">Mais Informações</a>
            </div>
          `;
        } 
        // teste de commit

        if (!resultados) {
          resultados = "<p>Não foi encontrado nenhum produto ou tecnologia.</p>"
        }
      console.log(item.nome.includes(campoPesquisa));
      // Constrói o HTML para cada resultado, formatando as informações do item
    }
  
    // Atribui o HTML gerado para a seção de resultados, substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }