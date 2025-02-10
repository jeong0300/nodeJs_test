fetch("/userinfo")
  .then((response) => response.json())
  .then((data) => {
    let userinfoArr = JSON.parse(localStorage.getItem("userInfo")) || [];
    const updata_data = JSON.parse(JSON.stringify(data));

    userinfoArr.push(updata_data);
    localStorage.setItem("data", JSON.stringify(userinfoArr));
  })
  .catch((e) => {
    console.log("error!");
  });

// let userinfoArr = JSON.parse(localStorage.getItem("userInfo")) || [];

// if (userinfoArr.length > 0) {
//   let tableBody = document.getElementById("userTable");

//   userinfoArr.forEach((user) => {
//     let row = document.createElement("tr");

//     let emailCell = document.createElement("td");
//     emailCell.innerText = user.email;
//     row.appendChild(emailCell);

//     let pwCell = document.createElement("td");
//     pwCell.innerText = user.pw;
//     row.appendChild(pwCell);

//     let userNameCell = document.createElement("td");
//     userNameCell.innerText = user.userName;
//     row.appendChild(userNameCell);

//     let ageCell = document.createElement("td");
//     ageCell.innerText = user.age;
//     row.appendChild(ageCell);

//     tableBody.appendChild(row);
//   });
// }
