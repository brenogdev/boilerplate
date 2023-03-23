import React from "react";
import {
  Icon,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import {
  useMatch,
  useNavigate,
  useResolvedPath,
  Link as RouterLink,
} from "react-router-dom";

type ListItemLinkProps = {
  to: string;
  label: string;
  icon: string;
  onClick?: () => void;
};

export const ListItemLink: React.FC<ListItemLinkProps> = ({
  to,
  label,
  icon,
  onClick,
}: ListItemLinkProps) => {
  const navigate = useNavigate();
  const resolvedPath = useResolvedPath(to);
  const match = useMatch({
    path: resolvedPath.pathname,
    end: false,
  });
  const theme = useTheme();

  function handleNavigate() {
    onClick?.();
    navigate(to);
  }

  return (
    <ListItem
      component={RouterLink}
      to={to}
      onClick={() => handleNavigate()}
      selected={!!match}
    >
      <ListItemIcon>
        <Icon color="primary">{icon}</Icon>
      </ListItemIcon>
      <ListItemText
        primary={label}
        sx={{
          color: match ? theme.palette.primary.main : theme.palette.grey[600],
        }}
      />
    </ListItem>
  );
};
