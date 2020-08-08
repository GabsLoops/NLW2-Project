import React from 'react'
import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import styles from './styles'
import landingImage from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClasses from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'



function Landing() {
    const { navigate } = useNavigation()
    function handleNavigationToGiveClassPage() {
        navigate('GiveClasses')
    }

    function handleNavigationToStudyTabs() {
        navigate('Study')
    }
    return (
        <View style={styles.container}>
            <Image style={styles.banner} source={landingImage}></Image>
            <Text style={styles.title} >
                Seja bem vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton onPress={handleNavigationToStudyTabs} style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon}></Image>
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton onPress={handleNavigationToGiveClassPage} style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClasses}></Image>
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>
            <Text style={styles.totalConnections}>
                Total de 285 conexões já realizadas {' '}
                <Image source={heartIcon}></Image>
            </Text>
        </View>
    )
}

export default Landing