import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

type TechSelectedTableProps = {
  newTech: string;
};

type TechDTO = { name: string; resume: string };

export const TechSelectedTable: React.FC<TechSelectedTableProps> = ({
  newTech,
}) => {
  const [techs, setTechs] = useState<TechDTO[]>([]);

  useEffect(() => {
    fetchLanguageDetails();
  }, [newTech]);

  const fetchLanguageDetails = async () => {
    try {
      const response = await axios.get(
        "wiki/w/api.php?prop=extracts&exintro&explaintext",
        {
          params: {
            format: "json",
            action: "query",
            titles: newTech,
          },
        }
      );
      const pages = response.data.query.pages;
      const details = Object.keys(pages).map((key) => ({
        title: pages[key].title,
        extract: pages[key].extract,
      }));

      setTechs([
        ...techs,
        { name: details[0].title, resume: details[0].extract },
      ]);
    } catch (error) {
      console.error(
        "Erro ao buscar detalhes das linguagens de programação:",
        error
      );
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome da Tecnologia</TableCell>
            <TableCell>Resumo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {techs.map((value, key) => (
            <TableRow key={key}>
              <TableCell>{key}</TableCell>
              <TableCell>{value.name}</TableCell>
              <TableCell>{value.resume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
