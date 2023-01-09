import React, { Component } from 'react';
import { Button, StyleSheet, View, Linking, Image, Text, TouchableHighlight, Alert } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton1() {
    Alert.alert(
      'O que são microcréditos?',
      "Microcréditos são empréstimos oferecidos pelo Banco com juros baixos, com o obejtivo de incentivar o progresso local, nos aspectos econômicos e sociais.\n\nMicrocrédito de produção: crédito de R$800,00 até R$5000,00 para microempreendedores voltado para compra de materiais necessários para produção.\n\nMicrocrédito de construção e reforma: Crédito de R$800,00 até R$5000,00 voltado para quem quer reformar o empreendimento ou a casa.\n\nMicrocrédito de eventos culturais: Microcréditos de R$800,00 até R$5000,00 voltado para eventos culturais realizados dentro da comunidade, como  ajuda para projetos de artistas locais, por exemplo.",
      [{text: "Entendi"}]
      );
  }
  _onPressButton2() {
    Linking.openURL('https://bancopreventorio.org.br/');  }

  _onPressButton3() {
    Linking.openURL('https://bancopreventorio.org.br/');
  }
  _onPressButton4() {
    Linking.openURL('https://wa.me/5521982373169');
  }

  render() {
    return ( 
      <View style={styles.container}>
        <Image
          source={require('./assets/LogoBP.png')}
          style={styles.logo}
        />
        <View style={styles.botao}>
          <Button
            onPress={this._onPressButton1}
            title="Linhas de Microcrédito"
            color="#ec5829"
          />
        </View>
        <View style={styles.botao}>
          <Button
            onPress={this._onPressButton2}
            title="     Pedir Microcrédito    "
            color="#ec5829"
          />
        </View>
        <View style={styles.botao_sobreBP}>
          <Button
            onPress={this._onPressButton3}
            title="Sobre o Banco do Preventório"
            color="#ec5829"
          />
        </View>
        <View style={styles.botao}>
          <Button
            onPress={this._onPressButton4}
            title="Fale Conosco pelo WhatsApp"
            color="#ec5829"
          />
        </View>
        <View>
        <Image
          source={require('./assets/Parceiros.png')}
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
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a7e52',
    alignItems: 'center',
  },
  botao: {
    marginTop:20,
    paddingTop: 15,
    paddingBottom:15 ,
    paddingLeft:28,
    paddingRight: 28,
    marginLeft:40,
    marginRight:40,
    backgroundColor:'#ec5829',
    borderRadius:10,
  },
  botao_sobreBP: {
    marginTop: 20,
    paddingTop: 15,
    paddingBottom:15 ,
    marginLeft:40,
    marginRight:40,
    backgroundColor:'#ec5829',
    borderRadius:10,
  },
  logo: {
    height: 300,
    width: 250,
    marginBottom: 30
  },
  parceiros: {
    marginTop:160,
    backgroundColor: '#ffff',
    height: 80,
    resizeMode:'contain',
  },
  rodape: {
   fontSize: 10,
   textAlign: 'center',
   backgroundColor: '#ffff',
   paddingLeft: 50,
   paddingRight: 50,
   paddingBottom:10

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
});