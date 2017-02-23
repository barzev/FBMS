// Import a library to help create a component
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';

class MatchCentre extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Header headerText={'Match centre'} />
                <View style={styles.content}>
                    <Text style={styles.description}>
                        Second page
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    description: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000'
    },
    mainContainer: {
        flex: 1
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    }
});

// Make the component available to other parts of the app
export default MatchCentre;
