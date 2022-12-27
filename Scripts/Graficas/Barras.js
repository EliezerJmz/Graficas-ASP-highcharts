//Vamos a consumir datos de una api por medio del metodo Get
//y archivos json
$(document).ready(function () {
    //Peticion a una api
    //iniciamos un metodo ajax
    $.ajax({
        type: "GET",
        contentType: "aplication/json; charset=utf-8",
        dataType: "json",
        //urlBse la obtenemos del index en este caso y /Databarras es en formato json que envia el controller DtaBarras
        url: urlBase + '/DataBarras',
        //si hay un error enviamos un alert por medio de una funcion.
        error: function () {
            alert("Ocurrio un error al obtener los Datos");
        },
        //si todo salio con exito
        success: function (data) {
            console.log("DATA RECIBIDA:")
            console.log(data);
            //le enviamos la data a la grafica barras
            GraficaBarras(data);
        }
    })

});




function GraficaBarras(data) {
    // barras es el div id="pastel" donde se construye la grafica
    Highcharts.chart('barras', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Frameworks más usados en el 2017'
        },
        subtitle: {
            text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (millions)'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
        },
        series: [{
            name: 'Population',
            //las data en este caso es un array de obejtos
            data: data,
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
}