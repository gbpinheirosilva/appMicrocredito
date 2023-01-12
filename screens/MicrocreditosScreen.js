import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MicrocreditosScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.content}>   
            <Text>Microcréditos são empréstimos oferecidos pelo Banco com juros baixos, com o obejtivo de incentivar o progresso local, nos aspectos econômicos e sociais.\n\nMicrocrédito de produção: crédito de R$800,00 até R$5000,00 para microempreendedores voltado para compra de materiais necessários para produção.\n\nMicrocrédito de construção e reforma: Crédito de R$800,00 até R$5000,00 voltado para quem quer reformar o empreendimento ou a casa.\n\nMicrocrédito de eventos culturais: Microcréditos de R$800,00 até R$5000,00 voltado para eventos culturais realizados dentro da comunidade, como  ajuda para projetos de artistas locais, por exemplo.</Text>
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
        }, 
})