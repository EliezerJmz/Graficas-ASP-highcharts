//Vamos a consumir datos de una api por medio del metodo Get
//y archivos json
$(document).ready(function () {
    //Peticion a una api
    //iniciamos un metodo ajax
    $.ajax({
        type: "GET",
        contentType: "aplication/json; charset=utf-8",
        dataType: "json",
        url: urlBase + '/DataPastel',
        //si hay un error enviamos un alert por medio de una funcion.
        error: function () {
            alert("Ocurrio un error al obtener los Datos");
        },
        //si todo salio con exito
        success: function (data) {
            console.log("DATA RECIBIDA:")
            console.log(data);
            //le enviamos la data a la grafica pastel
            GraficaPastel(data);
        }
    })

});



function GraficaPastel(data) {
    // pastel es el div id="pastel" donde se construye la grafica
    Highcharts.chart('pastel', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Fremeworks más Usados en el  2022'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Framework',
            colorByPoint: true,
            //es la data que viene como parametro en un json
            data: data
        }]
    });
}