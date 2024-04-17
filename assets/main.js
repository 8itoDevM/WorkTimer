let sheet_id = '1dtA-67RKJ3RJWM5GClAHL3-CkU8qgypmEati0AQNdhg';
let sheet_title = 'Pontos';
let sheet_range = 'A1:F1000';

let full_url = 'https://docs.google.com/spreadsheets/d/' + sheet_id + '/gviz/tq?sheet=' + sheet_title + '&range=' + sheet_range;

fetch(full_url)
.then(res => res.text())
.then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0,-2));

    //console.log(data.table.rows[0].c[0].f); - Pega o Horário de entrada na tabela
    // console.log(data.table.rows[0].c[1].f); - Pega o Horárior de saída na tabela
    // console.log(data.table.rows[0].c[2].f); - Pega a data na tabela
    // console.log(data.table.rows[0].c[3].v); - Pega o nome na tabela
    // console.log(data.table.rows[0].c[4].v); - Pega o status na tabela
    // console.log(data.table.rows[0].c[5].v); - Pega as horas semanais totais na tabela
})
/* const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1dtA-67RKJ3RJWM5GClAHL3-CkU8qgypmEati0AQNdhg/edit#gid=0");
const sheet = sheets.getSheetByName("TabelaPontos");

function doPost(e) {
  let data = e.parameter;
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const dateWork = new Date();

  // Encontre a próxima linha vazia na coluna A (ID)
  var lastRow = sheet.getLastRow();
  var nextRow = lastRow + 1;

  // Procurar a última linha que corresponde ao nome do usuário
  var userLastRow = -1;
  for (var i = lastRow; i >= 1; i--) {
    if (sheet.getRange('D' + i).getValue() == data.nome) {
      userLastRow = i;
      break;
    }
  }

  if (userLastRow != -1 && sheet.getRange('E' + userLastRow).getValue() == "Aberto") {
    // Se encontramos uma linha correspondente ao usuário e o ponto está aberto, fechamos o ponto
    sheet.getRange('B' + userLastRow).setValue(dateWork.toLocaleTimeString('pt-BR'));
    sheet.getRange('E' + userLastRow).setValue("Fechado");
    
    // Calcular as horas trabalhadas na semana
    var weeklyHours = 0;
    var oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7); // Data de 7 dias atrás

    for (var i = userLastRow; i >= 1; i--) {
      var pointDate = new Date(sheet.getRange('C' + i).getValue());
      if (pointDate < oneWeekAgo) {
        break; // Se a data do ponto é mais de uma semana atrás, paramos de iterar
      }
      
      var startTime = new Date(sheet.getRange('A' + i).getValue());
      var endTime = new Date(sheet.getRange('B' + i).getValue());
      if (isNaN(startTime) || isNaN(endTime)) {
        continue; // Se não pudermos converter a hora de início ou fim para uma data, ignoramos este ponto
      }
      
      var hoursWorked = (endTime.getTime() - startTime.getTime()) / 1000 / 60 / 60; // Convert milissegundos para horas
      weeklyHours += hoursWorked;
    }
    sheet.getRange('F' + userLastRow).setValue(weeklyHours.toFixed(3)); // Arredondamos para duas casas decimais para evitar problemas de precisão

    
  } else {
    // Caso contrário, adicionamos uma nova linha com um novo ponto
    sheet.appendRow([data.hrCMC, data.hrTer, data.date, data.nome]);

    if (sheet.getRange('B' + nextRow).getValue() != "") {
      sheet.getRange('E' + nextRow).setValue("Fechado");
    } else {
      sheet.getRange('E' + nextRow).setValue("Aberto");
    }

    // Para a hora
    var hours = dateWork.getHours();
    var minutes = dateWork.getMinutes();
    var seconds = dateWork.getSeconds();
    var timeString = hours + ":" + minutes + ":" + seconds;
    sheet.getRange('A' + nextRow).setValue(timeString);

    // Para a data
    var day = dateWork.getDate();
    var month = dateWork.getMonth() + 1; // Os meses começam do 0 em JavaScript
    var year = dateWork.getFullYear();
    var dateString = day + "/" + month + "/" + year;
    sheet.getRange('C' + nextRow).setValue(dateString);

  }

  return ContentService.createTextOutput("Success");
}

} */ 