'use server';

import Conhecimentos from '@/components/Conhecimentos';

import { getDataPage } from './utils/getDataPage';

// import Conhecimentos from '../components/Conhecimentos';
// import Contato from '../components/Contato';
// import Projetos from '../components/Projetos';

export default async function Page() {
  const resp = await getDataPage();
  // console.log(resp.home.sessaoProjetos.listaProjetos);
  return (
    <section className='flex w-full flex-col items-center gap-5 overflow-y-scroll px-5 py-5 md:px-10 lg:px-0'>
      aaaa
      <Conhecimentos dados={resp.home.sessaoConhecimentos} />
      {/* <Projetos dados={resp.home.sessaoProjetos.listaProjetos} />
      <Contato dados={resp.home.sessaoContato} /> */}
    </section>
    // <div>aaaa</div>
  );
}
