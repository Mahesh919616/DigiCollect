fetch('https://reqres.in/api/users?page=1').then((data)=>{
    //console.log(data);
    return data.json();
}).then((allData)=>{
    // console.log(allData);
    // console.log(allData[1].email);
    
    let arrData = "";

    allData.data.map((values)=>{
        console.log(values.email);
        arrData += ` <div class="card">
                    <img class="img-fluid pro-img" src="${values.avatar}" alt="img">
                    <h6 class="empName">${values.first_name}</h6>
                    <button id="btn1">Management</button>
                    <table class="table">
                        <tr>
                            <td class="rowHeading">Employee Id:</td><td class="rowData">${values.id}</td>
                        </tr>
                        <tr>
                            <td class="rowHeading">Last_name:</td><td class="rowData">${values.last_name}</td>
                        </tr>
                        <tr>
                            <td class="rowHeading">email:</td><td class="rowData">${values.email}</td>
                        </tr>
                        <tr>
                            <td class="rowHeading">Phone:</td><td class="rowData">${values.phone}</td>
                        </tr>
                    </table>
                    </div>`
    });
    document.getElementById("data-card").innerHTML = arrData;
});
