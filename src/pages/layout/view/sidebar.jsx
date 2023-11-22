import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { MdSettings, MdNewspaper } from "react-icons/md";
import { Accordion } from "pages/common/accordion";
import { IoIosPaper, IoIosClose } from "react-icons/io";
import { IoCalendar, IoHome } from "react-icons/io5";
import { FaBowlFood, FaMessage, FaHeart } from "react-icons/fa6";
import { GiMuscleUp } from "react-icons/gi";
const StContainer = styled.aside`
  background-color: #f5f5f5;
  width: 300px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => `calc(${theme.spacing.base} * 2)`};
  position: fixed;
  top: 0;
  left: 0;
  position: relative;
  transform: ${({ $show }) => ($show ? "" : "translateX(-100%)")};
  transition: all 0.3s ease-in;
`;

const StSidebarClose = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  cursor: pointer;
`;

const StAuthWrapper = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => `calc(${theme.spacing.base} * 2)`};
  background-color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => `calc(${theme.spacing.base} * 2)`};
`;

const StAuthBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => `calc(${theme.spacing.base} * 2)`};
  padding: ${({ theme }) => `calc(${theme.spacing.base} * 2) 0`};
  h1 {
    flex: 1;
  }
`;

const StRoundedImgBox = styled.div`
  width: ${({ width }) => (width ? width : "60px")};
  height: ${({ height }) => (height ? height : "60px")};
  border-radius: 100%;
  background-color: yellow;
`;

const StAuthPostInfoBox = styled.div`
  display: flex;
`;

const StAuthPostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h1 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: bold;
    padding: ${({ theme }) => `calc(${theme.spacing.base}) 0`};
  }
  p {
    color: #a6acbe;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

const StSvgBox = styled.div`
  font-size: ${({ $fontSize, theme }) => ($fontSize ? $fontSize : theme.fontSize.xl)};
  svg {
    fill: ${({ $fill }) => $fill};
  }
`;

const NavigationBox = styled.div`
  background-color: #f6623d1c;
  padding: ${({ theme }) => ` calc(${theme.spacing.base} * 3) calc(${theme.spacing.base} * 2)`};
  color: #ff6633;
  border-radius: 8px;
  cursor: pointer;
`;

const StAccordinonChildrenBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => `calc(${theme.spacing.base} * 2)`};
  cursor: pointer;
`;

const StAccordionChildren = styled.div`
  border-radius: 8px;
  display: flex;
  color: #7d8fb3;
  background-color: ${({ theme }) => theme.color.white};
  justify-content: space-between;
  gap: ${({ theme }) => `calc(${theme.spacing.base} * 2)`};
  padding: ${({ theme }) => `calc(${theme.spacing.base} * 2)`};
  height: 60px;
  align-items: center;
  h1 {
    flex: 1;
  }
`;

export default function Sidebar() {
  const theme = useTheme();
  const [show, setShow] = useState(true);

  return (
    <StContainer $show={show}>
      {/* 사이드바 닫기 */}
      <StSidebarClose onClick={() => setShow(false)}>
        <IoIosClose />
      </StSidebarClose>
      <StAuthWrapper>
        {/* 사용자부분 */}
        <StAuthBox>
          <StRoundedImgBox />
          <h1>닉네임</h1>
          <StSvgBox>
            <MdSettings />
          </StSvgBox>
        </StAuthBox>

        {/* 게시물 */}
        <StAuthPostInfoBox>
          <StAuthPostInfo>
            <StSvgBox $fill={theme.color.base} $fontSize={"3rem"}>
              <GiMuscleUp />
            </StSvgBox>
            <h1>50,000</h1>
            <p>운동 게시물</p>
          </StAuthPostInfo>
          <StAuthPostInfo>
            <StSvgBox $fill={theme.color.black} $fontSize={"3rem"}>
              <FaBowlFood />
            </StSvgBox>
            <h1>50,000</h1>
            <p>식단 게시물</p>
          </StAuthPostInfo>
          <StAuthPostInfo>
            <StSvgBox $fill={theme.color.danger} $fontSize={"3rem"}>
              <FaHeart />
            </StSvgBox>
            <h1>50,000</h1>
            <p>팔로워</p>
          </StAuthPostInfo>
        </StAuthPostInfoBox>
        {/* 페이지이동 */}
        <NavigationBox>게시글 쓰기</NavigationBox>
        <NavigationBox>나의 게시글</NavigationBox>
      </StAuthWrapper>

      {/* 아코디언 버튼 */}
      <Accordion
        title={"All"}
        btnIcon={<IoHome />}
        height={"60px"}
        padding={`calc( ${theme.spacing.base} * 2)`}
        iconSize={theme.fontSize.xl}
        gap={`calc( ${theme.spacing.base} * 2)`}
        bg={theme.color.base}
        borderRadius={"8px"}
      >
        <StAccordinonChildrenBox>
          <StAccordionChildren>
            <StSvgBox $fill={"#33BFFF"}>
              <IoIosPaper />
            </StSvgBox>
            <h1>오운완</h1>
          </StAccordionChildren>
          <StAccordionChildren>
            <StSvgBox $fill={"#29CC39"}>
              <IoCalendar />
            </StSvgBox>
            <h1>오식완</h1>
          </StAccordionChildren>
          <StAccordionChildren>
            <StSvgBox $fill={theme.color.success}>
              <FaMessage />
            </StSvgBox>
            <h1>팔로우</h1>
          </StAccordionChildren>
        </StAccordinonChildrenBox>
      </Accordion>
    </StContainer>
  );
}