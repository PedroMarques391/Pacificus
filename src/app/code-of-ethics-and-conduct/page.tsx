import Body from '@/components/template/Body'
import Layout from '@/components/template/Layout'
import React from 'react'
import type { Metadata} from "next";


export const metadata: Metadata = {
  title: `Pacificus & Associados | Código de Ética`,
  description: "Pacificus & Associados | Código de Ética",
}

const page = () => {
  return (
    <main>
      <Layout>
        <Body
          banner='bg-BannerEthics dark:bg-BannerEthicsWhite'
          title='Nosso Código de Ética e conduta'
        >
          <div className='flex flex-col gap-5 text-lg lg:text-xl text-light-200 mb-10 dark:text-white'>
            <p>A Pacificus & Associados é comprometida com os mais altos padrões de ética, integridade e conduta profissional em todas as suas operações. Este Código de Ética e Conduta estabelece as diretrizes e princípios pelos quais todos os funcionários, diretores, parceiros e contratados da empresa devem aderir em suas atividades comerciais e relacionamentos profissionais.</p>

            <p>A Pacificus & Associados valoriza a diversidade e respeita os direitos individuais de todos os seus membros e partes interessadas. Discriminação, assédio, intimidação ou tratamento injusto com base em raça, gênero, idade, religião, orientação sexual, nacionalidade, deficiência ou qualquer outra característica protegida são estritamente proibidos.</p>

            <p>Todos os membros da Pacificus & Associados devem agir com integridade e honestidade em todas as suas interações comerciais e representações da empresa. Isso inclui evitar conflitos de interesse, divulgar informações precisas e completas, e cumprir todas as leis, regulamentos e políticas aplicáveis.</p>

            <p>Os membros da Pacificus & Associados devem proteger informações confidenciais e sigilosas da empresa, clientes, parceiros e funcionários, e não devem divulgar ou compartilhar informações confidenciais sem autorização adequada. Além disso, devem respeitar a privacidade dos indivíduos e garantir o cumprimento das leis de proteção de dados aplicáveis.</p>

            <p>É esperado que os membros da Pacificus & Associados evitem situações que possam representar um conflito de interesse entre seus interesses pessoais e os da empresa. Qualquer conflito de interesse real ou percebido deve ser divulgado imediatamente e tratado de forma ética e transparente.</p>

            <p>A Pacificus & Associados está comprometida em cumprir todas as leis, regulamentos e normas aplicáveis em todas as jurisdições em que opera. Todos os membros devem estar cientes das leis relevantes que regem suas atividades e devem agir em conformidade, buscando orientação legal quando necessário.</p>

            <p>Os membros da Pacificus & Associados são responsáveis pela proteção adequada dos ativos e recursos da empresa, incluindo propriedade intelectual, dados, equipamentos e informações. O uso indevido, roubo, destruição ou desperdício de ativos da empresa são estritamente proibidos.</p>

            <p>A Pacificus & Associados reconhece sua responsabilidade social e ambiental e está empenhada em operar de forma sustentável e ética. Devemos respeitar o meio ambiente, promover práticas comerciais socialmente responsáveis e contribuir positivamente para as comunidades em que operamos.</p>

            <p>A Pacificus & Associados incentiva a comunicação aberta e transparente e fornece canais seguros para denúncias de violações deste Código de Ética e Conduta ou de qualquer comportamento antiético. Violações serão investigadas de forma justa e imparcial, e medidas disciplinares apropriadas serão aplicadas, incluindo rescisão do contrato de trabalho ou parceria, se necessário.</p>

            <p>A Pacificus & Associados está comprometida com a busca contínua da excelência em todas as suas operações e relacionamentos. Todos os membros devem se esforçar para alcançar os mais altos padrões de desempenho, qualidade e ética profissional em tudo o que fazem.</p>

            <p>Este Código de Ética e Conduta é parte integrante da cultura e identidade da Pacificus & Associados, e todos os membros são obrigados a aderir a esses princípios em todas as suas atividades profissionais. A adesão a este Código é essencial para preservar a reputação, integridade e sucesso da empresa.</p>
          </div>
        </Body>
      </Layout>
    </main>
  )
}

export default page