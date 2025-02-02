
// чи два рядки віддалені один від одного на одне редагування (або на нуль):

// Спочатку перевіряємо, чи різниця в довжині перевищує 1 (якщо це неможливо зробити за одне редагування)
// Переконайтеся, що stringOne завжди є коротшим рядком для узгодженості
// Порівнюємо символи, поки не знайдемо невідповідність

// Коли ми знаходимо невідповідність:
// Якщо рядки мають однакову довжину: перевірте, чи збігаються решта рядків (операція заміни)
// Якщо рядки мають різну довжину: перевірте, чи залишок коротшого рядка відповідає решті довшого рядка після пропуску одного символу (операція вставлення/видалення)


// Часова складність: O(n), де n — довжина коротшого рядка. 
// Просторова складність: O(1), оскільки ми використовуємо лише покажчики та фрагменти рядків.

export function oneEdit(stringOne: string, stringTwo: string): boolean {
    // Get lengths of both strings
    const lengthOne = stringOne.length;
    const lengthTwo = stringTwo.length;
    
    // If lengths differ by more than 1, it's impossible to be one edit away
    if (Math.abs(lengthOne - lengthTwo) > 1) {
      return false;
    }
    
    // Make stringOne the shorter string
    if (lengthOne > lengthTwo) {
      return oneEdit(stringTwo, stringOne);
    }
    
    // Loop through both strings
    for (let i = 0; i < lengthOne; i++) {
      if (stringOne[i] !== stringTwo[i]) {
        // If lengths are equal, try replacing current character
        if (lengthOne === lengthTwo) {
          return stringOne.slice(i + 1) === stringTwo.slice(i + 1);
        }
        // If lengths are different, try removing character from longer string
        return stringOne.slice(i) === stringTwo.slice(i + 1);
      }
    }
    
    // If we get here, either strings are identical or differ only by one extra char
    return true;
  }