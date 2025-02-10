fetch("/userinfo")
  .then((response) => response.json())
  .then((data) => {
    let userinfoArr = JSON.parse(localStorage.getItem("userInfo")) || [];

    // console.log("data", data);
    // console.log("userinfoArr", userinfoArr);

    // 같은 이름 걸러서 user에 넣기
    const user = userinfoArr.filter((userinfo) => {
      return data.user === userinfo.userName;
    });

    let tableBody = document.getElementById("userTable");

    if (user.length === 0) {
      let tableBody = document.getElementById("userTable");
      let row = document.createElement("tr");
      let cell = document.createElement("td");
      cell.colSpan = 3;
      cell.classList.add("noUser");
      cell.innerText = "해당 유저가 없습니다.";
      row.appendChild(cell);
      tableBody.appendChild(row);
    } else {
      user.map((info) => {
        let row = document.createElement("tr");

        let emailCell = document.createElement("td");
        emailCell.innerText = info.email;
        row.appendChild(emailCell);

        let userNameCell = document.createElement("td");
        userNameCell.innerText = info.userName;
        row.appendChild(userNameCell);

        let ageCell = document.createElement("td");
        ageCell.innerText = info.age;
        row.appendChild(ageCell);

        tableBody.appendChild(row);
      });
    }
  })
  .catch((e) => {
    console.log("error!", e);
  });
