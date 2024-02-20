import React, { useState } from "react";
import { TextField, MenuItem, Button, Grid } from "@mui/material";
import { FoodCategory } from "../../shared/enums/categories";

type Food = {
  name: string;
  category: string;
};

type FoodFormProps = {
  onAddFood: (food: Food) => void;
};

export const FoodForm: React.FC<FoodFormProps> = ({ onAddFood }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleAddFood = () => {
    if (!name || !category) return;

    onAddFood({ name, category });
    setName("");
    setCategory("");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Nome do alimento"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          select
          label="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          fullWidth
        >
          {Object.keys(FoodCategory).map((key) => {
            return (
              <MenuItem key={key} value={key}>
                {FoodCategory[key as keyof typeof FoodCategory]}
              </MenuItem>
            );
          })}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleAddFood}>
          Adicionar
        </Button>
      </Grid>
    </Grid>
  );
};
