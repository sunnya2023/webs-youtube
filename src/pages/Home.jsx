import React from "react";
import Main from "../components/section/Main";
import Today from "../components/contents/Developer";
import Developer from "../components/contents/Webd";
import Webd from "../components/contents/Developer";
import Website from "../components/contents/Website";
import Gsap from "../components/contents/Gsap";
import Port from "../components/contents/Port";
import Youtube from "../components/contents/Youtube";

const Home = () => {
	return (
		<Main
			title="웹스토리보이 유튜브 채널"
			description="웹스트리보이 유튜브 채널에 오신것을 환영합니다.."
		>
			<Today />
			<Developer />
			<Webd />
			<Website />
			<Gsap />
			<Port />
			<Youtube />
		</Main>
	);
};

export default Home;
