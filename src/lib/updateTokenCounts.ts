import type { LanguageModelV2Usage } from '@ai-sdk/provider';

export async function updateTokenCounts(usage: LanguageModelV2Usage) {
  const path = `${import.meta.dir}/../../data/tokenUsage.json`;
  const file = Bun.file(path);
  const current = await file.json();
  current.inputTokens += usage.inputTokens || 0;
  current.outputTokens += usage.outputTokens || 0;
  current.totalTokens += usage.totalTokens || 0;
  current.reasoningTokens += usage.reasoningTokens || 0;
  current.cachedInputTokens += usage.cachedInputTokens || 0;
  current.lastUpdated = new Date().toISOString();
  const json = JSON.stringify(current, null, 2);
  await file.write(json);
  return current;
}
