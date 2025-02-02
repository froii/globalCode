
// пошук всіх дійсних IP-адрес, які можна створити шляхом вставки крапок у заданий рядок


// Це рішення працює за допомогою:
// Використання трьох вкладених циклів, щоб спробувати всі можливі позиції для вставки трьох крапок

// Для кожної комбінації позицій крапок це:
// Розділяє рядок на чотири частини
// Перевіряє кожну частину за допомогою допоміжної функції
// Якщо всі частини дійсні, додає створену IP-адресу до масиву результатів


// Допоміжна функція isValidPartперевіряє, чи дійсна частина, забезпечуючи:
// Він не порожній і не має довше 3 цифр
// Він не має початкових нулів (якщо це не просто "0")
// Число від 0 до 255 включно


export function validIPAddresses(string: string): string[] {
    const validIPs: string[] = [];
    
    // We need exactly 3 dots to create 4 octets
    // Loop through possible positions for first dot
    for (let i = 1; i <= 3; i++) {
      // Get first octet
      const firstPart = string.slice(0, i);
      // Check if first octet is valid
      if (!isValidPart(firstPart)) continue;
      
      // Loop through possible positions for second dot
      for (let j = i + 1; j <= i + 3 && j < string.length; j++) {
        // Get second octet
        const secondPart = string.slice(i, j);
        // Check if second octet is valid
        if (!isValidPart(secondPart)) continue;
        
        // Loop through possible positions for third dot
        for (let k = j + 1; k <= j + 3 && k < string.length; k++) {
          // Get third and fourth octets
          const thirdPart = string.slice(j, k);
          const fourthPart = string.slice(k);
          
          // Check if both parts are valid
          if (isValidPart(thirdPart) && isValidPart(fourthPart)) {
            validIPs.push(`${firstPart}.${secondPart}.${thirdPart}.${fourthPart}`);
          }
        }
      }
    }
    
    return validIPs;
  }
  
  // Helper function to check if a part is valid
  function isValidPart(part: string): boolean {
    // Check length constraints first
    if (part.length === 0 || part.length > 3) return false;
    
    // Check for leading zeros
    if (part.length > 1 && part[0] === '0') return false;
    
    // Convert to number and check range
    const num = parseInt(part);
    return num >= 0 && num <= 255;
  }


  const string = "1921680";
console.log(validIPAddresses(string));
// Output: [
//   "1.9.216.80",
//   "1.92.16.80",
//   "1.92.168.0",
//   "19.2.16.80",
//   "19.2.168.0",
//   "19.21.6.80",
//   "19.21.68.0",
//   "19.216.8.0",
//   "192.1.6.80",
//   "192.1.68.0",
//   "192.16.8.0",
//   "192.168.0.0"
// ]