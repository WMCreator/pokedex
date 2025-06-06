import Header from "@/components/Header";
import React from "react";

const ListsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <section className="o-page">{children}</section>
    </>
  );
};

export default ListsLayout;
