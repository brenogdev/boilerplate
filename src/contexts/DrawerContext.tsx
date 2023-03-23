import React, { createContext, useCallback, useState } from "react";

type DrawerOptionsProps = {
  icon: string;
  path: string;
  label: string;
};

type DrawerContextProps = {
  isDrawerOpen: boolean;
  handleToggleDrawer: () => void;
  drawerOptions: DrawerOptionsProps[];
  setDrawerOptions: (newDrawerOptions: DrawerOptionsProps[]) => void;
};

type DrawerProviderProps = {
  children: React.ReactNode;
};

export const DrawerContext = createContext({} as DrawerContextProps);

export const DrawerProvider: React.FC<DrawerProviderProps> = ({
  children,
}: DrawerProviderProps) => {
  const [drawerOptions, setDrawerOptions] = useState<DrawerOptionsProps[]>([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleSetDrawerOptions = useCallback(
    (newDrawerOptions: DrawerOptionsProps[]) => {
      setDrawerOptions(newDrawerOptions);
    },
    []
  );

  const handleToggleDrawer = useCallback(() => {
    setDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);

  return (
    <DrawerContext.Provider
      value={{
        drawerOptions,
        setDrawerOptions: handleSetDrawerOptions,
        isDrawerOpen,
        handleToggleDrawer,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
