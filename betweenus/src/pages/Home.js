import * as React from "react";
import "../assets/css/common.css"

export default function Home() {
  return (
    <div>
<head>
<title>우리끼리</title>
<link rel="stylesheet" href="../assets/css/common.css"/>
</head>
<body>

<header class="header">
	<div class="hd">
		<select class="hd-filter">
			<option>최신순</option>
			<option>가까운 순</option>
			<option>모집인원 많은 순</option>
		</select>
		<a href="#!" class="hd-search"><img src={require('../assets/img/ico_search1.svg').default} alt=" "/></a>
	</div>
</header>

<section class="main">
	<div class="wrap">
		<a href="#!" class="bnr-main">
			<div class="txt-group">
				<div class="txt">배달 공동구매를 시작해보세요!</div>
				<div class="txt2">지금 동네인증을 하고 근처 이웃들과 <br/>함께 배달음식을 주문하세요.</div>
			</div>
			
			<img src={require("../assets/img/ico_shortcut1.svg").default} alt=" "/>
		</a>

		<ol class="list-item">
			<li>
				<a href="sub/item-view.html">
					<div class="tit">BBQ 치킨 같이 시켜먹어요</div>
					<div class="place">BBQ 치킨 아주대점</div>
					<div class="info-group">
						<div class="time"><img src={require("../assets/img/ico_clock1.svg").default} alt=" "/>마감 6:00pm</div>
						<div class="info">
							<span class="price">예상배달비: 4000원 / 3명</span>
							<span class="distance">0.1km</span>
						</div>
					</div>
				</a>
			</li>
			
			<li>
				<a href="sub/item-view.html">
					<div class="tit">피자 배달비 더치페이해요~</div>
					<div class="place">도미노피자 우만동점</div>
					<div class="info-group">
						<div class="time"><img src={require("../assets/img/ico_clock1.svg").default} alt=" "/>마감 6:30pm</div>
						<div class="info">
							<span class="price">예상배달비: 4000원 / 3명</span>
							<span class="distance">0.1km</span>
						</div>
					</div>
				</a>
			</li>
			
			<li>
				<a href="sub/item-view.html">
					<div class="tit">피자 배달비 더치페이해요~</div>
					<div class="place">도미노피자 우만동점</div>
					<div class="info-group">
						<div class="time"><img src={require("../assets/img/ico_clock1.svg").default} alt=" "/>마감 6:30pm</div>
						<div class="info">
							<span class="price">예상배달비: 4000원 / 3명</span>
							<span class="distance">0.1km</span>
						</div>
					</div>
				</a>
			</li>
			
			<li>
				<a href="sub/item-view.html">
					<div class="tit">피자 배달비 더치페이해요~</div>
					<div class="place">도미노피자 우만동점</div>
					<div class="info-group">
						<div class="time"><img src={require("../assets/img/ico_clock1.svg").default} alt=" "/>마감 6:30pm</div>
						<div class="info">
							<span class="price">예상배달비: 4000원 / 3명</span>
							<span class="distance">0.1km</span>
						</div>
					</div>
				</a>
			</li>
			
			<li>
				<a href="sub/item-view.html">
					<div class="tit">피자 배달비 더치페이해요~</div>
					<div class="place">도미노피자 우만동점</div>
					<div class="info-group">
						<div class="time"><img src={require("../assets/img/ico_clock1.svg").default} alt=" "/>마감 6:30pm</div>
						<div class="info">
							<span class="price">예상배달비: 4000원 / 3명</span>
							<span class="distance">0.1km</span>
						</div>
					</div>
				</a>
			</li>
		</ol>
	</div>
</section>

<footer class="footer">
	<div class="ft">
		<div class="ft-menu">
			<a href="index.html" class="active"><div class="ico"></div><div class="tit">홈</div></a>
			<a href="sub/map.html"><div class="ico"></div><div class="tit">지도</div></a>
			<a href="sub/item-write.html"></a>
			<a href="sub/cart.html"><div class="ico"></div><div class="tit">주문</div></a>
			<a href="sub/setting.html"><div class="ico"></div><div class="tit">설정</div></a>
		</div>
	</div>
</footer>

</body>
</div>
  );
}
