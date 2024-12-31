'use server';
import Conhecimentos from '../components/Conhecimentos';
// import Contato from '../components/Contato';
// import Projetos from '../components/Projetos';
import { QueryType } from './types';
import { fetchHygraphQuery } from './utils/getDataHygraph';

const getDataPage = async (): Promise<QueryType | null> => {
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

  try {
    const dados = await fetchHygraphQuery(query, 60);
    if (!dados || !dados.home) {
      throw new Error('Invalid data structure');
    }
    return dados as QueryType;
  } catch (error) {
    console.error('Error in getDataPage:', error);
    return null; // Retorne null se houver erro
  }
};

export default async function Home() {
  const resp = await getDataPage();
  // console.log(resp.home.sessaoProjetos.listaProjetos);
  return (
    <>
      {!resp ? (
        <div>Loading...</div>
      ) : (
        <section className='flex w-full flex-col items-center gap-5 overflow-y-scroll px-5 py-5 md:px-10 lg:px-0'>
          aaaa
          {resp.home.sessaoConhecimentos && <Conhecimentos dados={resp.home.sessaoConhecimentos} />}
          {/* <Projetos dados={resp.home.sessaoProjetos.listaProjetos} /> */}
          {/* <Contato dados={resp.home.sessaoContato} /> */}
        </section>
      )}
    </>

    // <div>aaaa</div>
  );
}
