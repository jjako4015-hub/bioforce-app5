import { Question } from '../types';

export function normalizeQuestion(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[.,!?;:()"-]/g, "");
}

export function generateQuestionHash(q: Question): string {
  const normalizedText = normalizeQuestion(q.question);
  return `${q.conceptId}_${q.knowledgePointId}_${normalizedText}`;
}

export class AntiDuplicateEngine {
  private globalRegistry: Set<string> = new Set();
  private semanticIntentMap: Set<string> = new Set();

  public registerQuestion(q: Question): boolean {
    const hash = generateQuestionHash(q);
    const semanticKey = `${q.conceptId}_${q.knowledgePointId}_${normalizeQuestion(q.question.slice(0, 20))}`;

    if (this.globalRegistry.has(hash) || this.semanticIntentMap.has(semanticKey)) {
      return false; // REJECT DUPLICATE
    }

    this.globalRegistry.add(hash);
    this.semanticIntentMap.add(semanticKey);
    return true;
  }

  public validateTestPool(questions: Question[], expectedCount: number): boolean {
    if (questions.length !== expectedCount) return false;
    
    const localHashes = new Set<string>();
    for (const q of questions) {
      const hash = generateQuestionHash(q);
      if (localHashes.has(hash) || this.globalRegistry.has(hash)) {
        return false; // DUPLICATE DETECTED
      }
      localHashes.add(hash);
    }
    return true;
  }
}

export const globalAntiDuplicate = new AntiDuplicateEngine();