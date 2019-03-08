
const loadData = () => {
    return new Promise((resolve) => {

        req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                data = JSON.parse(this.responseText);
                resolve(data);
                console.log("Your in Main Function");
                //  console.log(JSON.stringify(data));
            }
        };
        req.open("GET", urlData, true);
        req.send();
    });
}
const showAllDet = async () => {
    if (data == null) {
        loadData();
    }
    try {
        var temp = (data && data.length > 0) ? data : await loadData();
        // console.log(temp);
    } catch (error) {
        console.log("This is ERROR", error);
    }

    var table = "";
    var arr = [];
    // console.log("Helloo")
    document.getElementById("hdng").innerHTML = "<h3> Below are the All Employees Details : </h3>";
    table += "<table> <tr>"
    for (let x in data[0])
        table += "<th>" + x + "</th>"

    table += "</tr>"
    for (let x in data) {
    
        table += "<tr> <td>" + data[x]["id"] + "</td> <td>" +  data[x]["employee_name"] + "</td> <td>" +  data[x]["employee_salary"] + "</td> <td>" +  data[x]["employee_age"] + "</td> <td>" +  data[x]["profile_image"] + "</td> </tr>"

        arr.push(data[x])
                // console.log("this is " + c + "th time.");
            }
            
    table += "</table>"
    console.log(arr);
    // document.getElementById("details").innerHTML = JSON.stringify(arr);
    document.getElementById("details").innerHTML = table;

    // document.getElementById("hdng").innerHTML = "<h3> Below are the All Employees Details : </h3>";
    // document.getElementById("details").innerHTML = JSON.stringify(data);
}
const showEmpDet = async () => {
    if (data == null) {
        loadData();
    }
    try {
        var temp = (data && data.length > 0) ? data : await loadData();
        // console.log(temp);
    } catch (error) {
        console.log("This is ERROR", error);
    }

    var c = 0, table = "";
    var arr = [];
    // console.log("Helloo")
    document.getElementById("hdng").innerHTML = "<h3> Employees Details are : </h3>";
    table += "<table> <tr>"
    for (let x in data[0])
        table += "<th>" + x + "</th>"

    table += "</tr>"
    for (let x in data) {
        if (c != 100) {
            if (data[x].employee_age == 23) {
                c++;
                table += "<tr> <td>" + data[x]["id"] + "</td> <td>" +  data[x]["employee_name"] + "</td> <td>" +  data[x]["employee_salary"] + "</td> <td>" +  data[x]["employee_age"] + "</td> <td>" +  data[x]["profile_image"] + "</td> </tr>"

                arr.push(data[x])
                // console.log("this is " + c + "th time.");
            }
        }
        else
            break;
    }
    table += "</table>"
    console.log(arr);
    // document.getElementById("details").innerHTML = JSON.stringify(arr);
    document.getElementById("details").innerHTML = table;

}

const showFreq = async () => {
    if (data == null) {
        loadData();
    }
    try {
        var temp = (data && data.length > 0) ? data : await loadData();
        // console.log(temp);
    } catch (error) {
        console.log("This is ERROR", error);
    }
    document.getElementById("hdng").innerHTML = "<h3> Frequency of Ages are : </h3>";
    var ary = [];
    var objDet = {};

    for (let x in data)
        ary.push(data[x].employee_age);

    var len = ary.length;

    for (var i = 0; i < len; i++) {
        if (objDet[ary[i]]) {
            objDet[ary[i]] = objDet[ary[i]] + 1;
        }
        else {
            objDet[ary[i]] = 1;
        }
    }

    console.log(objDet);
    document.getElementById("details").innerHTML = JSON.stringify(objDet);
}

const showFullDet = async () => {
    if (data == null) {
        loadData();
    }
    try {
        var temp = (data && data.length > 0) ? data : await loadData();
        // console.log(temp);
    } catch (error) {
        console.log("This is ERROR", error);
    }
    document.getElementById("hdng").innerHTML = "<h3> Employees Details under the given age are : </h3>";
    var age = parseInt(document.emp.txt.value);
    var arr = [];
    for (let x in data) {
        if (data[x].employee_age <= age) {
            arr.push(data[x]);
        }
    }
    console.log(arr);
    document.getElementById("details").innerHTML = JSON.stringify(arr);

}
var req;
var urlData = "http://dummy.restapiexample.com/api/v1/employees", data;