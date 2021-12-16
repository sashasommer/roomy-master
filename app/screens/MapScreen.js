import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import MapView from 'react-native-maps';

//component
import Screen from './../components/Screen';
import { RFPercentage } from 'react-native-responsive-fontsize';
import BottomTab from '../components/common/BottomTab'
import BannerAd from '../components/common/BannerAd';


//config
import Colors from './../config/Colors';

function MapScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.primary }}>
            {/* Top Heading */}
            <View style={{ height: RFPercentage(12), width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primary}}>
                <Text style={{ color: Colors.white, fontSize: RFPercentage(4.5) }}>
                    Map
                </Text>
            </View>
            <View style={styles.container}>
                <MapView style={styles.map} />
            </View>

            <BannerAd />

            {/* Bottom Tab */}
            <BottomTab props={props} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default MapScreen;