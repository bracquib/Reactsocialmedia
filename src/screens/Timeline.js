import { Dimensions,ScrollView,StyleSheet,TouchableOpacity,View, Text, Image, useWindowDimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS, SIZES, images } from '../constants'
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { posts } from '../constants/data'
import Icon from 'react-native-vector-icons/Ionicons';
import chats from '../constants/chat.json'
const PostsRoute = () => (
    <View
        style={{
            flex: 1,
        }}
    >
        <FlatList
            data={posts}
            numColumns={3}
            renderItem={({ item, index }) => (
                <View
                    style={{
                        flex: 1,
                        aspectRatio: 1,
                        margin: 3,
                    }}
                >
                    <Image
                        key={index}
                        source={item.image}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 12,
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 4,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginHorizontal: 6,
                            }}
                        >
                            <Ionicons
                                name="eye"
                                size={14}
                                color={COLORS.white}
                            />
                            <Text style={{ color: COLORS.white }}>
                                {item.numOfViews}
                            </Text>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Ionicons
                                name="heart-outline"
                                size={14}
                                color={COLORS.white}
                            />
                            <Text style={{ color: COLORS.white }}>
                                {item.numOfViews}
                            </Text>
                        </View>
                    </View>
                </View>
            )}
        />
    </View>
)

const GroupRoute = () => (
    <View style={{ flex: 1, backfaceColor: 'blue' }}></View>
)

const MessageRoute = () => (
       
        <ScrollView>
          <View>
            <View style={styles.row}>
              <ScrollView horizontal>
                <TouchableOpacity>
                  <AntDesign
                    name="pluscircleo"
                    size={30}
                    color={'#a5a195'}
                    style={{
                      backgroundColor: '#f5efe3',
                      padding: 22,
                      borderRadius: 50,
                      margin: 5,
                      marginLeft: 10,
                    }}
                  />
                </TouchableOpacity>
                <FlatList
                  data={chats.chat}
                  horizontal
                  scrollEnabled={false}
                  renderItem={({item}) => (
                    <Image
                      source={{uri: item.avatarurl}}
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 50,
                        margin: 5,
                        borderColor: 'grey',
                        borderWidth: 2,
                      }}
                    />
                  )}
                />
              </ScrollView>
            </View>
            <Text >Online</Text>
            <FlatList
              data={chats.chat.filter(item => item.isonline === true)}
              contentContainerStyle={{paddingBottom: 10, marginTop: 10}}
              scrollEnabled={false}
              renderItem={({item}) => (
                <>
                  <TouchableOpacity style={styles.chatItem}>
                    <Image
                      source={{uri: item.avatarurl}}
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: 50,
                        margin: 5,
                        borderColor: 'grey',
                        borderWidth: 2,
                      }}
                    />
                    <View
                      style={{
                        marginLeft: 10,
                        width: '75%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View>
                        <Text
                          style={[
                        
                            {color: '#000000', fontWeight: 'bold', marginTop: 10},
                          ]}>
                          {item.name}
                        </Text>
                        <Text >{item.lastmsg}</Text>
                      </View>
                      <View>
                        {item.unreadmsgs >= 1 && item.unreadmsgs <= 9 ? (
                          <Text
                            style={[
                            
                              {
                                alignSelf: 'flex-end',
                                backgroundColor: 'tomato',
                                borderRadius: 50,
                                paddingHorizontal: 5,
                                width: 20,
                                color: 'white',
                              },
                            ]}>
                            {item.unreadmsgs}
                          </Text>
                        ) : null}
                        {item.unreadmsgs > 9 ? (
                          <Text
                            style={[
                              {
                                alignSelf: 'flex-end',
                                backgroundColor: 'tomato',
                                borderRadius: 50,
                                paddingHorizontal: 5,
                                width: 30,
                                color: 'white',
                              },
                            ]}>
                            9+
                          </Text>
                        ) : null}
                        {item.lastonline === 'RN' ? (
                          <Text
                            style={{
                              backgroundColor: '#1ed760',
                              width: 20,
                              height: 20,
                              marginTop: 10,
                              borderRadius: 50,
                            }}>
                            .
                          </Text>
                        ) : (
                          <Text style={[ {marginTop: 10}]}>
                            {item.lastonline}
                          </Text>
                        )}
                      </View>
                    </View>
                  </TouchableOpacity>
                </>
              )}
            />
            <Text >Offline</Text>
            <FlatList
              data={chats.chat.filter(item => item.isonline === false)}
              contentContainerStyle={{paddingBottom: 250, marginTop: 10}}
              scrollEnabled={false}
              renderItem={({item}) => (
                <>
                  <TouchableOpacity style={styles.chatItem}>
                    <Image
                      source={{uri: item.avatarurl}}
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: 50,
                        margin: 5,
                        borderColor: 'grey',
                        borderWidth: 2,
                      }}
                    />
                    <View
                      style={{
                        marginLeft: 10,
                        width: '75%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View>
                        <Text
                          style={[
                            {color: '#000000', fontWeight: 'bold', marginTop: 10},
                          ]}>
                          {item.name}
                        </Text>
                        <Text>{item.lastmsg}</Text>
                      </View>
                      <View>
                        {item.unreadmsgs >= 1 && item.unreadmsgs <= 9 ? (
                          <Text
                            style={[
                              {
                                alignSelf: 'flex-end',
                                backgroundColor: 'tomato',
                                borderRadius: 50,
                                paddingHorizontal: 5,
                                width: 20,
                                color: 'white',
                              },
                            ]}>
                            {item.unreadmsgs}
                          </Text>
                        ) : null}
                        {item.unreadmsgs > 9 ? (
                          <Text
                            style={[
                              {
                                alignSelf: 'flex-end',
                                backgroundColor: 'tomato',
                                borderRadius: 50,
                                paddingHorizontal: 5,
                                width: 30,
                                color: 'white',
                              },
                            ]}>
                            9+
                          </Text>
                        ) : null}
                        {item.lastonline === 'RN' ? (
                          <Text
                            style={{
                              backgroundColor: '#1ed760',
                              width: 20,
                              height: 20,
                              marginTop: 10,
                              borderRadius: 50,
                            }}>
                            .
                          </Text>
                        ) : (
                          <Text style={[{marginTop: 10}]}>
                            {item.lastonline}
                          </Text>
                        )}
                      </View>
                    </View>
                  </TouchableOpacity>
                </>
              )}
            />
          </View>
        </ScrollView>
    )

  
  


