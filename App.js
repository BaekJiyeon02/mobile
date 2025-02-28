import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Button, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from "expo-font";
import { BorderlessButton } from 'react-native-gesture-handler';
import BackButton from './src/components/BackButton';
import { colors, width, height } from './src/assets/globalStyles'; //width,height 받아오기
import AsyncStorage from '@react-native-async-storage/async-storage';

import TabNavigator from './src/screens/TabNavigator';

import AcneAnalysisScreen from './src/screens/AcneAnalysis/AcneAnalysisScreen';
import AcneAnalysisResultScreen from './src/screens/AcneAnalysis/AcneAnalysisResultScreen';

import ImprovementAnalysisScreen from './src/screens/ImprovementAnalysis/ImprovementAnalysisScreen';
import ImprovementAnalysisResultScreen from './src/screens/ImprovementAnalysis/ImprovementAnalysisResultScreen';


import MbtiTestScreen from './src/screens/MbtiTest/MbtiTestScreen';
import MbtiTestResultScreen from './src/screens/MbtiTest/MbtiTestResultScreen';


import HistoryScreen from './src/screens/History/HistoryScreen';
import HistoryDetailScreen from './src/screens/History/HistoryDetailScreen';

import CameraScreen from './src/screens/Photo/CameraScreen';
import AlbumScreen from './src/screens/Photo/AlbumScreen';

import SettingScreen from './src/screens/Setting/SettingScreen';
import ChangePasswordScreen from './src/screens/Setting/ChangePasswordScreen';
import NoticeScreen from './src/screens/Setting/NoticeScreen';
import ProfileEditScreen from './src/screens/Setting/ProfileEditScreen';
import QandAListScreen from './src/screens/Setting/QandAListScreen';
import QandAWriteScreen from './src/screens/Setting/QandAWriteScreen';

// 로그인/회원가입
import LoginScreen from './src/screens/Login/LoginScreen';
import FindAccountScreen from './src/screens/Login/FindAccountScreen';
import JoinScreen from './src/screens/Login/JoinScreen';

import MainScreen from './src/screens/MainScreen';




const Stack = createStackNavigator();



const HeaderLogo = () => {
  return (
    <Image style={{ width: width * 87, height: height * 87, marginBottom: height * 20 }} source={require('./src/assets/img/SkinBuddy_logo.png')} />
  )
}
const HeaderBackButton = () => {
  return (
    <BackButton />

  );
};

const BasicOption = {
  headerTitle: (props) => <HeaderLogo {...props} />,  //헤더 로고 추가
  headerStatusBarHeight: height * 80, // 헤더 높이
  headerShadowVisible: false, // 헤더의 선 없애기
  headerBackVisible: false,

}

const BackButtonOption = {

  HeaderBackButton: true,
  headerBackTitleVisible: false,
  headerTintColor: "black"
}

const NoLogoHeaderOption = {
  headerStatusBarHeight: height * 60, // 헤더 높이
  headerShadowVisible: false, // 헤더의 선 없애기
  headerTitle: '',
}

function App() {

  // 상태를 판단하기 위한 추가된 코드
const [isLoggedIn, setIsLoggedIn] = useState(false);

// 컴포넌트가 마운트될 때 로그인 상태를 확인합니다.
useEffect(() => {
  // 로그인 상태 확인 로직을 추가하세요. 예: 토큰 유효성 검사, 사용자 데이터 확인 등.
  // 아래는 예시 코드입니다.
  const checkLoginStatus = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log(userToken);
    setIsLoggedIn(!!userToken);
  };
  checkLoginStatus();
}, []);

  // 사용 할 폰트 로드
  const [fontsLoaded] = useFonts({
    'NanumSquareRoundB': require("./src/assets/fonts/NanumSquareRoundB.ttf"),
    'NanumSquareRoundL': require('./src/assets/fonts/NanumSquareRoundL.ttf'),
    'NanumSquareRoundR': require('./src/assets/fonts/NanumSquareRoundR.ttf'),
    'NanumSquareRoundEB': require('./src/assets/fonts/NanumSquareRoundEB.ttf'),
  });
  if (!fontsLoaded) return null;



    return (

      <NavigationContainer>
        <Stack.Navigator>
        {/* {!isLoggedIn ? (
          <> */}
            <Stack.Group>
              <Stack.Screen name="Login" component={LoginScreen}
                options={{
                  headerShown: false
                }} />
              <Stack.Screen name="FindAccount" component={FindAccountScreen}
                options={{
                  ...BackButtonOption,
                  ...NoLogoHeaderOption,
                }} />
              <Stack.Screen name="Join" component={JoinScreen}
                options={{
                  ...BackButtonOption,
                  ...NoLogoHeaderOption,
                }}
                />
                </Stack.Group>
              {/* </>
              ):(
                <> */}
            <Stack.Screen name="Stack" component={TabNavigator}
            options={{
              headerBackVisible: false, // 뒤로가기 버튼 숨기기
              ...BasicOption, // 기본 옵션 추가
            }} />
            
          <Stack.Group>
            <Stack.Screen name="main" component={MainScreen} 
            options={{
              headerBackVisible: false, 
            }}/>
          </Stack.Group>

          <Stack.Group>
            <Stack.Screen name="AiTrouble" component={AcneAnalysisScreen} />
            <Stack.Screen name="Camera" component={CameraScreen}
              options={{
                ...BasicOption,
                ...BackButtonOption,
              }}
            />
            <Stack.Screen name="Album" component={AlbumScreen}
              options={{
                ...BasicOption,
                ...BackButtonOption,
              }}
            />
          </Stack.Group>

          <Stack.Group>
            <Stack.Screen name="AiImprove" component={ImprovementAnalysisScreen} />
          </Stack.Group>

          <Stack.Group>
            <Stack.Screen name="MBTI" component={MbtiTestScreen} />
          </Stack.Group>

          <Stack.Group>
            <Stack.Screen name="History" component={HistoryScreen} />
            <Stack.Screen name="HistoryDetail" component={HistoryScreen} />
          </Stack.Group>
          {/* </>
        ) } */}
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({

  image: {
    width: width * 30,
    height: height * 30,
  },

});

export default App;

