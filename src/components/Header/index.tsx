import React from 'react';
import { AppBar, Icon, IconButton, Toolbar } from '@mui/material';
import { useDrawerContext } from '../../hooks/useDrawerContext';

export const Header: React.FC = () => {
  const { handleToggleDrawer } = useDrawerContext();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          onClick={handleToggleDrawer}
          size="large"
          sx={{
            color: '#fff'
          }}
          aria-label="menu"
        >
          <Icon>menu</Icon>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
