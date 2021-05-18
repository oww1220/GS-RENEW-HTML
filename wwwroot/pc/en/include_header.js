$(function(){


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
									class="c-header__menu-sub-list__depth-list-item-tit"><span>e-Mobility</span></a></li>
								<li class="c-header__menu-sub-list__depth-list__item"><a
										href="/Kr/FieldBusiness/Trading/PetroleumProduct.aspx"
										class="c-header__menu-sub-list__depth-list-item-tit"><span>Renewable Energy</span></a>
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
								class="c-header__menu-sub-list__item-tit"><span style="color: inherit;">Management Information</span></a><button
								class="c-header__menu-sub-list__depth-btn" type="button"><span
									class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>
							<ul class="c-header__menu-sub-list__depth-list">
								<li class="c-header__menu-sub-list__depth-list__item"><a href="/En/IrInfo/Management/BoardOfDirectors.aspx"
										class="c-header__menu-sub-list__depth-list-item-tit"><span>Board of Directors</span></a></li>
								<li class="c-header__menu-sub-list__depth-list__item"><a href="/En/IrInfo/Management/StockHolder.aspx"
										class="c-header__menu-sub-list__depth-list-item-tit"><span>Shareholders</span></a></li>
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
								<div class='c-header__all-menu__list-tit'><a href=/Kr/Business/index.aspx>기업정보</a></div>
								<div class='c-header__all-menu__list-subcont'>
									<div class='c-header__all-menu__subcont-list'>
										<div class='c-header__all-menu__subcont__item'><a
												href='/Kr/Business/Outline.aspx'>개요</a></div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/Kr/Business/Greeting.aspx'>CEO 인사말</a></div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/Kr/Business/ManagementPhilosophy.aspx'>경영이념</a></div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/Kr/Business/History.aspx'>연혁</a></div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/Kr/Business/Management.aspx'>윤리경영</a></div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/Kr/Business/GlobalNetworkWordWide.aspx'>글로벌 네트워크</a></div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/Kr/Business/Directions.aspx'>찾아오시는 길</a></div>
									</div>
								</div>
							</div>
							<div class='c-header__all-menu__list'>
								<div class='c-header__all-menu__list-tit'><a href=/Kr/FieldBusiness/index.aspx>사업분야</a>
								</div>
								<div class='c-header__all-menu__list-subcont'>
									<div class='c-header__all-menu__subcont-list'>
										<div class='c-header__all-menu__subcont__item'><a
												href='/Kr/FieldBusiness/Trading/Steel.aspx'>Trading</a>
											<div class='c-header__all-menu__dethcont-list'>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/Kr/FieldBusiness/Trading/Steel.aspx'>철강</a></div>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/Kr/FieldBusiness/Trading/PetroleumProduct.aspx'>석유화학</a>
												</div>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/Kr/FieldBusiness/Trading/ResourcesCoal.aspx'>자원</a></div>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/Kr/FieldBusiness/Trading/MachineGoods.aspx'>기계/물자</a>
												</div>
											</div>
										</div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/Kr/FieldBusiness/Operation/Logistics.aspx'>Operation</a>
											<div class='c-header__all-menu__dethcont-list'>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/Kr/FieldBusiness/Operation/Logistics.aspx'>물류사업</a></div>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/Kr/FieldBusiness/Operation/GsEntec.aspx'>GS엔텍</a></div>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/Kr/FieldBusiness/Operation/Robotics.aspx'>Robotics</a>
												</div>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/Kr/FieldBusiness/Operation/EVbusiness.aspx'>e모빌리티</a>
												</div>
											</div>
										</div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/Kr/FieldBusiness/Investment/SocBusiness.aspx'>Investment</a>
											<div class='c-header__all-menu__dethcont-list'>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/Kr/FieldBusiness/Investment/SocBusiness.aspx'>SOC사업</a>
												</div>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/Kr/FieldBusiness/Investment/ProjectBusiness.aspx'>프로젝트
														사업</a></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class='c-header__all-menu__list'>
								<div class='c-header__all-menu__list-tit'><a href=/Kr/IrInfo/index.aspx>투자정보</a></div>
								<div class='c-header__all-menu__list-subcont'>
									<div class='c-header__all-menu__subcont-list'>
										<div class='c-header__all-menu__subcont__item'><a
												href='/Kr/IrInfo/Notice.aspx'>공고</a></div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/Kr/IrInfo/OfficialNotice.aspx'>공시정보</a></div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/Kr/IrInfo/Management/BoardOfDirectors.aspx'>경영정보</a>
											<div class='c-header__all-menu__dethcont-list'>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/Kr/IrInfo/Management/BoardOfDirectors.aspx'>이사회</a></div>
												<div class='c-header__all-menu__dethcont__item'><a
														href='/Kr/IrInfo/Management/StockHolder.aspx'>주주현황</a></div>
											</div>
										</div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/Kr/IrInfo/StockInfo.aspx'>주식정보</a></div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/Kr/IrInfo/FinancialInfo5Years.aspx'>재무정보</a></div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/Kr/IrInfo/IRList.aspx'>IR 자료실</a></div>
									</div>
								</div>
							</div>
							<div class='c-header__all-menu__list'>
								<div class='c-header__all-menu__list-tit'><a href=/Kr/CompanyNews/index.aspx>회사소식</a>
								</div>
								<div class='c-header__all-menu__list-subcont'>
									<div class='c-header__all-menu__subcont-list'>
										<div class='c-header__all-menu__subcont__item'><a
												href='/Kr/CompanyNews/News.aspx'>News</a></div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/Kr/CompanyNews/SocialContribution.aspx'>사회공헌</a></div>
										<div class='c-header__all-menu__subcont__item'><a
												href='/Kr/CompanyNews/PromotionalMaterial.aspx'>홍보자료</a></div>
									</div>
								</div>
							</div>
							<div class='c-header__all-menu__list'>
								<div class='c-header__all-menu__list-tit'><a href=/Kr/Recruit/TalentVision.aspx>채용정보</a>
								</div>
								<div class='c-header__all-menu__list-subcont'>
									<div class='c-header__all-menu__subcont-list'>
										<div class='c-header__all-menu__subcont__item'><a
												href='/Kr/Recruit/TalentVision.aspx'>인재경영</a></div>
										<div class='c-header__all-menu__subcont__item'><a
												href='https://gsgcorp.recruiter.co.kr/app/jobnotice/list'>채용공고</a></div>
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