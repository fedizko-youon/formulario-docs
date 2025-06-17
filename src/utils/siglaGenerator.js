export const gerarSigla = (responses) => {
  const resp5 = responses.find(resp => resp.id === 5)?.resposta;
  const resp6 = responses.find(resp => resp.id === 6)?.resposta;
  const resp8 = responses.find(resp => resp.id === 8)?.resposta;
  
  let sigla;
  
  const capturarSiglas = () => {
    const idsDesejados = [2, 3, 4];
    sigla = responses
      .filter(resp => idsDesejados.includes(resp.id) && typeof resp.resposta === "string")
      .map(resp => resp.resposta.split(" ")[0] + "_")
      .join("");
    sigla += "01";
    return sigla;
  };

  if (resp5 === "Criação") {
    sigla = capturarSiglas();
    if (resp8 === "Sim") {
      const partes = sigla.split("_");
      if (partes.length > 2) {
        const versao = partes.pop();
        partes.push("CL");
        partes.push(versao);
        sigla = partes.join("_");
      }
    }
  } else if (resp5 === "Atualização") {
    sigla = resp6 || ""; 
    if (sigla) {
      const siglaPartes = sigla.split("_");
      const versaoStr = siglaPartes.pop();
      const versaoNum = parseInt(versaoStr, 10) + 1;
      const novaVersao = versaoNum < 10 ? `0${versaoNum}` : `${versaoNum}`;
      sigla = [...siglaPartes, novaVersao].join("_");
    }
  } else if (resp5 === "Descontinuação") {
    sigla = resp6;
  }

  return sigla;
};