import ExpertiseCard from "@/components/Home/ExpertiseCard";
import Body from "@/components/template/Body";
import Form from "@/components/template/Form";
import H1 from "@/components/template/H1";
import { IconBook } from "@/components/template/Icons";
import Layout from "@/components/template/Layout";

export default function Home() {
  return (
    <Layout>
      <Body
        banner="bg-BannerHome"
        title="A importancia da propriedade intelectual e tecnologia"
      >
        <div className="text-justify md:text-left text-base md:text-lg flex flex-col gap-y-5 border-b border-black/20 pb-2">
          <p>A área de Propriedade Intelectual (PI) e Tecnologia desempenha um papel fundamental na proteção e exploração de ativos intangíveis em um ambiente empresarial cada vez mais digital. Por meio da proteção de patentes, marcas registradas, direitos autorais e segredos comerciais, as empresas podem garantir a exclusividade de suas inovações e diferenciais competitivos. Além disso, a conformidade com regulamentações de privacidade de dados e segurança cibernética é essencial para proteger informações confidenciais e mitigar o risco de violações de dados, enquanto contratos de tecnologia bem elaborados fornecem uma estrutura legal para transações relacionadas a software, serviços de tecnologia da informação e desenvolvimento de software personalizado.
          </p>
          <p>
            A inovação tecnológica continua a moldar o cenário empresarial, com avanços em áreas como inteligência artificial, Internet das Coisas e blockchain oferecendo novas oportunidades e desafios. À medida que as empresas buscam adotar e implementar tecnologias inovadoras, a proteção adequada dos direitos de propriedade intelectual e o cumprimento das regulamentações são cruciais. Advogados especializados em PI e tecnologia desempenham um papel fundamental ao fornecer orientação jurídica estratégica, elaborar contratos personalizados, lidar com disputas de propriedade intelectual e garantir que as empresas estejam em conformidade com as leis e regulamentos aplicáveis neste cenário em rápida evolução.
          </p>
        </div>
        <H1>Nossas Áreas de Atuação são:</H1>
        <div className="flex gap-10 flex-wrap justify-center">
          <ExpertiseCard href="/" icon={IconBook(8)} title="Fusões e Aquisições" >
            Envolve assessorar empresas em transações de fusões, aquisições, cisões e incorporações. Os advogados ajudam na due diligence, negociação de contratos, estruturação de transações e obtenção de aprovações regulatórias.
          </ExpertiseCard>

          <ExpertiseCard href="/" icon={IconBook(8)} title="Governança Corporativa" >
            Temos advogados especializados em governança corporativa que ajudam empresas a estabelecer boas práticas de governança, incluindo a estruturação de conselhos de administração, desenvolvimento de políticas corporativas, e assessoria sobre conformidade regulatória e ética empresarial.
          </ExpertiseCard>
          <ExpertiseCard href="/" icon={IconBook(8)} title="Conformidade e Regulamentação" >
            Envolve garantir que as empresas cumpram todas as leis e regulamentos aplicáveis em suas operações. Os advogados auxiliam na interpretação e implementação de normas legais, como leis de proteção ao consumidor, leis trabalhistas, normas ambientais, entre outras.
          </ExpertiseCard>

          <ExpertiseCard href="/" icon={IconBook(8)} title="Contratos Comerciais" >
            Nossos advogados trabalham nesta área para ajudar empresas a negociar e elaborar contratos comerciais, incluindo contratos de fornecimento, distribuição, prestação de serviços, franquias, licenciamento de propriedade intelectual e acordos de joint venture.
          </ExpertiseCard>

          <ExpertiseCard href="/" icon={IconBook(8)} title="Litígios Empresariais e Arbitragem" >
            Esta área abrange disputas legais envolvendo empresas, incluindo litígios contratuais, disputas societárias, ações de responsabilidade civil contra diretores e administradores, e outras questões comerciais. Advogados representam clientes em processos judiciais e arbitrais, buscando proteger seus interesses e resolver disputas de forma eficaz.
          </ExpertiseCard>
        </div>
      </Body>
      <section className="flex flex-col items-center bg-slate-700/60 my-6">
        <H1 className="text-white">Nossos diferenciais:</H1>
        <div className="w-4/5 text-light-300 text-xl pb-16">
          A Pacificus & Associados se destaca no campo do Direito Empresarial e Societário por sua expertise especializada, abordagem estratégica, compromisso com a excelência, atendimento personalizado e capacidade de oferecer soluções inovadoras e criativas para as necessidades de seus clientes. Com uma equipe altamente qualificada e comprometida, nosso escritório está pronto para fornecer serviços jurídicos de alta qualidade e orientação estratégica para empresas em busca de sucesso e conformidade legal.
        </div>
      </section>

      <Form/>
    </Layout>
  );
}
