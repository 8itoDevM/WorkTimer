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

    function searchHours(){
      let para = document.createElement("p");
      let para2 = document.createElement("p");
      setInterval(function() { 
        let searchValue = document.getElementById('text-search').value;
        let containerRight = document.getElementById("divright");

        //console.log(searchValue);

        for(let i = data.table.rows.length - 1; i >= 0; i--){
          if(searchValue == data.table.rows[i].c[3].v && data.table.rows[i].c[4].v == "Fechado"){;
            para.textContent = data.table.rows[i].c[5].v /1000 + " horas trabalhadas no total";
            para2.textContent = "Ponto fechado";
            break;
          } else if(searchValue == data.table.rows[i].c[3].v && data.table.rows[i].c[4].v == "Aberto") {
            para2.textContent = "Ponto aberto";
            para.textContent = data.table.rows[i-1].c[5].v /1000 + " horas trabalhadas no total";
            break;
          }
        }
      }, 500);
      para2.style.fontSize = "18px";
      para.style.fontSize = "20px";
      document.getElementById("hour-search").appendChild(para);
      document.getElementById("hour-search").appendChild(para2);

    }
    

    searchHours();
})