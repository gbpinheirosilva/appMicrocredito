import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native'
import { Image } from 'react-native';
// import { auth } from '../firebase'

const HomeScreen = () => {
    const navigation = useNavigation()

    const _onPressButton1 = () => {
        navigation.navigate('Microcreditos');
        
        // Alert.alert(
        //             'O que são microcréditos?',
        //             "Microcréditos são empréstimos oferecidos pelo Banco com juros baixos, com o obejtivo de incentivar o progresso local, nos aspectos econômicos e sociais.\n\nMicrocrédito de produção: crédito de R$800,00 até R$5000,00 para microempreendedores voltado para compra de materiais necessários para produção.\n\nMicrocrédito de construção e reforma: Crédito de R$800,00 até R$5000,00 voltado para quem quer reformar o empreendimento ou a casa.\n\nMicrocrédito de eventos culturais: Microcréditos de R$800,00 até R$5000,00 voltado para eventos culturais realizados dentro da comunidade, como  ajuda para projetos de artistas locais, por exemplo.",
        //             [{ text: "Entendi" }]
        //         );
        //Aqui deve ser redirecionado para mais uma pagina MicrocreditosScreen.js com as excplicações
    };
    
    const _onPressButton2 = () => {
        Linking.openURL('https://forms.gle/sCyCungsdS3VNmZg9');
    };

    const _onPressButton3 = () => {
        Linking.openURL('https://bancopreventorio.org.br/');
    };

    const _onPressButton4 = () => {
        Linking.openURL('https://wa.me/5521982373169');
    };

    return (
        <View style={styles.container}>

            <Image
                source={require('../assets/LogoBP.png')}
                style={styles.logo} />

            <View style={styles.content}>
                <TouchableOpacity
                    onPress={_onPressButton1}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonText}>Linhas de Microcrédito</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={_onPressButton2}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonText}>Pedir Microcrédito</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={_onPressButton3}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonText}>Sobre o Banco Preventório</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={_onPressButton4}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonText}>Fale conosco pelo WhatsApp</Text>
                </TouchableOpacity>

            </View>
            <View>
                <Image
                    source={require('../assets/Parceiros.png')}
                    style={styles.parceiros}
                />
                <Text style={styles.rodapeTitulo}>CONTATO</Text>
                <Text style={styles.rodape}>Endereço: <Text
                    style={styles.hyperlinkStyle}
                    onPress={() => {
                        Linking.openURL('https://goo.gl/maps/4AdTKMwGvCvbbKJA7');
                    }}>R. Quatorze de Abril, 21, Charitas, Niterói, RJ, 24370-650</Text>{'\n'}Telefone: 21 995109352{'\n'}E-mail: comite@bancopreventorio.org.br</Text>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3a7e52',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    button: {
        backgroundColor: '#ec5829',
        width: '60%',
        padding: 15,
        paddingHorizontal: 5,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
        width: 250,
        
        
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        alignItems: 'center',
        // overflow: hidden,
    },


    buttonOutline: {
        backgroundColor: '#ec5829',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    logo: {
        height: 300,
        width: 250,
        marginBottom: -70,
        marginTop: -50,
    },
    parceiros: {
        marginTop: 25,
        backgroundColor: '#ffff',
        height: 80,
        resizeMode: 'contain',
    },
    rodape: {
        fontSize: 10,
        textAlign: 'center',
        backgroundColor: '#ffff',
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 10,
        padding: 40,
    },
    rodapeTitulo: {
        paddingLeft: 120,
        paddingRight: 120,
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#ffff',
    },
    hyperlinkStyle: {
        textDecorationLine: 'underline'
    }
})