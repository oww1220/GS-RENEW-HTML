$(function(){

	/*
	const header = `

    <header class="header">
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
                                class="c-header__menu-list__item-tit c-header__menu-list__item-tit-pc"><span>기업정보</span></a>
                            <div class="c-header__menu-list__item-tit c-header__menu-list__item-tit-mo"><span>기업정보</span>
                            </div>
                            <ul class="c-header__menu-sub-list">
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/Business/Outline.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>개요</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/Business/Greeting.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>CEO 인사말</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/Business/ManagementPhilosophy.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>경영이념</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/Business/History.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>연혁</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/Business/GlobalNetworkWordWide.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>글로벌 네트워크</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/Business/Directions.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>찾아오시는 길</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/Business/Management.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>News</span></a></li>
                            </ul>
                        </li>
                        <li class="c-header__menu-list__item"><a href="/Kr/FieldBusiness/index.aspx"
                                class="c-header__menu-list__item-tit c-header__menu-list__item-tit-pc"><span>사업분야</span></a>
                            <div class="c-header__menu-list__item-tit c-header__menu-list__item-tit-mo"><span>사업분야</span>
                            </div>
                            <ul class="c-header__menu-sub-list">
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/FieldBusiness/Trading/Steel.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>Trading</span></a><button
                                        class="c-header__menu-sub-list__depth-btn" type="button"><span
                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>
                                    <ul class="c-header__menu-sub-list__depth-list">
                                        <li class="c-header__menu-sub-list__depth-list__item"><a
                                                href="/Kr/FieldBusiness/Trading/Steel.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>철강</span></a>
                                        </li>
                                        <li class="c-header__menu-sub-list__depth-list__item"><a
                                                href="/Kr/FieldBusiness/Trading/PetroleumProduct.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>석유화학</span></a>
                                        </li>
                                        <li class="c-header__menu-sub-list__depth-list__item"><a
                                                href="/Kr/FieldBusiness/Trading/ResourcesCoal.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>자원</span></a>
                                        </li>
                                        <li class="c-header__menu-sub-list__depth-list__item"><a
                                                href="/Kr/FieldBusiness/Trading/MachineGoods.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>기계/물자</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/FieldBusiness/Trading/Steel.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>Green</span></a><button
                                        class="c-header__menu-sub-list__depth-btn" type="button"><span
                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>
                                    <ul class="c-header__menu-sub-list__depth-list">
                                        <li class="c-header__menu-sub-list__depth-list__item"><a
                                                href="/Kr/FieldBusiness/Trading/Steel.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>e-모빌리티</span></a>
                                        </li>
                                        <li class="c-header__menu-sub-list__depth-list__item"><a
                                                href="/Kr/FieldBusiness/Trading/PetroleumProduct.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>신재생에너지</span></a>
                                        </li>
                                        <li class="c-header__menu-sub-list__depth-list__item"><a
                                            href="/Kr/FieldBusiness/Trading/PetroleumProduct.aspx"
                                            class="c-header__menu-sub-list__depth-list-item-tit"><span>리사이클링</span></a>
                                    </li>
                                        <li class="c-header__menu-sub-list__depth-list__item"><a
                                                href="/Kr/FieldBusiness/Trading/ResourcesCoal.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>로봇</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="c-header__menu-sub-list__item"><a
                                        href="/Kr/FieldBusiness/Operation/Logistics.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>Operation</span></a><button
                                        class="c-header__menu-sub-list__depth-btn" type="button"><span
                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>
                                    <ul class="c-header__menu-sub-list__depth-list">
                                        <li class="c-header__menu-sub-list__depth-list__item"><a
                                                href="/Kr/FieldBusiness/Operation/Logistics.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>물류사업</span></a>
                                        </li>
                                        <li class="c-header__menu-sub-list__depth-list__item"><a
                                                href="/Kr/FieldBusiness/Operation/GsEntec.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>GS엔텍</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="c-header__menu-sub-list__item"><a
                                        href="/Kr/FieldBusiness/Investment/SocBusiness.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>Investment</span></a><button
                                        class="c-header__menu-sub-list__depth-btn" type="button"><span
                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>
                                    <ul class="c-header__menu-sub-list__depth-list">
                                        <li class="c-header__menu-sub-list__depth-list__item"><a
                                                href="/Kr/FieldBusiness/Investment/SocBusiness.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>SOC사업</span></a>
                                        </li>
                                        <li class="c-header__menu-sub-list__depth-list__item"><a
                                                href="/Kr/FieldBusiness/Investment/ProjectBusiness.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>프로젝트
                                                    사업</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="c-header__menu-list__item"><a href="/Kr/IrInfo/index.aspx"
                                class="c-header__menu-list__item-tit c-header__menu-list__item-tit-pc"><span>투자정보</span></a>
                            <div class="c-header__menu-list__item-tit c-header__menu-list__item-tit-mo"><span>투자정보</span>
                            </div>
                            <ul class="c-header__menu-sub-list">
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/IrInfo/Notice.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>공고</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/IrInfo/OfficialNotice.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>공시정보</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a
                                        href="/Kr/IrInfo/Management/BoardOfDirectors.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>지배구조</span></a><button
                                        class="c-header__menu-sub-list__depth-btn" type="button"><span
                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>
                                    <ul class="c-header__menu-sub-list__depth-list">
                                        <li class="c-header__menu-sub-list__depth-list__item"><a
                                                href="/Kr/IrInfo/Management/BoardOfDirectors.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>이사회</span></a>
                                        </li>
                                        <li class="c-header__menu-sub-list__depth-list__item"><a
                                                href="/Kr/IrInfo/Management/StockHolder.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>주주현황</span></a>
                                        </li>
                                        <li class="c-header__menu-sub-list__depth-list__item"><a
                                            href="/Kr/IrInfo/Management/StockHolder.aspx"
                                            class="c-header__menu-sub-list__depth-list-item-tit"><span>기업지배구조헌장</span></a>
                                    </li>
                                    </ul>
                                </li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/IrInfo/StockInfo.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>주식정보</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/IrInfo/FinancialInfo5Years.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>재무정보</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/IrInfo/IRList.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>IR 자료실</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/IrInfo/IRList.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>홍보자료</span></a></li>
                            </ul>
                        </li>
                        <li class="c-header__menu-list__item"><a href="/Kr/CompanyNews/index.aspx"
                                class="c-header__menu-list__item-tit c-header__menu-list__item-tit-pc"><span>지속가능경영</span></a>
                            <div class="c-header__menu-list__item-tit c-header__menu-list__item-tit-mo"><span>지속가능경영</span>
                            </div>
                            <ul class="c-header__menu-sub-list">
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/News.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>윤리경영</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/SocialContribution.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>환경경영</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a
                                        href="/Kr/IrInfo/Management/BoardOfDirectors.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>준법경영</span></a><button
                                        class="c-header__menu-sub-list__depth-btn" type="button"><span
                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>
                                    <ul class="c-header__menu-sub-list__depth-list">
                                        <li class="c-header__menu-sub-list__depth-list__item"><a
                                                href="/Kr/IrInfo/Management/BoardOfDirectors.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>부패방지</span></a>
                                        </li>
                                        <li class="c-header__menu-sub-list__depth-list__item"><a
                                                href="/Kr/IrInfo/Management/StockHolder.aspx"
                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>공정거래</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/News.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>사회공헌</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/SocialContribution.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>교육활동</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/PromotionalMaterial.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>지속가능경영조직</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/PromotionalMaterial.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>ESG등급</span></a></li>
                            </ul>
                        </li>
                        <li class="c-header__menu-list__item"><a href="/Kr/Recruit/TalentVision.aspx"
                                class="c-header__menu-list__item-tit c-header__menu-list__item-tit-pc"><span>채용정보</span></a>
                            <div class="c-header__menu-list__item-tit c-header__menu-list__item-tit-mo"><span>채용정보</span>
                            </div>
                            <ul class="c-header__menu-sub-list">
                                <li class="c-header__menu-sub-list__item"><a href="/Kr/Recruit/TalentVision.aspx"
                                        class="c-header__menu-sub-list__item-tit"><span>인재경영</span></a></li>
                                <li class="c-header__menu-sub-list__item"><a
                                        href="https://gsgcorp.recruiter.co.kr/app/jobnotice/list"
                                        class="c-header__menu-sub-list__item-tit"><span>채용공고</span></a></li>
                            </ul>
                        </li>
                    </ul>

                        <div class="c-header__menu-utility">
                            <div class="c-header__menu-utility-list c-header__menu-utility--contact-us">
                                <a href="/Kr/ContactUs/ContactUs.aspx" class="c-header__menu-utility-list__item">
                                    <span class="c-header__menu-utility-list__item-text">CONTACT US</span>
                                </a>
                            </div>
                            <div class="c-header__menu-utility-list c-header__menu-lang">
                                <button type="button" class="c-header__menu-utility-list__item c-header__menu-lang__btn">
                                    <span class="c-header__menu-utility-list__item-text">KOR</span>
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
                                    <div class="c-header__all-menu__list">
                                        <div class="c-header__all-menu__list-tit"><a href="/Kr/Business/index.aspx">기업정보</a>
                                        </div>
                                        <div class="c-header__all-menu__list-subcont">
                                            <div class="c-header__all-menu__subcont-list">
                                                <div class="c-header__all-menu__subcont__item"><a
                                                        href="/Kr/Business/Outline.aspx">개요</a></div>
                                                <div class="c-header__all-menu__subcont__item"><a
                                                        href="/Kr/Business/Greeting.aspx">CEO 인사말</a></div>
                                                <div class="c-header__all-menu__subcont__item"><a
                                                        href="/Kr/Business/ManagementPhilosophy.aspx">경영이념</a></div>
                                                <div class="c-header__all-menu__subcont__item"><a
                                                        href="/Kr/Business/History.aspx">연혁</a></div>
                                                <div class="c-header__all-menu__subcont__item"><a
                                                        href="/Kr/Business/Management.aspx">윤리경영</a></div>
                                                <div class="c-header__all-menu__subcont__item"><a
                                                        href="/Kr/Business/GlobalNetworkWordWide.aspx">글로벌 네트워크</a></div>
                                                <div class="c-header__all-menu__subcont__item"><a
                                                        href="/Kr/Business/Directions.aspx">찾아오시는 길</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="c-header__all-menu__list">
                                        <div class="c-header__all-menu__list-tit"><a
                                                href="/Kr/FieldBusiness/index.aspx">사업분야</a></div>
                                        <div class="c-header__all-menu__list-subcont">
                                            <div class="c-header__all-menu__subcont-list">
                                                <div class="c-header__all-menu__subcont__item"><a
                                                        href="/Kr/FieldBusiness/Trading/Steel.aspx">Trading</a>
                                                    <div class="c-header__all-menu__dethcont-list">
                                                        <div class="c-header__all-menu__dethcont__item"><a
                                                                href="/Kr/FieldBusiness/Trading/Steel.aspx">철강</a></div>
                                                        <div class="c-header__all-menu__dethcont__item"><a
                                                                href="/Kr/FieldBusiness/Trading/PetroleumProduct.aspx">석유화학</a>
                                                        </div>
                                                        <div class="c-header__all-menu__dethcont__item"><a
                                                                href="/Kr/FieldBusiness/Trading/ResourcesCoal.aspx">자원</a></div>
                                                        <div class="c-header__all-menu__dethcont__item"><a
                                                                href="/Kr/FieldBusiness/Trading/MachineGoods.aspx">기계/물자</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="c-header__all-menu__subcont__item"><a
                                                        href="/Kr/FieldBusiness/Operation/Logistics.aspx">Operation</a>
                                                    <div class="c-header__all-menu__dethcont-list">
                                                        <div class="c-header__all-menu__dethcont__item"><a
                                                                href="/Kr/FieldBusiness/Operation/Logistics.aspx">물류사업</a></div>
                                                        <div class="c-header__all-menu__dethcont__item"><a
                                                                href="/Kr/FieldBusiness/Operation/GsEntec.aspx">GS엔텍</a></div>
                                                        <div class="c-header__all-menu__dethcont__item"><a
                                                                href="/Kr/FieldBusiness/Operation/Robotics.aspx">Robotics</a>
                                                        </div>
                                                        <div class="c-header__all-menu__dethcont__item"><a
                                                                href="/Kr/FieldBusiness/Operation/EVbusiness.aspx">e모빌리티</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="c-header__all-menu__subcont__item"><a
                                                        href="/Kr/FieldBusiness/Investment/SocBusiness.aspx">Investment</a>
                                                    <div class="c-header__all-menu__dethcont-list">
                                                        <div class="c-header__all-menu__dethcont__item"><a
                                                                href="/Kr/FieldBusiness/Investment/SocBusiness.aspx">SOC사업</a>
                                                        </div>
                                                        <div class="c-header__all-menu__dethcont__item"><a
                                                                href="/Kr/FieldBusiness/Investment/ProjectBusiness.aspx">프로젝트
                                                                사업</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="c-header__all-menu__list">
                                        <div class="c-header__all-menu__list-tit"><a href="/Kr/IrInfo/index.aspx">투자정보</a></div>
                                        <div class="c-header__all-menu__list-subcont">
                                            <div class="c-header__all-menu__subcont-list">
                                                <div class="c-header__all-menu__subcont__item"><a
                                                        href="/Kr/IrInfo/Notice.aspx">공고</a></div>
                                                <div class="c-header__all-menu__subcont__item"><a
                                                        href="/Kr/IrInfo/OfficialNotice.aspx">공시정보</a></div>
                                                <div class="c-header__all-menu__subcont__item"><a
                                                        href="/Kr/IrInfo/Management/BoardOfDirectors.aspx">경영정보</a>
                                                    <div class="c-header__all-menu__dethcont-list">
                                                        <div class="c-header__all-menu__dethcont__item"><a
                                                                href="/Kr/IrInfo/Management/BoardOfDirectors.aspx">이사회</a></div>
                                                        <div class="c-header__all-menu__dethcont__item"><a
                                                                href="/Kr/IrInfo/Management/StockHolder.aspx">주주현황</a></div>
                                                    </div>
                                                </div>
                                                <div class="c-header__all-menu__subcont__item"><a
                                                        href="/Kr/IrInfo/StockInfo.aspx">주식정보</a></div>
                                                <div class="c-header__all-menu__subcont__item"><a
                                                        href="/Kr/IrInfo/FinancialInfo5Years.aspx">재무정보</a></div>
                                                <div class="c-header__all-menu__subcont__item"><a
                                                        href="/Kr/IrInfo/IRList.aspx">IR 자료실</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="c-header__all-menu__list">
                                        <div class="c-header__all-menu__list-tit"><a href="/Kr/CompanyNews/index.aspx">회사소식</a>
                                        </div>
                                        <div class="c-header__all-menu__list-subcont">
                                            <div class="c-header__all-menu__subcont-list">
                                                <div class="c-header__all-menu__subcont__item"><a
                                                        href="/Kr/CompanyNews/News.aspx">News</a></div>
                                                <div class="c-header__all-menu__subcont__item"><a
                                                        href="/Kr/CompanyNews/SocialContribution.aspx">사회공헌</a></div>
                                                <div class="c-header__all-menu__subcont__item"><a
                                                        href="/Kr/CompanyNews/PromotionalMaterial.aspx">홍보자료</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="c-header__all-menu__list">
                                        <div class="c-header__all-menu__list-tit"><a
                                                href="/Kr/Recruit/TalentVision.aspx">채용정보</a></div>
                                        <div class="c-header__all-menu__list-subcont">
                                            <div class="c-header__all-menu__subcont-list">
                                                <div class="c-header__all-menu__subcont__item"><a
                                                        href="/Kr/Recruit/TalentVision.aspx">인재경영</a></div>
                                                <div class="c-header__all-menu__subcont__item"><a
                                                        href="https://gsgcorp.recruiter.co.kr/app/jobnotice/list">채용공고</a></div>
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
        
        `;*/


    const header = '\n\n    <header class="header">\n            <div class="c-header" id="c-header">\n                <div class="c-header__wrap">\n                    <div class="c-header__logo">\n                        <h1 class="c-header__logo-wrap">\n                            <a href="/Kr/Default.aspx" class="c-header__logo-wrap__link">\n                                <span class="c-header__logo-wrap__text">GS 글로벌</span>\n                            </a>\n                        </h1>\n                    </div>\n                    <div class="c-header__menu" id="gnb">\n\n                    <ul class="c-header__menu-list">\n                        <li class="c-header__menu-list__item"><a href="/Kr/Business/index.aspx"\n                                class="c-header__menu-list__item-tit c-header__menu-list__item-tit-pc"><span>기업정보</span></a>\n                            <div class="c-header__menu-list__item-tit c-header__menu-list__item-tit-mo"><span>기업정보</span>\n                            </div>\n                            <ul class="c-header__menu-sub-list">\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/Business/Outline.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>개요</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/Business/Greeting.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>CEO 인사말</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/Business/ManagementPhilosophy.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>경영이념</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/Business/History.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>연혁</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/Business/GlobalNetworkWordWide.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>글로벌 네트워크</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/Business/Directions.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>찾아오시는 길</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/Business/Management.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>News</span></a></li>\n                            </ul>\n                        </li>\n                        <li class="c-header__menu-list__item"><a href="/Kr/FieldBusiness/index.aspx"\n                                class="c-header__menu-list__item-tit c-header__menu-list__item-tit-pc"><span>사업분야</span></a>\n                            <div class="c-header__menu-list__item-tit c-header__menu-list__item-tit-mo"><span>사업분야</span>\n                            </div>\n                            <ul class="c-header__menu-sub-list">\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/FieldBusiness/Trading/Steel.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>Trading</span></a><button\n                                        class="c-header__menu-sub-list__depth-btn" type="button"><span\n                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>\n                                    <ul class="c-header__menu-sub-list__depth-list">\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a\n                                                href="/Kr/FieldBusiness/Trading/Steel.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>철강</span></a>\n                                        </li>\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a\n                                                href="/Kr/FieldBusiness/Trading/PetroleumProduct.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>석유화학</span></a>\n                                        </li>\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a\n                                                href="/Kr/FieldBusiness/Trading/ResourcesCoal.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>자원</span></a>\n                                        </li>\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a\n                                                href="/Kr/FieldBusiness/Trading/MachineGoods.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>기계/물자</span></a>\n                                        </li>\n                                    </ul>\n                                </li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/FieldBusiness/Trading/Steel.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>Green</span></a><button\n                                        class="c-header__menu-sub-list__depth-btn" type="button"><span\n                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>\n                                    <ul class="c-header__menu-sub-list__depth-list">\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a\n                                                href="/Kr/FieldBusiness/Trading/Steel.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>e-모빌리티</span></a>\n                                        </li>\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a\n                                                href="/Kr/FieldBusiness/Trading/PetroleumProduct.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>신재생에너지</span></a>\n                                        </li>\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a\n                                            href="/Kr/FieldBusiness/Trading/PetroleumProduct.aspx"\n                                            class="c-header__menu-sub-list__depth-list-item-tit"><span>리사이클링</span></a>\n                                    </li>\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a\n                                                href="/Kr/FieldBusiness/Trading/ResourcesCoal.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>로봇</span></a>\n                                        </li>\n                                    </ul>\n                                </li>\n                                <li class="c-header__menu-sub-list__item"><a\n                                        href="/Kr/FieldBusiness/Operation/Logistics.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>Operation</span></a><button\n                                        class="c-header__menu-sub-list__depth-btn" type="button"><span\n                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>\n                                    <ul class="c-header__menu-sub-list__depth-list">\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a\n                                                href="/Kr/FieldBusiness/Operation/Logistics.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>물류사업</span></a>\n                                        </li>\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a\n                                                href="/Kr/FieldBusiness/Operation/GsEntec.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>GS엔텍</span></a>\n                                        </li>\n                                    </ul>\n                                </li>\n                                <li class="c-header__menu-sub-list__item"><a\n                                        href="/Kr/FieldBusiness/Investment/SocBusiness.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>Investment</span></a><button\n                                        class="c-header__menu-sub-list__depth-btn" type="button"><span\n                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>\n                                    <ul class="c-header__menu-sub-list__depth-list">\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a\n                                                href="/Kr/FieldBusiness/Investment/SocBusiness.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>SOC사업</span></a>\n                                        </li>\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a\n                                                href="/Kr/FieldBusiness/Investment/ProjectBusiness.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>프로젝트\n                                                    사업</span></a></li>\n                                    </ul>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class="c-header__menu-list__item"><a href="/Kr/IrInfo/index.aspx"\n                                class="c-header__menu-list__item-tit c-header__menu-list__item-tit-pc"><span>투자정보</span></a>\n                            <div class="c-header__menu-list__item-tit c-header__menu-list__item-tit-mo"><span>투자정보</span>\n                            </div>\n                            <ul class="c-header__menu-sub-list">\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/IrInfo/Notice.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>공고</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/IrInfo/OfficialNotice.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>공시정보</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a\n                                        href="/Kr/IrInfo/Management/BoardOfDirectors.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>지배구조</span></a><button\n                                        class="c-header__menu-sub-list__depth-btn" type="button"><span\n                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>\n                                    <ul class="c-header__menu-sub-list__depth-list">\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a\n                                                href="/Kr/IrInfo/Management/BoardOfDirectors.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>이사회</span></a>\n                                        </li>\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a\n                                                href="/Kr/IrInfo/Management/StockHolder.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>주주현황</span></a>\n                                        </li>\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a\n                                            href="/Kr/IrInfo/Management/StockHolder.aspx"\n                                            class="c-header__menu-sub-list__depth-list-item-tit"><span>기업지배구조헌장</span></a>\n                                    </li>\n                                    </ul>\n                                </li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/IrInfo/StockInfo.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>주식정보</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/IrInfo/FinancialInfo5Years.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>재무정보</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/IrInfo/IRList.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>IR 자료실</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/IrInfo/IRList.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>홍보자료</span></a></li>\n                            </ul>\n                        </li>\n                        <li class="c-header__menu-list__item"><a href="/Kr/CompanyNews/index.aspx"\n                                class="c-header__menu-list__item-tit c-header__menu-list__item-tit-pc"><span>지속가능경영</span></a>\n                            <div class="c-header__menu-list__item-tit c-header__menu-list__item-tit-mo"><span>지속가능경영</span>\n                            </div>\n                            <ul class="c-header__menu-sub-list">\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/News.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>윤리경영</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/SocialContribution.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>환경경영</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a\n                                        href="/Kr/IrInfo/Management/BoardOfDirectors.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>준법경영</span></a><button\n                                        class="c-header__menu-sub-list__depth-btn" type="button"><span\n                                            class="c-header__menu-sub-list__depth-btn__text">더보기</span></button>\n                                    <ul class="c-header__menu-sub-list__depth-list">\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a\n                                                href="/Kr/IrInfo/Management/BoardOfDirectors.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>부패방지</span></a>\n                                        </li>\n                                        <li class="c-header__menu-sub-list__depth-list__item"><a\n                                                href="/Kr/IrInfo/Management/StockHolder.aspx"\n                                                class="c-header__menu-sub-list__depth-list-item-tit"><span>공정거래</span></a>\n                                        </li>\n                                    </ul>\n                                </li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/News.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>사회공헌</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/SocialContribution.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>교육활동</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/PromotionalMaterial.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>지속가능경영조직</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/CompanyNews/PromotionalMaterial.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>ESG등급</span></a></li>\n                            </ul>\n                        </li>\n                        <li class="c-header__menu-list__item"><a href="/Kr/Recruit/TalentVision.aspx"\n                                class="c-header__menu-list__item-tit c-header__menu-list__item-tit-pc"><span>채용정보</span></a>\n                            <div class="c-header__menu-list__item-tit c-header__menu-list__item-tit-mo"><span>채용정보</span>\n                            </div>\n                            <ul class="c-header__menu-sub-list">\n                                <li class="c-header__menu-sub-list__item"><a href="/Kr/Recruit/TalentVision.aspx"\n                                        class="c-header__menu-sub-list__item-tit"><span>인재경영</span></a></li>\n                                <li class="c-header__menu-sub-list__item"><a\n                                        href="https://gsgcorp.recruiter.co.kr/app/jobnotice/list"\n                                        class="c-header__menu-sub-list__item-tit"><span>채용공고</span></a></li>\n                            </ul>\n                        </li>\n                    </ul>\n\n                        <div class="c-header__menu-utility">\n                            <div class="c-header__menu-utility-list c-header__menu-utility--contact-us">\n                                <a href="/Kr/ContactUs/ContactUs.aspx" class="c-header__menu-utility-list__item">\n                                    <span class="c-header__menu-utility-list__item-text">CONTACT US</span>\n                                </a>\n                            </div>\n                            <div class="c-header__menu-utility-list c-header__menu-lang">\n                                <button type="button" class="c-header__menu-utility-list__item c-header__menu-lang__btn">\n                                    <span class="c-header__menu-utility-list__item-text">KOR</span>\n                                </button>\n                                <ul class="c-header__menu-lang-list">\n                                    <li class="c-header__menu-lang-list__item">\n                                        <a href="/Kr" class="c-header__menu-lang-list__item-wrap active">\n                                            <span class="c-header__menu-lang-list__item-text">KOR</span>\n                                        </a>\n                                    </li>\n                                    <li class="c-header__menu-lang-list-item">\n                                        <a href="/En" class="c-header__menu-lang-list__item-wrap">\n                                            <span class="c-header__menu-lang-list__item-text">ENG</span>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="c-header__hambuger">\n                        <button type="button" class="c-header__hambuger-item c-header__hambuger-item--all-menu">\n                            <span class="c-header__hambuger-item__txt">전체메뉴</span>\n                        </button>\n                        <button type="button" class="c-header__hambuger-item c-header__hambuger-item-mobile-menu">\n                            <span class="c-header__hambuger-item__txt">메뉴</span>\n                            <i class="c-header__hambuger-object c-header__hambuger-object-01"></i>\n                            <i class="c-header__hambuger-object c-header__hambuger-object-02"></i>\n                            <i class="c-header__hambuger-object c-header__hambuger-object-03"></i>\n                        </button>\n                        <div class="c-header__all-menu__wrap">\n                            <div class="c-header__all-menu__list-area">\n                                <div class="c-header__all-menu__list-area__wrap">\n                                    <div class="c-header__all-menu__list">\n                                        <div class="c-header__all-menu__list-tit"><a href="/Kr/Business/index.aspx">기업정보</a>\n                                        </div>\n                                        <div class="c-header__all-menu__list-subcont">\n                                            <div class="c-header__all-menu__subcont-list">\n                                                <div class="c-header__all-menu__subcont__item"><a\n                                                        href="/Kr/Business/Outline.aspx">개요</a></div>\n                                                <div class="c-header__all-menu__subcont__item"><a\n                                                        href="/Kr/Business/Greeting.aspx">CEO 인사말</a></div>\n                                                <div class="c-header__all-menu__subcont__item"><a\n                                                        href="/Kr/Business/ManagementPhilosophy.aspx">경영이념</a></div>\n                                                <div class="c-header__all-menu__subcont__item"><a\n                                                        href="/Kr/Business/History.aspx">연혁</a></div>\n                                                <div class="c-header__all-menu__subcont__item"><a\n                                                        href="/Kr/Business/Management.aspx">윤리경영</a></div>\n                                                <div class="c-header__all-menu__subcont__item"><a\n                                                        href="/Kr/Business/GlobalNetworkWordWide.aspx">글로벌 네트워크</a></div>\n                                                <div class="c-header__all-menu__subcont__item"><a\n                                                        href="/Kr/Business/Directions.aspx">찾아오시는 길</a></div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class="c-header__all-menu__list">\n                                        <div class="c-header__all-menu__list-tit"><a\n                                                href="/Kr/FieldBusiness/index.aspx">사업분야</a></div>\n                                        <div class="c-header__all-menu__list-subcont">\n                                            <div class="c-header__all-menu__subcont-list">\n                                                <div class="c-header__all-menu__subcont__item"><a\n                                                        href="/Kr/FieldBusiness/Trading/Steel.aspx">Trading</a>\n                                                    <div class="c-header__all-menu__dethcont-list">\n                                                        <div class="c-header__all-menu__dethcont__item"><a\n                                                                href="/Kr/FieldBusiness/Trading/Steel.aspx">철강</a></div>\n                                                        <div class="c-header__all-menu__dethcont__item"><a\n                                                                href="/Kr/FieldBusiness/Trading/PetroleumProduct.aspx">석유화학</a>\n                                                        </div>\n                                                        <div class="c-header__all-menu__dethcont__item"><a\n                                                                href="/Kr/FieldBusiness/Trading/ResourcesCoal.aspx">자원</a></div>\n                                                        <div class="c-header__all-menu__dethcont__item"><a\n                                                                href="/Kr/FieldBusiness/Trading/MachineGoods.aspx">기계/물자</a>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class="c-header__all-menu__subcont__item"><a\n                                                        href="/Kr/FieldBusiness/Operation/Logistics.aspx">Operation</a>\n                                                    <div class="c-header__all-menu__dethcont-list">\n                                                        <div class="c-header__all-menu__dethcont__item"><a\n                                                                href="/Kr/FieldBusiness/Operation/Logistics.aspx">물류사업</a></div>\n                                                        <div class="c-header__all-menu__dethcont__item"><a\n                                                                href="/Kr/FieldBusiness/Operation/GsEntec.aspx">GS엔텍</a></div>\n                                                        <div class="c-header__all-menu__dethcont__item"><a\n                                                                href="/Kr/FieldBusiness/Operation/Robotics.aspx">Robotics</a>\n                                                        </div>\n                                                        <div class="c-header__all-menu__dethcont__item"><a\n                                                                href="/Kr/FieldBusiness/Operation/EVbusiness.aspx">e모빌리티</a>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class="c-header__all-menu__subcont__item"><a\n                                                        href="/Kr/FieldBusiness/Investment/SocBusiness.aspx">Investment</a>\n                                                    <div class="c-header__all-menu__dethcont-list">\n                                                        <div class="c-header__all-menu__dethcont__item"><a\n                                                                href="/Kr/FieldBusiness/Investment/SocBusiness.aspx">SOC사업</a>\n                                                        </div>\n                                                        <div class="c-header__all-menu__dethcont__item"><a\n                                                                href="/Kr/FieldBusiness/Investment/ProjectBusiness.aspx">프로젝트\n                                                                사업</a></div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class="c-header__all-menu__list">\n                                        <div class="c-header__all-menu__list-tit"><a href="/Kr/IrInfo/index.aspx">투자정보</a></div>\n                                        <div class="c-header__all-menu__list-subcont">\n                                            <div class="c-header__all-menu__subcont-list">\n                                                <div class="c-header__all-menu__subcont__item"><a\n                                                        href="/Kr/IrInfo/Notice.aspx">공고</a></div>\n                                                <div class="c-header__all-menu__subcont__item"><a\n                                                        href="/Kr/IrInfo/OfficialNotice.aspx">공시정보</a></div>\n                                                <div class="c-header__all-menu__subcont__item"><a\n                                                        href="/Kr/IrInfo/Management/BoardOfDirectors.aspx">경영정보</a>\n                                                    <div class="c-header__all-menu__dethcont-list">\n                                                        <div class="c-header__all-menu__dethcont__item"><a\n                                                                href="/Kr/IrInfo/Management/BoardOfDirectors.aspx">이사회</a></div>\n                                                        <div class="c-header__all-menu__dethcont__item"><a\n                                                                href="/Kr/IrInfo/Management/StockHolder.aspx">주주현황</a></div>\n                                                    </div>\n                                                </div>\n                                                <div class="c-header__all-menu__subcont__item"><a\n                                                        href="/Kr/IrInfo/StockInfo.aspx">주식정보</a></div>\n                                                <div class="c-header__all-menu__subcont__item"><a\n                                                        href="/Kr/IrInfo/FinancialInfo5Years.aspx">재무정보</a></div>\n                                                <div class="c-header__all-menu__subcont__item"><a\n                                                        href="/Kr/IrInfo/IRList.aspx">IR 자료실</a></div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class="c-header__all-menu__list">\n                                        <div class="c-header__all-menu__list-tit"><a href="/Kr/CompanyNews/index.aspx">회사소식</a>\n                                        </div>\n                                        <div class="c-header__all-menu__list-subcont">\n                                            <div class="c-header__all-menu__subcont-list">\n                                                <div class="c-header__all-menu__subcont__item"><a\n                                                        href="/Kr/CompanyNews/News.aspx">News</a></div>\n                                                <div class="c-header__all-menu__subcont__item"><a\n                                                        href="/Kr/CompanyNews/SocialContribution.aspx">사회공헌</a></div>\n                                                <div class="c-header__all-menu__subcont__item"><a\n                                                        href="/Kr/CompanyNews/PromotionalMaterial.aspx">홍보자료</a></div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class="c-header__all-menu__list">\n                                        <div class="c-header__all-menu__list-tit"><a\n                                                href="/Kr/Recruit/TalentVision.aspx">채용정보</a></div>\n                                        <div class="c-header__all-menu__list-subcont">\n                                            <div class="c-header__all-menu__subcont-list">\n                                                <div class="c-header__all-menu__subcont__item"><a\n                                                        href="/Kr/Recruit/TalentVision.aspx">인재경영</a></div>\n                                                <div class="c-header__all-menu__subcont__item"><a\n                                                        href="https://gsgcorp.recruiter.co.kr/app/jobnotice/list">채용공고</a></div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n        \n                </div>\n                <span class="c-header__container-bg"></span>\n            </div>\n        </header>\n        \n        ';


    $(".header").html(header);
    $(".header .header").unwrap();

});