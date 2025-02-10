fetch("/userinfo")
  .then((response) => response.json())
  .then((data) => {
    let userinfoArr = JSON.parse(localStorage.getItem("userInfo")) || [];

    userinfoArr.push(data);
    localStorage.setItem("userInfo", JSON.stringify(userinfoArr));

    if (userinfoArr.length > 0) {
      let tableBody = document.getElementById("userTable");

      userinfoArr.forEach((user) => {
        let row = document.createElement("tr");

        let emailCell = document.createElement("td");
        emailCell.innerText = user.email;
        row.appendChild(emailCell);

        let userNameCell = document.createElement("td");
        userNameCell.innerText = user.userName;
        row.appendChild(userNameCell);

        let ageCell = document.createElement("td");
        ageCell.innerText = user.age;
        row.appendChild(ageCell);

        tableBody.appendChild(row);
      });
    }
  })
  .catch((e) => {
    console.log("error!", e);
  });
