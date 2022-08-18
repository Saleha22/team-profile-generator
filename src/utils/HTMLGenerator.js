const path = require("path");
const fs = require("fs");

const generateHTML = ({ manager, engineer, intern }) => {
  const generateManager = (eachManager) => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${eachManager.name}</h2>
        <h3 class="card-title" >Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${eachManager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${eachManager.email}">${eachManager.email}</a></li>
            <li class="list-group-item">Office number: ${eachManager.officeNumber}</li>
        </ul>
    </div>
</div>
    `;
  };

  const generateEngineer = (eachEngineer) => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${eachEngineer.name}</h2>
        <h3 class="card-title" >Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${eachEngineer.employeeId}</li>
            <li class="list-group-item">Email: <a href="mailto:${eachEngineer.email}">${eachEngineer.email}</a></li>
            <li class="list-group-item"> Github Username: ${eachEngineer.githubUsername}</li>
        </ul>
    </div>
</div>
    `;
  };

  const cards = manager.map((eachManager) => {
    return generateManager(eachManager);
  });

  const engineerCards = engineer.map((eachEngineer) => {
    return generateEngineer(eachEngineer);
  });

  const html = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
 integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${cards.join("")}
                ${engineerCards.join("")}
            </div>
        </div>
    </div>
</body>


</html>
    `;
  fs.writeFileSync(path.join(__dirname, "../../dist", "index.html"), html);
};
module.exports = generateHTML;
