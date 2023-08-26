import { useState } from "react";
import AccordionItem from "./AccordionItem";

const data = [
  {
    id: 1,
    title: "Accordion 1",
    content:
      "this is a hjvWh/lkfhskdfhsldKfh/slkDFHSlKFHSLKHFLSHDFLKHSDFvjhvhvvjhvjhvjvhjvhjvjhvjfhnfzgjsfhktdksryksksrkyryjzrdyjkkszrksxt7kxtuko8yldcyi;dcy9;vjhvjhvjvjhvjv test to test out the functionality of sample accordiSDGASDGSDGSDGSDGSDGSDGSDGSDGSDGon",
  },
  {
    id: 2,
    title: "Accordion 2",
    content:
      "this is a sample test to test out the functionality of sample accordion",
  },
  {
    id: 3,
    title: "Accordion 3",
    content:
      "this is a sample test to test out the functionality of sample accordion",
  },
];
function Accordion() {
  const [open, setOpen] = useState(null);
  const handleOpener = (id) => {
    setOpen(id === open ? null : id);
  };
  return (
    <div className="Accordion">
      {data.map((item) => {
        return (
          <AccordionItem
            id={item.id}
            key={item.id}
            title={item.title}
            content={item.content}
            open={open}
            setOpen={handleOpener}
          />
        );
      })}
    </div>
  );
}

export default Accordion;
