
interface IAssociate {
    nome: string;
    email: string;
    training: string[];
    more: string[];
}

export const associates: IAssociate[] = [
    {
        nome: "Maria da Silva Gomes",
        email: "maria.gomes@pacificus.com",
        training: ["Doutora em Direito pela Universidade de São Paulo (USP)", "Especialização em Direito Empresarial Internacional", "Fluente em Inglês"],
        more: ["Consultoria jurídica", "negociação de contratos, representação em litígios empresariais"]
    },
    {
        nome: "Rafael Oliveira Santos",
        email: "rafael.santos@pacificus.com",
        training: ["Mestre em Direito Comercial pela Universidade Federal do Rio de Janeiro (UFRJ)", "especialização em Fusões e Aquisições", "Fluente em Espanhol"],
        more: ["Due diligence", "elaboração de contratos de M&A", "assessoria em transações empresariais"]
    },
    {
        nome: "Carolina Ferreira Lima",
        email: "carolina.lima@pacificus.com",
        training: ["Especialista em Direito Tributário pela Fundação Getúlio Vargas (FGV)", "com cursos avançados em Planejamento Tributário Internacional", "Fluente em Francês"],
        more: ["Planejamento tributário", "defesa em processos fiscais", "consultoria em questões tributárias"]
    },
    {
        nome: "Gustavo Costa Pereira",
        email: "gustavo.pereira@pacificus.com",
        training: ["Doutor em Direito Penal pela Universidade de Brasília (UnB)", "com cursos de especialização em Compliance e Direito Penal Econômico", "Fluente em Inglês"],
        more: ["Assessoria em crimes empresariais, compliance penal", "defesa em investigações criminais"]
    },
    {
        nome: "Isabela Santos Almeida",
        email: "isabela.almeida@pacificus.com",
        training: ["Especialista em Propriedade Intelectual pela Pontifícia Universidade Católica (PUC)", "com cursos avançados em Direito da Tecnologia", "Fluente em Inglês"],
        more: ["Registro de marcas e patentes", "defesa em litígios de PI", "assessoria em contratos de tecnologia"]
    },
    {
        nome: "Rodrigo Mendes Cardoso",
        email: "rodrigo.cardoso@pacificus.com",
        training: ["Mestre em Direito do Trabalho pela Universidade de São Paulo (USP)", "com cursos de especialização em Direito do Trabalho Coletivo", "Fluente em Espanhol"],
        more: ["Assessoria em questões trabalhistas", "negociação coletiva", "defesa em processos trabalhistas"]
    }
];
