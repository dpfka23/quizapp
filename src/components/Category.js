const Category =({categories,onSelect}) =>{
  return(
  <div className="category-select">
    <h1>Quiz</h1>
    <p>원하는 주제를 클릭하면<br/>퀴즈가 시작됩니다</p>
    {
      categories.map( (txt,idx)=>{
        return <button className="category" key={idx}
                onClick={()=>{onSelect(txt)}}
              >{txt}</button>
      } )
    }
  </div>
  );
};
export default Category;