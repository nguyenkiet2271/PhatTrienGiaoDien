function StudentInfo(props) {
  return (
    <div>
      <h2>Thông Tin Sinh Viên</h2>
      <p>Họ tên: {props.name}</p>
      <p>MSSV: {props.id}</p>
      <p>Lớp: {props.className}</p>
    </div>
  );
}

export default StudentInfo;
