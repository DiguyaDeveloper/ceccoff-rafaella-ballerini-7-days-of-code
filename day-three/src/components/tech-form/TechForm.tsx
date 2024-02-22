import { useState } from "react";
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";

type TechFormProps = {
  onAnswer: (response: string) => void;
};

export const TechForm: React.FC<TechFormProps> = ({ onAnswer }) => {
  const [techSelected, setTechSelected] = useState<string>("");
  const [techs, setTechs] = useState<string[]>([]);

  const adicionartech = () => {
    if (techSelected && !techs.includes(techSelected)) {
      setTechs([...techs, techSelected]);
      onAnswer(techSelected);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="tech-label">tech</InputLabel>
          <Select
            labelId="tech-label"
            id="tech"
            value={techSelected}
            onChange={(e) => setTechSelected(e.target.value)}
            fullWidth
          >
            <MenuItem value="JavaScript">JavaScript</MenuItem>
            <MenuItem value="Java">Java</MenuItem>
            <MenuItem value="Python">Python</MenuItem>
            {/* Adicione mais opções conforme necessário */}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={adicionartech}>
          Adicionar
        </Button>
      </Grid>
    </Grid>
  );
};
