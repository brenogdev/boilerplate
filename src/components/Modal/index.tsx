import React, { forwardRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Box } from "@mui/system";

type ModalProps = {
  isOpen: boolean;
  handleClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  handleClose,
  title,
  children,
}: ModalProps) => {
  return (
    <Dialog
      maxWidth={"sm"}
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>
        <Typography variant="h4">{title}</Typography>
      </DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} marginTop={3}>
          {children}
        </Box>
      </DialogContent>
    </Dialog>
  );
};