const renderScene = SceneMap({
    first: PostsRoute,
    second: GroupRoute,
    third: MessageRoute,
})
const Profile = () => {
    function renderProfileCard() {
        return (
            <View
                style={{
                    width: SIZES.width - 44,
                    height: 260,
                    marginHorizontal: 22,
                    paddingHorizontal: 6,
                    paddingVertical: 18,
                    borderColor: '#F7F7F7',
                    borderWidth: 1,
                    backgroundColor: '#FFFFFF',
                    shadowColor: '#18274B',
                    shadowOffset: {
                        width: 0,
                        height: 4.5,
                    },
                    shadowOpacity: 0.12,
                    shadowRadius: 0.65,
                    elevation: 2,
                    borderRadius: 35,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    {/* Profile image container */}
                    <View>
                        <Image
                            source={images.user1}
                            resizeMode="contain"
                            style={{
                                height: 150,
                                width: 96,
                                borderRadius: 80,
                                borderWidth: 4,
                                borderColor: '#ffffff',
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'column',
                            flex: 1,
                            marginLeft: 6,
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <View style={{ flexDirection: 'column' }}>
                                <Text
                                    style={{
                                        ...FONTS.body3,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    ben
                                </Text>
                                <Text style={{ ...FONTS.body3 }}>
                                    Intern
                                </Text>
                            </View>

                            <Feather
                                name="edit"
                                size={24}
                                color={COLORS.black}
                            />
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: '#FFF9E8',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    padding: 8,
                                }}
                            >
                                <Text style={{ ...FONTS.body4 }}>12</Text>
                                <Text style={{ ...FONTS.body4 }}>Posts</Text>
                            </View>

                            <View
                                style={{
                                    backgroundColor: '#FFF9E8',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    padding: 8,
                                }}
                            >
                                <Text style={{ ...FONTS.body4 }}>24</Text>
                                <Text style={{ ...FONTS.body4 }}>
                                    Followers
                                </Text>
                            </View>

                            <View
                                style={{
                                    backgroundColor: '#FFF9E8',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    padding: 8,
                                }}
                            >
                                <Text style={{ ...FONTS.body4 }}>7</Text>
                                <Text style={{ ...FONTS.body4 }}>
                                    Followings
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: 'column',
                        marginVertical: 12,
                    }}
                >
                    <Text style={{ ...FONTS.body4 }}>Engineer</Text>
                    
                </View>
            </View>
        )
    }

    const layout = useWindowDimensions()
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: 'first', title: 'Posts', icon: 'square-outline' },
        { key: 'second', title: 'Group', icon: 'globe' },
        { key: 'third', title: 'Message', icon: 'chatbox-outline' },
    ])

    const renderTabBar = (props) => (
        <TabBar
            {...props}
            indicatorStyle={{
                backgroundColor: COLORS.primary,
            }}
            renderIcon={({ route, focused, color }) => (
                <Ionicons
                    name={route.icon}
                    size={20}
                    color={focused ? COLORS.black : 'gray'}
                />
            )}
            style={{
                backgroundColor: '#fff',
                height: 64,
            }}
            renderLabel={({ focused, route }) => (
                <Text style={[{ color: focused ? COLORS.black : 'gray' }]}>
                    {route.title}
                </Text>
            )}
        />
    )

    function renderButtions() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 22,
                    marginVertical: 12,
                }}
            >
                <LinearGradient
                    colors={['#F68464', '#EEA849']}
                    style={{
                        height: 40,
                        width: 150,
                        borderRadius: SIZES.padding * 3,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <AntDesign name="adduser" size={24} color={COLORS.white} />
                    <Text
                        style={{
                            ...FONTS.body4,
                            marginLeft: 12,
                            color: COLORS.white,
                        }}
                    >
                        Follow
                    </Text>
                </LinearGradient>

                <LinearGradient
                    colors={['#F68464', '#EEA849']}
                    style={{
                        height: 40,
                        width: 150,
                        borderRadius: SIZES.padding * 3,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <AntDesign name="message1" size={24} color={COLORS.white} />
                    <Text
                        style={{
                            ...FONTS.body4,
                            marginLeft: 12,
                            color: COLORS.white,
                        }}
                    >
                        Message
                    </Text>
                </LinearGradient>
            </View>
        )
    }
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#fff',
            }}
        >
            <View style={{ flex: 1 }}>
                {renderProfileCard()}
                {renderButtions()}
                <View
                    style={{
                        flex: 1,
                        marginHorizontal: 22,
                    }}
                >
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        onIndexChange={setIndex}
                        initialLayout={{ width: layout.width }}
                        renderTabBar={renderTabBar}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Profile


const styles = StyleSheet.create({

    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      justifyContent: 'space-between',
    },
  
    chatItem: {
      flexDirection: 'row',
    },
  });