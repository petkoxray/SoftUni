using System;

public class Program
{
    public static void Main()
    {
        string input = Console.ReadLine().ToLower();
        bool isVowel = (input == "a") || (input == "e") ||
            (input == "o") || (input == "u") ||
            (input == "i") || (input == "y");
        int digit;
        bool isDigit = int.TryParse(input, out digit);

        if (isVowel)
        {
            Console.WriteLine("vowel");
        }
        else if (isDigit)
        {
            Console.WriteLine("digit");
        }
        else
        {
            Console.WriteLine("other");
        }
    }
}

