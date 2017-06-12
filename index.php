<!DOCTYPE html>
<html>
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <!-- css -->
    <link href="styles/css/bootstrap.min.css" rel="stylesheet" />
    <!--<link href="styles/css/fancybox/jquery.fancybox.css" rel="stylesheet">-->
    <!--<link href="styles/css/jcarousel.css" rel="stylesheet" />-->
    <!--<link href="styles/css/flexslider.css" rel="stylesheet" />-->
    <link href="styles/css/style.css" rel="stylesheet" />
    <!-- Theme skin -->
    <link href="styles/skins/default.css" rel="stylesheet" />
    <!--<style>
       #map {
        height: 400px;
        width: 100%;
       }
    </style>-->
  </head>
  <body>
<div id="wrapper">

	<section id="content">
	<div class="container">

        <div class="row">
            <div class="col-lg-12">
                <h4 class="heading">My Google Maps Demo</h4>
            </div>
        </div>

        <div class="row">

            <div class="col-lg-6">
                <div id="map" style="height: 450px;width: 100%;"></div>
                <?php
                echo "Centra la cruceta en el lugar exacto donde se localiza tu casa.";
                ?>
            </div>

            <div class="col-lg-6">
                <form>
                    <!--<input name="latitud" id="txtLatitud" value="19.612277000000002" maxlength="100"/>
                    <input name="longitud" id="txtLongitud" value="-98.9153487" maxlength="100"/>-->
                    <div class="row">
                        <div class="col-lg-12 margintop10 field">
							<input name="latitud" id="txtLatitud" maxlength="100" placeholder="* Latitud"/>
						</div>
                        <div class="col-lg-12 margintop10 field">
							<input name="longitud" id="txtLongitud"  maxlength="100" placeholder="* Longitud"/>
						</div>
                        <div class="col-lg-12 margintop10 field">
							<input name="zoom" id="txtZoom" maxlength="100" placeholder="* Zoom"/>
						</div>
                        <div class="col-lg-12 field">
                            <button id="btnLocateCoords" class="btn btn-theme margintop10">Ubicar coordenadas</button>
                            <button id="btnLocateMyPos" class="btn btn-theme margintop10">Ubicar mi posición</button>
                            <button id="btnReset" class="btn btn-theme margintop10">Resetear mapa</button>
						</div>

                    </div>
                </form>
            </div>
            
        </div><!--row div-->

        <script type="text/javascript" src="./js/jquery-3.2.1.js"></script>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDOzS5Fo0YI96iAuZpmfvMmBOLEvxp-lbk"></script>
        <script type="text/javascript" src="./js/mapa.js"></script>
        <script type="text/javascript" src="./js/funciones.js"></script>
	</div><!--container-->
	</section>
</div><!--wrapper-->
  </body>
</html>