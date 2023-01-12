import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const MicrocreditosScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentBox}>
          <Text style={styles.textHeader}>O que são Microcréditos?</Text>
          <Text style={styles.textMicrocredito}>Microcréditos são empréstimos oferecidos pelo Banco com juros baixos, com o obejtivo de incentivar o progresso local, nos aspectos econômicos e sociais.</Text>

        </View>
        <View style={styles.contentBox}>
          <Text style={styles.textHeader}>Microcrédito de produção:</Text>

          <Text style={styles.textMicrocredito}>Crédito de R$800,00 até R$5000,00 para microempreendedores voltado para compra de materiais necessários para produção.</Text>

        </View>
        <View style={styles.contentBox}>
          <Text style={styles.textHeader}>Microcrédito de eventos culturais:</Text>

          <Text style={styles.textMicrocredito}>Microcréditos de R$800,00 até R$5000,00 voltado para eventos culturais realizados dentro da comunidade, como  ajuda para projetos de artistas locais, por exemplo</Text>
        </View>
        <View style={styles.contentBox}>
          <Text style={styles.textHeader}>Microcrédito de construção e reforma:</Text>

          <Text style={styles.textMicrocredito}>Crédito de R$800,00 até R$5000,00 voltado para quem quer reformar o empreendimento ou a casa.</Text>

        </View>

      </View>
    </View>
  )
}

export default MicrocreditosScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#3a7e52',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 15,
    //backgroundColor: 'white', 
    alignItems: 'center',
    alignSelf: 'center',
    padding: 15,
  },
  contentBox: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 10,
    borderColor: '#ec5829',
    width: 350,
    borderWidth: 2
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  textMicrocredito: {
    fontSize: 15,
    textAlign: 'justify',

  }
})