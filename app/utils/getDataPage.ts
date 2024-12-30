import { QueryType } from '../types';
import { fetchHygraphQuery } from './getDataHygraph';

export const getDataPage = async (): Promise<QueryType> => {
  const query = `
query MyQuery {
  home(where: {id: "clzc08cne0dpp07lu0l4lbxfl"}) {
    sessaoConhecimentos {
      conhecimentos(first: 30) {
        ... on Conhecimento {
          id
          titulo
          icone {
            url
          }
        }
      }
    }
    sessaoContato {
      dados {
        email
        telefone
      }
    }
    sessaoProjetos {
      listaProjetos {
        ... on Projeto {
          projetoModel {
            titulo
            fichaTecnica(first: 30) {
              ... on Conhecimento {
                titulo
                icone {
                  url
                }
              }
            }
            descricao {
              html
            }
            mocks {
              mockBrowser1 {
                url
              }
              mockBrowser2 {
                url
              }
              mockBrowser3 {
                url
              }
              mockMobile1 {
                url
              }
              mockMobile2 {
                url
              }
            }
            url
            urlGit
            urlLive
          }
        }
      }
    }
  }
}
`;
  const dados = fetchHygraphQuery(query, 60);

  // dados.then((resp) => console.log(resp.home.sessaoProjetos));

  return dados as Promise<QueryType>;
};
