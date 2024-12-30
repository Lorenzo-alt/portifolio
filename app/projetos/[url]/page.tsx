import Projeto from '@/app/components/ProjetoComponents/Projeto';
import { Projeto as ProjetoType } from '@/app/types';
import { fetchHygraphQuery } from '@/app/utils/getDataHygraph';
import React from 'react';

type Props = {
  params: { url: string };
};

export default async function Page({ params }: Props) {
  const getDataPage = (): Promise<ProjetoType> => {
    const query = `
query MyQuery {
  projetoModels(where: {url: "${params.url}"}) {
    titulo
    url
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
    descricao {
      html
    }
    fichaTecnica(first: 30) {
      ... on Conhecimento {
        titulo
        icone {
          url
        }
      }
    }
    urlGit
    urlLive
  }
}
      `;
    const dados = fetchHygraphQuery(query, 60);

    // dados.then((resp) => console.log(resp));

    return dados as Promise<ProjetoType>;
  };

  const resp = await getDataPage();

  return (
    <section className='flex w-full flex-col items-center gap-5 overflow-y-scroll px-5 py-5 md:px-10 lg:px-0'>
      <Projeto dados={resp.projetoModels![0]} />
    </section>
  );
}
