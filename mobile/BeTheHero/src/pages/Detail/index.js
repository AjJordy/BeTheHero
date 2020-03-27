import React from 'react';
import Feather from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Detail(){
  const route = useRoute();
  const navigation = useNavigation();
  const message = `Olá ${incident.name}, estou entrando e contato sobre ${incident.title} e gostaria de contribuir com ${incident.value}`;

  const incident = route.params.incident;

  function navigationBack(){
    navigation.goBack();
  }

  function sendMail(){
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body:message,
    });
  }

  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigationBack}>
          <Feather name="arrow-left" size={28} color="#E82041"/>
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop:0 }]}>ONG</Text>
        <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>        

        <Text style={styles.incidentProperty}>Caso</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>Valor</Text>
        <Text style={styles.incidentValue}>
        {
          Intl.NumberFormat('pt-BR', { 
            style: 'currency', 
            currency: 'BRL'
          }).format(incident.value)
        }
        </Text>
      </View>

      <View style={styles.contactBox}>
        <View style={styles.heroTitle}>Salve o dia!</View>
        <View style={styles.heroTitle}>Seja o heroi desse caso.</View>

        <View style={styles.heroDescription}>Entre em contato.</View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actions} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actions} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}