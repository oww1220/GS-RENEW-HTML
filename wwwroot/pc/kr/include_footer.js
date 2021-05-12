$(function(){


    const footer = `
	<footer class="footer">
	<div class="c-footer__inner">
			<nav class="c-footer__list-wrap">
				<div class="c-footer__item c-footer__item-positon-right">
					<button type="button" class="c-footer__text c-btn__popup-btn" value="팝업창 호출" onclick="showPopup('privacy_policy')">개인정보처리방침</button>
					<button type="button" class="c-footer__text c-btn__popup-btn" value="팝업창 호출" onclick="showPopup('email_collection_refusal')">이메일무단수집거부</button>
					<div class="c-footer__site-wrap">
						<button type="button" class="c-footer__site-wrap__list-button">FAMILY SITE</button>
						<div class="c-footer__site-wrap__list">
							<div class="c-footer__site-wrap__item">
								<a href="http://www.gs.co.kr/" class="c-footer__site-wrap__link" target="_blank">GS</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="http://www.gsenergy.co.kr/Default.aspx" class="c-footer__site-wrap__link" target="_blank">GS 에너지</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="http://www.gscaltex.com/index.aspx" class="c-footer__site-wrap__link" target="_blank">GS 칼텍스</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="http://www.gsretail.com/gsretail/ko/main" class="c-footer__site-wrap__link" target="_blank">GS 리테일</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="http://company.gsshop.com/" class="c-footer__site-wrap__link" target="_blank">GS SHOP</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="https://www.gseps.com/kor/main/main.aspx" class="c-footer__site-wrap__link" target="_blank">GS EPS</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="http://www.gsenr.com/" class="c-footer__site-wrap__link" target="_blank">GS E&amp;R</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="http://www.fcseoul.com/main/news_index.jsp" class="c-footer__site-wrap__link" target="_blank">GS 스포츠</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="http://www.gsenc.com/" class="c-footer__site-wrap__link" target="_blank">GS 건설</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="http://www.gsentec.com/" class="c-footer__site-wrap__link" target="_blank">GS 엔텍</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="http://www.plscorp.co.kr/" class="c-footer__site-wrap__link" target="_blank">피엘에스</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="http://www.gsgmachine.com/" class="c-footer__site-wrap__link" target="_blank">기계수입팀</a>
							</div>
							<div class="c-footer__site-wrap__item">
								<a href="http://www.gsglobal.co.jp/" class="c-footer__site-wrap__link" target="_blank">GS Global Japan</a>
							</div>
						</div>
					</div>
				</div>
				<div class="c-footer__item c-footer__item-positon-left">
					<span class="c-footer__text c-footer__text-address">06141 서울특별시 강남구 논현로 508 GS타워</span>
					<span class="c-footer__text c-footer__text-tel">TEL 02-2005-5300</span>
					<span class="c-footer__text c-footer__text-fax">FAX 02-2005-5301</span>
					<span class="c-footer__text c-footer__text-copyright">COPYRIGHT 2018 BY GS GLOBAL CORP. ALL RIGHTS RESERVED.</span>
				</div>
			</nav>
		</div>
		<div class="l-popup" id="privacy_policy_popup" style="display:none;">
			<div class="l-popup__wrap">
				<h1 class="l-popup-tit">개인정보처리방침</h1>
				<div class="l-popup-desc">
					<div class="agreement_info">
						<dl>
							<dt class="tit_agree">1. 총칙</dt>
							<dd class="firstChild">(1) “개인정보”란 생존하는 개인에 관한 정보로서 성명, 주민등록번호 및 영상 등에 의하여 당해 개인을 <br>알아볼 수 있는 정보(당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여 <br>식별할 수 있는 것을 포함합니다)를 말합니다. </dd>
							<dd>(2) 주식회사 GS글로벌(이하 “회사”라 함)은 귀하의 개인정보보호를 매우 중요시하며, 개인정보보호법 등 관련 <br>법령상의 개인정보보호규정을 준수하고 있습니다. 회사는 본 개인정보처리방침을 통하여 귀하의 개인정보가 <br>어떠한 목적과 방식으로 수집·이용되고 있으며, 귀하의 개인정보보호를 위해 회사가 어떠한 조치를 취하고 있는지 알려드립니다. </dd>
							<dd>(3) 회사는 개인정보처리방침을 홈페이지(www.gsgcorp.com) 첫 화면에 공개함으로써 귀하께서 언제나 용이하게 보실 수 있도록 조치하고 있습니다. 회사의 개인정보처리방침은 관련 법령의 개정이나 회사의 정책에 의해 <br>변경될 수 있으며, 이 경우 변경사항은 회사 홈페이지에 게시됩니다.</dd>

							<dt class="tit_agree">2. 개인정보의 수집 및 이용목적, 수집하는 개인정보 항목</dt>
							<dd class="firstChild">회사는 귀하의 문의에 대한 정확한 답변, 입사지원 및 임직원 정보 관리 등의 업무처리를 위하여 다음과 같이 <br>개인정보를 수집하고 있습니다. </dd>
							<dt class="tit_sub">(1) 수집 및 이용목적</dt>
							<dd class="desc_sub">회사는 귀하의 개인정보를 본인확인, 채용전형, 제휴문의 및 업무연락, 윤리경영 제보, 근로계약 체결(채용) 및 <br>고용관계 유지 등을 위한 목적으로 사용합니다. </dd>
							<dt class="tit_sub">(2) 수집하는 개인정보 항목</dt>
							<dd class="desc_sub">
								<ul class="desc_sub_lst">
									<li>- 개인식별정보 : 성명, 사진, 이메일, 직업, 자택 또는 직장 주소 및 연락처, 핸드폰 번호, IP, 쿠키 등 </li>
									<li>- 고유식별정보 : 주민등록번호, 외국인등록번호, 여권번호 등</li>
									<li>- 민감정보 : 병력사항, 건강정보</li>
									<li>- 선택 및 기타 정보 : 가족사항, 결혼여부, 외국어 능력, 인턴경험, 학력사항, 경력 및 자격사항,  병역사항, <br>보훈대상여부 등</li>
								</ul>
							</dd>
							<dt class="tit_sub">(3) 고유식별정보 및 민감정보의 처리</dt>
							<dd class="desc_sub">
								회사는 고유식별번호(주민등록번호, 외국인등록번호, 여권번호, 운전면허번호 등)와 민감정보(건강정보, 병력사항)를 수집 및 처리하는 경우에는 반드시 별도의 동의를 받아서 수집 및 이용합니다.
							</dd>

							<dt class="tit_agree">3. 개인정보 수집방법</dt>
							<dd class="firstChild">회사는 다음과 같은 방법으로 개인정보를 수집합니다.</dd>
							<dd class="desc_sub">(1) 이메일, 우편, 전화, 팩스 등을 통한 개인정보 수집</dd>
							<dd class="desc_sub">(2) 홈페이지 이용 시, 개인정보 입력란에 개인정보 주체가 직접 입력하는 방식</dd>
							<dd class="desc_sub">(3) 제휴사 및 관계사로부터 수집</dd>
							<dd class="desc_sub">(4) 홈페이지 이용 시, 정보통신서비스 제공자가 자동화된 방법으로 생성하여 수집</dd>

							<dt class="tit_agree">4. 개인정보 자동 수집의 목적 및 거부 관련 사항</dt>
							<dd class="firstChild">회사는 개인 맞춤 서비스를 제공하기 위해 이용자의 정보를 수시로 저장하고 불러오는 '쿠키(Cookie)' 정보를 사용합니다. 쿠키란 웹 사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에 보내는 아주 작은 텍스트 파일로서 이용자의 컴퓨터 하드디스크에 저장됩니다.</dd>

							<dd class="desc_sub">
								(1) 쿠키 등 사용 목적
								<ul class="desc_sub_lst">
									<li>- 이용자의 접속빈도 또는 머문 시간 등을 파악하여 서비스 개선에 활용</li>
								</ul>
							</dd>
							<dd class="desc_sub">(2) 쿠키 설정 거부 방법
								<ul class="desc_sub_lst">
									<li>① 이용자는 쿠키 설정에 대한 선택권을 가지고 있습니다. 따라서, 쿠키 설정을 거부하는 방법으로는 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부 할 수 있습니다.</li>
									<li>② 설정방법 (Explorer 브라우저의 경우) : 웹 브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보 &gt; 고급 &gt; 쿠키허용여부 설정</li>
								</ul>
							</dd>

							<dt class="tit_agree">5. 개인정보의 이용 및 제3자 제공</dt>
							<dd class="firstChild">회사는 귀하께 고지한 범위 또는 동의서에 명시한 범위 내에서 개인정보를 이용 및 제공하며, 동 범위를 넘어 <br>이용하거나 제공하지 않습니다. 다만, 다음의 경우에는 관련 법령의 규정에 의하여 귀하의 동의 없이 개인정보를 <br>제공하는 것이 가능합니다 .</dd>
							<dd class="desc_sub">
								<ul class="desc_sub_lst">
									<li>- 관계법령에 의하여 수사상의 목적으로 관계기관으로부터의 요구가 있을 경우</li>
									<li>- 통계작성 . 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 알아볼 수 없는 형태로 가공하여 <br>제공하는 경우</li>
									<li>- 기타 관계법령에서 정한 절차에 따른 요청이 있는 경우</li>
								</ul>
							</dd>
							<dd class="firstChild">그러나, 상기의 예외 사항에서도 관계법령에 의하거나 수사기관의 요청에 의해 정보를 제공한 경우에는 이를 <br>당사자에게 고지하는 것을 원칙으로 운영하고 있습니다. 법률상의 근거에 의해 부득이하게 고지를 하지 <br>못할 수도 있으나, 본래의 수집목적 및 이용목적에 반하여 무분별하게 정보가 제공되지 않도록 최대한 <br>노력하겠습니다 .</dd>

							<dt class="tit_agree">6. 개인정보의 취급 위탁</dt>
							<dd class="firstChild">(1) 회사는 보다 나은 서비스 제공과 귀하의 편의 제공 등 업무수행을 원활하게 하기 위해 귀하의 개인정보를 <br>다음과 같이 외부업체에 위탁하여 처리하고 있습니다. </dd>
							<dd class="desc_sub">
								<ul class="desc_sub_lst">
									<li>- GS ITM  전산시스템 운영</li>
								</ul>
							</dd>
							<dd>(2) 회사가 개인정보의 처리를 위탁하는 경우에는 위탁계약 등을 통하여 서비스 제공자의 개인정보 보호 관련 <br>법규의 준수, 개인정보에 관한 비밀유지, 제3자 제공의 금지 및 사고시의 책임부담, 위탁기간, 처리 종료 후의 <br>개인정보의 반환 또는 파기 등을 명확히 규정하고 당해 계약내용을 서면 또는 전자적으로 보관하겠습니다. </dd>
							<dd>(3) 회사는 귀하의 동의 없이 회사의 서비스 제공이 아닌 다른 목적을 위한 업무위탁을 하지 않는 것을 원칙으로 <br>합니다. 다만, 그러한 필요가 생길 경우에는 수탁자와 위탁업무의 내용에 대하여 귀하에게 고지하고 동의를 받도록 하겠습니다. </dd>

							<dt class="tit_agree">7. 링크사이트</dt>
							<dd class="desc_sub">
								회사는 귀하께 다른 회사의 웹사이트 또는 자료에 대한 링크를 제공할 수 있습니다. 이 경우 회사는 외부사이트 및 자료에 대한 아무런 통제권이 없으므로 그로부터 제공받는 서비스나 자료의 유용성에 대해 책임질 수 없으며 보증할 수 없습니다. 회사가 포함하고 있는 링크를 클릭(click)하여 타 사이트(site)의 페이지로 옮겨갈 경우 해당 <br>사이트의 개인정보 처리 및 취급방침은 회사와 무관하므로 새로 방문한 사이트의 정책을 반드시 검토하시기 <br>바랍니다.
							</dd>

							<dt class="tit_agree">8. 수집한 개인정보의 보유 및 이용기간</dt>
							<dd class="desc_sub">
								회사는 개인정보의 수집, 조회, 이용, 제공 목적이 달성될 때까지 보유 및 이용합니다. 처리 및 보유 기간이 <br>경과하거나, 수집 및 이용 목적이 달성되면 지체 없이 파기합니다. 다만, 회사는 “다른 법령에 따라 보존하여야 하는 경우” 또는 “정보주체로부터 개별 동의를 받은 경우”에는 보유 및 이용기간이 경과한 개인정보를 파기하지 <br>아니하고 보존할 수 있습니다.
							</dd>

							<dt class="tit_agree">9. 개인정보주체 및 법정대리인의 권리와 그 행사방법</dt>
							<dd class="firstChild">(1) 귀하는 언제든지 회사가 보유하는 귀하의 개인정보, 개인정보의 이용·제공 내역, 수집·이용·제공에 대한 <br>동의내역을 열람하거나 정정하실 수 있습니다. 귀하께서 개인정보보호책임자에게 서면, 전화 또는 이메일로 <br>연락하시면 지체 없이 조치하겠습니다. </dd>
							<dd>(2) 회사는 귀하께서 개인정보의 오류에 대한 정정을 요청한 경우, 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 <br>지체 없이 통지하여 정정하도록 조치하겠습니다. </dd>
							<dd>(3) 귀하께서는 개인정보의 수집·이용 또는 제공에 대해 동의하신 내용을 언제든지 철회할 수 있으며, 법령에 따라 규정하고 있는 경우를 제외하고는 당해 개인정보를 파기하는 등 필요한 조치를 취하겠습니다. </dd>
							<dd>(4) 만14세 미만 아동의 경우, 법정대리인의 방문 또는 인증절차를 거쳐 개인정보의 열람·수정 및 삭제를 요청할 수 있습니다. </dd>

							<dt class="tit_agree">10. 개인정보 파기절차 및 방법</dt>
							<dd class="firstChild">회사는 수집한 개인정보의 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 파기절차 및 방법은 <br>다음과 같습니다. </dd>
							<dt class="tit_sub">(1) 파기 절차</dt>
							<dd class="desc_sub">회사가 보유한 개인정보는 이용목적이 달성된 후, 내부방침 및 기타 개인정보 관련 법령에 의하여 일정기간 동안 <br>저장된 후 파기됩니다. </dd>
							<dt class="tit_sub">(2) 파기방법 </dt>
							<dd class="desc_sub">
								<ul class="desc_sub_lst">
									<li>- 서면에 기재된 개인정보 : 분쇄기로 분쇄하거나 소각 </li>
									<li>- 전자적 파일 형태로 저장된 개인정보 : 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제 </li>
								</ul>
							</dd>

							<dt class="tit_agree">11. 개인정보보호를 위한 안전성 확보 조치</dt>
							<dd class="firstChild">회사는 귀하의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 조치를 취하고 있습니다.</dd>
							<dd class="desc_sub">(1) 기술적 조치 : 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안 프로그램 설치 등</dd>
							<dd class="desc_sub">(2) 관리적 조치 : 내부관리계획 수립 및 시행, 정기적인 직원 교육 등</dd>
							<dd class="desc_sub">(3) 물리적 조치 : 전산실, 자료보관실 등의 접근 통제</dd>

							<dt class="tit_agree">12. 개인정보주체의 권리와 의무</dt>
							<dd class="desc_sub">
								개인정보주체는 개인정보를 최신의 상태로 정확하게 입력하여야 할 의무가 있으며, 부정확한 정보로 인해 발생하는 사고의 책임은 정보주체에게 있습니다. 타인의 정보 및 존엄성을 훼손할 시에는 “정보통신망 이용촉진 및 <br>정보보호 등에 관한 법률” 등에 의해 처벌 받을 수 있습니다.
							</dd>

							<dt class="tit_agree">13. 개인정보보호책임자 및 보호담당자</dt>
							<dd class="firstChild">
								&lt; 개인정보보호책임자 &gt; <br>
								성 명 : 문정길 팀장<br>
								소 속 : IT기획팀<br>
								<!--직 책 : IT기획팀장<br>-->
								E-mail : <a href="mailto:jgmoon@gsgcorp.com" target="_blank">jgmoon@gsgcorp.com</a><br>
								전화번호 : 02-2005-5333<br>
							</dd>
							<dd>
								&lt; 개인정보보호담당자 &gt; <br>
								성 명 : 김영 차장<br>
								소 속 : IT기획팀<br>
								E-mail : <a href="mailto:koiki@gsgcorp.com" target="_blank">koiki@gsgcorp.com</a><br>
								전화번호 : 02-2005-5125<br>
							</dd>

							<dt class="tit_agree">14. 영상정보처리기기 설치 및 운영</dt>
							<dd class="firstChild">회사는 아래와 같이 영상정보처리기기를 설치 및 운영하고 있습니다.</dd>
							<dd>(1) 영상정보처리기기 설치 근거 및 목적 : 회사의 보안관리, 시설안전 및 화재예방</dd>
							<dd>(2) 설치 대수, 설치 위치, 촬영 범위 및 시간, 보관장소 및 처리방법</dd>
							<dd class="desc_sub">
								<ul class="desc_sub_lst">
									<li>- 설치위치 : 문서보관소, 전산실, 상품창고</li>
									<li>- 설치대수 : 총 3대 </li>
									<li>- 촬영범위 및 시간 : 주요시설물의 전공간(24시간) </li>
									<li>- 보관장소 및 처리방법 : 인사팀 및 레포츠사업팀 영상정보처리기기 통제실에 보관 및 처리</li>
								</ul>
							</dd>
							<dd>(3) 영상정보관리책임자</dd>
							<dd class="desc_sub">
								&lt; 영상정보관리책임자 &gt; <br>
								성 명 : 남기혁 부장<br>
								소 속 : 인사팀<br>
								직 책 : 총무담당자<br>
								E-mail : <a href="mailto:namkh@gsgcorp.com" target="_blank">namkh@gsgcorp.com</a><br>
								전화번호 : 02-2005-5123<br>
							</dd>
							<dd>(4) 영상정보 확인 방법 및 장소 : 전화, 이메일 등으로 영상정보관리책임자에게 요구</dd>
							<dd>(5) 개인정보주체의 영상정보 열람 등 요구에 대한 조치<br> 귀하께서 영상정보의 열람을 요청하시면 회사의 영상정보관리책임자는 이를 확인한 후, 귀하가 촬영된 경우 또는 명백히 귀하의 생명, 신체, 재산적 이익을 위해 필요한 경우에 한하여 열람을 허용합니다.</dd>
							<dd>(6) 영상정보보호를 위한 기술적, 관리적, 물리적 조치 <br>
							회사와 영상정보관리책임자는 영상정보관리를 위한 내부관리계획 수립, 접근 통제 및 접근권한 제한, 영상정보의 안전한 저장, 전송기술 적용, 처리기록 보관 및 위∙변조 방지조치, 보관시설 마련 및 잠금장치 설치 등의 조치를 <br>수행하고 있습니다.
							</dd>

							<dt class="tit_agree">15. 권익침해 구제방법</dt>
							<dd class="firstChild">
								귀하는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의 할 수 있습니다. 단, 아래의 기관은 <br>회사와는 별개의 기관으로서, 회사의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 <br>자세한 도움이 필요하시면 문의하여 주시기 바랍니다.
							</dd>
							<dd class="desc_sub">
								<ul class="desc_sub_lst type2">
									<li>- 개인정보침해신고센터(한국인터넷진흥원 운영)<br>
									전화 : (국번없이)188 <br>
									홈페이지 : <a href="http://www.privacy.kisa.or.kr" target="_blank">http://www.privacy.kisa.or.kr </a>
									</li>
									<li>- 정보보호마크 인증위원회 <br>
									전화 : 02-580-0533 <br>
									홈페이지 : <a href="http://www.eprivacy.or.kr" target="_blank">http://www.eprivacy.or.kr </a>
									</li>
									<li>- 대검찰청 사이버 범죄수사단<br>
									전화 : 02-3480-3573 <br>
									홈페이지 : <a href="http://spo.go.kr" target="_blank">http://spo.go.kr </a>
									</li>
									<li>- 경찰청 사이버테러 대응센터 <br>
									전화 : 1566-0112<br>
									홈페이지 : <a href="http://netan.go.kr" target="_blank">http://netan.go.kr </a>
									</li>
								</ul>
							</dd>
						</dl>
					</div>
				</div>
				<div class="m-btn-wrap m-btn-wrap--center">
					<button class="m-btn m-btn--bule m-btn--s" type="button" onclick="popupClose();">
						<span class="m-btn-text">닫기</span>
					</button>
				</div>
			</div>
			<i class="c-pop__bg"></i>
		</div>
		<div class="l-popup" id="email_collection_refusal_popup" style="display:none;">
			<div class="l-popup__wrap">
				<h1 class="l-popup-tit">이메일 주소 무단 수집 거부</h1>
				<div class="l-popup-desc">
					본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적인 장치를 이용하여  무단으로 수집되는 것을 거부하며, 이를 위반 시 “정보통신망법”에 의해 형사처벌됨을 유념하시기 바랍니다.
					<br><br><br>
					게시일 : 2018-09-01
				</div>
				<div class="m-btn-wrap m-btn-wrap--center">
					<button class="m-btn m-btn--bule m-btn--s l-popup__btnClose" type="button" onclick="popupClose();">
						<span class="m-btn-text">닫기</span>
					</button>
				</div>
			</div>
			<i class="c-pop__bg"></i>
		</div>
</footer>
    `;

    $(".footer").html(footer);
    $(".footer .footer").unwrap();

});