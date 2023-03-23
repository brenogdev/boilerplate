import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

type TableHeadProps = {
  headValues: string[];
};

export const CustomTalbleHead: React.FC<TableHeadProps> = ({
  headValues,
}: TableHeadProps) => {
  return (
    <TableHead>
      <TableRow>
        {headValues.map((value, index) => (
          <TableCell key={index}>{value}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
