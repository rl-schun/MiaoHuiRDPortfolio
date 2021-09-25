import React from "react";
import styled from "styled-components";
import MemberBox from "../../atoms/MemberBox";
import YearIndicator from "../../atoms/YearIndicator";
import { Color } from "../../style";
import { Link as RLink } from "react-router-dom";

function YearGroupBox() {
  return (
    <Wrapper>
      <SeparatorLine />
      <YearIndicator
        numberText="2022"
        chineseText="壬寅年"
        themeText="回家打卡"
      />
      <MemberListWrapper>
        <MemberLink name="Richard Lim Siu Chun" to="/richardlimsiuchun" />
        <MemberLink name="Chan Zi Ming" to="/chanziming" />
        <MemberLink name="Wesley Tai Kean Wah" to="/wesleytaikeanwah" />
        <MemberLink name="Belle Tang Li Jiun" to="/belletanglijiun" />
        <MemberLink name="Lam Jie Xin" to="/lamjiexin" />
        <MemberLink name="Javier Tan Xian Neng" to="/javiertanxianneng" />
        <MemberLink name="Yeoh Yi Hang" to="/yeohyihang" />
        <MemberLink name="Benny Lim Wen Yuan" to="/bennylimwenyuan" />
        <MemberLink name="Ryan Lee Tian Yoong" to="/ryanleetianyoong" />
        <MemberLink name="Tan Jian Shiun" to="/tanjianshiun" />
      </MemberListWrapper>
    </Wrapper>
  );
}

function MemberLink({ to, name }) {
  return (
    <Link style={{ textDecoration: "none" }} to={to}>
      <MemberBox name={name} />
    </Link>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 35px;
`;

const SeparatorLine = styled.hr`
  width: 80%;
  height: 3px;
  border: none;
  background-color: ${Color.red};
  color: ${Color.red};
  margin-bottom: 15px;
`;

const MemberListWrapper = styled.div`
  width: 100%;
  padding-top: 15px;
  display: flex;
  gap: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Link = styled(RLink)`
  text-decoration: none;
  flex-grow: 1;

  @media only screen and (max-width: 500px) {
    width: 80%;
    flex-grow: 0.5;
  }
`;

export default YearGroupBox;
