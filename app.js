var students = [];

function addStudent() {
  var name = document.getElementById("name").value;
  var className = document.getElementById("className").value;
  var rollNo = document.getElementById("rollNo").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var contact = document.getElementById("contact").value;
  var email = document.getElementById("email").value;

  if (name === "" || className === "" || rollNo === "") {
    alert("Please fill in at least Name, Class, and Roll No.");
    return;
  }

  var student = {
    name: name,
    className: className,
    rollNo: rollNo,
    age: age,
    gender: gender,
    contact: contact,
    email: email,
  };

  students.push(student);

  displayStudents();

  var inputs = document.getElementsByClassName("stuData");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

function displayStudents() {
  var container = document.getElementById("cardsContainer");
  container.innerHTML = "";

  for (var i = 0; i < students.length; i++) {
    var stu = students[i];
    var card = document.createElement("div");
    card.className = "card";

    card.innerHTML =
      "<h3>" +
      stu.name +
      "</h3>" +
      "<p><b>Class:</b> " +
      stu.className +
      "</p>" +
      "<p><b>Roll No:</b> " +
      stu.rollNo +
      "</p>" +
      "<p><b>Age:</b> " +
      stu.age +
      "</p>" +
      "<p><b>Gender:</b> " +
      stu.gender +
      "</p>" +
      "<p><b>Contact:</b> " +
      stu.contact +
      "</p>" +
      "<p><b>Email:</b> " +
      stu.email +
      "</p>" +
      "<button onclick='deleteStudent(" +
      i +
      ")' style='margin-top:8px;background-color:#e53935;color:white;border:none;padding:6px 10px;border-radius:6px;cursor:pointer;'>Delete</button>";

    container.appendChild(card);
  }
}

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}
