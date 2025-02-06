class CafeteriaSystem:
    def __init__(self):
        self.menu = {
            'Coffee': {
                'Espresso': 2.5,
                'Americano': 3.0,
                'Latte': 4.0
            },
            'Juices': {
                'Orange Juice': 3.0,
                'Apple Juice': 2.8,
                'Mango Juice': 3.5
            },
            'Sodas': {
                'Coca-Cola': 1.5,
                'Pepsi': 1.5,
                'Sprite': 1.5
            }
        }
        self.orders = {}

    def display_menu(self):
        print("\nMenu:")
        for category, items in self.menu.items():
            print(f"\n{category}:")
            for item, price in items.items():
                print(f"  {item}: ${price:.2f}")

    def take_order(self, table_number):
        print(f"\nTaking order for Table {table_number}")
        if table_number not in self.orders:
            self.orders[table_number] = {}

        while True:
            self.display_menu()
            category = input("Enter category (Coffee, Juices, Sodas or 'done' to finish): ").strip()
            if category.lower() == 'done':
                break

            if category not in self.menu:
                print("Invalid category. Please try again.")
                continue

            item = input(f"Enter item from {category}: ").strip()
            if item not in self.menu[category]:
                print("Invalid item. Please try again.")
                continue

            quantity = int(input(f"Enter quantity of {item}: "))
            if item in self.orders[table_number]:
                self.orders[table_number][item] += quantity
            else:
                self.orders[table_number][item] = quantity

    def calculate_total(self, table_number):
        if table_number not in self.orders:
            print(f"\nNo orders found for Table {table_number}.")
            return

        total = 0
        print(f"\nBill for Table {table_number}:")
        for item, quantity in self.orders[table_number].items():
            for category, items in self.menu.items():
                if item in items:
                    price = items[item] * quantity
                    print(f"  {item} x{quantity}: ${price:.2f}")
                    total += price
        print(f"Total: ${total:.2f}")

    def run(self):
        while True:
            print("\n1. Display Menu")
            print("2. Take Order")
            print("3. Calculate Total")
            print("4. Exit")
            choice = input("Enter your choice: ").strip()

            if choice == '1':
                self.display_menu()
            elif choice == '2':
                table_number = input("Enter table number: ").strip()
                self.take_order(table_number)
            elif choice == '3':
                table_number = input("Enter table number: ").strip()
                self.calculate_total(table_number)
            elif choice == '4':
                print("Exiting the system. Goodbye!")
                break
            else:
                print("Invalid choice. Please try again.")

if __name__ == "__main__":
    cafeteria_system = CafeteriaSystem()
    cafeteria_system.run()
