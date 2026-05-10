const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-[390px] mx-auto bg-white min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;
