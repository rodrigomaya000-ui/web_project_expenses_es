# 💸 Expense Manager

Aplicación para el registro y análisis de gastos personales por categoría, con cálculo de presupuesto, saldo disponible y estadísticas de consumo.

🔗 [Ver demo en vivo](https://rodrigomaya000-ui.github.io/web_project_expenses_es/)

---

## 📋 Descripción

Expense Manager permite al usuario llevar un control de sus gastos organizados por categoría. La aplicación calcula automáticamente el total de gastos, el saldo restante respecto al presupuesto, el gasto promedio y la categoría con mayor consumo. El color del saldo cambia dinámicamente según el estado financiero del usuario.

---

## 🚀 Instalación y uso

1. Clona el repositorio:

   ```bash
   git clone https://github.com/rodrigomaya000-ui/web_project_expenses_es.git
   ```

2. Abre el archivo `index.html` en tu navegador.

> No requiere instalación de dependencias ni servidor local.

---

## ⚙️ Funciones disponibles

| Función                               | Descripción                                                                 |
| ------------------------------------- | --------------------------------------------------------------------------- |
| `calculateAverageExpense()`           | Calcula el gasto promedio dividiendo el total entre el número de entradas   |
| `calculateBalance()`                  | Devuelve el saldo restante (presupuesto − gastos totales)                   |
| `updateBalanceColor()`                | Actualiza el color del saldo: verde, naranja o rojo según el nivel de gasto |
| `calculateCategoryExpenses(category)` | Suma todos los gastos de una categoría específica                           |
| `calculateLargestCategory()`          | Identifica la categoría con el mayor gasto acumulado                        |
| `addExpenseEntry(entry)`              | Agrega un nuevo gasto al registro y actualiza el total                      |

---

## 👤 Autor

**Rodrigo Maya**
Lógica de cálculos en JavaScript

🔗 [GitHub Pages](https://rodrigomaya000-ui.github.io/web_project_expenses_es/)

---

_Proyecto desarrollado como parte de un bootcamp de desarrollo web._
