import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Image,
    TextInput,
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS, SIZES, images } from '../constants'
import {
    MaterialIcons,
    Ionicons,
    Feather,
    Foundation,
    MaterialCommunityIcons,
} from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { friends } from '../constants/data'


const Members = () => {
  /*const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch members from an API or data source
    const fetchMembers = async () => {
      try {
        const response = await fetch('https://api.example.com/members');
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };

    fetchMembers();
  }, []);
*/
return (
    <FlatList
      data={friends}
      keyExtractor={(item) => item.id.toString()}
      numColumns={4} // Affiche 4 utilisateurs par ligne
      contentContainerStyle={{ paddingBottom: 20 }} // Espace en bas
      renderItem={({ item, index }) => (
        <View
          key={item.id}
          style={{
            flexDirection: 'column',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20, // Espace entre les lignes
          }}
        >
          <TouchableOpacity
            onPress={() => console.log('Pressed')}
            style={{
              paddingVertical: 4,
              marginRight: 10,
            }}
          >
            {/* Votre code pour les icônes premium et le statut en ligne */}
            {/* ... */}

            <Image
            source={item.image ? item.image : { uri: item.avatarurl }}              resizeMode="contain"
              style={{
                width: 96,
                height: 150,
                borderRadius: 80,
                borderWidth: 4,
                borderColor: '#fff',
              }}
            />
          </TouchableOpacity>
          <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
        </View>
      )}
    />
  );
    };


export default Members;
