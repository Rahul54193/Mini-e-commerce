import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
      },
      headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      closeButton: {
        fontSize: 24,
        paddingHorizontal: 8,
      },
      itemsContainer: {
        flex: 1,
      },
      emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
      },
      emptyText: {
        fontSize: 18,
        color: '#666',
      },
      footer: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
      },
      totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
      },
      totalLabel: {
        fontSize: 18,
        fontWeight: '500',
      },
      totalAmount: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      checkoutButton: {
        backgroundColor: '#007bff',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 8,
      },
      checkoutButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
      clearButton: {
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#dc3545',
      },
      clearButtonText: {
        color: '#dc3545',
        fontSize: 16,
      },
    });