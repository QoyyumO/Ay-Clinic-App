import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Tabs, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function Layout() {
  const pathname = usePathname();
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.tabName}>{pathname === '/' ? 'Biodata' : 'Clinical Records'}</Text>
      </View>
      <Tabs
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          tabBarInactiveTintColor: '#8E8E93',
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index" // This should match the file name index.tsx
          options={{
            title: 'Biodata',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="explore" // This should match the file name explore.tsx
          options={{
            title: 'Records',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'medkit' : 'medkit-outline'}
                color={color}
                size={24}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9C4',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#FFEB3B',
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  tabName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
});
