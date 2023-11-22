import React from "react";
import styled from "styled-components";
import { IoMdHeartEmpty } from "react-icons/io";

function FeedCard() {
  return (
    <CardWrapper>
      <StFeedInfo>
        <StUserInfo>
          <StAvatar>
            <img
              src="https://i.namu.wiki/i/Bge3xnYd4kRe_IKbm2uqxlhQJij2SngwNssjpjaOyOqoRhQlNwLrR2ZiK-JWJ2b99RGcSxDaZ2UCI7fiv4IDDQ.webp"
              alt="프로필이미지"
            ></img>
          </StAvatar>
          <div>
            <h2>sweet_potato</h2>
            <p>
              <span>follow</span> 30
            </p>
          </div>
        </StUserInfo>
        <StLikeIcon>
          <IoMdHeartEmpty />
        </StLikeIcon>
      </StFeedInfo>
      <StFeedImg>
        <img src="https://image.ytn.co.kr/general/jpg/2020/1130/202011300700017010_d.jpg" alt="피드이미지"></img>
      </StFeedImg>
      <StContentWarapper>
        <StTagBox>
          <StTag>#헬스</StTag>
          <StTag>#러닝</StTag>
        </StTagBox>
        <p>오운완 오운완 오운완 오운완 오운완 오운완 오운완 오운완 오운완오운완 오운완 오운완</p>
      </StContentWarapper>
    </CardWrapper>
  );
}

export default FeedCard;

const CardWrapper = styled.li`
  width: 270px;
  background-color: #e0dddd;
  border-radius: 8px;
  padding: 1rem;
`;

const StFeedImg = styled.figure`
  width: 240px;
  height: 200px;
  background-color: ${({ theme }) => theme.color.disable};
  overflow: hidden;
  border-radius: 5px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StFeedInfo = styled.div`
  margin: 10px 0 15px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & p {
    font-size: 0.7rem;
  }
  & h2 {
    font-size: 1.1rem;
    font-weight: 700;
  }
`;

const StUserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 7px;
  & div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  & span {
    color: ${({ theme }) => theme.color.base};
    font-weight: 700;
  }
`;

const StAvatar = styled.figure`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StContentWarapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 0.75rem 0;
  gap: 0.5rem;
  & p {
    font-size: 0.8rem;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const StLikeIcon = styled.div`
  font-size: 23px;
`;

const StTagBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

const StTag = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sm};
  display: flex;
  align-items: center;
  width: max-content;
  height: 1.25rem;
  padding: 0.4rem;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 1rem;
`;