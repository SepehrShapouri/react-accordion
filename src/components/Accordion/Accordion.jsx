import AccordionItem from "./AccordionItem";

const data = [
  {
    id: 1,
    title: "Accordion 1",
    content:
      "this is a sample test to test out the functionality of sample accordion",
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
  }
];
function Accordion(){
  return <div className="Accordion">
    {data.map((item)=>{
        return <AccordionItem key={item.id} title={item.title} content={item.content}/>
    })}
  </div>;
};

export default Accordion;
