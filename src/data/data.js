export const data = [
    {
        id: 5,
        pergunta: "Tipo de operação:",
        options: [
            "Criação",
            "Atualização",
            "Descontinuação"
        ],
        placeholder: "",
        type: "select",
        inputType: "",
        required: true
    },
    {
        id: 1,
        pergunta: "Qual o tipo de documento que estamos tratando?", // Criar pergunta "quem está criando esse documento?"
        options: [
            "DOCUMENTO OFICIAL",
            "DOCUMENTO EXTERNO",
            "CÓPIA NÃO CONTROLADA",
            "DOCUMENTO OBSOLETO",
            "DOCUMENTO INTERNO"
        ],
        placeholder: "",
        type: "select",
        inputType: "",
        required: true
    },
    {
        id: 2,
        pergunta: "Finalidade:",
        options: [
            "FM - Formulário",
            "IT - Instrução de Trabalho",
            "LM - Lista Mestra de Documentos",
            "POC - Políticas Corporativas",
            "PR - Procedimento",
            "EE - Especificação de Engenharia/Técnica",
            "MAN - Manual"
        ],
        placeholder: "",
        type: "select",
        inputType: "",
        required: true
    },
    {
        id: 3,
        pergunta: "Departamento Desenvolvedor da Solução:",
        options: [
            "RH - Recursos Humanos",
            "SGQ - Sistema de Gestão de Qualidade",
            "COM - Compras",
            "ET - Engenharia Técnica",
            "EP - Engenharia de Projeto",
            "CMC - Comercial",
            "FIN - Financeiro",
            "MKT - Marketing",
            "SST - Saúde e Segurança do Trabalho",
            "SV - Service",
            "TI - Tecnologia da Informação"
        ],
        placeholder: "",
        type: "select",
        inputType: "",
        required: true
    },
    {
        id: 4,
        pergunta: "Procedimento a ser realizado:",
        options: [
            "ENG_Proj - Engenharia de Projetos",
            "ENG_Tec - Engenharia Técnica",
            "ENG_Com - Engenharia Comercial",
            "COM - Compras",
            "FIN - Financeiro",
            "RH - Recursos Humanos",
            "SGQ - Sistema de Gestão da qualidade (processos & qualidade)",
            "MKT - Marketing",
            "SST - Saúde e Segurança do Trabalho",
            "SV - Service",
            "TI - Tecnologia da Informação"
        ],
        placeholder: "",
        type: "select",
        inputType: "",
        required: true
    },
    {
        id: 6,
        pergunta: "Qual era a sigla do último documento?:",
        options: [],
        placeholder: 'Ex: "IT_TI_COM_01"',
        type: "input",
        inputType: "text",
        required: true
    },
    {
        id: 7,
        pergunta: "Qual é o objetivo dessa documentação?",
        options: [],
        placeholder: "Descreva o objetivo dessa documentação...",
        type: "textarea",
        inputType: "",
        required: true
    },
    {
        id: 8,
        pergunta: "O documento é para o Chile?",
        options: [
            "Sim",
            "Não"
        ],
        placeholder: "",
        type: "input",
        inputType: "radio",
        required: true
    },
    {
        id: 9,
        pergunta: "Selecione um ou mais destinatários:",
        options: [
            "Todos os departamentos",
            "Recursos Humanos",
            "Sistema de Gestão de Qualidade",
            "Compras",
            "Engenharia Técnica",
            "Engenharia de Projeto",
            "Comercial",
            "Financeiro",
            "Marketing",
            "Saúde e Segurança do Trabalho",
            "Service",
            "Tecnologia da Informação"
        ],
        placeholder: "",
        type: "input",
        inputType: "checkbox",
        required: false
    },
    {
        id: 11,
        pergunta: "Se houver, adicione todos os links dos arquivos necessários para o entendimento do documento:",
        options: [],
        placeholder: "Insira seus links aqui...",
        type: "textarea",
        inputType: "",
        required: false
    },
    {
        id: 12,
        pergunta: "Descreva passo a passo para as atividades do documento:",
        options: [],
        placeholder: "Descrição passo a passo da atividade...",
        type: "textarea",
        inputType: "",
        required: false
    },
    {
        id: 13,
        pergunta: "Dê um título para o documento:",
        options: [],
        placeholder: "Digite o título...",
        type: "input",
        inputType: "text",
        required: true
    }
];