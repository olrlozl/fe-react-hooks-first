//// 아기 사자의 길
// import React, {useState} from "react";

// const Diary = () => {
//   // 이벤트 핸들러부터 state까지 모두 스스로 작성해보시길 바랍니다!
//   // 과연 어떤 state를 생성해주어야하고, 또 어떤 이벤트 핸들러가 필요할까요?
//   // 실습으로 다뤘던 두 문제를 참고하면 충분히 해결할 수 있으실거라 생각합니다!
//   const [subject, setSubject] = useState("");
//   const [content, setContent] = useState("");
  
//   const handleClickreset = () => {
//     setSubject("");
//     setContent("");
//   }

//   const handleClickfinish = () => {
//     alert("제목:" + subject + "\n내용:" + content);
//   }
  
//   const handleChangesubject = (e) => {
//     setSubject(e.target.value);
//   }
  
//   const handleChangecontent = (e) => {
//     setContent(e.target.value);
//   }

//   return (
//     <div className="diary">
//       <input name="subject" value={subject} placeholder="제목을 입력해주세요" onChange={handleChangesubject}/>
//       <br />
//       <textarea name="content" value={content} placeholder="내용을 입력해주세요" onChange={handleChangecontent}/>
//       <br />
//       <button onClick={handleClickreset}>초기화</button>
//       <br />
//       <button onClick={handleClickfinish}>입력 완료</button>
//     </div>
//   );
// };

// export default Diary;


//// 어른 사자의 길

import React, {useState} from "react";

const Diary = () => {
  // 이벤트 핸들러부터 state까지 모두 스스로 작성해보시길 바랍니다!
  // 과연 어떤 state를 생성해주어야하고, 또 어떤 이벤트 핸들러가 필요할까요?
  // 실습으로 다뤘던 두 문제를 참고하면 충분히 해결할 수 있으실거라 생각합니다!
  const [diary, setDiary] = useState(["", ""]);

  const handleClickreset = () => {
    setDiary(["",""]);
  }

  const handleClickfinish = () => {
    alert("제목:" + diary[0] + "\n내용:" + diary[1]);
  }
  
  const handleChangesubject = (e) => {
    setDiary([e.target.value, diary[1]]);
  }

  const handleChangecontent = (e) => {
    setDiary([diary[0], e.target.value]);
  }

  return (
    <div className="diary">
      <input name="subject" value={diary[0]} placeholder="제목을 입력해주세요" onChange={handleChangesubject}/>
      <br />
      <textarea name="content" value={diary[1]} placeholder="내용을 입력해주세요" onChange={handleChangecontent}/>
      <br />
      <button onClick={handleClickreset}>초기화</button>
      <br />
      <button onClick={handleClickfinish}>입력 완료</button>
    </div>
  );
};

export default Diary;
