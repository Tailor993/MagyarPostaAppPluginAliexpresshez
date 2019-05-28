// ==UserScript==
// @name     MagyarPosta&Aliexpress
// @version  2
// @author       Szabó Attila - Tailor993 - www.tailor993.hu
// @description    Magyar Posta kompatibilis Aliexpress
// @include        https://trade.aliexpress.com/order_detail.htm*
// @grant          GM.xmlHttpRequest
// @grant          GM_xmlhttpRequest
// @grant          GM.getValue
// @grant          GM_getValue
// @grant          GM.setValue
// @grant          GM_setValue
// @grant          GM.info
// @grant          GM_info
// @require        https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @require        https://code.jquery.com/jquery-3.3.1.slim.min.js
// @require        https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js
// @require        https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js
// ==/UserScript==



$('document').ready(function() {
  /* BootStrap CSS betöltése */
    var link = window.document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
    document.getElementsByTagName("HEAD")[0].appendChild(link);

   /* Csomag szám lekérdezése */
    var szam = getCsomagszam();

    /* Modal elem */
    var modal = generateModal(szam);

    /* Gomb elem */
    var gomb = generateGomb();

    /* Elemek felhelyezése */
    document.getElementsByClassName('no')[2].innerHTML = szam + gomb + modal;
});

function generateModal(szam){
        var szoveg =`
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg" role="document">
		<div class="modal-content">
			<div class="modal-header " >
				<div class="row">
					<div class="col-12 text-center">
						<h5 class="modal-title text-center" id="exampleModalLabel">
							Magyar Posta Plugin Aliexpresshez.
						</h5>
					</div>
				</div>
			</div>
			<div class="modal-body text-center">
				<div class="row">
					<div class="col-12 text-justify font-weight-normal" style="font-size:1.2em;">
						1) Ha nincs telepítve telepítse a Magyar Posta Applikációt. Az alább látható linkek valamelyikéről.
					</div>
				</div>
				<div class="row mt-4">
					<div class="col-4  text-center" style="margin:auto;">
						<a  href='https://play.google.com/store/apps/details?id=hu.posta.uzletimobil&hl=hu&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img width="200px" alt='Szerezd meg: Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/hu_badge_web_generic.png'/></a>
					</div>
					<div class="col-4  text-center" style="margin:auto;">
						<a href="https://www.posta.hu/postaapp" target="_blank">
							<img  width="100px"  src="https://lh3.ggpht.com/R-q3n1KDI3a_0e1sPmNBA59SreYniEKiDZVMnOA-ZpVrADBcKSZYvtBEQc41laWZ1x7g=s180" />
						</a>
					</div>
					<div class="col-4  text-center" style="margin:auto;">
						<a href="https://itunes.apple.com/hu/app/magyar-posta-applikacio/id914923477?mt=8" target="_blnak">
							<img  width="200px"  src="http://tailor993.hu/host/DownloadAppStore.svg">
						</a>
					</div>
				</div>
				<div class="row">
					<div class="col-4 text-justify ml-2">
						A Google Play és a Google Play-logó a Google LLC védjegyei.
					</div>
					<div class="col-4 text-justify">
						A Magyar Posta Applikáció és a Magyar Posta Applikáció-logó a Magyar Posta Zrt védjegyei.
					</div>
					<div class="col-3 text-justify mr-2">
						Az Apple és az Apple-logó a Apple INC védjegyei.
					</div>
				</div>
				<div class="row">
					<div class="col-12 text-justify mt-4 ml-2 font-weight-normal" style="font-size:1.2em;">
						2) Indítsa el a Magyar Posta Applikációt és válassza a Nyomkövetés menüpontot.<br>
						3) Válassza az új küldemény gombot.<br>
						4) Nyomja meg a vonalkód olvasó gombot.<br>
						6) Ha nincs telepítve telepítse a felajánlott vonalkód olvasó alkalmazást, majd térjen vissza a Magyar Posta Applikációba ami a 4. pontban foglaltakkal fog betölteni.<br>
						5) Olvassa be telefonjával az alábbi kódot és a küldemény megjelenik a listában.
					</div>
				</div>
				<div class="row">
					<div class="col-12 text-center">
						<br>
						<img src="https://www.barcodesinc.com/generator/image.php?code=`+szam+`&style=197&type=C128B&width=232&height=50&xres=1&font=3" />
						<hr>
					</div>
				</div>
				<div class="row">
					<div class="col-12 ml-2 mt-4">
						Készítette: Szabó Attila (Tailor993)
						<a href="http://ww.tailor993.hu" target="_blnak" class="btn btn-sm btn-secondary">
							<span style="color:#ffffff;">
								Weboldal
							</span>
						</a>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Bezárás</button>
			</div>
		</div>
	</div>
</div>
 `;
   return szoveg;
}

function generateGomb(){
    var szoveg =`
        <br><br>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Magyar Posta Vonalkód generálás!
            </button>
     `;
     return szoveg;
}


function getCsomagszam(){
  var csomagszam = document.getElementsByClassName('no')[2].innerHTML;

  csomagszam=String(csomagszam).replace('\t','');
  csomagszam=String(csomagszam).replace('\n','');

  console.log(csomagszam);
  return csomagszam;
}
