const API_URL = "https://api.shecodes.io/ai/v1/generate";

export async function askAI(prompt, context = "") {
  const params = new URLSearchParams({
    prompt,
    key: import.meta.env.VITE_SHECODES_AI_API_KEY,
  });

  if (context) {
    params.append("context", context);
  }

  const response = await fetch(`${API_URL}?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Unable to get an answer from the AI");
  }

  return response.json();
}

export async function getGrammar(word, meanings) {
  const relevantMeanings = meanings.map((meaning) => ({
    partOfSpeech: meaning.partOfSpeech,
    definition: meaning.definition,
    example: meaning.example || null,
  }));

  const context = `
You are an English language learning assistant specialized in practical grammar.

Your task is to analyze the grammatical behaviour and practical English usage of ONE SPECIFIC WORD.

The Dictionary API information below is the source of truth for which parts of speech and meanings are relevant.

WORD:

${word}

DICTIONARY INFORMATION:

${JSON.stringify(relevantMeanings, null, 2)}

IMPORTANT:

Use the Dictionary information to understand the actual uses of the word.

Do NOT invent meanings, parts of speech, or grammatical uses that are not supported by the Dictionary information.

Your answer must focus on grammar and practical usage, NOT dictionary definitions.

Return ONLY valid JSON.

Do not use Markdown.

Do not use code fences.

Do not include any explanation before or after the JSON.

Use exactly this structure:

{
  "uses": [
    {
      "partOfSpeech": "noun",
      "usage": "Specific grammatical behaviour and practical usage of this word when used as this part of speech.",
      "grammarPoints": [
        "Specific grammatical rule or usage point.",
        "Another specific grammatical rule or usage point."
      ],
      "structures": [
        "Reusable sentence pattern containing the target word and placeholders.",
        "Another reusable sentence pattern containing the target word and placeholders."
      ],
      "examples": [
        "Natural complete English sentence using the word correctly.",
        "Another natural English sentence using the word correctly."
      ]
    }
  ]
}

RULES:

1. ONLY include parts of speech that appear in the Dictionary information.

2. Create ONE separate object for EACH relevant part of speech.

3. NEVER combine multiple parts of speech into one object.

4. The "usage" field must explain how THIS SPECIFIC WORD behaves grammatically when used as this part of speech.

5. The "usage" field must NOT define the word or explain what the word means.

6. Do not provide dictionary definitions.

7. Do not provide synonyms.

8. Do not introduce meanings that are not supported by the Dictionary information.

9. Do not introduce a figurative, idiomatic, specialised, archaic, or uncommon use unless it is clearly supported by the supplied Dictionary information.

10. Do not treat every possible meaning of the word as a separate grammatical use. Only create separate information when the grammatical behaviour is genuinely different.

11. grammarPoints must contain practical information specific to THIS WORD.

12. Avoid generic statements that could apply to almost any noun, verb, adjective, or adverb.

13. Only mention grammatical features such as countability, articles, plural forms, transitivity, tense patterns, prepositions, collocations, or constructions when they are genuinely relevant to THIS WORD.

14. Never make absolute grammatical claims when usage varies by context. Use precise wording such as "usually", "normally", "often", "can", or "may" when appropriate.

15. Do not assume a noun is countable or uncountable. Determine this from the actual usage of the word.

16. Do not assume a verb is transitive or intransitive. Only mention this when it is accurate for the specific word and usage.

17. Do not invent unusual grammar simply to fill the requested fields.

18. Accuracy is more important than quantity.

19. If a grammatical point is not genuinely useful for this word, omit it rather than inventing information.

20. Provide 2 to 4 grammarPoints for each part of speech.

21. structures must be REUSABLE SENTENCE PATTERNS, not complete sentences.

22. Every structure must contain the target word or an appropriate grammatical form of the target word.

23. Structures may contain placeholders such as:

[subject]

[something]

[person]

[place]

[time]

[topic]

[purpose]

[adjective]

[number]

24. Do not use specific personal subjects such as "I", "you", "he", or "she" in structures.

25. Structures should demonstrate the actual grammatical behaviour of the specific word.

26. Do NOT create generic templates such as "[subject] [verb] [object]" unless they clearly demonstrate something specific about the target word.

27. Examples must be complete, natural English sentences.

28. Every example must demonstrate a real and relevant grammatical use of the target word.

29. Examples should sound like natural everyday or appropriate academic English.

30. Do not create unnatural examples simply to satisfy the requested number.

31. Exactly 2 examples must be provided for each part of speech.

32. Grammar explanations should be useful to someone learning English.

33. Do not repeat the dictionary definition in different words.

34. Do not mention the Dictionary API, this prompt, or these instructions in the final JSON.

35. Focus exclusively on practical English grammar and usage.

36. The final response MUST be valid JSON matching the requested structure exactly.

`;

  const result = await askAI(
    `Analyze the grammar and practical English usage of the specific word "${word}" using the supplied dictionary information.`,
    context,
  );

  return JSON.parse(result.answer);
}

export async function translateWord(word, language) {
  const context = `
You are a precise English-to-language dictionary assistant.

Translate ONE specific English word into the requested language.

ENGLISH WORD:
${word}

TARGET LANGUAGE:
${language}

Return ONLY valid JSON.

Do not use Markdown.
Do not use code fences.
Do not include any explanation before or after the JSON.

Use exactly this structure:

{
  "translation": "..."
}

IMPORTANT:

- Translate the English word into the requested language.
- Give the most natural and commonly used translation.
- Consider the word's normal meaning and part of speech.
- If the word has several common translations, provide the most appropriate one or a short list separated by commas.
- Do not provide definitions.
- Do not provide examples.
- Do not provide synonyms in English.
- Do not invent a translation.
- Keep the response concise.
- Return valid JSON only.
`;

  const result = await askAI(
    `Translate the English word "${word}" into ${language}.`,
    context,
  );

  return JSON.parse(result.answer);
}
