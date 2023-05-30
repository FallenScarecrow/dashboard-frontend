type MainContainerProps = {
  children: React.ReactNode;
};

const MainContainer: React.FunctionComponent<MainContainerProps> = ({ children }) => {
  return (
    <main className="h-screen flex-1 overflow-y-auto overflow-x-hidden bg-brutal-background text-brutal-on-background">
      {children}
    </main>
  );
};

export default MainContainer;
