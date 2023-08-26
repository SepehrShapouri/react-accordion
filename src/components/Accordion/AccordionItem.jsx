import { useState } from "react";
import {ChevronDownIcon,ChevronUpIcon} from "@heroicons/react/24/outline"
function AccordionItem({ title, content }){
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div className={`accordion-item ${isOpen ? "accordion-item__expanded" : ""}`} onClick={()=> setIsOpen(is => !is)}>
      <div className="accordion-item__header"><p>{title}</p><ChevronDownIcon className="accordion-item__chevron"/></div>
      <div className="accordion-item__content">{content}</div>
    </div>
  );
};

export default AccordionItem;
