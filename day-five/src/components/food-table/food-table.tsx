import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { FoodCategory } from "../../shared/enums/categories";

type Food = {
  name: string;
  category: string;
};

type FoodTableProps = {
  foods: Food[];
};

export const FoodTable: React.FC<FoodTableProps> = ({ foods }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome do produto</TableCell>
            <TableCell>Categoria do produto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foods.map((food, index) => (
            <TableRow key={index}>
              <TableCell>{food.name}</TableCell>
              <TableCell>
                {FoodCategory[food.category as keyof typeof FoodCategory]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
