import React from "react";
import { Grid, Typography } from "@mui/material";
import { RadioButton } from "../radio-button/radio-button";

const options = [
  {
    id: "spec",
    name: "Especialista",
  },
  {
    id: "gen",
    name: "Fullstack",
  },
];

type SpecFormProps = {
  onAnswer: (response: string) => void;
};

export const SpecForm: React.FC<SpecFormProps> = ({ onAnswer }) => {
  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Você quer ser
      </Typography>

      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <form>
          {options.map((value) => {
            return (
              <RadioButton
                key={value.name}
                id={value.id}
                name={value.name}
                onSelect={onAnswer}
              ></RadioButton>
            );
          })}
        </form>
      </Grid>
    </>
  );
};
