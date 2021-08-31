import React from "react";
import UserInfo from "./UserInfo";

function App() {
  return (
    <div>
      <UserInfo
        userName="Вова"
        userGender="Муж"
        userAge="27"
        yearsWorked="1"
      />
      <br />
      <UserInfo
        userName="Иван"
        userGender="Муж"
        userAge="21"
        yearsWorked="2"
      />
      <br />
      <UserInfo
        userName="Ольга"
        userGender="Жен"
        userAge="37"
        yearsWorked="3"
      />
    </div>
  );
}



export default App;
