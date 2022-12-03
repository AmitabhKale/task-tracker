import React from "react";

type Headerprops = {
  title: string;
};

function Header({ title }: Headerprops) {
  return (
    <div className="my-1 p-2 bg-dark">
      <h2 className="text-light">{title}</h2>
    </div>
  );
}

export default Header;
