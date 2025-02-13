// JavaScript to handle form submission and redirect to the next page
document.getElementById("submit").addEventListener("click", function () {
  // Get input values
  const name = document.getElementById("name").value;
  const rollno = document.getElementById("rollno").value;
  const computer = parseFloat(document.getElementById("computer").value);
  const biology = parseFloat(document.getElementById("biology").value);
  const chemistry = parseFloat(document.getElementById("chemistry").value);

  // Validate inputs
  if (
    !name ||
    !rollno ||
    isNaN(computer) ||
    isNaN(biology) ||
    isNaN(chemistry)
  ) {
    alert("Please fill all fields correctly!");
    return;
  }

  // Calculate percentage
  const totalMarks = computer + biology + chemistry;
  const percentage = (totalMarks / 300) * 100;

  // Store data in localStorage
  const resultData = {
    name,
    rollno,
    computer,
    biology,
    chemistry,
    totalMarks,
    percentage: percentage.toFixed(2),
  };
  localStorage.setItem("resultData", JSON.stringify(resultData));

  // Redirect to the next page
  window.location.href = "result.html";
});
