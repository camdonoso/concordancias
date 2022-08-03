$(function () {
    $('#convertir').on('click', function () {
        var items = $.trim($('#listadoInicial').val());
        if (items !== '') {
            $.ajax({
                type: 'POST',
                url: 'ajax/ajax.php',
                data: {items: items},
                dataType: 'json',
                beforeSend: function () {
                    if ($('#listadoFinal').val() !== '') {
                        $('#listadoFinal').empty();
                    }
                },
                success: function (result) {
                    var largo = result.length;
                    $.each(result, function (index, value) {
                        if (index != largo - 1) {
                            $('#listadoFinal').append(value + "\n");
                        } else { // Cuando es el ultimo elemento de la lista no añade un salto de linea al final
                            $('#listadoFinal').append(value);
                        }
                    });
                }
            });
        }

    });

    $("#copiar").on('click', function () {
        $('#listadoFinal').select();
        document.execCommand('copy');
    });
});