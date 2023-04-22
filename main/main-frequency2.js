const str = "[{\"Shift\":\"AB06\",\"Total\":50,\"Attendance\":47,\"Leave\":3},{\"Shift\":\"AB07\",\"Total\":51,\"Attendance\":47,\"Leave\":4},{\"Shift\":\"AB08\",\"Total\":50,\"Attendance\":50,\"Leave\":0}]"
const result = '[{"Description":"出勤人数 Số người đi làm thực tế","AB06":47,"AB07":47,"AB08":50},{"Description":"未出勤人数 Số người không đi làm","AB06":3,"AB07":4,"AB08":0}]'
const strNew = JSON.parse(str);
const resultNew = JSON.parse(result);

console.log(strNew);
console.log(resultNew);

// const a = [];
// strNew.forEach((str, i) => {
//     a[`Description`] = "出勤人数 Số người đi làm thực tế";
//     a[str.Shift] = str.Attendance;
// });

// const b = [];
// strNew.forEach((str, i) => {
//   b[`Description`] = "未出勤人数 Số người không đi làm";
//   b[str.Shift] = str.Leave;
// });

// const c = [
//   {...a},
//   {...b}
// ];
let objAttendance = {
  Description: "出勤人数 Số người đi làm thực tế"
}
let objLeave = {
  Description: "未出勤人数 Số người không đi làm"
}
strNew.forEach((prop, index) => {
  objAttendance[`${prop.Shift}`] = prop.Attendance
  objLeave[`${prop.Shift}`] = prop.Leave
})
const c = [];
c.push(objAttendance)
c.push(objLeave)

console.log(c);
