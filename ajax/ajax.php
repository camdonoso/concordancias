<?php

$listado = $_POST['items'];
/**
 * 
 * El array listado contiene las keywords (1 por linea).
 * 
 */
$listadoArray = explode("\n", $listado);
$listadoFinal = [];
foreach ($listadoArray as $item) {
    if ($item != '') { // Solo toma las lineas que no estan en blanco
        $itemFrase = '"' . $item . '"';
        $itemExacto = '[' . $item . ']';
        array_push($listadoFinal, $itemFrase, $itemExacto);
    }
}


echo json_encode($listadoFinal);
