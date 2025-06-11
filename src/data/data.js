export const data = [
    {
        id: 1,
        pergunta: "Qual o tipo de documento que estamos tratando?",
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
        respostaUsuario: ""
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
        respostaUsuario: ""
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
        respostaUsuario: ""
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
        respostaUsuario: ""
    },
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
        respostaUsuario: ""
    },
    {
        id: 6,
        pergunta: "O documento é para o Chile?",
        options: [
            "Sim",
            "Não"
        ],
        placeholder: "",
        type: "input",
        inputType: "radio",
        respostaUsuario: ""
    },
    {
        id: 7,
        pergunta: "Destinatários:",
        options: [
            "Todas as áreas",
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
        type: "select",
        inputType: "",
        respostaUsuario: ""
    },
    {
        id: 8,
        pergunta: "Crie um fluxograma do passo a passo de toda a operação que será realizada:",
        options: [],
        placeholder: 'Insira o link do site de Fluxograma (ex: "https://lucidchart.com") aqui...',
        type: "input",
        inputType: "text",
        respostaUsuario: ""
    },
    {
        id: 9,
        pergunta: "Insira o arquivo do fluxograma da operação:",
        options: [],
        placeholder: "",
        type: "input",
        inputType: "file",
        respostaUsuario: ""
    },
    {
        id: 10,
        pergunta: "Se houver, adicione todos os links dos arquivos necessários para o entendimento do documento:",
        options: [],
        placeholder: "Insira seus links aqui...",
        type: "textarea",
        inputType: "",
        respostaUsuario: ""
    },
    {
        id: 11,
        pergunta: "Descrição passo a passo da atividade:",
        options: [],
        placeholder: "Descreva passo a passo para as atividades do documento...",
        type: "textarea",
        inputType: "",
        respostaUsuario: ""
    }
]