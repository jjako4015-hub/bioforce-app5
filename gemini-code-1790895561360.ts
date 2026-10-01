import { Topic } from '../types';

// Оқулықтың 9 нақты тақырыбы (7-сынып "Мектеп" / "Атамұра" бағдарламасы бойынша)[cite: 1, 20]
export const textbookTopics: Topic[] = [
  { id: 'topic_1', title: '1. Прокариот және эукариот жасушаларының құрылысы', model3D: 'cell', description: 'Жасушаның негізгі бөліктері мен органоидтері' },[cite: 20]
  { id: 'topic_2', title: '2. Өсімдіктер мен жануарлардың ұлпалары', model3D: 'tissue', description: 'Ұлпа түрлері: түзуші, негізгі, эпителий, дәнекер' },[cite: 5, 6, 23, 27]
  { id: 'topic_3', title: '3. Тірі ағзалар үшін судың маңызы', model3D: 'water', description: 'Судың қасиеттері, беттік керілу, еріткіштік' },[cite: 8, 45, 46]
  { id: 'topic_4', title: '4. Макро және микроэлементтердің рөлі', model3D: 'element', description: 'N, P, K, Fe, Ca, Mg маңызы мен биологиялық қызметтері' },[cite: 13, 47, 52]
  { id: 'topic_5', title: '5. Көмірсулар, нәруыздар және майлар', model3D: 'organic', description: 'Органикалық заттардың құрылысы, мономерлер мен полимерлер' },[cite: 16, 31, 33]
  { id: 'topic_6', title: '6. Минералды тыңайтқыштардың өсімдіктерге әсері', model3D: 'fertilizer', description: 'Азот, фосфор және калий тыңайтқыштары' },[cite: 19, 52]
  { id: 'topic_7', title: '7. ДНҚ және нуклеин қышқылдары', model3D: 'dna', description: 'Қос шиыршықты ДНҚ құрылымы және комплементарлық' },[cite: 58, 59, 60]
  { id: 'topic_8', title: '8. Өсімдіктерді жіктеу: Даражарнақтылар мен Қосжарнақтылар', model3D: 'plant', description: 'Тамыр жүйесі, жүйкелену және гүл құрылысы' },[cite: 65, 71, 73]
  { id: 'topic_9', title: '9. Жануарлар дүниесі: Омыртқасыздар мен Омыртқалылар', model3D: 'animal', description: 'Буынаяқтылар мен желілілердің ерекшеліктері' }[cite: 39, 79, 83, 84]
];

// RULE 1: Week 1 = First 4 topics
export const week1Topics = textbookTopics.slice(0, 4);

// RULE 2: Week 2 = All remaining topics (5th to end)
export const week2Topics = textbookTopics.slice(4);