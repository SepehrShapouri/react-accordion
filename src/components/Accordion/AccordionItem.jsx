import { useState } from "react";

function AccordionItem({ title, content }){
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div className={`accordion-item ${isOpen ? "accordion-item__expanded" : ""}`} onClick={()=> setIsOpen(is => !is)}>
      <div className="accordion-item__header">{title}</div>
      <div className="accordion-item__content">{content}</div>
    </div>
  );
};

export default AccordionItem;
