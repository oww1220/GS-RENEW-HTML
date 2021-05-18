$(function(){

	/*
    const footer = `
	<footer>
	<div class="c-footer">
		<div class="c-footer__inner">
			<nav class="c-footer__list-wrap">
				<div class="c-footer__item c-footer__item-positon-right">
					<div class="c-footer__site-wrap">
						<button type="button" class="c-footer__site-wrap__list-button">FAMILY SITE</button>
						<div class="c-footer__site-wrap__list">
							<div class="c-footer__site-wrap__item">
								<a href="http://www.gs.co.kr/en" class="c-footer__site-wrap__link" target="_blank">GS</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="http://www.gsenergy.co.kr/en/Default.aspx" class="c-footer__site-wrap__link" target="_blank">GS Energy</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="http://www.gscaltex.com/eng/index.aspx" class="c-footer__site-wrap__link" target="_blank">GS Caltex</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="http://www.gsretail.com/gsretail/en/global/gsretail-main" class="c-footer__site-wrap__link" target="_blank">GS Retail</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="http://company.gsshop.com/en/" class="c-footer__site-wrap__link" target="_blank">GS SHOP</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="https://www.gseps.com/eng/main/main.aspx" class="c-footer__site-wrap__link" target="_blank">GS EPS</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="http://www.gsenr.com/" class="c-footer__site-wrap__link" target="_blank">GS E&amp;R</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="http://www.fcseoul.com/en/main/main.jsp" class="c-footer__site-wrap__link" target="_blank">GS Sports</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="http://www.gsenc.com/en/" class="c-footer__site-wrap__link" target="_blank">GS E&amp;C</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="http://www.gsentec.com/eng/" class="c-footer__site-wrap__link" target="_blank">GS Entec</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="http://www.gspls.net/" class="c-footer__site-wrap__link" target="_blank">PLS</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="http://www.gsglobal.co.jp/" class="c-footer__site-wrap__link" target="_blank">GS Global Japan</a>
							</div>
						</div>
					</div>
				</div>
				<div class="c-footer__item c-footer__item-positon-left">
					<span class="c-footer__text c-footer__text-address">GS Tower, 508, Nonhyeon-ro, Gangnam-gu, Seoul 06141, Korea</span>
					<span class="c-footer__text c-footer__text-tel">TEL +82-2-2005-5300</span>
					<span class="c-footer__text c-footer__text-fax">FAX +82-2-2005-5301</span>
					<span class="c-footer__text c-footer__text-copyright">COPYRIGHT 2018 BY GS GLOBAL CORP. ALL RIGHTS RESERVED. </span>
				</div>
			</nav>
		</div>
	</div>
</footer>
    `;*/

	const footer = '\n\t<footer>\n\t<div class="c-footer">\n\t\t<div class="c-footer__inner">\n\t\t\t<nav class="c-footer__list-wrap">\n\t\t\t\t<div class="c-footer__item c-footer__item-positon-right">\n\t\t\t\t\t<div class="c-footer__site-wrap">\n\t\t\t\t\t\t<button type="button" class="c-footer__site-wrap__list-button">FAMILY SITE</button>\n\t\t\t\t\t\t<div class="c-footer__site-wrap__list">\n\t\t\t\t\t\t\t<div class="c-footer__site-wrap__item">\n\t\t\t\t\t\t\t\t<a href="http://www.gs.co.kr/en" class="c-footer__site-wrap__link" target="_blank">GS</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="c-footer__site-wrap__item">\n\t\t\t\t\t\t\t\t<a href="http://www.gsenergy.co.kr/en/Default.aspx" class="c-footer__site-wrap__link" target="_blank">GS Energy</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="c-footer__site-wrap__item">\n\t\t\t\t\t\t\t\t<a href="http://www.gscaltex.com/eng/index.aspx" class="c-footer__site-wrap__link" target="_blank">GS Caltex</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="c-footer__site-wrap__item">\n\t\t\t\t\t\t\t\t<a href="http://www.gsretail.com/gsretail/en/global/gsretail-main" class="c-footer__site-wrap__link" target="_blank">GS Retail</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="c-footer__site-wrap__item">\n\t\t\t\t\t\t\t\t<a href="http://company.gsshop.com/en/" class="c-footer__site-wrap__link" target="_blank">GS SHOP</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="c-footer__site-wrap__item">\n\t\t\t\t\t\t\t\t<a href="https://www.gseps.com/eng/main/main.aspx" class="c-footer__site-wrap__link" target="_blank">GS EPS</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="c-footer__site-wrap__item">\n\t\t\t\t\t\t\t\t<a href="http://www.gsenr.com/" class="c-footer__site-wrap__link" target="_blank">GS E&amp;R</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="c-footer__site-wrap__item">\n\t\t\t\t\t\t\t\t<a href="http://www.fcseoul.com/en/main/main.jsp" class="c-footer__site-wrap__link" target="_blank">GS Sports</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="c-footer__site-wrap__item">\n\t\t\t\t\t\t\t\t<a href="http://www.gsenc.com/en/" class="c-footer__site-wrap__link" target="_blank">GS E&amp;C</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="c-footer__site-wrap__item">\n\t\t\t\t\t\t\t\t<a href="http://www.gsentec.com/eng/" class="c-footer__site-wrap__link" target="_blank">GS Entec</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="c-footer__site-wrap__item">\n\t\t\t\t\t\t\t\t<a href="http://www.gspls.net/" class="c-footer__site-wrap__link" target="_blank">PLS</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="c-footer__site-wrap__item">\n\t\t\t\t\t\t\t\t<a href="http://www.gsglobal.co.jp/" class="c-footer__site-wrap__link" target="_blank">GS Global Japan</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="c-footer__item c-footer__item-positon-left">\n\t\t\t\t\t<span class="c-footer__text c-footer__text-address">GS Tower, 508, Nonhyeon-ro, Gangnam-gu, Seoul 06141, Korea</span>\n\t\t\t\t\t<span class="c-footer__text c-footer__text-tel">TEL +82-2-2005-5300</span>\n\t\t\t\t\t<span class="c-footer__text c-footer__text-fax">FAX +82-2-2005-5301</span>\n\t\t\t\t\t<span class="c-footer__text c-footer__text-copyright">COPYRIGHT 2018 BY GS GLOBAL CORP. ALL RIGHTS RESERVED. </span>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n</footer>\n    '

    $(".footer").html(footer);
    $(".footer .footer").unwrap();

});