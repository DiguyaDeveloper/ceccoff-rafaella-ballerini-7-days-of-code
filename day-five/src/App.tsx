import { useState } from "react";
import { Container, Typography } from "@mui/material";
import { FoodForm } from "./components/food-form/food-form";
import { FoodTable } from "./components/food-table/food-table";

type Food = {
  name: string;
  category: string;
};

export function App() {
  const [foods, setFoods] = useState<Food[]>([]);

  const handleAddFood = (food: Food) => {
    setFoods([...foods, food]);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Lista de Alimentos
      </Typography>
      <FoodForm onAddFood={handleAddFood} />
      <FoodTable foods={foods} />
    </Container>
  );
}
