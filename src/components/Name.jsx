import React, {useState} from "react";

const Name = () => {
  // 이곳에 useState 구문을 작성해주세요
  const [myname, setMyname] = useState("");
  const [mynickname, setMynickname] = useState("");

  const handleName = (e) => {
    // 이곳에 이름을 설정하도록 하는 코드를 작성해주세요
    setMyname(e.target.value);
  };

  const handleNickName = (e) => {
    // 이곳에 닉네임을 설정하도록 하는 코드를 작성해주세요
    setMynickname(e.target.value)
  };

  return (
    <div className="name">
      <input name="myName" placeholder="이름을 입력해주세요" onChange={handleName} />
      <input name="nickName" placeholder="닉네임을 입력해주세요" onChange={handleNickName} />
      <p>이름: {myname == "" ? "아직 이름이 없습니다": myname}</p>
      <p>닉네임: {mynickname == "" ? "아직 닉네임이 없습니다" : mynickname}</p>
    </div>
  );
};

export default Name;
