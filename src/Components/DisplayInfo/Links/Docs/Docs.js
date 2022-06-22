import "./Docs.modules.css";

function Docs({docs}) {
  return <a target="_blank" href={docs} id="docs">{docs}</a>;
}

export default Docs;
