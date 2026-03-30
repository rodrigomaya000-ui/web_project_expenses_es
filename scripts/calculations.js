/* 2. Crear variables iniciales */
let budgetValue = 0;
let totalExpensesValue = 0;

/* 3. Crear un array de gastos iniciales */
const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

/* 4. Calcular los gastos totales */
for (let expense of expenseEntries) {
  totalExpensesValue += expense[1];
}
console.log("Valor total de los gastos: " + totalExpensesValue);

/* 5. Calcular el gasto medio */
function calculateAverageExpense() {
  if (expenseEntries.length > 0) {
    return totalExpensesValue / expenseEntries.length;
  } else {
    return 0;
  }
}

/* 6. Calcular el saldo */
function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

/* 7. Cambiar el color del saldo y asigna el presupuesto */
let balanceColor = "green";
function updateBalanceColor() {
  const balance = calculateBalance();
  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

/* 8. Calcula las estadísticas por categoría */
function calculateCategoryExpenses(categoryExpense) {
  let expensePerCat = 0;
  for (let expense of expenseEntries) {
    if (categoryExpense === expense[0]) {
      expensePerCat += expense[1];
    }
  }
  return expensePerCat;
}

/* 9. Calcular la categoría de gastos más grande */
function calculateLargestCategory() {
  const uniqueExpenseCategories = [...new Set(expenseEntries.map((e) => e[0]))]; // .map para referenciar, Set eliminar duplicados y ...(spread) conviete en array nuevamente
  const categoriesData = [];
  let largestExpense = 0;
  let largestCategory = uniqueExpenseCategories[0];

  for (let i = 0; i < uniqueExpenseCategories.length; i++) {
    const catTotal = calculateCategoryExpenses(uniqueExpenseCategories[i]);
    categoriesData.push([uniqueExpenseCategories[i], catTotal]);
    if (catTotal > largestExpense) {
      largestExpense = catTotal;
      largestCategory = uniqueExpenseCategories[i];
    }
  }
  return largestCategory;
}

/* 10. Añadir nuevos gastos */
function addExpenseEntry(expenseEntry) {
  totalExpensesValue += expenseEntry[1];
  expenseEntries.push(expenseEntry);
}
