$(function(){


    const header = `

	<header>
	<div class="c-header" id="c-header">
		<div class="c-header__wrap">
			<div class="c-header__logo">
				<h1 class="c-header__logo-wrap">
					<a href="/En/Default.aspx" class="c-header__logo-wrap__link">
						<span class="c-header__logo-wrap__text">GS GLOBAL</span>
					</a>
				</h1>
			</div>
			<div class="c-header__menu" id="gnb">
				<script type="text/javascript">
					GetGnbMenu("gnb");
				</script>
				<div class="c-header__menu-utility">
					<div class="c-header__menu-utility-list c-header__menu-utility--contact-us">
						<a href="/En/ContactUs/ContactUs.aspx" class="c-header__menu-utility-list__item">
							<span class="c-header__menu-utility-list__item-text">CONTACT US</span>
						</a>
					</div>
					<div class="c-header__menu-utility-list c-header__menu-lang">
						<button type="button" class="c-header__menu-utility-list__item c-header__menu-lang__btn">
							<span class="c-header__menu-utility-list__item-text">ENG</span>
						</button>
						<ul class="c-header__menu-lang-list">
							<li class="c-header__menu-lang-list__item">
								<a href="/Kr" class="c-header__menu-lang-list__item-wrap active">
									<span class="c-header__menu-lang-list__item-text">KOR</span>
								</a>
							</li>
							<li class="c-header__menu-lang-list-item">
								<a href="/En" class="c-header__menu-lang-list__item-wrap">
									<span class="c-header__menu-lang-list__item-text">ENG</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="c-header__hambuger">
				<button type="button" class="c-header__hambuger-item c-header__hambuger-item--all-menu">
					<span class="c-header__hambuger-item__txt">ALL MENU</span>
				</button>
				<button type="button" class="c-header__hambuger-item c-header__hambuger-item-mobile-menu">
					<span class="c-header__hambuger-item__txt">MENU</span>
					<i class="c-header__hambuger-object c-header__hambuger-object-01"></i>
					<i class="c-header__hambuger-object c-header__hambuger-object-02"></i>
					<i class="c-header__hambuger-object c-header__hambuger-object-03"></i>
				</button>
				<div class="c-header__all-menu__wrap">
					<div class="c-header__all-menu__list-area">
						<div class="c-header__all-menu__list-area__wrap">
							<div class='c-header__all-menu__list'>
								<div class='c-header__all-menu__list-tit'><a href=/En/Business/index.aspx>COMPANY</a>
								</div>
								<div class='c-header__all-menu__list-subcont'>
									<div class='c-header__all-menu__subcont-list'>
										<div class='c-header__all-menu__subcont__item'><a
												href='/En/Business/Outline.aspx'>Corporate Overview</a></div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/En/Business/Greeting.aspx'>CEO’s Message</a></div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/En/Business/ManagementPhilosophy.aspx'>Corporate Principles</a>
										</div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/En/Business/History.aspx'>Corporate History</a></div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/En/Business/Management.aspx'>Ethics Management</a></div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/En/Business/GlobalNetworkWordWide.aspx'>Global Network</a></div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/En/Business/Directions.aspx'>Location</a></div>
									</div>
								</div>
							</div>
							<div class='c-header__all-menu__list'>
								<div class='c-header__all-menu__list-tit'><a
										href=/En/FieldBusiness/index.aspx>BUSINESS</a></div>
								<div class='c-header__all-menu__list-subcont'>
									<div class='c-header__all-menu__subcont-list'>
										<div class='c-header__all-menu__subcont__item'><a
												href='/En/FieldBusiness/Trading/Steel.aspx'>Trading</a>
											<div class='c-header__all-menu__dethcont-list'>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/En/FieldBusiness/Trading/Steel.aspx'>Steel</a></div>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/En/FieldBusiness/Trading/PetroleumProduct.aspx'>Petroleum
														& Chemicals</a></div>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/En/FieldBusiness/Trading/ResourcesCoal.aspx'>Coal &
														Biomass</a></div>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/En/FieldBusiness/Trading/MachineGoods.aspx'>Industrial
														Products</a></div>
											</div>
										</div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/En/FieldBusiness/Operation/Logistics.aspx'>Operation</a>
											<div class='c-header__all-menu__dethcont-list'>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/En/FieldBusiness/Operation/Logistics.aspx'>Logistics</a>
												</div>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/En/FieldBusiness/Operation/GsEntec.aspx'>GS Entec</a>
												</div>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/En/FieldBusiness/Operation/Robotics.aspx'>Robotics</a>
												</div>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/En/FieldBusiness/Operation/EVbusiness.aspx'>e-Mobility</a>
												</div>
											</div>
										</div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/En/FieldBusiness/Investment/SocBusiness.aspx'>Investment</a>
											<div class='c-header__all-menu__dethcont-list'>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/En/FieldBusiness/Investment/SocBusiness.aspx'>SOC
														Development Business</a></div>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/En/FieldBusiness/Investment/ProjectBusiness.aspx'>Project
														Development</a></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class='c-header__all-menu__list'>
								<div class='c-header__all-menu__list-tit'><a href=/En/IrInfo/index.aspx>INVESTOR
										RELATIONS</a></div>
								<div class='c-header__all-menu__list-subcont'>
									<div class='c-header__all-menu__subcont-list'>
										<div class='c-header__all-menu__subcont__item'><a
												href='/En/IrInfo/Management/BoardOfDirectors.aspx'>Management
												Information</a>
											<div class='c-header__all-menu__dethcont-list'>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/En/IrInfo/Management/BoardOfDirectors.aspx'>Board of
														Directors</a></div>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/En/IrInfo/Management/StockHolder.aspx'>Shareholders</a>
												</div>
											</div>
										</div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/En/IrInfo/StockInfo.aspx'>Stock Information</a></div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/En/IrInfo/FinancialInfo5Years.aspx'>Financial Statements</a>
										</div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/En/IrInfo/IRList.aspx'>IR Library</a></div>
									</div>
								</div>
							</div>
							<div class='c-header__all-menu__list'>
								<div class='c-header__all-menu__list-tit'><a href=/En/CompanyNews/index.aspx>NEWS</a>
								</div>
								<div class='c-header__all-menu__list-subcont'>
									<div class='c-header__all-menu__subcont-list'>
										<div class='c-header__all-menu__subcont__item'><a
												href='/En/CompanyNews/News.aspx'>News</a></div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/En/CompanyNews/SocialContribution.aspx'>CSR</a></div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/En/CompanyNews/PromotionalMaterial.aspx'>Brochure</a></div>
									</div>
								</div>
							</div>
							<div class='c-header__all-menu__list'>
								<div class='c-header__all-menu__list-tit'><a
										href=/En/Recruit/TalentVision.aspx>CAREERS</a></div>
								<div class='c-header__all-menu__list-subcont'>
									<div class='c-header__all-menu__subcont-list'>
										<div class='c-header__all-menu__subcont__item'><a
												href='/En/Recruit/TalentVision.aspx'>HR Management</a></div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/En/Recruit/JobOpening.aspx'>Recruit Information</a></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
		<span class="c-header__container-bg"></span>
	</div>
</header>
	
    `;


    $(".header").html(header);
    $(".header .header").unwrap();

});