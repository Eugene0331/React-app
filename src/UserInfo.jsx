function UserInfo(props) {
  return (
    <div className = "container">
      <p>Имя: {props.userName}</p>

      <p>Пол: {props.userGender}</p>

      <p>Возраст: {props.userAge}</p>

      <p>Опыт работы: {props.yearsWorked}</p>

      <p>Зарплата: {props.yearsWorked * 10}</p>
    </div>
  );
}

export default UserInfo