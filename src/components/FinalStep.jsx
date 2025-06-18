import { saveAs } from "file-saver";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { useEffect, useState } from "react";
import { FaRegFileWord } from "react-icons/fa";
import { TailSpin } from "react-loading-icons";
import { gerarSigla } from "../utils/siglaGenerator";

const FinalStep = ({ responses }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [docBlob, setDocBlob] = useState(null);
  const [tituloDocumento, setTituloDocumento] = useState("");
  const [isObsoleto, setIsObsoleto] = useState(false);

  useEffect(() => {
    const resp5 = responses.find(resp => resp.id === 5)?.resposta;
    
    let resp1;
    if (resp5 === "Descontinuação") {
      resp1 = "DOCUMENTO OBSOLETO";
      setIsObsoleto(true);
    } else {
      resp1 = responses.find(resp => resp.id === 1)?.resposta;
    }

    const resp7 = responses.find(resp => resp.id === 7)?.resposta;
    const resp9 = responses.find(resp => resp.id === 9)?.resposta;
    const resp11 = responses.find(resp => resp.id === 11)?.resposta;
    const resp12 = responses.find(resp => resp.id === 12)?.resposta;
    const resp13 = responses.find(resp => resp.id === 13)?.resposta;

    setTituloDocumento(resp13 || "Documento");

    const loadTemplateAndGenerateDoc = async () => {
      try {
        const sigla = gerarSigla(responses);
        const response = await fetch(`/Modelo_iso.docx`);
        const arrayBuffer = await response.arrayBuffer();
        const zip = new PizZip(arrayBuffer);
        const doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
        });

        const data = {
          sigla,
          resposta_1: resp1 || "",
          resposta_7: resp7 || "",
          resposta_9: Array.isArray(resp9) ? resp9.join(', ') : resp9 || "",
          resposta_11: resp11 || "",
          resposta_12: resp12 || "",
          data_atual: new Date().toLocaleDateString("pt-br"),
          titulo_do_documento: resp13,
        };
        
        doc.render(data);
        const blob = doc.getZip().generate({ type: "blob" });
        setDocBlob(blob);
      } catch (error) {
        console.error("Erro ao gerar documento:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTemplateAndGenerateDoc();
  }, [responses]);

  const handleDownload = () => {
    if (docBlob) {
      const fileName = isObsoleto 
        ? `${tituloDocumento} (OBSOLETO - Descontinuado).docx` 
        : `${tituloDocumento}.docx`;
      saveAs(docBlob, fileName);
    }
  };

  return (
    <main className="main-container">
      <section className="content-container text-center py-11">
        <h1 className="text-4xl">Dados enviados!</h1>
        {isLoading ? (
          <div className="flex gap-6 items-center flex-col">
            <p>Sua documentação será gerada em alguns instantes...</p>
            <TailSpin stroke="#000" speed={1.5} />
          </div>
        ) : (
          <>
            <div
              className="w-full h-32 flex justify-center items-center border cursor-pointer hover:text-blue-600 transition"
              onClick={handleDownload}
              onKeyDown={e => e.key === "Enter" && handleDownload()}
              title="Clique para baixar o documento Word"
              tabIndex="0"
              aria-label="Botão de download da documentação iso em arquivo word"
            >
              <FaRegFileWord size={48} />
            </div>
            <p className="text-start">Documento criado com sucesso.</p>
          </>
        )}
      </section>
    </main>
  );
};

export default FinalStep;