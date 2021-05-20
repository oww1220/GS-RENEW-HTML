$(function(){

	/*
	const header = `

	<header>
	<div class="header">
		
	</div>
	<div class="c-header" id="c-header">
		<div class="c-header__wrap">
			<div class="c-header__logo">
				<h1 class="c-header__logo-wrap">
					<a href="/Kr/Default.aspx" class="c-header__logo-wrap__link">
						<span class="c-header__logo-wrap__text">GS 글로벌</span>
					</a>
				</h1>
			</div>
			<div class="c-header__menu" id="gnb">

				<ul class="c-header__menu-list">
                        <li class="c-header__menu-list__item"><a href="/Kr/Business/index.aspx"
                                class="c-header__menu-list__item-tit c-header__menu-list__item-tit-pc"><span>COMPANY</span></a>
                            <div class="c-header__menu-list__item-tit c-header__menu-list__item-tit-mo"><span>COMPANY</span>
                            </div>
                            <ul class="c-header__menu-sub-list">
                                <li class="c-header__menu-sub-list__item"><a href="/En/Business/Outline.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>Corporate Overview</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/En/Business/Greeting.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>CEO’s Message</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/En/Business/ManagementPhilosophy.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>Corporate Principles</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/En/Business/History.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>Corporate History</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/En/Business/GlobalNetworkWordWide.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>Global Network</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/En/Business/Directions.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>Location</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/Business/Management.aspx"
                                            class="c-header__menu-sub-list__item-tit"><span>News</span></a></li>
                            </ul>
                        </li>
                        <li class="c-header__menu-list__item"><a href="/Kr/FieldBusiness/index.aspx"
                                class="c-header__menu-list__item-tit c-header__menu-list__item-tit-pc"><span>BUSINESS</span></a>
                            <div class="c-header__menu-list__item-tit c-header__menu-list__item-tit-mo"><span>BUSINESS</span>
                            </div>
                            <ul class="c-header__menu-sub-list">
                                <li class="c-header__menu-sub-list__item"><a href="/En/FieldBusiness/Trading/Steel.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>Trading</span></a><button
                                        class="c-header__menu-sub-list__depth-btn" type="button"><span
                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>
                                    <ul class="c-header__menu-sub-list__depth-list">
                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/FieldBusiness/Trading/Steel.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>Steel</span></a></li>
                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/FieldBusiness/Trading/PetroleumProduct.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>Petroleum &amp; Chemicals</span></a></li>
                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/FieldBusiness/Trading/ResourcesCoal.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>Coal &amp; Biomass</span></a></li>
                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/FieldBusiness/Trading/MachineGoods.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>Industrial Products</span></a></li>
                                    </ul>
                                </li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/FieldBusiness/Trading/Steel.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>Green</span></a><button
                                        class="c-header__menu-sub-list__depth-btn" type="button"><span
                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>
                                    <ul class="c-header__menu-sub-list__depth-list">
                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/FieldBusiness/Operation/EVbusiness.aspx"
                                            class="c-header__menu-sub-list__depth-list-item-tit"><span>eMobility</span></a></li>
                                        <li class="c-header__menu-sub-list__depth-list__item"><a
                                                href="/Kr/FieldBusiness/Trading/PetroleumProduct.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>Renewable Energy</span></a>
                                        </li>
                                        <li class="c-header__menu-sub-list__depth-list__item"><a
                                            href="/Kr/FieldBusiness/Trading/PetroleumProduct.aspx"
                                            class="c-header__menu-sub-list__depth-list-item-tit"><span>Recycling</span></a>
                                    </li>
                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/FieldBusiness/Operation/Robotics.aspx"
                                            class="c-header__menu-sub-list__depth-list-item-tit"><span>Robotics</span></a></li>
                                    </ul>
                                </li>
                                <li class="c-header__menu-sub-list__item"><a href="/En/FieldBusiness/Operation/Logistics.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>Operation</span></a><button
                                        class="c-header__menu-sub-list__depth-btn" type="button"><span
                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>
                                    <ul class="c-header__menu-sub-list__depth-list">
                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/FieldBusiness/Operation/Logistics.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>Logistics</span></a></li>
                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/FieldBusiness/Operation/GsEntec.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>GS Entec</span></a></li>
                                    </ul>
                                </li>
                                <li class="c-header__menu-sub-list__item"><a href="/En/FieldBusiness/Investment/SocBusiness.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>Investment</span></a><button
                                        class="c-header__menu-sub-list__depth-btn" type="button"><span
                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>
                                    <ul class="c-header__menu-sub-list__depth-list">
                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/FieldBusiness/Investment/SocBusiness.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>SOC Development Business</span></a></li>
                                        <li class="c-header__menu-sub-list__depth-list__item"><a
                                                href="/En/FieldBusiness/Investment/ProjectBusiness.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>Project Development</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="c-header__menu-list__item"><a href="/Kr/IrInfo/index.aspx"
                                class="c-header__menu-list__item-tit c-header__menu-list__item-tit-pc"><span>INVESTOR RELATIONS</span></a>
                            <div class="c-header__menu-list__item-tit c-header__menu-list__item-tit-mo"><span>INVESTOR RELATIONS</span>
                            </div>
                            <ul class="c-header__menu-sub-list">
                                
                                <li class="c-header__menu-sub-list__item"><a href="/En/IrInfo/Management/BoardOfDirectors.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span style="color: inherit;">Governance</span></a><button
                                        class="c-header__menu-sub-list__depth-btn" type="button"><span
                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>
                                    <ul class="c-header__menu-sub-list__depth-list">
                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/IrInfo/Management/BoardOfDirectors.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>Board of Directors</span></a></li>
                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/IrInfo/Management/StockHolder.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>Shareholders</span></a></li>
                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/IrInfo/Management/StockHolder.aspx"
                                                    class="c-header__menu-sub-list__depth-list-item-tit"><span>Charter of Corporate Governance</span></a></li>
                                    </ul>
                                </li>
                                <li class="c-header__menu-sub-list__item"><a href="/En/IrInfo/StockInfo.aspx" class="c-header__menu-sub-list__item-tit"><span>Stock Information</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/En/IrInfo/FinancialInfo5Years.aspx" class="c-header__menu-sub-list__item-tit"><span>Financial Statements</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/En/IrInfo/IRList.aspx" class="c-header__menu-sub-list__item-tit"><span>IR Library</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/IrInfo/IRList.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>Brochure</span></a></li>
                            </ul>
                        </li>
                        <li class="c-header__menu-list__item"><a href="/Kr/CompanyNews/index.aspx"
                                class="c-header__menu-list__item-tit c-header__menu-list__item-tit-pc"><span>SUSTAINABILITY</span></a>
                            <div class="c-header__menu-list__item-tit c-header__menu-list__item-tit-mo"><span>SUSTAINABILITY</span>
                            </div>
                            <ul class="c-header__menu-sub-list">
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/News.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>Ethics Management</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/SocialContribution.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>Environmental Management</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a
                                        href="/Kr/IrInfo/Management/BoardOfDirectors.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>Compliance Management</span></a><button
                                        class="c-header__menu-sub-list__depth-btn" type="button"><span
                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>
                                    <ul class="c-header__menu-sub-list__depth-list">
                                        <li class="c-header__menu-sub-list__depth-list__item"><a
                                                href="/Kr/IrInfo/Management/BoardOfDirectors.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>Fair Trade</span></a>
                                        </li>
                                        <li class="c-header__menu-sub-list__depth-list__item"><a
                                                href="/Kr/IrInfo/Management/StockHolder.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>Anti-Corruption</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/News.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>Social Contributions</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/SocialContribution.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>Educational Activities</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/PromotionalMaterial.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>Sustainability Organization</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/PromotionalMaterial.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>ESG Rating</span></a></li>
                            </ul>
                        </li>
                        <li class="c-header__menu-list__item"><a href="/En/Recruit/TalentVision.aspx"
                                class="c-header__menu-list__item-tit c-header__menu-list__item-tit-pc"><span>CAREERS</span></a>
                            <div class="c-header__menu-list__item-tit c-header__menu-list__item-tit-mo"><span>CAREERS</span></div>
                            <ul class="c-header__menu-sub-list">
                                <li class="c-header__menu-sub-list__item"><a href="/En/Recruit/TalentVision.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>HR Management</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/En/Recruit/JobOpening.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>Recruit Information</span></a></li>
                            </ul>
                        </li>
                    </ul>

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
                        <span class="c-header__hambuger-item__txt">전체메뉴</span>
                    </button>
                    <button type="button" class="c-header__hambuger-item c-header__hambuger-item-mobile-menu">
                        <span class="c-header__hambuger-item__txt">메뉴</span>
                        <i class="c-header__hambuger-object c-header__hambuger-object-01"></i>
                        <i class="c-header__hambuger-object c-header__hambuger-object-02"></i>
                        <i class="c-header__hambuger-object c-header__hambuger-object-03"></i>
                    </button>
                    <div class="c-header__all-menu__wrap">
                        <div class="c-header__all-menu__list-area">
                            <div class="c-header__all-menu__list-area__wrap">
                                <div class='c-header__all-menu__list'>
                                    <div class='c-header__all-menu__list-tit'><a href=/Kr/Business/index.aspx>COMPANY</a></div>
                                    <div class='c-header__all-menu__list-subcont'>
                                        <div class='c-header__all-menu__subcont-list'>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='/Kr/Business/Outline.aspx'>Corporate Overview</a></div>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='/Kr/Business/Greeting.aspx'>CEO’s Message</a></div>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='/Kr/Business/ManagementPhilosophy.aspx'>Corporate Principles</a></div>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='/Kr/Business/History.aspx'>Corporate History</a></div>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='/Kr/Business/GlobalNetworkWordWide.aspx'>Global Network</a></div>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='/Kr/Business/Directions.aspx'>Location</a></div>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='/Kr/Business/Management.aspx'>News</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div class='c-header__all-menu__list'>
                                    <div class='c-header__all-menu__list-tit'><a href=/Kr/FieldBusiness/index.aspx>BUSINESS</a>
                                    </div>
                                    <div class='c-header__all-menu__list-subcont'>
                                        <div class='c-header__all-menu__subcont-list'>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='/Kr/FieldBusiness/Trading/Steel.aspx'>Trading</a>
                                                <div class='c-header__all-menu__dethcont-list'>
                                                    <div class='c-header__all-menu__dethcont__item'><a
                                                            href='/Kr/FieldBusiness/Trading/Steel.aspx'>Steel</a></div>
                                                    <div class='c-header__all-menu__dethcont__item'><a
                                                            href='/Kr/FieldBusiness/Trading/PetroleumProduct.aspx'>Petroleum & Chemicals</a>
                                                    </div>
                                                    <div class='c-header__all-menu__dethcont__item'><a
                                                            href='/Kr/FieldBusiness/Trading/ResourcesCoal.aspx'>Coal & Biomass</a></div>
                                                    <div class='c-header__all-menu__dethcont__item'><a
                                                            href='/Kr/FieldBusiness/Trading/MachineGoods.aspx'>Industrial Products</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                href='/Kr/FieldBusiness/Operation/Logistics.aspx'>Green</a>
                                                <div class='c-header__all-menu__dethcont-list'>
                                                    <div class='c-header__all-menu__dethcont__item'><a
                                                            href='/Kr/FieldBusiness/Operation/Logistics.aspx'>eMobility</a></div>
                                                    <div class='c-header__all-menu__dethcont__item'><a
                                                            href='/Kr/FieldBusiness/Operation/GsEntec.aspx'>Renewable Energy</a></div>
                                                    <div class='c-header__all-menu__dethcont__item'><a
                                                            href='/Kr/FieldBusiness/Operation/Robotics.aspx'>Recycling</a>
                                                    </div>
                                                    <div class='c-header__all-menu__dethcont__item'><a
                                                            href='/Kr/FieldBusiness/Operation/EVbusiness.aspx'>Robotics</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='/Kr/FieldBusiness/Operation/Logistics.aspx'>Operation</a>
                                                <div class='c-header__all-menu__dethcont-list'>
                                                    <div class='c-header__all-menu__dethcont__item'><a
                                                            href='/Kr/FieldBusiness/Operation/Logistics.aspx'>Logistics</a></div>
                                                    <div class='c-header__all-menu__dethcont__item'><a
                                                            href='/Kr/FieldBusiness/Operation/GsEntec.aspx'>GS Entec</a></div>
                                                </div>
                                            </div>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='/Kr/FieldBusiness/Investment/SocBusiness.aspx'>Investment</a>
                                                <div class='c-header__all-menu__dethcont-list'>
                                                    <div class='c-header__all-menu__dethcont__item'><a
                                                            href='/Kr/FieldBusiness/Investment/SocBusiness.aspx'>SOC Development Business</a>
                                                    </div>
                                                    <div class='c-header__all-menu__dethcont__item'><a
                                                            href='/Kr/FieldBusiness/Investment/ProjectBusiness.aspx'>Project Development</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='c-header__all-menu__list'>
                                    <div class='c-header__all-menu__list-tit'><a href=/Kr/IrInfo/index.aspx>INVESTOR RELATIONS</a></div>
                                    <div class='c-header__all-menu__list-subcont'>
                                        <div class='c-header__all-menu__subcont-list'>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='/Kr/IrInfo/Management/BoardOfDirectors.aspx'>Governance</a>
                                                <div class='c-header__all-menu__dethcont-list'>
                                                    <div class='c-header__all-menu__dethcont__item'><a
                                                            href='/Kr/IrInfo/Management/BoardOfDirectors.aspx'>Board of Directors</a></div>
                                                    <div class='c-header__all-menu__dethcont__item'><a
                                                            href='/Kr/IrInfo/Management/StockHolder.aspx'>Shareholders</a></div>
                                                    <div class='c-header__all-menu__dethcont__item'><a
                                                            href='/Kr/IrInfo/Management/StockHolder.aspx'>Charter of<br/>Corporate Governance</a></div>
                                                </div>
                                            </div>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='/Kr/IrInfo/StockInfo.aspx'>Stock Information</a></div>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='/Kr/IrInfo/FinancialInfo5Years.aspx'>Financial Statements</a></div>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='/Kr/IrInfo/IRList.aspx'>IR Library</a></div>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='/Kr/IrInfo/IRList.aspx'>Brochure</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div class='c-header__all-menu__list'>
                                    <div class='c-header__all-menu__list-tit'><a href=/Kr/CompanyNews/index.aspx>SUSTAINABILITY</a>
                                    </div>
                                    <div class='c-header__all-menu__list-subcont'>
                                        <div class='c-header__all-menu__subcont-list'>
                                            
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='/Kr/IrInfo/Notice.aspx'>Ethics Management</a></div>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='/Kr/IrInfo/OfficialNotice.aspx'>Environmental Management</a></div>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                href='/Kr/IrInfo/Management/BoardOfDirectors.aspx'>Compliance Management</a>
                                                <div class='c-header__all-menu__dethcont-list'>
                                                    <div class='c-header__all-menu__dethcont__item'><a
                                                            href='/Kr/IrInfo/Management/BoardOfDirectors.aspx'>Fair Trade</a></div>
                                                    <div class='c-header__all-menu__dethcont__item'><a
                                                            href='/Kr/IrInfo/Management/StockHolder.aspx'>Anti-Corruption</a></div>
                                                </div>
                                            </div>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='/Kr/IrInfo/StockInfo.aspx'>Social Contributions</a></div>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='/Kr/IrInfo/FinancialInfo5Years.aspx'>Educational Activities</a></div>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='/Kr/IrInfo/IRList.aspx'>Sustainability Organization</a></div>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='/Kr/IrInfo/IRList.aspx'>ESG Rating</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div class='c-header__all-menu__list'>
                                    <div class='c-header__all-menu__list-tit'><a href=/Kr/Recruit/TalentVision.aspx>CAREERS</a>
                                    </div>
                                    <div class='c-header__all-menu__list-subcont'>
                                        <div class='c-header__all-menu__subcont-list'>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='/Kr/Recruit/TalentVision.aspx'>HR Management</a></div>
                                            <div class='c-header__all-menu__subcont__item'><a
                                                    href='https://gsgcorp.recruiter.co.kr/app/jobnotice/list'>Recruit Information</a></div>
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
*/

    const header = '\n\n\t<header>\n\t<div class="header">\n\t\t\n\t</div>\n\t<div class="c-header" id="c-header">\n\t\t<div class="c-header__wrap">\n\t\t\t<div class="c-header__logo">\n\t\t\t\t<h1 class="c-header__logo-wrap">\n\t\t\t\t\t<a href="/Kr/Default.aspx" class="c-header__logo-wrap__link">\n\t\t\t\t\t\t<span class="c-header__logo-wrap__text">GS 글로벌</span>\n\t\t\t\t\t</a>\n\t\t\t\t</h1>\n\t\t\t</div>\n\t\t\t<div class="c-header__menu" id="gnb">\n\n\t\t\t\t<ul class="c-header__menu-list">\n                        <li class="c-header__menu-list__item"><a href="/Kr/Business/index.aspx"\n                                class="c-header__menu-list__item-tit c-header__menu-list__item-tit-pc"><span>COMPANY</span></a>\n                            <div class="c-header__menu-list__item-tit c-header__menu-list__item-tit-mo"><span>COMPANY</span>\n                            </div>\n                            <ul class="c-header__menu-sub-list">\n                                <li class="c-header__menu-sub-list__item"><a href="/En/Business/Outline.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>Corporate Overview</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/En/Business/Greeting.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>CEO’s Message</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/En/Business/ManagementPhilosophy.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>Corporate Principles</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/En/Business/History.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>Corporate History</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/En/Business/GlobalNetworkWordWide.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>Global Network</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/En/Business/Directions.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>Location</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/Business/Management.aspx"\n                                            class="c-header__menu-sub-list__item-tit"><span>News</span></a></li>\n                            </ul>\n                        </li>\n                        <li class="c-header__menu-list__item"><a href="/Kr/FieldBusiness/index.aspx"\n                                class="c-header__menu-list__item-tit c-header__menu-list__item-tit-pc"><span>BUSINESS</span></a>\n                            <div class="c-header__menu-list__item-tit c-header__menu-list__item-tit-mo"><span>BUSINESS</span>\n                            </div>\n                            <ul class="c-header__menu-sub-list">\n                                <li class="c-header__menu-sub-list__item"><a href="/En/FieldBusiness/Trading/Steel.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>Trading</span></a><button\n                                        class="c-header__menu-sub-list__depth-btn" type="button"><span\n                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>\n                                    <ul class="c-header__menu-sub-list__depth-list">\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/FieldBusiness/Trading/Steel.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>Steel</span></a></li>\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/FieldBusiness/Trading/PetroleumProduct.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>Petroleum &amp; Chemicals</span></a></li>\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/FieldBusiness/Trading/ResourcesCoal.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>Coal &amp; Biomass</span></a></li>\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/FieldBusiness/Trading/MachineGoods.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>Industrial Products</span></a></li>\n                                    </ul>\n                                </li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/FieldBusiness/Trading/Steel.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>Green</span></a><button\n                                        class="c-header__menu-sub-list__depth-btn" type="button"><span\n                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>\n                                    <ul class="c-header__menu-sub-list__depth-list">\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/FieldBusiness/Operation/EVbusiness.aspx"\n                                            class="c-header__menu-sub-list__depth-list-item-tit"><span>eMobility</span></a></li>\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a\n                                                href="/Kr/FieldBusiness/Trading/PetroleumProduct.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>Renewable Energy</span></a>\n                                        </li>\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a\n                                            href="/Kr/FieldBusiness/Trading/PetroleumProduct.aspx"\n                                            class="c-header__menu-sub-list__depth-list-item-tit"><span>Recycling</span></a>\n                                    </li>\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/FieldBusiness/Operation/Robotics.aspx"\n                                            class="c-header__menu-sub-list__depth-list-item-tit"><span>Robotics</span></a></li>\n                                    </ul>\n                                </li>\n                                <li class="c-header__menu-sub-list__item"><a href="/En/FieldBusiness/Operation/Logistics.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>Operation</span></a><button\n                                        class="c-header__menu-sub-list__depth-btn" type="button"><span\n                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>\n                                    <ul class="c-header__menu-sub-list__depth-list">\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/FieldBusiness/Operation/Logistics.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>Logistics</span></a></li>\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/FieldBusiness/Operation/GsEntec.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>GS Entec</span></a></li>\n                                    </ul>\n                                </li>\n                                <li class="c-header__menu-sub-list__item"><a href="/En/FieldBusiness/Investment/SocBusiness.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>Investment</span></a><button\n                                        class="c-header__menu-sub-list__depth-btn" type="button"><span\n                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>\n                                    <ul class="c-header__menu-sub-list__depth-list">\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/FieldBusiness/Investment/SocBusiness.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>SOC Development Business</span></a></li>\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a\n                                                href="/En/FieldBusiness/Investment/ProjectBusiness.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>Project Development</span></a></li>\n                                    </ul>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class="c-header__menu-list__item"><a href="/Kr/IrInfo/index.aspx"\n                                class="c-header__menu-list__item-tit c-header__menu-list__item-tit-pc"><span>INVESTOR RELATIONS</span></a>\n                            <div class="c-header__menu-list__item-tit c-header__menu-list__item-tit-mo"><span>INVESTOR RELATIONS</span>\n                            </div>\n                            <ul class="c-header__menu-sub-list">\n                                \n                                <li class="c-header__menu-sub-list__item"><a href="/En/IrInfo/Management/BoardOfDirectors.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span style="color: inherit;">Governance</span></a><button\n                                        class="c-header__menu-sub-list__depth-btn" type="button"><span\n                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>\n                                    <ul class="c-header__menu-sub-list__depth-list">\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/IrInfo/Management/BoardOfDirectors.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>Board of Directors</span></a></li>\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/IrInfo/Management/StockHolder.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>Shareholders</span></a></li>\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a href="/En/IrInfo/Management/StockHolder.aspx"\n                                                    class="c-header__menu-sub-list__depth-list-item-tit"><span>Charter of Corporate Governance</span></a></li>\n                                    </ul>\n                                </li>\n                                <li class="c-header__menu-sub-list__item"><a href="/En/IrInfo/StockInfo.aspx" class="c-header__menu-sub-list__item-tit"><span>Stock Information</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/En/IrInfo/FinancialInfo5Years.aspx" class="c-header__menu-sub-list__item-tit"><span>Financial Statements</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/En/IrInfo/IRList.aspx" class="c-header__menu-sub-list__item-tit"><span>IR Library</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/IrInfo/IRList.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>Brochure</span></a></li>\n                            </ul>\n                        </li>\n                        <li class="c-header__menu-list__item"><a href="/Kr/CompanyNews/index.aspx"\n                                class="c-header__menu-list__item-tit c-header__menu-list__item-tit-pc"><span>SUSTAINABILITY</span></a>\n                            <div class="c-header__menu-list__item-tit c-header__menu-list__item-tit-mo"><span>SUSTAINABILITY</span>\n                            </div>\n                            <ul class="c-header__menu-sub-list">\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/News.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>Ethics Management</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/SocialContribution.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>Environmental Management</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a\n                                        href="/Kr/IrInfo/Management/BoardOfDirectors.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>Compliance Management</span></a><button\n                                        class="c-header__menu-sub-list__depth-btn" type="button"><span\n                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>\n                                    <ul class="c-header__menu-sub-list__depth-list">\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a\n                                                href="/Kr/IrInfo/Management/BoardOfDirectors.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>Fair Trade</span></a>\n                                        </li>\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a\n                                                href="/Kr/IrInfo/Management/StockHolder.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>Anti-Corruption</span></a>\n                                        </li>\n                                    </ul>\n                                </li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/News.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>Social Contributions</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/SocialContribution.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>Educational Activities</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/PromotionalMaterial.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>Sustainability Organization</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/PromotionalMaterial.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>ESG Rating</span></a></li>\n                            </ul>\n                        </li>\n                        <li class="c-header__menu-list__item"><a href="/En/Recruit/TalentVision.aspx"\n                                class="c-header__menu-list__item-tit c-header__menu-list__item-tit-pc"><span>CAREERS</span></a>\n                            <div class="c-header__menu-list__item-tit c-header__menu-list__item-tit-mo"><span>CAREERS</span></div>\n                            <ul class="c-header__menu-sub-list">\n                                <li class="c-header__menu-sub-list__item"><a href="/En/Recruit/TalentVision.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>HR Management</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/En/Recruit/JobOpening.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>Recruit Information</span></a></li>\n                            </ul>\n                        </li>\n                    </ul>\n\n\t\t\t\t<div class="c-header__menu-utility">\n\t\t\t\t\t<div class="c-header__menu-utility-list c-header__menu-utility--contact-us">\n\t\t\t\t\t\t<a href="/En/ContactUs/ContactUs.aspx" class="c-header__menu-utility-list__item">\n\t\t\t\t\t\t\t<span class="c-header__menu-utility-list__item-text">CONTACT US</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="c-header__menu-utility-list c-header__menu-lang">\n\t\t\t\t\t\t<button type="button" class="c-header__menu-utility-list__item c-header__menu-lang__btn">\n\t\t\t\t\t\t\t<span class="c-header__menu-utility-list__item-text">ENG</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<ul class="c-header__menu-lang-list">\n\t\t\t\t\t\t\t<li class="c-header__menu-lang-list__item">\n\t\t\t\t\t\t\t\t<a href="/Kr" class="c-header__menu-lang-list__item-wrap active">\n\t\t\t\t\t\t\t\t\t<span class="c-header__menu-lang-list__item-text">KOR</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class="c-header__menu-lang-list-item">\n\t\t\t\t\t\t\t\t<a href="/En" class="c-header__menu-lang-list__item-wrap">\n\t\t\t\t\t\t\t\t\t<span class="c-header__menu-lang-list__item-text">ENG</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="c-header__hambuger">\n                    <button type="button" class="c-header__hambuger-item c-header__hambuger-item--all-menu">\n                        <span class="c-header__hambuger-item__txt">전체메뉴</span>\n                    </button>\n                    <button type="button" class="c-header__hambuger-item c-header__hambuger-item-mobile-menu">\n                        <span class="c-header__hambuger-item__txt">메뉴</span>\n                        <i class="c-header__hambuger-object c-header__hambuger-object-01"></i>\n                        <i class="c-header__hambuger-object c-header__hambuger-object-02"></i>\n                        <i class="c-header__hambuger-object c-header__hambuger-object-03"></i>\n                    </button>\n                    <div class="c-header__all-menu__wrap">\n                        <div class="c-header__all-menu__list-area">\n                            <div class="c-header__all-menu__list-area__wrap">\n                                <div class=\'c-header__all-menu__list\'>\n                                    <div class=\'c-header__all-menu__list-tit\'><a href=/Kr/Business/index.aspx>COMPANY</a></div>\n                                    <div class=\'c-header__all-menu__list-subcont\'>\n                                        <div class=\'c-header__all-menu__subcont-list\'>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'/Kr/Business/Outline.aspx\'>Corporate Overview</a></div>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'/Kr/Business/Greeting.aspx\'>CEO’s Message</a></div>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'/Kr/Business/ManagementPhilosophy.aspx\'>Corporate Principles</a></div>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'/Kr/Business/History.aspx\'>Corporate History</a></div>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'/Kr/Business/GlobalNetworkWordWide.aspx\'>Global Network</a></div>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'/Kr/Business/Directions.aspx\'>Location</a></div>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'/Kr/Business/Management.aspx\'>News</a></div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\'c-header__all-menu__list\'>\n                                    <div class=\'c-header__all-menu__list-tit\'><a href=/Kr/FieldBusiness/index.aspx>BUSINESS</a>\n                                    </div>\n                                    <div class=\'c-header__all-menu__list-subcont\'>\n                                        <div class=\'c-header__all-menu__subcont-list\'>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'/Kr/FieldBusiness/Trading/Steel.aspx\'>Trading</a>\n                                                <div class=\'c-header__all-menu__dethcont-list\'>\n                                                    <div class=\'c-header__all-menu__dethcont__item\'><a\n                                                            href=\'/Kr/FieldBusiness/Trading/Steel.aspx\'>Steel</a></div>\n                                                    <div class=\'c-header__all-menu__dethcont__item\'><a\n                                                            href=\'/Kr/FieldBusiness/Trading/PetroleumProduct.aspx\'>Petroleum & Chemicals</a>\n                                                    </div>\n                                                    <div class=\'c-header__all-menu__dethcont__item\'><a\n                                                            href=\'/Kr/FieldBusiness/Trading/ResourcesCoal.aspx\'>Coal & Biomass</a></div>\n                                                    <div class=\'c-header__all-menu__dethcont__item\'><a\n                                                            href=\'/Kr/FieldBusiness/Trading/MachineGoods.aspx\'>Industrial Products</a>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                href=\'/Kr/FieldBusiness/Operation/Logistics.aspx\'>Green</a>\n                                                <div class=\'c-header__all-menu__dethcont-list\'>\n                                                    <div class=\'c-header__all-menu__dethcont__item\'><a\n                                                            href=\'/Kr/FieldBusiness/Operation/Logistics.aspx\'>eMobility</a></div>\n                                                    <div class=\'c-header__all-menu__dethcont__item\'><a\n                                                            href=\'/Kr/FieldBusiness/Operation/GsEntec.aspx\'>Renewable Energy</a></div>\n                                                    <div class=\'c-header__all-menu__dethcont__item\'><a\n                                                            href=\'/Kr/FieldBusiness/Operation/Robotics.aspx\'>Recycling</a>\n                                                    </div>\n                                                    <div class=\'c-header__all-menu__dethcont__item\'><a\n                                                            href=\'/Kr/FieldBusiness/Operation/EVbusiness.aspx\'>Robotics</a>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'/Kr/FieldBusiness/Operation/Logistics.aspx\'>Operation</a>\n                                                <div class=\'c-header__all-menu__dethcont-list\'>\n                                                    <div class=\'c-header__all-menu__dethcont__item\'><a\n                                                            href=\'/Kr/FieldBusiness/Operation/Logistics.aspx\'>Logistics</a></div>\n                                                    <div class=\'c-header__all-menu__dethcont__item\'><a\n                                                            href=\'/Kr/FieldBusiness/Operation/GsEntec.aspx\'>GS Entec</a></div>\n                                                </div>\n                                            </div>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'/Kr/FieldBusiness/Investment/SocBusiness.aspx\'>Investment</a>\n                                                <div class=\'c-header__all-menu__dethcont-list\'>\n                                                    <div class=\'c-header__all-menu__dethcont__item\'><a\n                                                            href=\'/Kr/FieldBusiness/Investment/SocBusiness.aspx\'>SOC Development Business</a>\n                                                    </div>\n                                                    <div class=\'c-header__all-menu__dethcont__item\'><a\n                                                            href=\'/Kr/FieldBusiness/Investment/ProjectBusiness.aspx\'>Project Development</a></div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\'c-header__all-menu__list\'>\n                                    <div class=\'c-header__all-menu__list-tit\'><a href=/Kr/IrInfo/index.aspx>INVESTOR RELATIONS</a></div>\n                                    <div class=\'c-header__all-menu__list-subcont\'>\n                                        <div class=\'c-header__all-menu__subcont-list\'>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'/Kr/IrInfo/Management/BoardOfDirectors.aspx\'>Governance</a>\n                                                <div class=\'c-header__all-menu__dethcont-list\'>\n                                                    <div class=\'c-header__all-menu__dethcont__item\'><a\n                                                            href=\'/Kr/IrInfo/Management/BoardOfDirectors.aspx\'>Board of Directors</a></div>\n                                                    <div class=\'c-header__all-menu__dethcont__item\'><a\n                                                            href=\'/Kr/IrInfo/Management/StockHolder.aspx\'>Shareholders</a></div>\n                                                    <div class=\'c-header__all-menu__dethcont__item\'><a\n                                                            href=\'/Kr/IrInfo/Management/StockHolder.aspx\'>Charter of<br/>Corporate Governance</a></div>\n                                                </div>\n                                            </div>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'/Kr/IrInfo/StockInfo.aspx\'>Stock Information</a></div>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'/Kr/IrInfo/FinancialInfo5Years.aspx\'>Financial Statements</a></div>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'/Kr/IrInfo/IRList.aspx\'>IR Library</a></div>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'/Kr/IrInfo/IRList.aspx\'>Brochure</a></div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\'c-header__all-menu__list\'>\n                                    <div class=\'c-header__all-menu__list-tit\'><a href=/Kr/CompanyNews/index.aspx>SUSTAINABILITY</a>\n                                    </div>\n                                    <div class=\'c-header__all-menu__list-subcont\'>\n                                        <div class=\'c-header__all-menu__subcont-list\'>\n                                            \n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'/Kr/IrInfo/Notice.aspx\'>Ethics Management</a></div>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'/Kr/IrInfo/OfficialNotice.aspx\'>Environmental Management</a></div>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                href=\'/Kr/IrInfo/Management/BoardOfDirectors.aspx\'>Compliance Management</a>\n                                                <div class=\'c-header__all-menu__dethcont-list\'>\n                                                    <div class=\'c-header__all-menu__dethcont__item\'><a\n                                                            href=\'/Kr/IrInfo/Management/BoardOfDirectors.aspx\'>Fair Trade</a></div>\n                                                    <div class=\'c-header__all-menu__dethcont__item\'><a\n                                                            href=\'/Kr/IrInfo/Management/StockHolder.aspx\'>Anti-Corruption</a></div>\n                                                </div>\n                                            </div>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'/Kr/IrInfo/StockInfo.aspx\'>Social Contributions</a></div>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'/Kr/IrInfo/FinancialInfo5Years.aspx\'>Educational Activities</a></div>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'/Kr/IrInfo/IRList.aspx\'>Sustainability Organization</a></div>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'/Kr/IrInfo/IRList.aspx\'>ESG Rating</a></div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\'c-header__all-menu__list\'>\n                                    <div class=\'c-header__all-menu__list-tit\'><a href=/Kr/Recruit/TalentVision.aspx>CAREERS</a>\n                                    </div>\n                                    <div class=\'c-header__all-menu__list-subcont\'>\n                                        <div class=\'c-header__all-menu__subcont-list\'>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'/Kr/Recruit/TalentVision.aspx\'>HR Management</a></div>\n                                            <div class=\'c-header__all-menu__subcont__item\'><a\n                                                    href=\'https://gsgcorp.recruiter.co.kr/app/jobnotice/list\'>Recruit Information</a></div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\t\t</div>\n\t\t<span class="c-header__container-bg"></span>\n\t</div>\n</header>\n\t\n    ';

	const bodyOffset = $('body').offset(),
        currentOffset = $(document).scrollTop(),
        windowsize = $(window).width();

    $(".header").html(header);
    $(".header .header").unwrap();

	$('.c-header__menu-sub-list__depth-btn').click(function(){
		var __this =$(this),
		__parent =__this.parents('.c-header__menu-sub-list__item');

		if(__parent.hasClass('on')){
			__parent.removeClass('on');
		}else {
			__parent.siblings().removeClass('on');
			__parent.addClass('on');
		}

	});
	$('.c-header__hambuger-item--all-menu').click(function(){
		var __this =$(this),
			__item = $('.c-header__all-menu__wrap');
			if (__item.hasClass('active')){
				__item.removeClass('active');
				$('#c-header').removeClass('all-menu-active');
				$('body').removeClass('all-menu');

			}else {
				__item.addClass('active');
				$('#c-header').addClass('all-menu-active');
				$('body').addClass('all-menu');
			}
	});
	$('.c-header__hambuger-item-mobile-menu').click(function(){
		var __this =$(this);
			if (__this.hasClass('active')){
				if($('.mobile-menu-active .c-header__menu-list__item').hasClass('active')){
					$('.mobile-menu-active .c-header__menu-list__item').removeClass('active');
				}
				__this.removeClass('active');
				$('#c-header').removeClass('mobile-menu-active');
			}else {
				__this.addClass('active');
				$('#c-header').addClass('mobile-menu-active');
			}
	});
	$('.c-header__menu-list__item-tit').click (function(){

		if (windowsize < 640) {
			if ($(this).parents('.c-header__menu-list__item').hasClass('active')){
				$(this).parents('.c-header__menu-list__item').removeClass('active');
			}else {
				$(this).parents('.c-header__menu-list__item').siblings().removeClass('active');
				$(this).parents('.c-header__menu-list__item').addClass('active');
			}
		}
	});

});