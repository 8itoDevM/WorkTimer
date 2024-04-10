let sheet_id = '1dtA-67RKJ3RJWM5GClAHL3-CkU8qgypmEati0AQNdhg';
let sheet_title = 'Pontos';
let sheet_range = 'A1:F1000';

let full_url = 'https://docs.google.com/spreadsheets/d/' + sheet_id + '/gviz/tq?sheet=' + sheet_title + '&range=' + sheet_range;

fetch(full_url)
.then(res => res.text())
.then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0,-2));
    console.log(data)
})