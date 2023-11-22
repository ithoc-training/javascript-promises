# Exercise Preparing a Complete Breakfast Using Promises

## Goal
Create a Node.js application to simulate the process of preparing a complete breakfast. 
Utilize Promises to manage various asynchronous tasks like toasting bread, boiling water, 
brewing coffee, putting butter on bread, putting jam on toast, and preparing the table.

## Requirements
Following order of preparation must be followed:    
- Jam can be put on toast only after the bread is toasted and butter is put on it.
- Butter can be put on bread only after the bread is toasted.
- Coffee can be brewed only after the water is boiled.
- Water can be boiled and bread can be toasted simultaneously.
- The table can be prepared only after the coffee is brewed and the jam is put on the toast.

## Tasks
1. Setup
   - Initialize a Node.js project.
   - Create a JavaScript file, e.g., breakfastPreparation.js.
2. Asynchronous Task Functions: Implement the following functions, each returning a Promise:
   - toastBread(duration): Resolves when bread is toasted.
   - boilWater(duration): Resolves when water is boiled.
   - brewCoffee(duration): Resolves when coffee is brewed.
   - putButterOnBread(duration): Resolves when butter is put on bread.
   - putJamOnToast(duration): Resolves after putting jam on toast.
   - prepareTheTable(duration): Resolves when the table is set.
3. Managing Asynchronous Flow
   Use single promise calls follow the required order.
   Handle both success and error scenarios for each task.
4. Final Output
   - Log a message once all tasks are successfully completed, e.g., "Breakfast is ready!"
   - If any task fails, catch the error and log an appropriate message.

### Toasting bread
Simulates the process of toasting bread. It returns a Promise that resolves if the toasting duration
is less than or equal to 3 seconds (3000 milliseconds), and rejects if the duration is longer
(indicating the toast has burned).

### Boiling water
Simulates boiling water for coffee. It returns a Promise that resolves if the boiling duration
is less than or equal to 5 seconds (5000 milliseconds), and rejects if it's longer
(indicating the water has evaporated).

### Brewing coffee
This function simulates brewing coffee. It returns a Promise that resolves if the brewing duration
is less than or equal to 4 seconds (4000 milliseconds), indicating perfectly brewed coffee.
If the duration is longer, the Promise is rejected, indicating that the coffee over-brewed.

### Putting butter on bread
This function simulates putting butter on bread. It returns a Promise that resolves if the duration
is less than or equal to 2 seconds (2000 milliseconds), indicating that the butter was put on the bread.
If the duration is longer, the Promise is rejected, indicating that the butter melted.

### Putting jam on toast
This function simulates putting jam on toast. It returns a Promise that resolves if the duration
is less than or equal to 1 second (1000 milliseconds), indicating that the jam was put on the toast.
If the duration is longer, the Promise is rejected, indicating that the jam spilled.

### Preparing the table
This function simulates preparing the table. It returns a Promise that resolves if the duration
is less than or equal to 6 seconds (6000 milliseconds), indicating that the table was set properly.
If the duration is longer, the Promise is rejected, indicating that the table was not set properly.

### Preparing breakfast
This function simulates preparing breakfast. It calls the functions defined above to prepare the
different components of breakfast. It returns a Promise that resolves if all the components are
prepared successfully, and rejects if any of the components fail.
