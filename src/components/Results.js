const Results =({ score, onRestart}) =>{
  return(
  <div className="results">
  <p className="p1">{score}점</p>
  <p className="p2">축하합니다!<br/>{score}p를 획득했습니다</p>
  <button className="btn1">공유하기</button>
  <button className="btn2"onClick={onRestart}>다른 주제</button>
  </div>
  );
  };
  export default Results;
  