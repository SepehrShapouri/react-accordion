import { useState } from "react";
import {ChevronDownIcon,ChevronUpIcon} from "@heroicons/react/24/outline"
function AccordionItem({ title, content }){
    const [isOpen,setIsOpen] = useState(false)
    const styles = {
        width:"1.2rem",
        transition:"all 0.2s ease-out",
        rotate:isOpen ? "180deg" : "0deg"
    }
  return (
    <div className={`accordion-item ${isOpen ? "accordion-item__expanded" : ""}`} onClick={()=> setIsOpen(is => !is)}>
      <div className="accordion-item__header"><p>{title}</p><ChevronDownIcon style={styles}/></div>
      <div className="accordion-item__content">{content}</div>
    </div>
  );
};

export default AccordionItem;
