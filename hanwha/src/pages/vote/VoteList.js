import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import CustomBtn from '../../components/common/CustomBtn';
import CustomLink from '../../components/common/CustomLink';
import { getVoteList, updateVoteList } from './../../services/vote';
import { changeModalInfo } from '../../store/modal';
import Alert from '../../components/common/Alert';

const MainWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
`;
const MainSection = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  ${mediaMax.small`
    padding: 50px 0 30px 0;
  `};
`;
const TitleText = styled.h1`
  font-weight: 700;
  font-size: 30px;
  padding-bottom: 80px;
  ${mediaMax.small`
    font-size: 25px;
    padding-bottom: 50px;
  `};
`;
const VoteWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5em;
  padding-bottom: 50px;
  ${mediaMax.small`
    gap: 2.5em;
    padding-bottom: 30px;
  `};
`;
const VoteItem = styled.div`
  font-weight: 600;
  width: 20%;
  font-size: ${SIZES.ltmedium};
  ${mediaMax.medium`
    width: 40%;
  `};
  ${mediaMax.small`
    font-size: ${SIZES.tbmedium};
  `};
`;
const PlayerImg = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background-image: url(${(props) => props.$bg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  border: 2px solid ${(props) => props.$border};
  margin-bottom: 15px;
  &:hover {
    border: 2px solid ${COLORS.orange};
  }
`;
const ProgressText = styled.span`
  color: ${COLORS.grey};
  font-weight: 600;
  font-size: ${SIZES.ltmedium};
  ${mediaMax.small`
    font-size: ${SIZES.tbmedium};
  `};
`;
const LinkWrap = styled.div`
  display: flex;
  gap: 3em;
  padding: 50px 0;
  ${mediaMax.small`
    padding: 30px 0;
  `};
`;

const VoteList = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [voteList, setVoteList] = useState(null);
  const [voteDone, setVoteDone] = useState(null);
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!sessionStorage.getItem('voteList')) {
      getVoteList()
        .then((response) => {
          sessionStorage.setItem('voteList', JSON.stringify(response.data));
          sessionStorage.setItem('voteDone', JSON.stringify([]));
          setVoteList(
            JSON.parse(sessionStorage.getItem('voteList'))[
              searchParams.get('page') - 1
            ]
          );
        })
        .catch((e) => console.log(e));
    } else {
      setVoteList(
        JSON.parse(sessionStorage.getItem('voteList'))[
          searchParams.get('page') - 1
        ]
      );

      if (
        JSON.parse(sessionStorage.getItem('voteDone')).length >=
        searchParams.get('page')
      ) {
        setVoteDone(
          JSON.parse(sessionStorage.getItem('voteDone'))[
            searchParams.get('page') - 1
          ]
        );
      }
    }
  }, [searchParams]);

  const handleNextPage = () => {
    window.scrollTo(0, 0);
  };

  const onSelectPlayer = ({ pCd, pNm, img }) => {
    setVoteDone({ _id: voteList._id, pCd, pNm, img });
  };

  const changeNextVote = () => {
    if (!voteDone) {
      dispatch(
        changeModalInfo({
          isOpen: true,
          modalText: '선수를 투표해주세요',
          modalBtnText: '확인',
          modalToLink: `/vote/list?page=${searchParams.get('page')}`,
        })
      );

      return;
    } else {
      if (
        JSON.parse(sessionStorage.getItem('voteDone')).length !==
        Number(searchParams.get('page'))
      ) {
        sessionStorage.setItem(
          'voteDone',
          JSON.stringify([
            ...JSON.parse(sessionStorage.getItem('voteDone')),
            voteDone,
          ])
        );
      }

      if (Number(searchParams.get('page')) === 10) {
        updateVoteList(JSON.parse(sessionStorage.getItem('voteDone')))
          .then()
          .catch((e) => console.log(e));
      }

      setVoteDone(null);
      handleNextPage();
      navigate(
        Number(searchParams.get('page')) === 10
          ? '/vote/end'
          : `/vote/list?page=${Number(searchParams.get('page')) + 1}`
      );
    }
  };

  return (
    <>
      <MainWrap>
        {voteList && (
          <MainSection>
            <TitleText>
              {voteList.question.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </TitleText>
            <VoteWrap>
              {voteList.players &&
                voteList.players.map((item) => (
                  <VoteItem key={item.pCd}>
                    <PlayerImg
                      onClick={() => onSelectPlayer(item)}
                      $bg={item.img}
                      $border={
                        voteDone && voteDone.pCd === item.pCd
                          ? COLORS.orange
                          : COLORS.grey
                      }
                    />
                    <span>{item.pNm}</span>
                  </VoteItem>
                ))}
            </VoteWrap>
            <ProgressText>{`${searchParams.get('page')}/${
              JSON.parse(sessionStorage.getItem('voteList')).length
            }`}</ProgressText>
            <LinkWrap>
              <CustomLink
                to={
                  Number(searchParams.get('page')) === 1
                    ? '/vote'
                    : `/vote/list?page=${Number(searchParams.get('page')) - 1}`
                }
                $fontColor={COLORS.white}
                $bgColor={COLORS.orange}
                text="BEFORE"
                onClick={handleNextPage}
              />
              <CustomBtn
                onClick={changeNextVote}
                $border={COLORS.orange}
                $fontColor={COLORS.orange}
                $bgColor={COLORS.orange}
                text="NEXT"
              />
            </LinkWrap>
          </MainSection>
        )}
      </MainWrap>
      {modal.isOpen && <Alert />}
    </>
  );
};

export default VoteList;
