import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        backgroundColor: '#fff',
      },
      image: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 16,
        borderRadius: 10,
      },
      title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 8,
      },
      category: {
        fontSize: 14,
        color: '#888',
        fontStyle: 'italic',
        marginBottom: 8,
      },
      price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4563e8',
        marginBottom: 8,
      },
      rating: {
        fontSize: 16,
        color: '#f4a261',
        marginBottom: 8,
      },
      description: {
        fontSize: 16,
        color: '#444',
        marginTop: 10,
        marginBottom: 20,
        lineHeight: 22,
      },
      button: {
        backgroundColor: '#4563e8',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
      },
  });
  