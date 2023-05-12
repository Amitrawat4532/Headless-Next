import React from "react";


type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <React.Fragment>
      <main
        className={`layout3xl:max-w-[1440px] p-4 md:p-6 lg:p-12 layout3xl:p-20 mb-20 md:mb-[72px] lg:mb-0 bg-black ${className}  `}
      >
        {children}
      </main>
      {/* <Footer footerMenu/> */}

    </React.Fragment>
  );
};

export default Layout
