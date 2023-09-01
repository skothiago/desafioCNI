import { jsPDF } from "jspdf";
import "jspdf-autotable";

export const PrintDocumentImport = (data) => {
  console.log(data);
  const doc = new jsPDF("landscape");

  doc.autoTable({
    startY: 30,
    theme: "grid",
    styles: { fontSize: 9 },
    headStyles: { fillColor: [15, 76, 129] }, // European countries centered
    body: data,
    margin: { top: 30 },
    columns: [
      { header: "Nome", dataKey: "nome" },
      { header: "Email", dataKey: "email" },
      { header: "Sexo", dataKey: "sexo" },
      { header: "Fone", dataKey: "fone" },
      { header: "Data de nascimento", dataKey: "dtNasc" },
      { header: "Frase motivacional", dataKey: "fraseMotiv" },
    ],
  });
  doc.save("Pessoas.pdf");
};
