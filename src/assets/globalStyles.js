import { Dimensions } from 'react-native';

export const colors = {
  //버튼 색상
  buttonBlue: '#7CA7F1',
  buttonSkyBlue: '#C0D8FF',

  //로그인 색상
  loginBlue: "#9ABBF3",
  loginSkyBlue: "#D4E4FF",

  //글자 색상
  textGray: '#626262',
  softGray: "#F8F8F8",
  darkGray: '#BDBDBD',
  gray : "#B1B1B1",
  highlightBlue: "#9ABBF3",
  highlightRed: "#FFA4A4",
  activeText: "#000000",
  inputBoxColor:"#F0F0F0",


  // MBTI 색상
  DRPT: '#46A5C4',
  DRNT: '#9EC0E7',
  DSPT: '#C469AA',
  DSNT: '#F39AC1',
  DRPW: '#4D7FB9',
  DRNW: '#B3A8D2',
  DSPW: '#B3A8D2',
  DSNW: '#F3B5A8',
  ORPT: '#B5D335',
  ORNT: '#CCE39D',
  OSPT: '#F6976E',
  OSNT: '#FDD6B8',
  ORNW: '#83C15C',
  ORPW: '#83C15C',
  OSPW: '#F6976E',
  OSNW: '#FFE3A4',
};


export const basicDimensions = { // 디자이너가 작업하고 있는 XD파일 스크린의 세로,가로
  height: 932,
  width: 430,
};

export const height = ( // 높이 변환 작업
  Dimensions.get('screen').height *
  (1 / basicDimensions.height)
).toFixed(2);

export const width = ( // 가로 변환 작업
  Dimensions.get('screen').width *
  (1 / basicDimensions.width)
).toFixed(2);


export const styleG = {


  titleText: {
    color: colors.textGrey,
    fontFamily: "NanumSquareRoundB",
    fontSize: width * 30,
    margin: width * 20,
  },
  textStyle: {
    fontFamily: "NanumSquareRoundR",
    color: colors.textGrey,
  },
  textBold: {
    fontFamily: 'NanumSquareRoundB',
  }
}
