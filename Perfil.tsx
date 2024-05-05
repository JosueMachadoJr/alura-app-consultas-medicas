import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'
import { Titulo } from '../componentes/Titulo'

export default function Perfil(){
  return(
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Titulo color="blue.500">Meu perfil </Titulo>
        <Avatar size="xl" source={{ uri: "https://github.com/JosueMachadoJr.png" }} mt={5} />
       
        <Titulo color="blue.500">Informações pessoais</Titulo>
        <Titulo fontSize="lg" mb={1}>Josué Machado</Titulo>
        <Text>25/04/1996</Text>
        <Text>Goiás</Text>

        <Divider mt={5} />

        <Titulo color="blue.500" mb={1}>Histórico médico</Titulo>
        <Text>Bronquite</Text>
        <Text>Enxaqueca</Text>
      </VStack>
    </ScrollView>
  )
}