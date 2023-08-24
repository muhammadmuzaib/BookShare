import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text_main: {
        fontFamily: 'sans-serif', 
        fontWeight: 'bold',
        margin: 10,
        color: '#FFFFFF'
    },
    footer_top: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer_bottom: {
        alignItems: 'center',
        paddingBottom: 10,
    },
    container: {
        backgroundColor: '#323232',
        justifyContent: 'space-between',
    },
    footer_text: {
        color: '#FFFFFF',
        textDecorationLine: 'underline',
        marginVertical: 5
    }
});

export default styles;