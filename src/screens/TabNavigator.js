import React,{useState, useEffect} from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet,Image,Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, width, height } from '../assets/globalStyles'; //width,height 받아오기

import MainScreen from './MainScreen';
import AcneAnalysisScreen from './AcneAnalysis/AcneAnalysisScreen';
import ImprovementAnalysisScreen from './ImprovementAnalysis/ImprovementAnalysisScreen';
import MbtiTestScreen from './MbtiTest/MbtiTestScreen';
import HistoryScreen from './History/HistoryScreen';

export default function TabNavigator (){


const imagePaths = {
    icon1: require('../assets/img/home.png'),
    icon2: require('../assets/img/acne-analysis.png'),
    icon3: require('../assets/img/improvement-analysis.png'),
    icon4: require('../assets/img/mbti-test.png'),
    icon5: require('../assets/img/historical-diagnostic-history.png'),
    // 다른 아이콘들에 대한 경로들도 추가할 수 있습니다.
  };

    const Tab = createBottomTabNavigator();

    return(
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator style={styles.tab}
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              console.log(route.name)
              switch (route.name) {
                case 'main':
                  iconName = 'icon1';
                  break;
                case 'AiTrouble':
                  iconName = 'icon2';
                  break;
                case 'AiImprove':
                  iconName = 'icon3';
                  break;
                case 'MBTI':
                  iconName = 'icon4';
                  break;
                default:
                  iconName = 'icon5';
              }
              return (
                <Image style={styles.image} name={iconName} source={(imagePaths[iconName])} />

              );
            },
            tabBarShowLabel: true, // 텍스트 숨기기
            tabBarActiveTintColor: colors.activeText, // 활성 탭의 텍스트 색상
            tabBarInactiveTintColor: '#6A6A6A', // 비활성 탭의 텍스트 색상
            tabBarStyle: { backgroundColor: '#F2F2F2', height: height * 60, paddingBottom: 0, paddingRight: width * 10, paddingLeft: 10 }, // tabBar의 배경색, 크기 조절
            tabBarLabelStyle: { fontWeight: 'bold', fontFamily: "NanumSquareRoundB", fontSize: width * 12 },
            
          })}
        >
          <Tab.Screen name="main" component={MainScreen}  options={{ tabBarLabel: '홈' }}/>
          <Tab.Screen name="AiTrouble" component={AcneAnalysisScreen} options={{ tabBarLabel: 'Ai 트러블 분석' }} />
          <Tab.Screen name="AiImprove" component={ImprovementAnalysisScreen} options={{ tabBarLabel: 'Ai 호전도 분석' }}/>
          <Tab.Screen name="MBTI" component={MbtiTestScreen} options={{ tabBarLabel: 'MBTI' }}/>
          <Tab.Screen name="History" component={HistoryScreen} options={{ tabBarLabel: '과거 진단 기록' }}/>
        </Tab.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({

    image: {
      width: width * 30,
      height: height * 30,
    },
  
  });