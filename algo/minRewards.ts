
// щоб знайти мінімальну винагороду, необхідну для класу, враховуючи їхні бали, 
// коли кожен студент повинен отримати більше винагород, ніж їхні сусіди, якщо вони мають вищий бал:

// Часова складність: O(n), де n – довжина масиву балів. Просторова складність: O(n) для зберігання масиву винагород

export function minRewards(scores: number[]): number {
    const rewards = new Array(scores.length).fill(1);
    
    // Forward pass: check each value with previous one
    for (let i = 1; i < scores.length; i++) {
      if (scores[i] > scores[i - 1]) {
        rewards[i] = rewards[i - 1] + 1;
      }
    }
    
    // Backward pass: check each value with next one
    for (let i = scores.length - 2; i >= 0; i--) {
      if (scores[i] > scores[i + 1]) {
        rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1);
      }
    }
    
    // Sum up all rewards
    return rewards.reduce((a, b) => a + b, 0);
  }


  console.log(minRewards([8, 4, 2, 1, 3, 6, 7, 9, 5]));
// Output: 25
// Rewards would be: [4, 3, 2, 1, 2, 3, 4, 5, 1]



// Альтернативне рішення (підхід долини):
export function minRewardsValleyApproach(scores: number[]): number {
    const rewards = new Array(scores.length).fill(1);
    
    // Find local minimums
    const localMinIdxs = getLocalMinIdxs(scores);
    
    // Expand from all local mins
    for (const localMinIdx of localMinIdxs) {
      expandFromLocalMin(localMinIdx, scores, rewards);
    }
    
    return rewards.reduce((a, b) => a + b, 0);
  }
  
  function getLocalMinIdxs(array: number[]): number[] {
    const localMinIdxs: number[] = [];
    
    for (let i = 0; i < array.length; i++) {
      if (i === 0 && array[i] < array[i + 1]) {
        localMinIdxs.push(i);
      }
      if (i === array.length - 1 && array[i] < array[i - 1]) {
        localMinIdxs.push(i);
      }
      if (i === 0 || i === array.length - 1) continue;
      
      if (array[i] < array[i + 1] && array[i] < array[i - 1]) {
        localMinIdxs.push(i);
      }
    }
    
    return localMinIdxs;
  }
  
  function expandFromLocalMin(localMinIdx: number, scores: number[], rewards: number[]): void {
    // Expand left
    let leftIdx = localMinIdx - 1;
    while (leftIdx >= 0 && scores[leftIdx] > scores[leftIdx + 1]) {
      rewards[leftIdx] = Math.max(rewards[leftIdx], rewards[leftIdx + 1] + 1);
      leftIdx--;
    }
    
    // Expand right
    let rightIdx = localMinIdx + 1;
    while (rightIdx < scores.length && scores[rightIdx] > scores[rightIdx - 1]) {
      rewards[rightIdx] = rewards[rightIdx - 1] + 1;
      rightIdx++;
    }
  }

// Знаходить усі локальні мінімуми (долини)
// Розширюється від кожної долини в обох напрямках
// Гарантує, що вищі бали отримують більше винагород, ніж нижчі бали

// Обидва рішення працюють однаково добре, але перше може бути легшим для розуміння та реалізації. 
// Дайте мені знати, якщо ви хочете, щоб я пояснив будь-яку частину докладніше!