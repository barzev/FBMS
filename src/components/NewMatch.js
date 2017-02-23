// Import a library to help create a component
import React, { Component } from 'react';
import { View, PickerIOS, Text, StyleSheet } from 'react-native';
import Header from './Header';

const PickerItemIOS = PickerIOS.Item;

const CLUBS_TEAMS_PLAYERS = {
    chelsea: {
        club: 'Chelsea',
        players: ['Thibaut Courtois', 'Gary Cahil', 'Cesar Azpilicueta',
            'Marcos Alonso', 'Nathan Ake', 'Diego Costa', 'Eden Hazard', 'Michy Batshuayi',
            'Pedro', 'Willian', 'Victor Moses']
    },
    arsenal: {
        club: 'Arsenal',
        players: ['Thibaut Courtois', 'Gary Cahil', 'Cesar Azpilicueta',
            'Marcos Alonso', 'Nathan Ake', 'Diego Costa', 'Eden Hazard', 'Michy Batshuayi',
            'Pedro', 'Willian', 'Victor Moses']
    },
    tottenham: {
        club: 'Tottenham',
        players: ['Thibaut Courtois', 'Gary Cahil', 'Cesar Azpilicueta',
            'Marcos Alonso', 'Nathan Ake', 'Diego Costa', 'Eden Hazard', 'Michy Batshuayi',
            'Pedro', 'Willian', 'Victor Moses']
    }
};

class NewMatch extends Component {
    state = {
        club: 'chelsea',
        playerIndex: 1
    };


    render() {
        const selectedClub = CLUBS_TEAMS_PLAYERS[this.state.club];
        return (
            < View style={styles.mainContainer} >
                <Header headerText={'Create a new match'} />
                <View style={styles.mainSpace}>
                    <View style={styles.teamSection}>
                        <Text>Pick team 1</Text>
                        <PickerIOS
                            selectedValue={this.state.club}
                            onValueChange={(club) => this.setState({ club, playerIndex: 0 })}
                        >
                            {Object.keys(CLUBS_TEAMS_PLAYERS).map((club) => (
                                <PickerItemIOS
                                    key={club}
                                    value={club}
                                    label={CLUBS_TEAMS_PLAYERS[club].name}
                                />
                            ))}
                        </PickerIOS>
                        <Text>Please choose a player from {selectedClub.name}:</Text>
                        <PickerIOS
                            selectedValue={this.state.playerIndex}
                            key={this.state.club}
                            onValueChange={(playerIndex) => this.setState({ playerIndex })}>
                            {CLUBS_TEAMS_PLAYERS[this.state.club].models.map((playerName,
                                playerIndex) => (
                                    <PickerItemIOS
                                        key={this.state.club + '_' + playerIndex}
                                        value={playerIndex}
                                        label={playerName}
                                    />
                                ))}
                        </PickerIOS>
                    </View>
                </View>
            </View >
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
        flex: 1,
    },
    mainSpace: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    teamSection: {
        flexDirection: 'column',

    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    }
});


// Make the component available to other parts of the app
export default NewMatch;



