import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#323232',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    image: {
        width: 30,
        height: 30,
        margin: 10,
    },
    navText: {
        color: '#FFFFFF',
        marginHorizontal: 15,
    },
    navWrapper: {
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    iconWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});

export default styles;
