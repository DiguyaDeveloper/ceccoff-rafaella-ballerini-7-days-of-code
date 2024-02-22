import React from "react";
import { Grid, Typography } from "@mui/material";
import { RadioButton } from "../radio-button/radio-button";

const stack = {
  back: {
    id: "FRONT",
    name: "Frontend",
  },
  front: {
    id: "BACK",
    name: "Backend",
  },
};

type StackFormProps = {
  onAnswer: (response: string) => void;
};

export const StackForm: React.FC<StackFormProps> = ({ onAnswer }) => {
  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Qual a Stack que você irá trilhar?
      </Typography>

      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <form>
          {Object.entries(stack).map(([, value]) => {
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
