using System;

class IndexOfLetters
{
    static void Main()
    {
        var arrayOfLetters = new char[26];
        arrayOfLetters = CreateArrayOfLetters(arrayOfLetters);

        string word = Console.ReadLine().ToLower();

        for (int i = 0; i < word.Length; i++)
        {
            for (int j = 0; j < arrayOfLetters.Length; j++)
            {
                if (word[i] == arrayOfLetters[j])
                {
                    Console.WriteLine($"{word[i]} -> {j}");
                }
            }
        }

    }

    public static char[] CreateArrayOfLetters(char[] arrayOfLetters)
    {
        char currentLetter = 'a';
        for (int i = 0; i < arrayOfLetters.Length; i++)
        {
            arrayOfLetters[i] = currentLetter;
            currentLetter++;
        }

        return arrayOfLetters;
    }
}

