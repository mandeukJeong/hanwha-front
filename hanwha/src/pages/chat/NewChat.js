import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale/ko';
import CustomLink from '../../components/common/CustomLink';
import CustomBtn from '../../components/common/CustomBtn';
import chevron from '../../assets/gallery/chevron.png';
import 'react-datepicker/dist/react-datepicker.css';
import { getTeamInfo, makeChatRoom } from '../../services/chat';
import { changeModalInfo } from '../../store/modal';
import Alert from '../../components/common/Alert';

const MainWrap = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.white};
  background-color: ${COLORS.black};
  padding: 50px;
  min-height: calc(100vh - 384px);
  ${mediaMax.medium`
    min-height: calc(100vh - 345px);
  `};
  ${mediaMax.small`
    padding: 30px; 
    min-height: calc(100vh - 282px);
  `};
`;
const MainSection = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 50px;
    ${mediaMax.small`
      font-size: 20px;
      margin-bottom: 30px;
    `};
  }
`;
const RoomForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TeamImg = styled.div`
  background: ${COLORS.grey};
  background-image: ${(props) => props.$src && `url(${props.$src})`};
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  margin-bottom: 30px;
  ${mediaMax.small`
    width: 200px;
    height: 200px;
    margin-bottom: 25px;
  `};
`;
const TeamSelect = styled.select`
  border: none;
  color: ${COLORS.grey};
  border-radius: 10px;
  background: url(${chevron}) calc(100% - 10px) center no-repeat;
  background-color: ${COLORS.dark};
  background-size: ${SIZES.ltmedium};
  padding: 12px 24px;
  font-size: ${SIZES.ltxsmall};
  width: 115px;
  margin-bottom: 50px;
  ${mediaMax.small`
    background-size: ${SIZES.tblarge};
    padding: 10px 20px;
    font-size: ${SIZES.tbsmall};
    width: 100px;
    margin-bottom: 30px;
  `};
`;
const LinkWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 3em;
  margin-top: 50px;
  ${mediaMax.small`
    gap: 2em;
    margin-top: 30px;
  `};
`;
const CustomDatePicker = styled(DatePicker)`
  cursor: pointer;
  border: none;
  border-radius: 10px;
  font-family: 'Noto Sans KR', sans-serif;
  background-color: ${COLORS.dark};
  color: white;
  text-align: center;
  font-weight: 600;
  font-size: ${SIZES.ltsmall};
  padding: 15px 30px;
  width: 350px;
  ${mediaMax.small`
    font-size: ${SIZES.tbmedium};
    width: 300px;
  `};
`;
const NewChat = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const [startDate, setStartDate] = useState(new Date());
  const [teamList, setTeamList] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState('');

  useEffect(() => {
    getTeamInfo()
      .then((response) => setTeamList(response.data))
      .catch((e) => console.log(e));
  }, []);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}.${month}.${day}. ${hours}:${minutes}:${seconds}`;
  };

  const onChange = (e) => {
    const anotherTeam = teamList.filter(
      (item) => item.teamCd === e.target.value
    );
    setSelectedTeam(anotherTeam[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (selectedTeam === '') {
      dispatch(
        changeModalInfo({
          isOpen: true,
          modalText: '팀을 선택해주세요.',
          modalBtnText: '확인',
        })
      );

      return;
    }

    const ourTeam = teamList.filter((item) => item.teamCd === 'HH')[0];
    const date = formatDate(startDate);

    makeChatRoom(ourTeam, selectedTeam, date)
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <MainWrap>
        <MainSection>
          <h1>안녕하세요, 관리자님!</h1>
          <RoomForm onSubmit={onSubmit}>
            <TeamImg $src={selectedTeam.emblem} />
            <TeamSelect onChange={onChange}>
              <option>TEAM</option>
              {teamList &&
                teamList
                  .filter((item) => item.teamCd !== 'HH')
                  .map((item) => (
                    <option key={item.teamCd} value={item.teamCd}>
                      {item.teamNm}
                    </option>
                  ))}
            </TeamSelect>
            <CustomDatePicker
              locale={ko}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              dateFormat="yyyy.MM.dd HH:mm"
            />
            <LinkWrap>
              <CustomLink
                to="/chat"
                $border={COLORS.grey}
                $fontColor={COLORS.white}
                $bgColor={COLORS.orange}
                text="GO TO LIST"
              />
              <CustomBtn
                type="submit"
                onClick={onSubmit}
                $border={COLORS.orange}
                $fontColor={COLORS.orange}
                $bgColor={COLORS.orange}
                text="NEW ROOM"
              />
            </LinkWrap>
          </RoomForm>
        </MainSection>
      </MainWrap>
      {modal.isOpen && <Alert />}
    </>
  );
};

export default NewChat;
