$(document).ready(function () {
    console.log("ready!");

    // Encontrar elementos en la página
    var banner = $("#banner-message.alt");
    var button = $("#submit_button");
    var searchBox = $("#search_text");
    var numResultsBox = $("#num_results");
    var minScoreBox = $("#min_score");
    var resultsTable = $("#results table tbody");
    var resultsWrapper = $("#results");
    var noResultsError = $("#no_results_error");

    // Manejar clic en búsqueda
    button.on("click", function () {
        banner.addClass("alt");
        button.addClass("spinning");

        // Enviar solicitud al servidor
        $.ajax({
            method: "POST",
            contentType: "application/json",
            data: createRequest(),
            url: "documents_search",
            dataType: "json",
            success: onHttpResponse
        });
    });

    function createRequest() {
        var searchQuery = searchBox.val();
        var minScore = parseFloat(minScoreBox.val()) || 0;
        var maxNumberOfResults = parseInt(numResultsBox.val()) || Number.MAX_SAFE_INTEGER;

        // Solicitud de búsqueda al servidor
        var frontEndRequest = {
            search_query: searchQuery,
            min_score: minScore,
            max_number_of_results: maxNumberOfResults
        };

        return JSON.stringify(frontEndRequest);
    }

    function onHttpResponse(data, status) {
        if (status === "success") {
            console.log(data);
            addResults(data);
        } else {
            alert("Error al conectar con el servidor " + status);
        }
    }

    /*
        Agregar resultados del servidor al HTML o mostrar un mensaje de error
     */
    function addResults(data) {
        var baseDir = data.documents_location;

        resultsTable.empty();

        if (data.search_results.length === 0) {
            resultsWrapper.hide();
            noResultsError.show();
        } else {
            noResultsError.hide();
            resultsWrapper.show();
        }

        data.search_results.forEach(function (result) {
            var title = result.title;
            var extension = result.extension;
            var score = result.score;
            var fullPath = `${baseDir}/${title}.${extension}`;
            resultsTable.append(`<tr><td><a href="${fullPath}">${title}</a></td><td>${score}</td></tr>`);
        });
    }
});
