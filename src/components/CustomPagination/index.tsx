import { useState } from "react";
import { Pagination } from "@mui/material";

type PaginationProps = {
  count: number;
  onPageChange: (page: number) => void;
};

export const CustomPagination = ({ count, onPageChange }: PaginationProps) => {
  const [page, setPage] = useState(1);

  const handleChange = (_: any, value: number) => {
    setPage(value);
    onPageChange(value);
  };

  return (
    <Pagination
      count={count}
      page={page}
      onChange={handleChange}
      variant="outlined"
      color="primary"
    />
  );
};

